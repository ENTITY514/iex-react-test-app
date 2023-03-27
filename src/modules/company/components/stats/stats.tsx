import { CompaniesApi } from "../../../../services/CompaniesService"
import { useAppSelector } from "../../../../store/hooks/redux"
import { Loader } from "../../../../UI/loader/loader"
import { Title } from "../../../../UI/title/title"
import style from "./stats.module.css"

export const Stats: React.FC = () => {
    const state = useAppSelector(state => state.companiesSlice)
    const { data: stats, isLoading, error, refetch } = CompaniesApi.useFetchCompanyStatsQuery(state.active_company)
    if (stats) {
        return (
            <div className={style.container}>
                <div className={style.box}>
                    <Title title={"Stock Quote"} size={1.2} />
                    <div className={style.text}>30 day average volume: {stats[0].avgTotalVolume}</div>
                    <div className={style.text}>Latest price:{stats[0].latestPrice + " " + stats[0].currency}</div>
                    <div className={style.text}>Change:{stats[0].change + " " + stats[0].currency}</div>
                    <div className={style.text}>High:{stats[0].high + " " + stats[0].currency}</div>
                    <div className={style.text}>Low:{stats[0].low + " " + stats[0].currency}</div>
                </div>
            </div>
        )
    }
    else if (isLoading) {
        return (
            <div className={style.container}>
                <Loader />
            </div>
        )
    }
    else if (error) {
        refetch()
        return (
            <div className={style.container}>
            </div>
        )
    }
    return null
}
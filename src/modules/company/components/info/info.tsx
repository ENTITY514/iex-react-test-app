import { CompaniesApi } from "../../../../services/CompaniesService"
import { Button } from "../../../../UI/button/button"
import { Loader } from "../../../../UI/loader/loader"
import { Title } from "../../../../UI/title/title"
import style from "./info.module.css"

interface IInfoProps {
    company_symbol: string
}

export const Info: React.FC<IInfoProps> = ({ company_symbol }) => {
    const { data: info, isLoading, error, refetch } = CompaniesApi.useFetchCompanyDataQuery(company_symbol)
    if (info) {
        return (
            <div className={style.container}>
                <Title title={info.companyName} size={2} />
                <Title title={info.symbol} size={1.5} />
                <div className={style.text}>Industry: {info.industry}</div>
                <div className={style.text}>Stock market: {info.exchange}</div>
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
        return (
            <div className={style.container}>
                Error
                <Button title={"Update"} onClick={refetch} />
            </div>
        )
    }
    return null
}
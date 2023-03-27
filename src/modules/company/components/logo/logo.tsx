import { CompaniesApi } from "../../../../services/CompaniesService"
import { useAppSelector } from "../../../../store/hooks/redux"
import { ImageUI } from "../../../../UI/Image/image"
import { Loader } from "../../../../UI/loader/loader"
import style from "./logo.module.css"

export const Logo: React.FC = () => {
    const state = useAppSelector(state => state.companiesSlice)
    const { data: logo, isLoading, error, refetch } = CompaniesApi.useFetchCompanyLogoQuery(state.active_company)
    if (logo) {
        return (
            <div className={style.container}>
                <div className={style.image_wrapper}>
                    <ImageUI url={logo.url} />
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
                <div className={style.image_wrapper}>
                    <ImageUI url={"/team.png"} />
                </div>
            </div>
        )
    }
    return null
}
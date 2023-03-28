import { CompaniesApi } from "../../../../services/CompaniesService"
import { ImageUI } from "../../../../UI/Image/image"
import { Loader } from "../../../../UI/loader/loader"
import style from "./logo.module.css"

interface ILogoProps {
    company_symbol: string
}

export const Logo: React.FC<ILogoProps> = ({company_symbol}) => {
    const { data: logo, isLoading, error, refetch } = CompaniesApi.useFetchCompanyLogoQuery(company_symbol)
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
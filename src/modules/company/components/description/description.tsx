import { CompaniesApi } from "../../../../services/CompaniesService"
import { ImageUI } from "../../../../UI/Image/image"
import { Loader } from "../../../../UI/loader/loader"
import { Title } from "../../../../UI/title/title"
import style from "./descrition.module.css"

interface IDesciptionProps {
    company_symbol: string
}

export const Description: React.FC<IDesciptionProps> = ({ company_symbol }) => {
    const { data: info, isLoading, error, refetch } = CompaniesApi.useFetchCompanyDataQuery(company_symbol)
    if (info) {
        return (
            <div className={style.container}>
                <div className={style.box}>
                    <Title title="Description" size={1.2} />
                    <div className={style.text}>{info.description}</div>
                </div>

                <div className={style.box}>
                    <Title title="Address" size={1.2} />
                    <div className={style.text}>Country: {info.country}</div>
                    <div className={style.text}>State: {info.state}</div>
                    <div className={style.text}>City: {info.city}</div>
                    <div className={style.text}>Address: {info.address}</div>
                </div>

                <div className={style.box}>
                    <Title title="Contacts" size={1.2} />
                    <div className={style.text}>CEO: {info.CEO}</div>
                    <div className={style.text}>Phone: {info.phone}</div>
                    <div className={style.text}>Website: <a href={info.website} target="_blank">{info.website}</a></div>
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
import { ICompany } from "../../models/company"
import { CompanyStockQuote } from "../../models/companyStockQuote"
import { CompaniesApi } from "../../services/CompaniesService"
import { ImageUI } from "../../UI/Image/image"
import { Title } from "../../UI/title/title"
import { Loader } from "../loader/loader"
import style from "./company_info.module.css"

interface ICompanyInfoProps {
    company?: ICompany
    company_data: CompanyStockQuote
    type?: string
}

export const CompanyInfo: React.FC<ICompanyInfoProps> = ({ company, company_data, type = "normal" }) => {
    const { data: logo } = CompaniesApi.useFetchCompanyLogoQuery(company_data.symbol)
    return (
        <div className={type === "normal" ? style.container : style.small_container}>
            <div className={style.image_wrapper}>
                <ImageUI url={logo ? logo.url : "/team.png"} />
            </div>
            <div className={style.box}>
                {company ?
                    <Title title={company.name} size={1.2} /> :
                    null}
                <div className={style.info}>
                    <h4>{company_data.symbol}</h4>
                    <div className={style.text}>Average total volume: {company_data.avgTotalVolume} shares</div>
                    <div className={style.text}>High: {company_data.week52High}</div>
                    <div className={style.text}>Low: {company_data.week52Low}</div>
                    <div className={style.text}>Latest price: {company_data.latestPrice}</div>
                </div>
            </div>
        </div>
    )
}
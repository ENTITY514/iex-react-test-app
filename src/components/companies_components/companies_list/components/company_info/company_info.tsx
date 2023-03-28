import { CompanyStockQuote } from "../../../../../models/companyStockQuote"
import { CompaniesApi } from "../../../../../services/CompaniesService"
import { ImageUI } from "../../../../../UI/Image/image"
import { Title } from "../../../../../UI/title/title"
import style from "./company_info.module.css"

export enum TYPE {
    NORMAL,
    SMALL
}

interface ICompanyInfoProps {
    company_data: CompanyStockQuote
    type?: TYPE
}

export const CompanyInfo: React.FC<ICompanyInfoProps> = ({ company_data, type = TYPE.NORMAL }) => {
    const { data: logo } = CompaniesApi.useFetchCompanyLogoQuery(company_data.symbol)
    return (
        <div className={type === TYPE.NORMAL ? style.container : style.small_container}>

            <div className={style.image_wrapper}>
                <ImageUI url={logo ? logo.url : "/team.png"} />
            </div>
            <div className={style.box}>
                <Title title={company_data.companyName} size={1.2} />
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
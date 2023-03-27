import { nanoid } from "nanoid"
import React from "react"
import { ICompany } from "../../../models/company"
import { CompanyStockQuote } from "../../../models/companyStockQuote"
import { CompanyInfo } from "./components/company_info/company_info"
import style from "./companies_list.module.css"

interface ICompanyListProps {
    companies?: ICompany[]
    companies_stats: CompanyStockQuote[]
    type?: string
    onCompanyClick?: (company_symbol: string) => void
}

export const CompaniesList: React.FC<ICompanyListProps> = ({ companies, companies_stats, type = "normal", onCompanyClick = () => { } }) => {
    return (
        <div className={style.container}>
            <div className={type === "normal" ? style.list : style.small_container}>
                {
                    companies_stats.map((company, index) => {
                        return (
                            <div className={style.box} onClick={() => { onCompanyClick(company.symbol) }} key={nanoid()}>
                                <CompanyInfo company={companies ? companies[index] : companies} company_data={company} type={type} />
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}
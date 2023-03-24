import { nanoid } from "nanoid"
import React from "react"
import { CompanyInfo } from "../../components/company_info/company_info"
import { ICompany } from "../../models/company"
import { CompanyStockQuote } from "../../models/companyStockQuote"
import style from "./companies_list.module.css"

interface ICompanyListProps {
    companies?: ICompany[]
    companies_stats: CompanyStockQuote[]
    type?: string
}

export const CompaniesList: React.FC<ICompanyListProps> = ({ companies, companies_stats, type = "normal" }) => {
    return (
        <div className={style.container}>
            <div className={type === "normal" ? style.list : style.small_container}>
                {
                    companies_stats.map((company, index) => {
                        return (
                            <CompanyInfo company={companies ? companies[index] : companies} company_data={company} key={nanoid()} type={type} />
                        )
                    })
                }
            </div>
        </div >
    )
}
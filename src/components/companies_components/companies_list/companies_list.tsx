import { nanoid } from "nanoid"
import React from "react"
import { ICompany } from "../../../models/company"
import { CompanyStockQuote } from "../../../models/companyStockQuote"
import { CompanyInfo, TYPE } from "./components/company_info/company_info"
import style from "./companies_list.module.css"

interface ICompanyListProps {
    companies_stats: CompanyStockQuote[]
    type?: TYPE
    onCompanyClick?: (company_symbol: string) => void
}

export const CompaniesList: React.FC<ICompanyListProps> = ({ companies_stats, type = TYPE.NORMAL, onCompanyClick = () => { } }) => {
    return (
        <div className={style.container}>
            <div className={type === TYPE.NORMAL ? style.list : style.small_container}>
                {
                    companies_stats.map((company, index) => {
                        return (
                            <div className={style.box} onClick={() => { onCompanyClick(company.symbol) }} key={nanoid()}>
                                <CompanyInfo company_data={company} type={type} />
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}
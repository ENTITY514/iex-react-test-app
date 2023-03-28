import React from "react"
import { CompaniesList } from "../../components/companies_components/companies_list/companies_list"
import { Loader } from "../../UI/loader/loader"
import { CompaniesApi } from "../../services/CompaniesService"
import { Button } from "../../UI/button/button"
import style from "./companies.module.css"
import { useNavigate } from "react-router-dom"


export const Companies: React.FC = () => {
    const navigate = useNavigate()
    const { data: all_companies } = CompaniesApi.useFetchAllCompaniesQuery(0)
    const [pageCount, setPageCount] = React.useState(0)

    const getQuery = React.useMemo(() => {
        let queryString = ''
        if (all_companies) {
            all_companies?.slice(pageCount * 10, (pageCount + 1) * 10).forEach(company => {
                queryString += company.symbol + ","
            })
            queryString = queryString.slice(0, -1)
        }
        return queryString
    }, [pageCount,all_companies])

    const { data: company_data } = CompaniesApi.useFetchCompanyStatsQuery(getQuery)

    const handleClick = (next: boolean) => {
        window.scrollTo(0, 0)
        if (next) {
            setPageCount(prev => prev + 1)
        }
        else {
            if (pageCount > 0) {
                setPageCount(prev => prev + 1)
            }
        }
    }

    const companyClickHandle = (company_symbol: string) => {
        navigate("/company?symbol=" + company_symbol)
    }

    if (company_data) {
        return (
            <div className={style.container}>
                <CompaniesList
                    onCompanyClick={companyClickHandle}
                    companies_stats={company_data}
                />
                <div className={style.buttons_box}>
                    <Button title="Prev" onClick={() => handleClick(false)} />
                    <Button title="Next" onClick={() => handleClick(true)} />
                </div>
            </div>
        )
    }
    else {
        return <Loader />
    }
}
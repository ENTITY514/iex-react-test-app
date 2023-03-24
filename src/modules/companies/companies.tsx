import { nanoid } from "nanoid"
import React from "react"
import { CompaniesList } from "../../components/companies_list/companies_list"
import { CompanyInfo } from "../../components/company_info/company_info"
import { Loader } from "../../components/loader/loader"
import { CompaniesApi } from "../../services/CompaniesService"
import { useAppSelector } from "../../store/hooks/redux"
import { Button } from "../../UI/button/button"
import style from "./companies.module.css"

export const Companies: React.FC = () => {
    const all_companies = useAppSelector(state => state.companiesSlice.companies)
    const [pageCount, setPageCount] = React.useState(0)

    const getQuery = React.useMemo(() => {
        let queryString = ''
        all_companies?.slice(pageCount * 10, (pageCount + 1) * 10).forEach(company => {
            queryString += company.symbol + ","
        })
        queryString = queryString.slice(0, -1)
        return queryString
    }, [pageCount])

    const { data: company_data, error, isLoading } = CompaniesApi.useFetchCompanyStatsQuery(getQuery)
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
    if (!isLoading && company_data) {
        return (
            <div className={style.container}>
                <CompaniesList companies={all_companies?.slice(pageCount * 10, (pageCount + 1) * 10)} companies_stats={company_data} />
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
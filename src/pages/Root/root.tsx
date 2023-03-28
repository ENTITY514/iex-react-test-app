import { useNavigate } from "react-router-dom"
import { CompaniesList } from "../../components/companies_components/companies_list/companies_list"
import { TYPE } from "../../components/companies_components/companies_list/components/company_info/company_info"
import { Header } from "../../modules/header/header"
import { CompaniesApi } from "../../services/CompaniesService"
import { Loader } from "../../UI/loader/loader"
import { Title } from "../../UI/title/title"
import style from "./root.module.css"

export const Root: React.FC = () => {
    const navigate = useNavigate()

    const companyClickHandle = (company_symbol: string) => {
        navigate("/company?symbol=" + company_symbol)
    }

    const { data: popular_companies, isLoading } = CompaniesApi.useFetchCompanyStatsQuery("u,aapl,tsla,amzn,nvda,msft,intc,googl")
    const { data: perspective_companies } = CompaniesApi.useFetchCompanyStatsQuery("cop,xom,asml,mrk,baba,lly,oxy,cpb")

    if (popular_companies) {
        return (
            <div className={style.container}>
                <Header />
                <div className={style.box}>
                    <Title title="Welcome to IXI Stocks." size={3} />
                    <div className={style.text}>
                        Here you can find information about the stocks of various companies that interest you.
                    </div>
                </div>
                <div className={style.box}>
                    <Title title="Popular companies" size={2} />
                    <CompaniesList onCompanyClick={companyClickHandle} companies_stats={popular_companies} type={TYPE.SMALL} />
                </div>
                {perspective_companies ? <div className={style.box}>
                    <Title title="Perspective companies" size={2} />
                    <CompaniesList onCompanyClick={companyClickHandle} companies_stats={perspective_companies} type={TYPE.SMALL} />
                </div> : null}
            </div>
        )
    }
    if (isLoading) {
        return (<Loader />)
    }
    return <div></div>
}
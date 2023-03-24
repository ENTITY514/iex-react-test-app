import { CompaniesList } from "../../components/companies_list/companies_list"
import { Loader } from "../../components/loader/loader"
import { Header } from "../../modules/header/header"
import { CompaniesApi } from "../../services/CompaniesService"
import { Title } from "../../UI/title/title"
import style from "./root.module.css"

export const Root: React.FC = () => {
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
                    <CompaniesList companies_stats={popular_companies} type={"small"} />
                </div>
                {perspective_companies ? <div className={style.box}>
                    <Title title="Perspective companies" size={2} />
                    <CompaniesList companies_stats={perspective_companies} type={"small"} />
                </div> : null}
            </div>
        )
    }
    if (isLoading) {
        return (<Loader />)
    }
    return <div></div>
}
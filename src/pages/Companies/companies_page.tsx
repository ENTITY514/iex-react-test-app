import { Companies } from "../../modules/companies/companies"
import { Header } from "../../modules/header/header"
import style from "./companies_page.module.css"

export const CompaniesPage = () => {
    return (
        <div className={style.container}>
            <Header />
            <Companies />
        </div>
    )
}
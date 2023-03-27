import { Company } from "../../modules/company/company"
import { Header } from "../../modules/header/header"
import style from "./company_page.module.css"

export const CompanyPage = () => {
    return (
        <div className={style.container}>
            <Header />
            <Company />
        </div>
    )
}
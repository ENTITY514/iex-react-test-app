import { CompanyInfo } from "../../components/company_info/company_info"
import { Header } from "../../modules/header/header"
import style from "./companies.module.css"

export const Companies = () => {
    return (
        <div className={style.container}>
            <Header />
            <CompanyInfo name={"TWTR"}/>
        </div>
    )
}
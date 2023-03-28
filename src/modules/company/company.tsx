import { useParams, useSearchParams } from "react-router-dom"
import style from "./company.module.css"
import { Description } from "./components/description/description"
import { Info } from "./components/info/info"
import { Logo } from "./components/logo/logo"
import { Stats } from "./components/stats/stats"

export const Company: React.FC = () => {
    const [searchParams] = useSearchParams();
    const company_symbol = searchParams.get("symbol")
    if (company_symbol) {
        return (
            <div className={style.container}>
                <div className={style.box}>
                    <Logo company_symbol={company_symbol} />
                    <Info company_symbol={company_symbol} />
                </div>
                <Description company_symbol={company_symbol} />
                <Stats company_symbol={company_symbol} />
            </div>
        )
    }
    else {
        return (
            <div>
                Error:(
                Please return to the previous page
            </div>
        )
    }
}
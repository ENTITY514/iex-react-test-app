import style from "./company.module.css"
import { Description } from "./components/description/description"
import { Info } from "./components/info/info"
import { Logo } from "./components/logo/logo"
import { Stats } from "./components/stats/stats"

export const Company: React.FC = () => {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <Logo />
                <Info />
            </div>
            <Description />
            <Stats />
        </div>
    )
}
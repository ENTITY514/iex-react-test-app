import { Nav } from "../../components/nav/nav"
import { Toogle } from "../../UI/toogle_input/toogle_input"
import { THEME } from "../../store/models/ISettings"
import { Title } from "../../UI/title/title"
import style from "./header.module.css"
import { ToggleTheme } from "../../components/theme_toggle/toggle_theme"

export const Header: React.FC = () => {
    return (
        <div className={style.container}>
            <Title title={"IXI Stocks"} size={3} />
            <Nav />
            <ToggleTheme />
        </div>
    )
}
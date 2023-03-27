import { Nav } from "../../components/others/nav/nav"
import { ToggleTheme } from "../../components/others/theme_toggle/toggle_theme"
import { Title } from "../../UI/title/title"
import style from "./header.module.css"

export const Header: React.FC = () => {
    return (
        <div className={style.container}>
            <Title title={"IXI Stocks"} size={3} />
            <Nav />
            <ToggleTheme />
        </div>
    )
}
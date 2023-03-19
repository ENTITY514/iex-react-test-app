import { Nav } from "../../components/nav/nav"
import { Search } from "../../components/search/search"
import { Title } from "../../UI/title/title"
import style from "./header.module.css"

export const Header: React.FC = () => {
    return (
        <div className={style.container}>
            <Title title={"IXI Stock"} size={2}/>
            <Search />
            <Nav />
        </div>
    )
}
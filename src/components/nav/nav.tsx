import { nanoid } from "nanoid"
import { Link } from "react-router-dom"
import style from "./nav.module.css"


export const Nav: React.FC = () => {
    return (
        <div className={style.container}>
            <Link to={"/"} key={nanoid()} className={style.link} >Main</Link>
            <Link to={"/companies"} key={nanoid()} className={style.link} >Companies</Link>
            <Link to={"/about"} key={nanoid()} className={style.link} >About</Link>
        </div>
    )
}
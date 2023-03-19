import { Header } from "../../modules/header/header"
import style from "./root.module.css"

export const Root = () => {
    return (
        <div className={style.container}>
            <Header />
        </div>
    )
}
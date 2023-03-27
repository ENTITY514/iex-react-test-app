import style from "./loader.module.css"


export const Loader: React.FC = () => {
    return (
        <div className={style.loader}>
            < div className={style.item1}></div>
            < div className={style.item2}></div>
            < div className={style.item3}></div>
        </div >
    )
}
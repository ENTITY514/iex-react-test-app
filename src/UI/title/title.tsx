import style from "./title.module.css"

interface ITitleProps {
    title: string
    size?: number
}

export const Title: React.FC<ITitleProps> = ({ title, size }) => {
    return (
        <h1 className={style.container} style={{ fontSize: size ? size + "em" : "1em" }}>
            {title}
        </h1>
    )
}
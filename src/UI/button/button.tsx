import style from "./button.module.css"

interface IButtonProps {
    title: string
    font_size?: number
    onClick?: () => void
}

export const Button: React.FC<IButtonProps> = ({ title, font_size, onClick }) => {
    return (
        <h1 className={style.container} style={{ fontSize: font_size ? font_size + "em" : "1em" }} onClick={onClick}>
            {title}
        </h1>
    )
}
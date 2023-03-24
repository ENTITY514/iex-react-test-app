import React from "react"
import style from "./toogle_input.module.css"

interface IToogleInputProps {
    value?: boolean
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}


export const Toogle: React.FC<IToogleInputProps> = ({ value, onChange }) => {
    return (
        <div className={style.container}>
            <div className={style.toggle_switch}>
                <label className={style.switch_label}>
                    <input type="checkbox" className={style.checkbox} onChange={onChange} checked={value} />
                    <span className={style.slider}></span>
                </label>
            </div >
        </div >
    )
}
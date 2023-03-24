import { useAppSelector, useAppDispatch } from "../../store/hooks/redux"
import { THEME } from "../../store/models/ISettings"
import { settingsSlice } from "../../store/reducers/settingsSlice"
import { Toogle } from "../../UI/toogle_input/toogle_input"
import style from "./toggle_theme.module.css"


export const ToggleTheme: React.FC = () => {
    const settings = useAppSelector(state => state.settingSlice)
    const dispatch = useAppDispatch()
    const settings_actions = settingsSlice.actions
    return (
        <div className={style.container}>
            <Toogle value={settings.theme === "light"}
                onChange={(e) => { dispatch(settings_actions.changeTheme(e.target.checked ? THEME.LIGHT : THEME.DARK)) }}
            />
        </div>
    )
}
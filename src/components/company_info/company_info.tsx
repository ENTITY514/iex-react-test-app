import { ImageUI } from "../../UI/title/Image/image"
import { Title } from "../../UI/title/title"
import style from "./company_info.module.css"

interface ICompanyInfoProps {
    logo?: string
    name: string
    description?: string
}

export const CompanyInfo: React.FC<ICompanyInfoProps> = ({ logo, name, description }) => {
    return (
        <div className={style.container}>
            <div className={style.image_wrapper}>
                <ImageUI url={logo ? logo : "/team.png"} />
            </div>
            <Title title={name} size={1.2}/>
        </div>
    )
}
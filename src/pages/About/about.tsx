import { Header } from "../../modules/header/header"
import style from "./about.module.css"

export const About = () => {
    return (
        <div className={style.container}>
            <Header />
            <div className={style.about}>
                <p>
                    On this website you can find current information about the shares of various companies.
                </p>
                <p>This site is written in React. Here I used RTK Query for the first time and worked with a third-party api. I started to study how best to build the architecture of the application
                    and at the moment
                    this approach leaves much to be desired. But I will try.</p>
                <p>На данном сайте вы можете узнать текущую информацию об акциях различных компаний.</p>
                <p>Данный сайт написан на React. Здесь я впервые использовал RTK Query и работал со сторонним api. Начал изучать то, как лучше строить архитектуру приложения
                    и на данный момент
                    этот навых оставляет желать лучшего. Но я буду стараться.
                </p>
                <div>
                    <p>Links</p>
                    <div className={style.link}>
                        <a href="https://github.com/ENTITY514/iex-react-test-app">Github</a>
                    </div>
                    <div className={style.link}>
                        <a href="https://iex-react-test-p71608ebe-entity514.vercel.app/">Deploy</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
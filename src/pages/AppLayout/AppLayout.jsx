import style from "./AppLayout.module.scss";

import Menu from "features/Menu/Menu";

export default function App() {
    return (
        <main className={style.main}>
            <Menu />
            <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
                dicta?
            </h1>
        </main>
    );
}

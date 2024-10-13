import style from "./AppLayout.module.scss";

import MovieList from "@/features/MovieList/MovieList/MovieList";
import Menu from "features/Menu/Menu/Menu";

export default function App() {
    return (
        <main className={style.main}>
            <Menu />
            <MovieList />
        </main>
    );
}

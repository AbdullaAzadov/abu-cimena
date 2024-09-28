import style from "./Logo.module.css";
import { BiMoviePlay } from "react-icons/bi";

export default function Logo() {
    return (
        <h1 className={style.logo}>
            <BiMoviePlay className="icon" />
            abu cinema
        </h1>
    );
}

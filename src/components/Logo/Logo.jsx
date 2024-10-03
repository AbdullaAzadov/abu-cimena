import style from "./Logo.module.css";
import { BiMoviePlay } from "react-icons/bi";

export default function Logo({
    showIcon = true,
    size = null,
    isPointer = false,
    onClick,
}) {
    const inlineStyle = {};
    if (size) inlineStyle.size = size;
    if (isPointer) inlineStyle.cursor = "pointer";

    return (
        <h1 className={style.logo} style={inlineStyle} onClick={onClick}>
            {showIcon && <BiMoviePlay className="icon" />}
            abu cinema
        </h1>
    );
}

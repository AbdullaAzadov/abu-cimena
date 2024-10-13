import style from "./Logo.module.scss";
import { BiMoviePlay } from "react-icons/bi";

export default function Logo({
    showIcon = true,
    size = "lg",
    color = "light",
    isPointer = false,
    onClick,
}) {
    const inlineStyle = { cursor: isPointer ? "pointer" : "default" };

    return (
        <h1
            className={`${style.logo} ${size} ${color}`}
            style={inlineStyle}
            onClick={onClick}
        >
            {showIcon && <BiMoviePlay className="icon" />}
            abu cinema
        </h1>
    );
}

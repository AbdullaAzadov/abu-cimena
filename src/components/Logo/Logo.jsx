import { useNavigate } from "react-router-dom";

import { BiMoviePlay } from "react-icons/bi";
import style from "./Logo.module.scss";

export default function Logo({
    showIcon = true,
    size = "lg",
    color = "light",
    isPointer = false,
    onClick,
    returnToHome = false,
}) {
    const nav = useNavigate();
    const inlineStyle = { cursor: isPointer ? "pointer" : "default" };

    function handleOnClick() {
        if (returnToHome) nav("/");
        onClick();
    }

    return (
        <h1
            className={`${style.logo} ${size} ${color}`}
            style={inlineStyle}
            onClick={handleOnClick}
        >
            {showIcon && <BiMoviePlay className="icon" />}
            abu cinema
        </h1>
    );
}

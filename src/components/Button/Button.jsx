import style from "./Button.module.scss";

export default function Button({
    children,
    onClick,
    type = "primary",
    disabled = false,
    isActive = false,
}) {
    return (
        <button
            onClick={onClick}
            className={`${style.button} ${style[type]} ${
                isActive ? "active" : ""
            }`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

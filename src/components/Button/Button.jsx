import style from "./Button.module.scss";

export default function Button({
    children,
    onClick,
    type = "primary",
    disabled = false,
}) {
    return (
        <button
            onClick={onClick}
            className={`${style.button} ${style[type]}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

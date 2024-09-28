import style from "./Button.module.css";

export default function Button({
    children,
    onClick,
    type = "button",
    disabled = false,
}) {
    return (
        <button onClick={onClick} className={style[type]} disabled={disabled}>
            {children}
        </button>
    );
}

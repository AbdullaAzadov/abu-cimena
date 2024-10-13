import style from "./MenuNavSection.module.scss";

export default function MenuNavSection({ icon, children, onClick }) {
    return (
        <button className={style.button} onClick={onClick}>
            <span className="icon">{icon}</span> {children}
        </button>
    );
}

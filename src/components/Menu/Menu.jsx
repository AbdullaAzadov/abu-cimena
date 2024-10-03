import { useNavigate } from "react-router-dom";
import style from "./Menu.module.css";
import Logo from "../Logo/Logo";

export default function Menu() {
    const navigate = useNavigate();

    function handleClickLogo() {
        navigate("/");
    }
    return (
        <section className={style.menuWrapper}>
            <main>
                <menu className={style.menu}>
                    <Logo
                        showIcon={false}
                        size={24}
                        isPointer={true}
                        onClick={handleClickLogo}
                    />
                </menu>
                <nav className={style.shortMenu}>123</nav>
            </main>
        </section>
    );
}

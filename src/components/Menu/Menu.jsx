import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { HiOutlineHome } from "react-icons/hi";
import { MdFavoriteBorder } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { TbCategory } from "react-icons/tb";
import { MdOutlineCalendarMonth } from "react-icons/md";

import style from "./Menu.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import SearchBar from "../SearchBar/SearchBar";

export default function Menu() {
    const navigate = useNavigate();
    const [isHide, setIsHide] = useState(false);

    function handleClickMenu() {
        setIsHide((v) => !v);
    }

    function handleClickLogo() {
        navigate("/");
    }
    return (
        <section className={`${style.menuWrapper} ${isHide ? style.hide : ""}`}>
            <main>
                <menu className={style.menu}>
                    <Logo
                        showIcon={false}
                        size={24}
                        isPointer={true}
                        onClick={handleClickLogo}
                    />
                    <nav>
                        <SearchBar />
                        <Button type="nav-button">
                            <HiOutlineHome /> Главное
                        </Button>
                        <Button type="nav-button">
                            <MdFavoriteBorder /> Понравшиеся
                        </Button>
                        <Button type="nav-button">
                            <FaArrowTrendUp /> В тренде
                        </Button>
                        <Button type="nav-button">
                            <TbCategory /> Категории
                        </Button>
                        <Button type="nav-button">
                            <MdOutlineCalendarMonth /> Скоро
                        </Button>
                    </nav>
                </menu>
                <nav className={style.shortMenu}>
                    <Button type="icon">
                        <IoMenu onClick={handleClickMenu} />
                    </Button>
                </nav>
            </main>
        </section>
    );
}

import { HiOutlineHome } from "react-icons/hi";
import { MdFavoriteBorder, MdOutlineCalendarMonth } from "react-icons/md";
import { BiSolidHot } from "react-icons/bi";
import { TbCategory } from "react-icons/tb";

import style from "./MainMenu.module.scss";
import Logo from "components/Logo/Logo";
import SearchBar from "@/features/Menu/SearchBar/SearchBar";
import MenuNavSection from "@/features/Menu/MenuNavSection/MenuNavSection";

export default function MainMenu() {
    return (
        <menu className={style.menu}>
            <Logo
                showIcon={false}
                size={"md"}
                isPointer={true}
                returnToHome={true}
                color="brand"
            />
            <nav>
                <SearchBar />
                <MenuNavSection icon={<HiOutlineHome />}>
                    Главное
                </MenuNavSection>
                <MenuNavSection icon={<MdFavoriteBorder />}>
                    Понравшиеся
                </MenuNavSection>
                <MenuNavSection icon={<BiSolidHot />}>В тренде</MenuNavSection>
                <MenuNavSection icon={<TbCategory />}>Главное</MenuNavSection>
                <MenuNavSection icon={<MdOutlineCalendarMonth />}>
                    Скоро
                </MenuNavSection>
            </nav>
        </menu>
    );
}

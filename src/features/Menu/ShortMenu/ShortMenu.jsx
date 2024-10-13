import { IoMenu } from "react-icons/io5";

import { HiOutlineHome } from "react-icons/hi";
import { MdFavoriteBorder, MdOutlineCalendarMonth } from "react-icons/md";
import { BiSolidHot } from "react-icons/bi";
import { TbCategory } from "react-icons/tb";

import style from "./ShortMenu.module.scss";
import Button from "components/Button/Button";

export default function ShortMenu({ onClick, isHide }) {
    return (
        <nav className={style.shortMenu}>
            <Button type="icon" isActive={!isHide}>
                <IoMenu onClick={onClick} />
            </Button>

            <section className={`buttons ${isHide ? "active" : ""}`}>
                <Button type="icon">
                    <HiOutlineHome />
                </Button>
                <Button type="icon">
                    <MdFavoriteBorder />
                </Button>
                <Button type="icon">
                    <BiSolidHot />
                </Button>
                <Button type="icon">
                    <TbCategory />
                </Button>
                <Button type="icon">
                    <MdOutlineCalendarMonth />
                </Button>
            </section>
        </nav>
    );
}

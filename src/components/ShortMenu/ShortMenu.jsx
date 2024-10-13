import { IoMenu } from "react-icons/io5";
import Button from "../Button/Button";

import style from "./ShortMenu.module.scss";

export default function ShortMenu({ onClick, isActiveIcon }) {
    return (
        <nav className={style.shortMenu}>
            <Button type="icon" isActive={isActiveIcon}>
                <IoMenu onClick={onClick} />
            </Button>
        </nav>
    );
}

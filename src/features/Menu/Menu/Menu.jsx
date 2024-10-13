import { useState } from "react";

import style from "./Menu.module.scss";

import MainMenu from "@/features/Menu/MainMenu/MainMenu";
import ShortMenu from "@/features/Menu/ShortMenu/ShortMenu";

export default function Menu() {
    const [isHide, setIsHide] = useState(false);

    function handleClickMenu() {
        setIsHide((v) => !v);
    }

    return (
        <div className={`${style.menu} ${isHide ? style.hide : ""}`}>
            <main>
                <MainMenu />
                <ShortMenu onClick={handleClickMenu} isHide={isHide} />
            </main>
        </div>
    );
}

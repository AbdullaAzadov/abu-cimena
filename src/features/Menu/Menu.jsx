import { useState } from "react";

import style from "./Menu.module.scss";

import MainMenu from "components/MainMenu/MainMenu";
import ShortMenu from "@/components/ShortMenu/ShortMenu";

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

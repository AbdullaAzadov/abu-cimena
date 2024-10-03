import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";

export default function Home() {
    const navigate = useNavigate();

    function handleClick() {
        navigate("app");
    }

    return (
        <main className={styles.main}>
            <Logo />
            <p>Наслаждайтесь фильмами и сериалами.</p>
            <Button onClick={handleClick}>Начать смотреть</Button>
        </main>
    );
}

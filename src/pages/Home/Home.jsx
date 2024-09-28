import styles from "./Home.module.css";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";

export default function Home() {
    return (
        <main className={styles.main}>
            <Logo />
            <p>Наслаждайтесь фильмами и сериалами.</p>
            <Button>Начать смотреть</Button>
        </main>
    );
}

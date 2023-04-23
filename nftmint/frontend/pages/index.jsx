import styles from "../styles/Home.module.css";
import InstructionsComponent from "../components/nftCreator";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <nftCreator/>
      </main>
    </div>
  );
}

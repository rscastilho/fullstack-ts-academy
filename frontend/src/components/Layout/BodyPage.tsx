import AppRouter from "../../Router/appRouter";
import styles from "./Layout.module.css";

const Bodypage = () => {
  return (
    <div className={styles.bodyPage}>
      <AppRouter />
    </div>
  );
};

export default Bodypage;

import { Outlet } from "react-router-dom";

import styles from "./App.module.scss";
import { Header } from "./components/Header";

function App() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default App;

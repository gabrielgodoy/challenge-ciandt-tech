import { Outlet } from "react-router-dom";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <Outlet />
    </div>
  );
}

export default App;

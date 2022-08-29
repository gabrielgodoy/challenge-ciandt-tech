import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import { FormEvent } from "react";
import { Outlet } from "react-router-dom";

import styles from "./App.module.scss";
import headerCorner from "./assets/images/header-corner.svg";

function App() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Search!");
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <div className={styles.header}>
          <img
            alt="Pokédex"
            className={styles.headerCorner}
            src={headerCorner as string}
          />
          <div className={styles.headerTitle}>PokéDex</div>
          <div className={styles.search}>
            <form onSubmit={handleSubmit}>
              <InputBase
                inputProps={{ "aria-label": "search google maps" }}
                placeholder="Search"
                sx={{ ml: 1, flex: 1 }}
              />
              <IconButton aria-label="search" sx={{ p: "10px" }} type="submit">
                <SearchIcon />
              </IconButton>
            </form>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;

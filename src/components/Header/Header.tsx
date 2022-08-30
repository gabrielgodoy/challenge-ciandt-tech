import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import { ChangeEvent, FormEvent, useState } from "react";
import { matchPath, useLocation, useNavigate } from "react-router-dom";

import headerCorner from "./../../assets/images/header-corner.svg";
import styles from "./Header.module.scss";

export const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const isSearchPath = matchPath("/search/:id", pathname);
  const isPokemonPath = matchPath("/pokemon/:id", pathname);

  const handleChange = (event: ChangeEvent) => {
    setSearch((event.target as HTMLInputElement).value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search || !search.replace(/\s/g, "").length) {
      navigate("/");
      return;
    }
    navigate(`/search/${search}`);
  };

  return (
    <>
      <div className={styles.header}>
        <img
          alt="Pokédex"
          className={styles.headerCorner}
          src={headerCorner as string}
        />
        <div className={styles.headerTitle} onClick={() => navigate("/")}>
          PokéDex
        </div>
        <div className={styles.search}>
          <form onSubmit={handleSubmit}>
            <InputBase
              inputProps={{ "aria-label": "search google maps" }}
              onChange={handleChange}
              placeholder="Search"
              sx={{ ml: 1, flex: 1 }}
              value={search}
            />
            <IconButton aria-label="search" sx={{ p: "10px" }} type="submit">
              <SearchIcon />
            </IconButton>
          </form>
        </div>
      </div>
      {(isSearchPath || isPokemonPath) && (
        <div className={styles.subheader}>
          <div className={styles.backIcon} onClick={() => navigate("/")}>
            <ArrowBackIcon />
            Back to home
          </div>
        </div>
      )}
    </>
  );
};

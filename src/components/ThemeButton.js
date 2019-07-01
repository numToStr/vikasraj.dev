import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ThemeIcon from "@material-ui/icons/InvertColorsTwoTone";
import { useLocalTheme } from "./ThemeContext";
import { THEME_LIGHT, THEME_DARK } from "../utils/themeTypes";

const ThemeButton = () => {
    const {
        state: { type },
        dispatch,
    } = useLocalTheme();

    const handleThemeChange = () => {
        const themeType = type === THEME_DARK ? THEME_LIGHT : THEME_DARK;

        localStorage.setItem("site-theme", themeType);

        dispatch({ type: themeType });
    };

    return (
        <IconButton color="inherit" size="small" onClick={handleThemeChange}>
            <ThemeIcon />
        </IconButton>
    );
};

export default ThemeButton;

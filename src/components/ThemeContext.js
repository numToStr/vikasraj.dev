import React, { createContext, useReducer, useContext } from "react";
import theme from "../styles/theme.config";
// import { getCookie } from "../utils/cookie";
import { THEME_DARK, THEME_LIGHT } from "../utils/themeTypes";

const reducer = (state, { type }) => {
    switch (type) {
        case THEME_LIGHT:
            return { theme: theme(THEME_LIGHT), type: THEME_LIGHT };
        case THEME_DARK:
            return { theme: theme(THEME_DARK), type: THEME_DARK };
        default:
            return state;
    }
};

const ThemeContext = createContext(null);

const LocalThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        theme: theme(window.__theme),
        type: window.__theme,
    });

    // useEffect(() => {
    //     const themeType = localStorage.getItem("site-theme") || window.__theme;

    //     dispatch({ type: themeType });
    // }, [dispatch]);

    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            {children}
        </ThemeContext.Provider>
    );
};

const useLocalTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error(
            "useLocalTheme must be used within a LocalThemeProvider :/"
        );
    }

    return context;
};

export { LocalThemeProvider, useLocalTheme };

import React, { createContext, useReducer, useContext } from "react";
import theme from "../styles/theme.config";

const reducer = (state, { type }) => {
    switch (type) {
        case "LIGHT":
            return { theme: theme("light") };
        case "DARK":
            return { theme: theme("dark") };
        default:
            return state;
    }
};

const ThemeContext = createContext(null);

const LocalThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { theme: theme("dark") });

    return (
        <ThemeContext.Provider value={[state.theme, dispatch]}>
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

import React, {
    createContext,
    useReducer,
    useContext,
    useLayoutEffect,
    useEffect,
} from "react";
import theme from "../styles/theme.config";
import { THEME_DARK, THEME_LIGHT } from "../utils/themeTypes";

/**
 * For fixing ssr issue and netlify build
 * @source https://github.com/mui-org/material-ui/blob/master/docs/src/modules/components/ThemeContext.js
 */
const useEnhancedEffect =
    typeof window === "undefined" ? useEffect : useLayoutEffect;

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
        theme: null,
        type: null,
    });

    useEnhancedEffect(() => {
        const themeType = localStorage.getItem("site-theme") || window.__theme;

        dispatch({ type: themeType });
    }, []);

    return (
        state.theme && (
            <ThemeContext.Provider value={{ state, dispatch }}>
                {children}
            </ThemeContext.Provider>
        )
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

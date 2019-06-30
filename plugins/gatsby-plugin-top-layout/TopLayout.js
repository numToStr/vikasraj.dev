import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { LocalThemeProvider } from "../../src/components/ThemeContext";
import MuiThemeProvider from "./MuiThemeProvider";

export default function TopLayout({ children }) {
    return (
        <React.Fragment>
            <Helmet>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,500&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <LocalThemeProvider>
                <MuiThemeProvider>{children}</MuiThemeProvider>
            </LocalThemeProvider>
        </React.Fragment>
    );
}

TopLayout.propTypes = {
    children: PropTypes.node,
};

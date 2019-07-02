import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
    return (
        <html {...props.htmlAttributes}>
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                {props.headComponents}
            </head>
            <body {...props.bodyAttributes}>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (global => {
                              const _$setTheme = newTheme => {
                                  global.__theme = newTheme;
                                  prefferedTheme = newTheme;
                              };
                          
                              let prefferedTheme;
                              try {
                                  prefferedTheme = localStorage.getItem("site-theme");
                              } catch (error) {}
                          
                              global._$setPrefferedTheme = newTheme => {
                                  _$setTheme(newTheme);
                          
                                  try {
                                      preffered = localStorage.setItem("site-theme", newTheme);
                                  } catch (error) {}
                              };
                          
                              const darkQuery = global.matchMedia("(prefers-color-scheme: dark)");
                          
                              darkQuery.addListener(ev => {
                                  const __themeType = ev.matches ? "dark" : "light";
                                  global._$setPrefferedTheme(__themeType);
                              });
                          
                              const themeType = darkQuery.matches ? "dark" : "light";
                              const whichTheme = prefferedTheme || themeType;
                          
                              _$setTheme(whichTheme);
                          })(window);                      
                        `,
                    }}
                ></script>
                {props.preBodyComponents}
                <noscript key="noscript" id="gatsby-noscript">
                    This app works best with JavaScript enabled.
                </noscript>
                <div
                    key={`body`}
                    id="___gatsby"
                    dangerouslySetInnerHTML={{ __html: props.body }}
                />
                {props.postBodyComponents}
            </body>
        </html>
    );
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
};

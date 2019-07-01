import React from "react";
import { animated, useSpring } from "react-spring";
import Box from "@material-ui/core/Box";
import { useLocalTheme } from "../ThemeContext";

export default ({ open, children }) => {
    const {
        state: {
            theme: { palette },
        },
    } = useLocalTheme();

    const spring = useSpring({
        from: { x: 0 },
        to: {
            x: open ? 1 : 0,
        },
    });

    return (
        <Box
            component={animated.div}
            height="100%"
            bgcolor={palette.background.default}
            position="fixed"
            top={0}
            left={0}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            zIndex={1000}
            style={{
                width: spring.x
                    .interpolate([0, 0.2, 0.5, 1], [0, 50, 80, 100])
                    .interpolate(x => `${x}%`),
            }}
        >
            {children}
        </Box>
    );
};

import React from "react";

import { useTrail, animated, config } from "react-spring";
import Box from "@material-ui/core/Box";
import { useLocalTheme } from "../ThemeContext";

const bars = [28, 20, 28];

const DrawerButton = ({ onClick }) => {
    const {
        state: {
            theme: { palette },
        },
    } = useLocalTheme();

    const trails = useTrail(bars.length, {
        from: {
            xy: [-10, 0],
            opacity: 0,
        },
        to: {
            xy: [0, 0],
            opacity: 1,
            color: palette.text.primary,
        },
        config: config.wobbly,
    });

    return (
        <Box
            onClick={onClick}
            style={{ cursor: "pointer" }}
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            p={{
                md: 0.5,
            }}
            ml={2}
        >
            {trails.map(({ color, xy, opacity }, $i) => (
                <Box
                    component={animated.div}
                    key={$i}
                    width={bars[$i]}
                    height={3}
                    mb={0.5}
                    borderRadius="borderRadius"
                    style={{
                        opacity,
                        backgroundColor: color,
                        transform: xy.interpolate(
                            (_x, _y) => `translate3d(${_x}px,${_y}px,0)`
                        ),
                    }}
                />
            ))}
        </Box>
    );
};

export default DrawerButton;

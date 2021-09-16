import { pxToRE } from "utils/convertor";
import family from "./family";
export const baseSize = 16;

const font = (code) => ({
    base: baseSize,
    size: {
        tiny: pxToRE(9),
        small: pxToRE(10.4),
        medium: pxToRE(12),
        large: pxToRE(13.6),
        xLarge: pxToRE(16),
        xxLarge: pxToRE(20),
        xxxLarge: pxToRE(25)
    },
    weight: {
        tiny: 100,
        small: 300,
        medium: 600,
        large: 700,
        xLarge: 800,
        xxLarge: 900
    },
    family: family(code)
})

export default font;
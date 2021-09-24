import { pxToRE } from 'utils/convertor';
import transition from './transition';
import colors from './colors';
import font from './font';
import shadow from './shadow';

/**
* @param language is object of {title: 'english', code: 'en'}
* @param mod is string of light or dark
*/

const themes = (language, mod) => {
    // console.log({ language, mod });

    const data = {
        color: colors(mod),
        font: font(language?.code),
        shadow: {
            shadow
        },
        transition,
        radius: {
            tiny: pxToRE(3),
            small: pxToRE(5),
            medium: pxToRE(8),
            large: pxToRE(10),
            xLarge: pxToRE(15),
            xXLarge: pxToRE(100),
        },
        spacing: {
            tiny: pxToRE(4),
            small: pxToRE(8),
            medium: pxToRE(16),
            large: pxToRE(32),
            xLarge: pxToRE(64),
            xxLarge: pxToRE(124),
        },
        zIndex: {
            top: 50,
            middle: 30,
            bottom: 10,
        },
        direction: language?.direction || "ltr",
    }


    return data;
};

export default themes;
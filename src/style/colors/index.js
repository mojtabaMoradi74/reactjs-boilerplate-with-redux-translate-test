import colorDark from "./dark";
import colorLight from "./light";

const colors = (mod) => {
    if (mod === 'dark') return colorDark;
    return colorLight
}


export default colors;



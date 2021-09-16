import { baseSize } from "style/font";

export function ptr(px) {
    let x = baseSize, rem = (1 / x * px) + 'rem';
    return rem;
};

export function pte(px) {
    let x = baseSize, em = (1 / x * px) + 'em';
    return em;
};

export function rtp(rem) {
    let x = baseSize, px = rem / (1 / x) + 'px';
    return px;
};

export function pxToRE(px) {
    let rem = ptr(px), em = pte(px);
    return { rem, em };
};
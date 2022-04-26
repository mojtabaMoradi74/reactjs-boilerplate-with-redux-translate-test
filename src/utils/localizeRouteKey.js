
const localizeRouteKey = (path, t, locale) => {
    let LocalPath = t(path);
    if (LocalPath !== path) return `/${locale}` + LocalPath;
    else return `/${locale}`;
}
export default localizeRouteKey;
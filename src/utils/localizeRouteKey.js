
const localizeRouteKey = (path, formatMessage, locale) => {
    let LocalPath = formatMessage({ id: path });
    if (LocalPath !== path) return `/${locale}` + LocalPath;
    else return `/${locale}`;
}
export default localizeRouteKey;
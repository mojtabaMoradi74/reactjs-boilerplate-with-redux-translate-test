



function localizeRoutePath(path, locale) {

    // ----------------------------------------------------------------
    const validPath = (key) => {
        let newPathname = key;
        if (newPathname === key) newPathname = '/';
        return newPathname;
    }
    // ----------------------------------------------------------------
    switch (typeof path) {
        case 'undefined':
            return;
        case 'object':
            return path.map((key) => {
                let newPathname = validPath(key);
                return `/${locale}` + newPathname
            });
        default:
            let newPathname = validPath(path);
            const isFallbackRoute = path === '*';
            return isFallbackRoute ? path : `/${locale}` + newPathname;
    }
    // ----------------------------------------------------------------

}

export default localizeRoutePath;
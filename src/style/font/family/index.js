const family = (code) => {
    let family;

    switch (code) {
        case 'en':
            family = 'Source Sans Pro , sans-serif';
            break;
        case 'fa':
            family = 'Almarai , sans-serif'
            break;
        default:
            family = 'Source Sans Pro , sans-serif';
            break;
    }

    return family;
}


export default family;

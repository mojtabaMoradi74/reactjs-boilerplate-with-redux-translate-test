import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import localizeRouteKey from 'utils/localizeRouteKey';


const LinkLocal = ({ children, to, ...props }) => {

    const { formatMessage, locale } = useIntl();

    return <Link {...props} to={localizeRouteKey(to, formatMessage, locale)}>
        {children}
    </Link>

}

export default LinkLocal;
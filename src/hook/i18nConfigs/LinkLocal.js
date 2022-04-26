import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import localizeRouteKey from 'utils/localizeRouteKey';


const LinkLocal = ({ children, to, ...props }) => {

    const [t, i18n] = useTranslation();

    return <Link {...props} to={localizeRouteKey(to, t, i18n.language)}>
        {children}
    </Link>

}

export default LinkLocal;
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import localizeRouteKey from 'utils/localizeRouteKey';


const NavLinkLocal = ({ children, to, ...props }) => {

    const [t, i18n] = useTranslation();

    return (
        <NavLink {...props} to={localizeRouteKey(to, t, i18n.language)}>
            {children}
        </NavLink>
    )

}

export default NavLinkLocal;
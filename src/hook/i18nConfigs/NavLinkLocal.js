import { useIntl } from 'react-intl';
import { NavLink } from 'react-router-dom';
import localizeRouteKey from 'utils/localizeRouteKey';


const NavLinkLocal = ({ children, to, ...props }) => {

    const { formatMessage, locale } = useIntl();


    return (
        <NavLink {...props} to={localizeRouteKey(to, formatMessage, locale)}>
            {children}
        </NavLink>
    )

}

export default NavLinkLocal;
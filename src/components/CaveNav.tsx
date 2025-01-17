import { FC } from 'react'
import { NavLink } from 'react-router'
import { useAuth0 } from "@auth0/auth0-react"

const CaveNav: FC = () => {
    const {loginWithRedirect, isAuthenticated, isLoading, logout} = useAuth0()
    console.log(`ORIGIN ${window.location.origin}`)

    return (
        <nav>
            <NavLink to="/" end
                    className={({isActive}) => isActive ? 'active' : ''}>
                Batcave
            </NavLink>
            <NavLink to="/home" end
                    className={({isActive}) => isActive ? 'active' : ''}>
                Home Of
            </NavLink>
            {!isLoading && !isAuthenticated && <a onClick={() => loginWithRedirect()}>Log In</a>}
            {!isLoading && isAuthenticated && <a className="" onClick={() => logout({logoutParams: {
                returnTo: window.location.origin
                }})}>Log Out</a>}
        </nav>
    )
}
export default CaveNav
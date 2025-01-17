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
            {!isLoading && !isAuthenticated && <button onClick={() => loginWithRedirect()}>Log In</button>}
            {!isLoading && isAuthenticated && <button onClick={() => logout({logoutParams: {
                returnTo: window.location.origin
                }})}>Log Out</button>}
        </nav>
    )
}
export default CaveNav
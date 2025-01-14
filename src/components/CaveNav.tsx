import { FC } from 'react'
import { NavLink } from 'react-router'
const CaveNav: FC = () => {
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
        </nav>
    )
}
export default CaveNav
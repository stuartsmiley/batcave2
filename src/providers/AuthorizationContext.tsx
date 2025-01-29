import {createContext, FC, ReactNode, useContext, useEffect, useState} from 'react'
import {useAuth0} from "@auth0/auth0-react";
import {jwtDecode} from "jwt-decode";

interface AuthorizationContextProps {
    children: ReactNode;
}
const AuthorizationContext = createContext<Authorization>({accessToken: '', permissions: []})

const AuthorizationProvider: FC<AuthorizationContextProps>  = ({children}) => {
    const {isAuthenticated, getAccessTokenSilently} = useAuth0()
    const [accessToken, setAccessToken] = useState<string>('')
    const [permissions, setPermissions] = useState<string[]>([])
    useEffect(() => {
        const checkPermissions = async () => {
            if (isAuthenticated) {
                try {
                    const accessToken = await getAccessTokenSilently()
                    const token = jwtDecode(accessToken)
                    // @ts-ignore
                    const permissions = token.permissions || []
                    setAccessToken(accessToken)
                    setPermissions(permissions)
                } catch (error) {
                    console.error('Permission check error', error)
                }
            }
        }
        checkPermissions()
    }, [isAuthenticated, getAccessTokenSilently])
    return (
        <AuthorizationContext value={{accessToken, permissions}}>
            {children}
        </AuthorizationContext>
    )
}

export function useAuthorization() {
    return useContext(AuthorizationContext)
}

export default AuthorizationProvider
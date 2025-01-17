import {FC} from "react";
import {withAuthenticationRequired} from "@auth0/auth0-react";

interface ProtectedComponentProps {
    component: FC;
    propsForComponent?: any
}
const ProtectedComponent: FC<ProtectedComponentProps> = ({component, propsForComponent}) => {
    const Protected =withAuthenticationRequired(component)
    return <Protected {...propsForComponent} />
}

export default ProtectedComponent
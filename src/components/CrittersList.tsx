import { FC } from 'react'
import {Button, OverlayTrigger, Tooltip} from "react-bootstrap";
import {useNavigate} from "react-router";
import { useCritters } from "@/components/CrittersContext";
import {useAuthorization} from "@/providers/AuthorizationContext.tsx";

const CrittersList: FC = () => {
    const critters: Critter[] = useCritters()
    const navigate = useNavigate()
    const {permissions} = useAuthorization()
    return (
        <ul className="no-bullets">
            {critters.map((c: Critter) => (
                <li key={c.nickname}>{c.name}</li>
            ))}
            {permissions.includes('write:critters') && !location.pathname.endsWith('add')
                && <li key="AddMe">
                <OverlayTrigger
                    delay={{hide: 450, show: 300}}
                    overlay={(props) => (
                    <Tooltip {...props}>Click me to add another critter to the batcave.</Tooltip>
                    )}
                placement="bottom">

                    <Button onClick={() => navigate("add")}>
                        +
                    </Button>
                </OverlayTrigger>
            </li>}
        </ul>
    )
}

export default CrittersList
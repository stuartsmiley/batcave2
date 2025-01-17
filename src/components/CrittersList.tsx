import { FC } from 'react'
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router";
import { useCritters } from "@/components/CrittersContext";

const CrittersList: FC = () => {
    const critters: Critter[] = useCritters()
    const navigate = useNavigate()
    return (
        <ul className="no-bullets">
            {critters.map((c: Critter) => (
                <li key={c.nickname}>{c.name}</li>
            ))}
            {!location.pathname.endsWith('add') && <li>
                <Button onClick={() => navigate("add")}>
                    +
                </Button>
            </li>}
        </ul>
    )
}

export default CrittersList
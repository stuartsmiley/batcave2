import { FC, use} from 'react'
import { Outlet } from "react-router";
import CrittersList from "@/components/CrittersList.tsx";
import { CrittersProvider} from "@/components/CrittersContext";

interface CrittersProps {
    critters: Promise<Critter[]>
}

const Critters: FC<CrittersProps> = ({critters}) => {
    const resolvedCritters = use(critters)
    return (
        <>
            <CrittersProvider initialCritters={resolvedCritters}>
                <CrittersList />
                <Outlet />
            </CrittersProvider>
        </>
    )
}

export default Critters
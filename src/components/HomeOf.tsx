import {FC, Suspense} from "react"
import Critters from "@/components/Critters.tsx";
import Loading from "@/components/Loading.tsx";
import CritterApi from "@/api/CritterApi.ts";

const HomeOf: FC = () => {
    const critters: Promise<Critter[]> = CritterApi.fetchCritters()
    return (
        <div className="card">
            <h1>Welcome to Wayne Manor</h1>
            <h2>Home of</h2>
            <Suspense fallback={<Loading />}>
                <Critters critters={critters} />
            </Suspense>
        </div>
    )
}

export default HomeOf
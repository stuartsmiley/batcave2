import {FC, Suspense} from "react"
import Critters from "@/components/Critters.tsx";
import Loading from "@/components/Loading.tsx";
import CritterApi from "@/api/CritterApi.ts";
import {useAuthorization} from "@/providers/AuthorizationContext.tsx";

const HomeOf: FC = () => {
    const {accessToken} = useAuthorization()

    if (!accessToken) {
        return <Loading />
    }
    // assumes that anybody who is authenticated will have 'read:critters' access
    const critters: Promise<Critter[]> = CritterApi.fetchCritters(accessToken)
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
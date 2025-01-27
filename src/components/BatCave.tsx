import {FC, useEffect, useState} from 'react'
import useWebSocket from "react-use-websocket";
import {useAuth0} from "@auth0/auth0-react";
import {useAuthorization} from "@/providers/AuthorizationContext.tsx";

// TODO: should we be sending the token when we establish the websocket or when we sendMessage or both
const BatCave: FC = () => {
    const [count, setCount] = useState(0)
    const { user } = useAuth0()
    const wsUrl: string = import.meta.env.VITE_WS_URL + user?.given_name
    const { sendMessage, lastMessage, readyState } = useWebSocket(wsUrl)
    const {permissions} = useAuthorization()

    useEffect(() => {
        console.log(`readystate change to ${readyState}`)
    }, [readyState])
    const triggerBatcave = () => {
        setCount(count + 1)
        sendMessage("POW")
    }

    return (
        <>

            <div className="card">
                {permissions.includes('activateDoor') &&
                <button className="pow" onClick={triggerBatcave} disabled={readyState !== 1 }>
                    POW!
                </button>}
                <p>
                    <span>The Bat Cave is {readyState}.</span> Bat cave trigger count: {count}
                </p>
                {lastMessage && <p>Last message: {lastMessage.data}</p>}
            </div>

        </>
    )
}

export default BatCave
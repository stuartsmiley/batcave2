import {FC, useEffect, useState} from 'react'
import useWebSocket from "react-use-websocket";

const BatCave: FC = () => {
    const [count, setCount] = useState(0)
    const wsUrl: string = import.meta.env.VITE_WS_URL
    const { sendMessage, lastMessage, readyState } = useWebSocket(wsUrl)

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
                <button className="pow" onClick={triggerBatcave} disabled={readyState !== 1 }>
                    POW!
                </button>
                <p>
                    <span>The Bat Cave is {readyState}.</span> Bat cave trigger count: {count}
                </p>
                {lastMessage && <p>Last message: {lastMessage.data}</p>}
            </div>

        </>
    )
}

export default BatCave
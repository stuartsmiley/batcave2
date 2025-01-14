import { useEffect, useState } from 'react'

const useWebSocket = (url: URL) => {
    const [message, setMessage] = useState<string>('')
    const socket = new WebSocket(url)

    useEffect(() => {
        socket.onopen = () => {
            console.log(`WebSocket with ${url} connected!`)
        }
        socket.onmessage = (event) => {
            setMessage(event.data)
        }

        return () => {
            socket.close()
            console.log(`WebSocket with ${url} closed!`)
        }
    }, [url]);

    return message
}

export default useWebSocket
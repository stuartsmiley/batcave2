import {useEffect, useState} from 'react'
import './App.css'
import useWebSocket from "react-use-websocket";

function App() {
  const [count, setCount] = useState(0)
  const { sendMessage, lastMessage, readyState } = useWebSocket("ws://192.168.1.251:8000/ws/stu")

  useEffect(() => {
      console.log(`readstate change to ${readyState}`)
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

export default App

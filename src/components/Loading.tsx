import { FC } from 'react'
import Spinner from 'react-bootstrap/Spinner'


const Loading: FC = () => {
    return <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
    </Spinner>
}
export default Loading
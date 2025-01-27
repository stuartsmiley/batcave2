import {FC} from 'react'
import {Card} from "react-bootstrap";
import Alert from "react-bootstrap/Alert";


const Unauthorized: FC = () => {
    return (
    <Card>
        <Alert variant="danger">
            You have attempted to enter a zone for which you are UNAUTHORIZED.
        </Alert>
    </Card>
    )
}
export default Unauthorized
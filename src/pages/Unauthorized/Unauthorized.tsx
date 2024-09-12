import { Container } from "reactstrap"
import GitFooter from "./GitFooter"

const Unauthorized = () => {
    return (
        <Container>
            <div className="w-100">
                <h1>You are not authorized to access Quotefault at this time.</h1>
            </div>
            <GitFooter />
        </Container>
    )
}

export default Unauthorized
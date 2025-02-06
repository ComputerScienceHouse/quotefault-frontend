import { toastError, useApi } from "../../API/API"
import { toast } from "react-toastify"
import { Card, CardBody, CardHeader, CardTitle, Container } from "reactstrap"
import ConfirmDialog from "../../components/ConfirmDialog"

const Kevlar = () => {
    const { apiPut } = useApi()

    const submit = () => {
        apiPut("/api/kevlar")
            .then(() => {
                toast.success("Toggled Kevlar!", { theme: "colored" })
                setTimeout(() => window.location.assign("/"), 1000)
            })
            .catch(
                toastError(
                    "Failed to toggle Kevlar. Have you used this too recently?"
                )
            )
    }

    return (
        <Container>
            <Card>
                <CardHeader>
                    <CardTitle>Confirm Toggle Kevlar</CardTitle>
                </CardHeader>
                <CardBody className="d-flex py-">
                    <ConfirmDialog
                        onClick={submit}
                        buttonClassName="btn-danger ml-2">
                        Confirm
                    </ConfirmDialog>
                </CardBody>
            </Card>
        </Container>
    )
}

export default Kevlar

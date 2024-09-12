import { Container } from "reactstrap"
import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Storage from "./pages/Storage"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import SubmitReport from "./pages/SubmitReport"
import Reports from "./pages/Reports"
import { useOidcUser } from "@axa-fr/react-oidc"
import {useFetchArray} from "./API/API.ts";
import {CSHUser} from "./API/Types.ts";
import Unauthorized from "./pages/Unauthorized";


const CanQuotefault = () =>  {
    const { oidcUser } = useOidcUser()

    const currentUser = { cn: oidcUser.cn, uid: oidcUser.uid } as CSHUser

    const userList = useFetchArray<CSHUser>("/api/users")
    if (!userList.includes(currentUser)) {
        return <Route path="*" element={ <Unauthorized /> }/>
    }
    return
}

function App() {
    return (
        <BrowserRouter>
        <CanQuotefault />
            <Container className="main px-0" fluid>
                <NavBar />
                <ToastContainer
                    theme="colored"
                    hideProgressBar
                    newestOnTop
                    className="py-5 my-5"
                    autoClose={5000}
                />
                <Container style={{ marginTop: "90px" }} className="px-0">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/storage"
                            element={<Storage storageType="STORAGE" />}
                        />
                        <Route
                            path="/hidden"
                            element={<Storage storageType="HIDDEN" />}
                        />
                        <Route
                            path="/personal"
                            element={<Storage storageType="PERSONAL" />}
                        />
                        <Route
                            path="/favorites"
                            element={<Storage storageType="FAVORITES" />}
                        />
                        <Route path="/report" element={<SubmitReport />} />
                        <Route path="/reports" element={<Reports />} />
                    </Routes>
                </Container>
            </Container>
        </BrowserRouter>
    )
}

export default App

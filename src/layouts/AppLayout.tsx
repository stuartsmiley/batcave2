import {FC} from "react";
import batsignal from "@/assets/batsignal.png";
import {Outlet} from "react-router";
import Footer from "@/components/Footer.tsx";
import CaveNav from "@/components/CaveNav.tsx";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "@/components/Loading.tsx";
import ErrorBoundary from "@/components/ErrorBoundary.tsx";

const AppLayout: FC = () => {
    const { user, isAuthenticated, isLoading, error } = useAuth0()
    if (isLoading) {
        return <Loading />
    }
    if (error) {
        return <div><p>Opps... {error.message}</p></div>
    }
    console.log(`MY USER is authenticated? ${isAuthenticated}`, user)
    return (
        <>
            <header>
                <a href="https://dc.com/batman" target="_blank">
                    <img src={batsignal} className="logo" alt="Bat Signal"/>
                </a>
                <CaveNav />
            </header>
            {isAuthenticated ?
            <div className="main">
                <ErrorBoundary fallback={<p>Opps... Something went wrong</p>}>
            <Outlet />
                </ErrorBoundary>
            </div>
                : <p>please sign in to continue</p>}
            <Footer />
        </>
    )
}

export default AppLayout
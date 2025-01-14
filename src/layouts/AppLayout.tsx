import { FC } from "react";
import batsignal from "@/assets/batsignal.png";
import {Outlet} from "react-router";
import Footer from "@/components/Footer.tsx";
import CaveNav from "@/components/CaveNav.tsx";

const AppLayout: FC = () => {
    return (
        <>
            <header>
                <a href="https://dc.com/batman" target="_blank">
                    <img src={batsignal} className="logo" alt="Bat Signal"/>
                </a>
                <CaveNav />
            </header>
            <div className="main">
            <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default AppLayout
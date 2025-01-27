import './App.css';
import {Route, Routes} from "react-router";
import ProtectedComponent from "@/components/ProtectedComponent.tsx";
import AppLayout from "@/layouts/AppLayout.tsx";
import BatCave from "@/components/BatCave.tsx";
import HomeOf from "@/components/HomeOf.tsx";
import CritterFormWrapper from "@/components/CritterFormWrapper.tsx";
import Unauthorized from "@/components/Unauthorized.tsx";
import AuthorizationProvider from "@/providers/AuthorizationContext.tsx";

function App() {
    return (
        <AuthorizationProvider >
        <Routes>
            <Route element={<ProtectedComponent component={AppLayout} />}>
                <Route index element={<BatCave />} />
                <Route path="home" element={<HomeOf />} >
                    <Route path="add" element={<CritterFormWrapper nickname=""/>} />
                </Route>
                <Route path="unauthorized" element={<Unauthorized />} />
            </Route>
        </Routes>
        </AuthorizationProvider>
    )
}

export default App

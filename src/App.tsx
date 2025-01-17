import './App.css';
import {Route, Routes} from "react-router";
import ProtectedComponent from "@/components/ProtectedComponent.tsx";
import AppLayout from "@/layouts/AppLayout.tsx";
import BatCave from "@/components/BatCave.tsx";
import HomeOf from "@/components/HomeOf.tsx";
import CritterFormWrapper from "@/components/CritterFormWrapper.tsx";

function App() {
    return (
        <Routes>
            <Route element={<ProtectedComponent component={AppLayout} />}>
                <Route index element={<BatCave />} />
                <Route path="home" element={<HomeOf />} >
                    <Route path="add" element={<CritterFormWrapper nickname=""/>} />
                </Route>
            </Route>
        </Routes>
    )
}

export default App

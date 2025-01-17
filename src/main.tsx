import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import '@/index.css'
import App from '@/App.tsx'
import AppLayout from "@/layouts/AppLayout.tsx";
import HomeOf from "@/components/HomeOf.tsx";
import CritterFormWrapper from "@/components/CritterFormWrapper.tsx";
import { Auth0ProviderWithNavigate} from "@/Auth0ProviderWithNavigate";

createRoot(document.getElementById('root')!).render(
  <StrictMode>

      <BrowserRouter>
          <Auth0ProviderWithNavigate >
          <Routes>
              <Route element={<AppLayout />}>
                  <Route index element={<App />} />
                  <Route path="home" element={<HomeOf />} >
                      <Route path="add" element={<CritterFormWrapper nickname=""/>} />
                  </Route>
              </Route>
          </Routes>
          </Auth0ProviderWithNavigate>
      </BrowserRouter>
  </StrictMode>
)

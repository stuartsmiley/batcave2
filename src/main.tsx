import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import '@/index.css'
import App from '@/App.tsx'
import AppLayout from "@/layouts/AppLayout.tsx";
import HomeOf from "@/components/HomeOf.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route element={<AppLayout />}>
                  <Route index element={<App />} />
                  <Route path="home" element={<HomeOf />} />
              </Route>
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)

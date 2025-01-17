import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import '@/index.css'
import { Auth0ProviderWithNavigate} from "@/Auth0ProviderWithNavigate";
import App from "@/App.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Auth0ProviderWithNavigate >
              <App />
          </Auth0ProviderWithNavigate>
      </BrowserRouter>
  </StrictMode>
)

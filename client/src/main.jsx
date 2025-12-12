import { AuthContextProvider } from "./context/authContext";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import axios from 'axios'

// Ensure all requests send cookies when needed (e.g., auth)
axios.defaults.withCredentials = true
axios.defaults.baseURL = import.meta.env.VITE_API_URL

createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
  </ClerkProvider>
);

import { Navigate, Outlet } from "react-router-dom";

import { getSession } from "../services"

export const ProtectedRoute = () => {
  const { token, user } = getSession();
  console.log("token de usuaria: ", token)
  console.log("datos de la usuaria: ", user)
  if (!token || !user) {
    console.log("protector de rutas: no se quien eres llename este formulario y traeme un token")
    return <Navigate to="/login" replace />
  }
  console.log("protector de rutas: ah si! ya me acuerdo de ti bien chido tu token, pasa pasa")
  return <Outlet />
}

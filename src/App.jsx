import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from "./page/Login"
import { Profile } from "./page/Profile"
import { Menu } from "./components/Menu"
import { useState } from "react"
import { ProtectRouter } from "./components/ProtectRoute"
import { LandingPage } from "./page/LandingPage"



function App() {

  const [user, setUser] = useState(null)


  return (
    <>
      <BrowserRouter>
        <Menu/>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />}/>
            <Route  element={<ProtectRouter/>}>
              <Route path="/perfil" element={<Profile/> } />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App

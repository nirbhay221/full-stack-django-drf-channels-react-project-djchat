import {Routes,Route,BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import ToggleColorMode from "./components/ToggleColorMode";
import Server from "./pages/Server";
import Login from "./pages/Login";
import TestLogin from "./pages/TestLogin.tsx";
import {AuthServiceProvider} from "./context/AuthContext.tsx";
import ProtectedRoute from "./services/ProtectedRouter.tsx";
import Register from "./pages/Register.tsx";
import MembershipProvider from "./context/MemberContext.tsx";
import MembershipCheck from "./components/Membership/MembershipCheck.tsx";

const App = () => {
  return (
    <BrowserRouter>
    <AuthServiceProvider>
  <ToggleColorMode>   
  <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/server/:serverId/:channelId?" element=  {
      <ProtectedRoute>
      <MembershipProvider>
        <MembershipCheck>
      <Server/>
      </MembershipCheck>
      </MembershipProvider>
      </ProtectedRoute>
      }/>
      <Route path = "/explore/:categoryName" element = {<Explore/>}/>
      <Route path = "/login" element = {<Login />} />
      <Route path = "/register" element = {<Register />} />
      <Route path = "/testlogin" element = 
      {
      <ProtectedRoute><TestLogin />
      </ProtectedRoute>} />
    </Routes>
     </ToggleColorMode>
     </AuthServiceProvider>
     </BrowserRouter>
  );
}

export default App

import { GlobalStyled } from "./GlobalStyled.js";
//App,jsx vai praticamente virar as rotas entre os componentes
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { Outlet, Router } from "react-router-dom";

function App() {
    return (
        <Router basename ="/EasyStock">
        <AuthProvider>
            <GlobalStyled />
            <Outlet />
        </AuthProvider>
        </Router>
    );
}

export default App;

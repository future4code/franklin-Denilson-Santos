import { theme } from "./constants/thema"
import { Cabecario } from "./components/Cabecario/Cabecario";
import { ThemeProvider } from '@mui/material/styles';
import { Rotas } from "./routes/Rotas";
import { useState } from "react";
import { BrowserRouter } from 'react-router-dom'



function App() {
  const token = localStorage.getItem("token")
  
  const [botaoDireito, setBotaoDireito] = useState(token ? "Logout" : "Login")
  
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      
        <Cabecario botaoDireito={botaoDireito} setBotaoDireito={setBotaoDireito} />
        <Rotas setBotaoDireito={setBotaoDireito} />
        
      </BrowserRouter>
    
    </ThemeProvider>
  )
}

export default App

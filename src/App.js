import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import Navbar from "./components/Navbar";
import CssBaseline from '@mui/material/CssBaseline'; // Якщо використовуєш MUI

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar />
      <div style={{ padding: '0 20px' }}>
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
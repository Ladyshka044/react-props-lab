import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';

// Імпорт компонентів (Header та Footer)
import Header from './components/Header';
import Footer from './components/Footer';

// Імпорт нових сторінок для фінального проєкту
import AboutMe from './pages/AboutMe';
import MyCity from './pages/MyCity';
import MyFuture from './pages/MyFuture';

// Налаштування теми (можна змінити 'light' на 'dark' для темного режиму)
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // Синій колір для акцентів
    },
    background: {
      default: '#f4f6f8', // Світло-сірий фон для всього сайту
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline скидає стандартні стилі браузера під стандарти Material UI */}
      <CssBaseline />
      
      <Router>
        {/* Головний контейнер, який розтягується на всю висоту екрана */}
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          
          {/* Верхнє меню (Header) - відображається на всіх сторінках */}
          <Header />

          {/* Основний контент сайту */}
          <Box component="main" sx={{ flexGrow: 1, py: 4 }}>
            <Routes>
              {/* Головна сторінка за замовчуванням (шлях "/") веде на "Про мене" */}
              <Route path="/" element={<AboutMe />} />
              
              {/* Шлях /about теж веде на "Про мене" */}
              <Route path="/about" element={<AboutMe />} />
              
              {/* Шлях для сторінки міста */}
              <Route path="/my-city" element={<MyCity />} />
              
              {/* Шлях для сторінки планів на майбутнє */}
              <Route path="/my-future" element={<MyFuture />} />
              
              {/* Якщо користувач ввів неіснуючу адресу - можна додати 404, 
                  але поки що просто повернемо на головну */}
              <Route path="*" element={<AboutMe />} />
            </Routes>
          </Box>

          {/* Підвал (Footer) - відображається на всіх сторінках */}
          <Footer />
          
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
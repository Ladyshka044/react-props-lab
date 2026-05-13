import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent, CircularProgress, Box, Alert } from '@mui/material';
import { getWeather } from '../api/weatherApi';
import WbSunnyIcon from '@mui/icons-material/WbSunny'; // Іконка сонця для стилю

const MyCity = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const cityName = "Київ"; // Можеш змінити на своє місто

  useEffect(() => {
    getWeather('Kyiv')
      .then(res => {
        if (res && res.main) {
          setWeatherData(res);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
        Моє рідне місто — {cityName} 🇺🇦
      </Typography>
      
      <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
        {cityName} — це не просто столиця, це серце України з багатовіковою історією, неймовірною архітектурою 
        та незламним духом. Від золотих бань Софії до сучасних вуличок Подолу — це місто, яке надихає.
      </Typography>

      <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
          Поточна погода у місті:
        </Typography>

        {loading && <CircularProgress color="primary" />}

        {error && (
          <Alert severity="error">Не вдалося завантажити дані погоди. Перевірте з'єднання або API ключ.</Alert>
        )}

        {weatherData && !loading && (
          <Card sx={{ 
            minWidth: 300, 
            background: 'linear-gradient(135deg, #2196F3 30%, #21CBF3 90%)', 
            color: 'white',
            boxShadow: 10,
            borderRadius: 4
          }}>
            <CardContent sx={{ textAlign: 'center', py: 4 }}>
              <WbSunnyIcon sx={{ fontSize: 60, mb: 2 }} />
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                {weatherData.name}
              </Typography>
              <Typography variant="h2" sx={{ my: 2 }}>
                {Math.round(weatherData.main.temp)}°C
              </Typography>
              <Typography variant="h6" sx={{ textTransform: 'capitalize', opacity: 0.9 }}>
                {weatherData.weather[0].description}
              </Typography>
              <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic' }}>
                Відчувається як: {Math.round(weatherData.main.feels_like)}°C
              </Typography>
            </CardContent>
          </Card>
        )}
      </Box>
    </Container>
  );
};

export default MyCity;
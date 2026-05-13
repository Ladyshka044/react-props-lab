export const getWeather = async (city = 'Kyiv') => {
  // Твій особистий ключ уже тут
  const API_KEY = '972e497cd1b20b553da8457f9cb1bcde'; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}&lang=uk`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Помилка: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Не вдалося отримати дані про погоду:", error);
    return null;
  }
};
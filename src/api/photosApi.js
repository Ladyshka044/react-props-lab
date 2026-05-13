// Функція для отримання списку фото
export const fetchPhotos = async (page = 1, limit = 4) => {
  try {
    const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
    if (!response.ok) {
      throw new Error("Не вдалося завантажити дані");
    }
    return await response.json();
  } catch (error) {
    console.error("Помилка API:", error);
    return []; // Повертаємо порожній масив у разі помилки
  }
};
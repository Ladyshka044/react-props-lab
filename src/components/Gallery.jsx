import React, { useState, useEffect } from 'react';
import { fetchPhotos } from '../api/photosApi';

const Gallery = () => {
  // 1. Створюємо стейти (стани)
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // 2. useEffect для запиту до API при зміні сторінки
  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      const data = await fetchPhotos(page, 4);
      setPhotos(data);
      setLoading(false);
    };

    getPhotos();
  }, [page]); // Кожного разу, коли змінюється page, викликається ця функція

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>🖼️ Фотогалерея (Сторінка {page})</h2>

      {/* Показуємо лоадер, поки дані вантажаться */}
      {loading ? (
        <p>Завантаження фото...</p>
      ) : (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '20px',
          marginTop: '20px' 
        }}>
          {photos.map((photo) => (
            <div key={photo.id} style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}>
              <img 
                src={photo.download_url} 
                alt={photo.author} 
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} 
              />
              <p>👤 <strong>Автор:</strong> {photo.author}</p>
            </div>
          ))}
        </div>
      )}

      {/* Кнопки навігації */}
      <div style={{ marginTop: '30px' }}>
        <button 
          onClick={() => setPage(prev => prev - 1)} 
          disabled={page <= 1 || loading}
          style={{ padding: '10px 20px', cursor: 'pointer' }}
        >
          ⬅️ Попередні
        </button>
        
        <span style={{ margin: '0 20px', fontSize: '18px', fontWeight: 'bold' }}>
          Сторінка {page}
        </span>

        <button 
          onClick={() => setPage(prev => prev + 1)}
          disabled={loading}
          style={{ padding: '10px 20px', cursor: 'pointer' }}
        >
          Наступні ➡️
        </button>
      </div>
    </div>
  );
};

export default Gallery;
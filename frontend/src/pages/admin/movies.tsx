// src/pages/admin/movies.tsx
import Head from 'next/head';
import { useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';

const MoviesPage = () => {
  const [mockMovies, setMockMovies] = useState([
    { id: '1', title: 'Matrix', category: 'Bilim Kurgu', releaseDate: '1999', views: '1,500', src: 'https://example.com/matrix.jpg', description: 'A sci-fi classic', videoUrl: 'https://youtube.com/matrix' },
    { id: '2', title: 'Esaretin Bedeli', category: 'Dram', releaseDate: '1994', views: '2,300', src: 'https://example.com/shawshank.jpg', description: 'A story of hope', videoUrl: 'https://youtube.com/shawshank' },
    { id: '3', title: 'Hızlı ve Öfkeli', category: 'Aksiyon', releaseDate: '2001', views: '1,800', src: 'https://example.com/fast.jpg', description: 'High-speed action', videoUrl: 'https://youtube.com/fast' },
  ]);

  const [newMovie, setNewMovie] = useState({ title: '', category: '', releaseDate: '', src: '', description: '', videoUrl: '' });
  const [editMovieId, setEditMovieId] = useState<string | null>(null);

  const handleAddMovie = (e: React.FormEvent) => {
    e.preventDefault();
    const movie = { ...newMovie, id: String(mockMovies.length + 1), views: '0' };
    setMockMovies([...mockMovies, movie]);
    setNewMovie({ title: '', category: '', releaseDate: '', src: '', description: '', videoUrl: '' });
  };

  const handleDeleteMovie = (id: string) => {
    setMockMovies(mockMovies.filter((movie) => movie.id !== id));
  };

  const handleEditMovie = (movie: typeof mockMovies[0]) => {
    setEditMovieId(movie.id);
    setNewMovie(movie);
  };

  const handleUpdateMovie = (e: React.FormEvent) => {
    e.preventDefault();
    setMockMovies(mockMovies.map((movie) => (movie.id === editMovieId ? { ...newMovie, id: movie.id, views: movie.views } : movie)));
    setEditMovieId(null);
    setNewMovie({ title: '', category: '', releaseDate: '', src: '', description: '', videoUrl: '' });
  };

  return (
    <>
      <Head>
        <title>Filmler - Admin Paneli</title>
      </Head>
      <AdminLayout>
        <div className="movies-page">
          <h2 className="dashboard__title">Filmler</h2>
          <h3 className="recent-activity__title">{editMovieId ? 'Filmi Düzenle' : 'Yeni Film Ekle'}</h3>
          <form className="auth-form" onSubmit={editMovieId ? handleUpdateMovie : handleAddMovie}>
            <div className="auth-form-group">
              <label className="auth-label">Başlık</label>
              <input
                type="text"
                className="auth-input"
                value={newMovie.title}
                onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
                required
              />
            </div>
            <div className="auth-form-group">
              <label className="auth-label">Kategori</label>
              <input
                type="text"
                className="auth-input"
                value={newMovie.category}
                onChange={(e) => setNewMovie({ ...newMovie, category: e.target.value })}
                required
              />
            </div>
            <div className="auth-form-group">
              <label className="auth-label">Çıkış Tarihi</label>
              <input
                type="text"
                className="auth-input"
                value={newMovie.releaseDate}
                onChange={(e) => setNewMovie({ ...newMovie, releaseDate: e.target.value })}
                required
              />
            </div>
            <div className="auth-form-group">
              <label className="auth-label">Resim URL</label>
              <input
                type="text"
                className="auth-input"
                value={newMovie.src}
                onChange={(e) => setNewMovie({ ...newMovie, src: e.target.value })}
                required
              />
            </div>
            <div className="auth-form-group">
              <label className="auth-label">Açıklama</label>
              <textarea
                className="auth-input"
                value={newMovie.description}
                onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
                required
              />
            </div>
            <div className="auth-form-group">
              <label className="auth-label">Video URL</label>
              <input
                type="text"
                className="auth-input"
                value={newMovie.videoUrl}
                onChange={(e) => setNewMovie({ ...newMovie, videoUrl: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="auth-button">{editMovieId ? 'Güncelle' : 'Ekle'}</button>
            {editMovieId && (
              <button type="button" className="quick-action__btn" onClick={() => setEditMovieId(null)}>
                İptal
              </button>
            )}
          </form>
          <table className="recent-activity__table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Başlık</th>
                <th>Kategori</th>
                <th>Çıkış Tarihi</th>
                <th>Görüntülenme</th>
                <th>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {mockMovies.map((movie) => (
                <tr key={movie.id}>
                  <td>{movie.id}</td>
                  <td>{movie.title}</td>
                  <td>{movie.category}</td>
                  <td>{movie.releaseDate}</td>
                  <td>{movie.views}</td>
                  <td>
                    <button className="quick-action__btn" onClick={() => handleEditMovie(movie)}>Düzenle</button>
                    <button className="quick-action__btn" onClick={() => handleDeleteMovie(movie.id)}>Sil</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminLayout>
    </>
  );
};

export default MoviesPage;
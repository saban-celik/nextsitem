// src/components/ui/MovieDetails.tsx
import { useRouter } from 'next/router';
import { FormEvent, useEffect, useState } from 'react';
import { FaArrowLeft, FaUser } from 'react-icons/fa'; // FaUser eklendi
import { allMovies } from '../../data/data';

interface MovieDetailsProps {
  movie: {
    src: string;
    title: string;
    description: string;
    type: string;
    videoUrl: string;
  };
  onToggleLogin: () => void;
}

interface Comment {
  name: string;
  email: string;
  text: string;
  hasSpoiler: boolean;
  date: string;
}

const MovieDetails = ({ movie, onToggleLogin }: MovieDetailsProps) => {
  const router = useRouter();
  const [comments, setComments] = useState<Comment[]>([]);
  const [email, setEmail] = useState('');
  const [commentText, setCommentText] = useState('');
  const [hasSpoiler, setHasSpoiler] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
    if (loggedIn) {
      const storedUsername = localStorage.getItem('username') || 'Kullanıcı';
      setUsername(storedUsername);
    }
  }, []);

  useEffect(() => {
    const filteredMovies = allMovies
      .filter((m) => m.title !== movie.title)
      .sort(() => Math.random() - 0.5)
      .slice(0, 5);
    setSuggestedMovies(filteredMovies);
  }, [movie.title]);

  const [suggestedMovies, setSuggestedMovies] = useState<typeof allMovies>([]);

  const handleCommentSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLoggedIn) return;

    const newComment: Comment = {
      name: username,
      email,
      text: commentText,
      hasSpoiler,
      date: new Date().toLocaleDateString('tr-TR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    };
    setComments((prev) => [newComment, ...prev]);
    setEmail('');
    setCommentText('');
    setHasSpoiler(false);
  };

  return (
    <div className="movie-details container">
      <button className="back-btn" onClick={() => router.back()}>
        <FaArrowLeft /> Geri Dön
      </button>
      <div className="movie-details-content">
        <div className="movie-details-info">
          <h1 className="movie-details-title">{movie.title}</h1>
          <p className="movie-details-year">Yıl: {movie.description}</p>
          <p className="movie-details-type">Tür: {movie.type}</p>
          <p className="movie-details-description">
            Bu, {movie.title} filminin örnek bir açıklamasıdır. Harika bir hikaye ve etkileyici görseller sunar. İzlemek için hemen başlayabilirsiniz!
          </p>
          <div className="movie-details-video">
            <iframe
              width="100%"
              height="315"
              src={movie.videoUrl}
              title={`${movie.title} video`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <button className="movie-details-watch-btn">Filmi İzle</button>
        </div>
      </div>

      {/* İlginizi Çekebilecek Diğer Filmler */}
      <div className="suggested-movies">
        <h2 className="suggested-movies-title">İlginizi Çekebilecek Diğer Filmler</h2>
        <div className="movie-grid">
          {suggestedMovies.map((suggestedMovie, index) => (
            <div
              className="movie-card"
              key={index}
              onClick={() =>
                router.push({
                  pathname: `/movie/${encodeURIComponent(suggestedMovie.title)}`,
                  query: {
                    title: suggestedMovie.title,
                    src: suggestedMovie.src,
                    description: suggestedMovie.description,
                    type: suggestedMovie.type,
                    videoUrl: suggestedMovie.videoUrl,
                  },
                })
              }
              style={{ cursor: 'pointer' }}
            >
              <div className="movie-thumbnail-wrapper">
                <img
                  className="movie-thumbnail"
                  src={suggestedMovie.src}
                  alt={`${suggestedMovie.title} posteri`}
                />
              </div>
              <div className="movie-info">
                <h3 className="movie-title">{suggestedMovie.title}</h3>
                <p className="movie-description">
                  {suggestedMovie.description} - {suggestedMovie.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Yorum Yapma Bölümü */}
      <div className="comment-section">
        <h2 className="comment-section-title">Film Hakkındaki Düşüncelerinizi Paylaşın</h2>
        {isLoggedIn ? (
          <form className="comment-form" onSubmit={handleCommentSubmit}>
            <div className="comment-form-header">
              <div className="comment-user-icon">
                <FaUser />
                <span className="comment-username">{username}</span>
              </div>
              <textarea
                id="comment"
                className="comment-input comment-textarea"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Düşüncelerinizi buraya yazın"
                rows={3}
                required
              />
            </div>
            <div className="comment-form-footer">
              <input
                type="email"
                id="email"
                className="comment-input comment-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-posta adresinizi girin"
                required
              />
              <div className="comment-spoiler">
                <input
                  type="checkbox"
                  id="spoiler"
                  checked={hasSpoiler}
                  onChange={(e) => setHasSpoiler(e.target.checked)}
                />
                <label htmlFor="spoiler" className="comment-label">Spoiler içerir</label>
              </div>
              <button type="submit" className="comment-submit-btn">Gönder</button>
            </div>
          </form>
        ) : (
          <p className="login-required-message">
            Yorum yapabilmek için lütfen{' '}
            <a href="#" onClick={onToggleLogin}>
              giriş yapın
            </a>
            .
          </p>
        )}

        {/* Gönderilen Yorumlar */}
        {comments.length > 0 && (
          <div className="comments-list">
            <h3 className="comments-list-title">Yorumlar</h3>
            {comments.map((comment, index) => (
              <div key={index} className="comment-item">
                <div className="comment-header">
                  <span className="comment-name">{comment.name}</span>
                  <span className="comment-date">{comment.date}</span>
                </div>
                {comment.hasSpoiler && (
                  <span className="comment-spoiler-warning">Spoiler içerir!</span>
                )}
                <p className="comment-text">{comment.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
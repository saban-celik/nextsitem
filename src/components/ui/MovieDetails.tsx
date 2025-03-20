// src/components/ui/MovieDetails.tsx
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';

interface MovieDetailsProps {
  movie: {
    src: string;
    title: string;
    description: string;
    type: string;
    videoUrl: string; // Yeni eklenen alan
  };
}

const MovieDetails = ({ movie }: MovieDetailsProps) => {
  const router = useRouter();

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
              src={movie.videoUrl} // data.tsx'ten gelen URL
              title={`${movie.title} video`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <button className="movie-details-watch-btn">Filmi İzle</button>
        </div>
        
      </div>
    </div>
  );
};

export default MovieDetails;
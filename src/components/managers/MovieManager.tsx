//src\components\managers\MovieManager.tsx
import AllMovies from '../ui/AllMovies';
import MovieGenres from '../ui/MovieGenres';
import PopulerMovies from '../ui/PopulerMovies';
import RecentComments from '../ui/RecentComments';
import TrendsTitles from '../ui/TrendsTitles';

interface MovieManagerProps {
  searchTerm: string;
}

const MovieManager = ({ searchTerm }: MovieManagerProps) => {
  return (
    <div className="movie-manager">
      <PopulerMovies searchTerm={searchTerm} />
      <div className="content-wrapper container">
        <div className="row">
          <div className="col-md-9">
            <AllMovies searchTerm={searchTerm} />
          </div>
          <div className="col-md-3">
            <div className="sidebar">
              <TrendsTitles searchTerm={searchTerm} />
              <MovieGenres />
              <RecentComments searchTerm={searchTerm} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieManager;
// src/components/managers/MovieManager.tsx
import AllMovies from '../ui/AllMovies';
import MovieGenres from '../ui/MovieGenres';
import PopulerMovies from '../ui/PopulerMovies';
import RecentComments from '../ui/RecentComments';
import TrendsTitles from '../ui/TrendsTitles';

const MovieManager = () => {
  return (
    <div className="movie-manager">
      <PopulerMovies />
      <div className="content-wrapper container">
        <div className="row">
          <div className="col-md-9">
            <AllMovies />
          </div>
          <div className="col-md-3">
            <TrendsTitles />
            <MovieGenres />
            <RecentComments/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieManager;
// src/components/ui/AllMovies.tsx
import { useState } from 'react';

const AllMovies = () => {
  const allMovies = [
    // Daha fazla film ekledim, toplamda 20 film var (örnek olarak)
    { src: 'https://www.hdfilmcehennemi.nl/images/list/cover/the-one-and-only-ivan-hd-film-izle-hdf5.webp', title: 'The One and Only Ivan', description: '2020' },
    { src: 'https://www.hdfilmcehennemi.nl/images/list/cover/hagen.webp', title: 'Hagen', description: '2014' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/915bfbe658455df1d34dcf276dbcead1-210x315.jpg', title: 'Under the Skin', description: '2013' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/6866a6437090ee02e7475fcb0d61134a-210x315.jpg', title: 'X', description: '2022' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/315d4b1f6de29923485dc2dcc4eca536-210x315.jpg', title: 'The Witches', description: '2020' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/48cd5c783c4bba1791992b42d6d2a0f7-210x315.jpg', title: 'The Batman', description: '2022' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/a140cd5946b695ae6a949ccdc6f632b7-210x315.jpg', title: 'Dune', description: '2021' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/10/a7f55a5047704870f7758c429c99468f-210x315.jpg', title: 'Inception', description: '2010' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2023/10/a80eb7a53a39eb2c32f15ac091a5cfa0-210x315.jpg', title: 'Interstellar', description: '2014' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2023/10/25182e942f145fbea9947458cd5e5d67-210x315.jpg', title: 'Mad Max: Fury Road', description: '2015' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/47c006e7df946a5ac361e86f8954e525-210x315.jpg', title: 'Avatar', description: '2009' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/af83f54c40c62fdc878c481f2a9c9142-210x315.jpg', title: 'Titanic', description: '1997' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/11/ab626eecf4feda4ea5e02f8a0b5dcca8-210x315.jpg', title: 'The Matrix', description: '1999' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/10/8eecf0eecf4fedae5e02f8a0b5dccb8-210x315.jpg', title: 'Blade Runner 2049', description: '2017' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/09/9f0eecf4feda4ea5e02f8a0b5dccb9-210x315.jpg', title: 'The Dark Knight', description: '2008' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/08/aeecf0eecf4feda4ea5e02f8a0b5dca-210x315.jpg', title: 'Fight Club', description: '1999' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/07/beecf0eecf4feda4ea5e02f8a0b5dcb-210x315.jpg', title: 'Pulp Fiction', description: '1994' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2023/10/25182e942f145fbea9947458cd5e5d67-210x315.jpg', title: 'The Shawshank Redemption', description: '1994' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/a140cd5946b695ae6a949ccdc6f632b7-210x315.jpg', title: 'Gladiator', description: '2000' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/10/a7f55a5047704870f7758c429c99468f-210x315.jpg', title: 'The Lion King', description: '1994' },
    { src: 'https://www.hdfilmcehennemi.nl/images/list/cover/the-one-and-only-ivan-hd-film-izle-hdf5.webp', title: 'The One and Only Ivan', description: '2020' },
    { src: 'https://www.hdfilmcehennemi.nl/images/list/cover/hagen.webp', title: 'Hagen', description: '2014' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/915bfbe658455df1d34dcf276dbcead1-210x315.jpg', title: 'Under the Skin', description: '2013' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/6866a6437090ee02e7475fcb0d61134a-210x315.jpg', title: 'X', description: '2022' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/315d4b1f6de29923485dc2dcc4eca536-210x315.jpg', title: 'The Witches', description: '2020' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/48cd5c783c4bba1791992b42d6d2a0f7-210x315.jpg', title: 'The Batman', description: '2022' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/a140cd5946b695ae6a949ccdc6f632b7-210x315.jpg', title: 'Dune', description: '2021' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/10/a7f55a5047704870f7758c429c99468f-210x315.jpg', title: 'Inception', description: '2010' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2023/10/a80eb7a53a39eb2c32f15ac091a5cfa0-210x315.jpg', title: 'Interstellar', description: '2014' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2023/10/25182e942f145fbea9947458cd5e5d67-210x315.jpg', title: 'Mad Max: Fury Road', description: '2015' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/47c006e7df946a5ac361e86f8954e525-210x315.jpg', title: 'Avatar', description: '2009' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/af83f54c40c62fdc878c481f2a9c9142-210x315.jpg', title: 'Titanic', description: '1997' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/11/ab626eecf4feda4ea5e02f8a0b5dcca8-210x315.jpg', title: 'The Matrix', description: '1999' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/10/8eecf0eecf4fedae5e02f8a0b5dccb8-210x315.jpg', title: 'Blade Runner 2049', description: '2017' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/09/9f0eecf4feda4ea5e02f8a0b5dccb9-210x315.jpg', title: 'The Dark Knight', description: '2008' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/08/aeecf0eecf4feda4ea5e02f8a0b5dca-210x315.jpg', title: 'Fight Club', description: '1999' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/07/beecf0eecf4feda4ea5e02f8a0b5dcb-210x315.jpg', title: 'Pulp Fiction', description: '1994' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2023/10/25182e942f145fbea9947458cd5e5d67-210x315.jpg', title: 'The Shawshank Redemption', description: '1994' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/a140cd5946b695ae6a949ccdc6f632b7-210x315.jpg', title: 'Gladiator', description: '2000' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/10/a7f55a5047704870f7758c429c99468f-210x315.jpg', title: 'The Lion King', description: '1994' },
    { src: 'https://www.hdfilmcehennemi.nl/images/list/cover/the-one-and-only-ivan-hd-film-izle-hdf5.webp', title: 'The One and Only Ivan', description: '2020' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/915bfbe658455df1d34dcf276dbcead1-210x315.jpg', title: 'Under the Skin', description: '2013' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/6866a6437090ee02e7475fcb0d61134a-210x315.jpg', title: 'X', description: '2022' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/315d4b1f6de29923485dc2dcc4eca536-210x315.jpg', title: 'The Witches', description: '2020' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/48cd5c783c4bba1791992b42d6d2a0f7-210x315.jpg', title: 'The Batman', description: '2022' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/a140cd5946b695ae6a949ccdc6f632b7-210x315.jpg', title: 'Dune', description: '2021' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/10/a7f55a5047704870f7758c429c99468f-210x315.jpg', title: 'Inception', description: '2010' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2023/10/a80eb7a53a39eb2c32f15ac091a5cfa0-210x315.jpg', title: 'Interstellar', description: '2014' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2023/10/25182e942f145fbea9947458cd5e5d67-210x315.jpg', title: 'Mad Max: Fury Road', description: '2015' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/47c006e7df946a5ac361e86f8954e525-210x315.jpg', title: 'Avatar', description: '2009' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/af83f54c40c62fdc878c481f2a9c9142-210x315.jpg', title: 'Titanic', description: '1997' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/11/ab626eecf4feda4ea5e02f8a0b5dcca8-210x315.jpg', title: 'The Matrix', description: '1999' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/10/8eecf0eecf4fedae5e02f8a0b5dccb8-210x315.jpg', title: 'Blade Runner 2049', description: '2017' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/09/9f0eecf4feda4ea5e02f8a0b5dccb9-210x315.jpg', title: 'The Dark Knight', description: '2008' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/08/aeecf0eecf4feda4ea5e02f8a0b5dca-210x315.jpg', title: 'Fight Club', description: '1999' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/07/beecf0eecf4feda4ea5e02f8a0b5dcb-210x315.jpg', title: 'Pulp Fiction', description: '1994' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2023/10/25182e942f145fbea9947458cd5e5d67-210x315.jpg', title: 'The Shawshank Redemption', description: '1994' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/a140cd5946b695ae6a949ccdc6f632b7-210x315.jpg', title: 'Gladiator', description: '2000' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/10/a7f55a5047704870f7758c429c99468f-210x315.jpg', title: 'The Lion King', description: '1994' },
    { src: 'https://www.hdfilmcehennemi.nl/images/list/cover/the-one-and-only-ivan-hd-film-izle-hdf5.webp', title: 'The One and Only Ivan', description: '2020' },
    { src: 'https://www.hdfilmcehennemi.nl/images/list/cover/hagen.webp', title: 'Hagen', description: '2014' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/915bfbe658455df1d34dcf276dbcead1-210x315.jpg', title: 'Under the Skin', description: '2013' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/6866a6437090ee02e7475fcb0d61134a-210x315.jpg', title: 'X', description: '2022' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/315d4b1f6de29923485dc2dcc4eca536-210x315.jpg', title: 'The Witches', description: '2020' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/48cd5c783c4bba1791992b42d6d2a0f7-210x315.jpg', title: 'The Batman', description: '2022' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/a140cd5946b695ae6a949ccdc6f632b7-210x315.jpg', title: 'Dune', description: '2021' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/10/a7f55a5047704870f7758c429c99468f-210x315.jpg', title: 'Inception', description: '2010' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2023/10/a80eb7a53a39eb2c32f15ac091a5cfa0-210x315.jpg', title: 'Interstellar', description: '2014' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2023/10/25182e942f145fbea9947458cd5e5d67-210x315.jpg', title: 'Mad Max: Fury Road', description: '2015' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/47c006e7df946a5ac361e86f8954e525-210x315.jpg', title: 'Avatar', description: '2009' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/af83f54c40c62fdc878c481f2a9c9142-210x315.jpg', title: 'Titanic', description: '1997' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/11/ab626eecf4feda4ea5e02f8a0b5dcca8-210x315.jpg', title: 'The Matrix', description: '1999' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/10/8eecf0eecf4fedae5e02f8a0b5dccb8-210x315.jpg', title: 'Blade Runner 2049', description: '2017' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/09/9f0eecf4feda4ea5e02f8a0b5dccb9-210x315.jpg', title: 'The Dark Knight', description: '2008' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/08/aeecf0eecf4feda4ea5e02f8a0b5dca-210x315.jpg', title: 'Fight Club', description: '1999' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/07/beecf0eecf4feda4ea5e02f8a0b5dcb-210x315.jpg', title: 'Pulp Fiction', description: '1994' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2023/10/25182e942f145fbea9947458cd5e5d67-210x315.jpg', title: 'The Shawshank Redemption', description: '1994' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/a140cd5946b695ae6a949ccdc6f632b7-210x315.jpg', title: 'Gladiator', description: '2000' },
    { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/10/a7f55a5047704870f7758c429c99468f-210x315.jpg', title: 'The Lion King', description: '1994' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 12; // Her sayfada 10 film gösterilecek

  const totalPages = Math.ceil(allMovies.length / moviesPerPage);
  const startIndex = (currentPage - 1) * moviesPerPage;
  const visibleMovies = allMovies.slice(startIndex, startIndex + moviesPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="all-movies">
      <div className="all-movies-grid">
        {visibleMovies.map((movie, index) => (
          <div className="all-movie-card" key={index + startIndex}>
            <div className="all-movie-thumbnail-wrapper">
              <img className="all-movie-thumbnail" src={movie.src} alt={`${movie.title} poster`} />
            </div>
            <div className="all-movie-info">
              <h3 className="all-movie-title">{movie.title}</h3>
              <p className="all-movie-description">{movie.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
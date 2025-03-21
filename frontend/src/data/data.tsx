// src/data/data.tsx
export interface Movie {
  src: string;
  title: string;
  description: string; // Yıl olarak kullanılıyor
  type: 'Türkçe Dublaj' | 'Türkçe Altyazı' | 'Orijinal'; // Kategori
  videoUrl: string; // Yeni eklenen video URL alanı
}

export interface TrendMovie {
  rank: number;
  title: string;
  poster: string;
  views: number;
  rating: number;
  comments: number;
  years: number;
}

export interface Comment {
  movieTitle: string;
  username: string;
  date: string;
  text: string;
  poster: string;
}

export const allMovies: Movie[] = [
  { src: 'https://www.hdfilmcehennemi.nl/images/list/cover/the-one-and-only-ivan-hd-film-izle-hdf5.webp', title: 'The One and Only Ivan', description: '2020', type: 'Türkçe Dublaj', videoUrl: 'https://www.youtube.com/watch?v=sex_GcQ792s' },
  { src: 'https://www.hdfilmcehennemi.nl/images/list/cover/hagen.webp', title: 'Hagen', description: '2014', type: 'Türkçe Altyazı', videoUrl: 'https://www.youtube.com/watch?v=GcBUy-WIBSw' },
  { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/915bfbe658455df1d34dcf276dbcead1-210x315.jpg', title: 'Under the Skin', description: '2013', type: 'Orijinal', videoUrl: 'https://www.youtube.com/watch?v=3B0A1iGwjjQ&list=RD3B0A1iGwjjQ&start_radio=1' },
  { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/6866a6437090ee02e7475fcb0d61134a-210x315.jpg', title: 'X', description: '2022', type: 'Türkçe Dublaj', videoUrl: 'https://www.youtube.com/watch?v=FrA98gZGbDI' },
  { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/315d4b1f6de29923485dc2dcc4eca536-210x315.jpg', title: 'The Witches', description: '2020', type: 'Türkçe Altyazı', videoUrl: 'https://www.youtube.com/watch?v=5ICZ94ctqH8&list=RD5ICZ94ctqH8&start_radio=1&pp=0gcJCWMEOCosWNin' },
  { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/48cd5c783c4bba1791992b42d6d2a0f7-210x315.jpg', title: 'The Batman', description: '2022', type: 'Orijinal', videoUrl: 'https://www.youtube.com/watch?v=qheuUb0x1Q8' },
  { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/a140cd5946b695ae6a949ccdc6f632b7-210x315.jpg', title: 'Dune', description: '2021', type: 'Türkçe Dublaj', videoUrl: 'https://www.youtube.com/watch?v=IyDhyor2Q4w&list=RDIyDhyor2Q4w&start_radio=1' },
  { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/10/a7f55a5047704870f7758c429c99468f-210x315.jpg', title: 'Inception', description: '2010', type: 'Türkçe Altyazı', videoUrl: 'https://www.youtube.com/watch?v=fUlCXr8pN-c' },
  { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2023/10/a80eb7a53a39eb2c32f15ac091a5cfa0-210x315.jpg', title: 'Interstellar', description: '2014', type: 'Orijinal', videoUrl: 'https://www.youtube.com/watch?v=v4tCQ1-VysU' },
  { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2023/10/25182e942f145fbea9947458cd5e5d67-210x315.jpg', title: 'Mad Max: Fury Road', description: '2015', type: 'Türkçe Dublaj', videoUrl: 'https://www.youtube.com/watch?v=TQrT1NEK5Ug&list=RDTQrT1NEK5Ug&start_radio=1' },
  { src: 'https://www.hdfilmcehennemi.nl/images/list/cover/the-one-and-only-ivan-hd-film-izle-hdf5.webp', title: 'The One and Only Ivan', description: '2020', type: 'Türkçe Altyazı', videoUrl: 'https://youtu.be/9HzgdWxtypk' },
  { src: 'https://www.hdfilmcehennemi.nl/images/list/cover/hagen.webp', title: 'Hagen', description: '2014', type: 'Orijinal', videoUrl: 'https://youtu.be/qBhhkRS-R3o' },
  { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/915bfbe658455df1d34dcf276dbcead1-210x315.jpg', title: 'Under the Skin', description: '2013', type: 'Türkçe Dublaj', videoUrl: 'https://youtu.be/qBhhkRS-R3o' },
  { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/6866a6437090ee02e7475fcb0d61134a-210x315.jpg', title: 'X', description: '2022', type: 'Türkçe Altyazı', videoUrl: 'https://youtu.be/qBhhkRS-R3o' },
  { src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/315d4b1f6de29923485dc2dcc4eca536-210x315.jpg', title: 'The Witches', description: '2020', type: 'Orijinal', videoUrl: 'https://youtu.be/qBhhkRS-R3o' },
];
export const popularMovies: Movie[] = allMovies
  .filter((movie) => parseInt(movie.description) >= 2020)
  .slice(0, 10);
export const trendMovies: TrendMovie[] = [
  { rank: 1, title: 'Black Adam', poster: 'https://www.4kfilmizlesene.org/wp-content/uploads/2023/10/25182e942f145fbea9947458cd5e5d67-210x315.jpg', views: 509387, rating: 6.9, comments: 150, years: 15 },
  { rank: 2, title: 'Black Panther 2', poster: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/a140cd5946b695ae6a949ccdc6f632b7-210x315.jpg', views: 403988, rating: 6.1, comments: 120, years: 7 },
  { rank: 3, title: 'Esrarengiz Canavar', poster: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/10/a7f55a5047704870f7758c429c99468f-210x315.jpg', views: 401578, rating: 6.1, comments: 110, years: 7 },
  { rank: 4, title: 'Enola Holmes 2', poster: 'https://www.4kfilmizlesene.org/wp-content/uploads/2023/10/a80eb7a53a39eb2c32f15ac091a5cfa0-210x315.jpg', views: 399756, rating: 6.1, comments: 90, years: 1 },
  { rank: 5, title: 'Arabalar 2', poster: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/915bfbe658455df1d34dcf276dbcead1-210x315.jpg', views: 344233, rating: 6.1, comments: 80, years: 13 },
];

export const recentComments: Comment[] = [
  { movieTitle: 'X-Men 5 Geçmiş Günler Gelecek', username: 'sacem', date: '5 ay önce', text: 'Yeni denk geldim. Çok iyi site gerçekten.', poster: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/a140cd5946b695ae6a949ccdc6f632b7-210x315.jpg' },
  { movieTitle: 'Dune', username: 'filmsever', date: '3 ay önce', text: 'Harika bir bilim kurgu filmi, kesinlikle izlenmeli!', poster: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/a140cd5946b695ae6a949ccdc6f632b7-210x315.jpg' },
  { movieTitle: 'The Batman', username: 'darkknight', date: '2 ay önce', text: 'Robert Pattinson bu rolde harikaydı.', poster: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/48cd5c783c4bba1791992b42d6d2a0f7-210x315.jpg' },
  { movieTitle: 'Inception', username: 'ruyadunyasi', date: '1 ay önce', text: 'Akıl almaz bir senaryo, tekrar izleyeceğim.', poster: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/10/a7f55a5047704870f7758c429c99468f-210x315.jpg' },
  { movieTitle: 'Interstellar', username: 'uzayci', date: '6 ay önce', text: 'Bilim ve duygunun mükemmel birleşimi.', poster: 'https://www.4kfilmizlesene.org/wp-content/uploads/2023/10/a80eb7a53a39eb2c32f15ac091a5cfa0-210x315.jpg' },
];
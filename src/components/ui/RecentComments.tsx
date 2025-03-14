import Image from 'next/image';

const RecentComments = () => {
  const comments = [
    {
      movieTitle: 'X-Men 5 Geçmiş Günler Gelecek',
      username: 'sacem',
      date: '5 ay önce',
      text: 'Yeni denk geldim. Çok iyi site gerçekten. Tüm filmler seçili ve',
      poster: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/a140cd5946b695ae6a949ccdc6f632b7-210x315.jpg',
    },
    {
      movieTitle: 'Dune',
      username: 'filmsever',
      date: '3 ay önce',
      text: 'Harika bir bilim kurgu filmi, kesinlikle izlenmeli!',
      poster: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/a140cd5946b695ae6a949ccdc6f632b7-210x315.jpg',
    },
    {
      movieTitle: 'The Batman',
      username: 'darkknight',
      date: '2 ay önce',
      text: 'Robert Pattinson bu rolde harikaydı.',
      poster: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/48cd5c783c4bba1791992b42d6d2a0f7-210x315.jpg',
    },
    {
      movieTitle: 'Inception',
      username: 'ruyadunyasi',
      date: '1 ay önce',
      text: 'Akıl almaz bir senaryo, tekrar izleyeceğim.',
      poster: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/10/a7f55a5047704870f7758c429c99468f-210x315.jpg',
    },
    {
      movieTitle: 'Interstellar',
      username: 'uzayci',
      date: '6 ay önce',
      text: 'Bilim ve duygunun mükemmel birleşimi.',
      poster: 'https://www.4kfilmizlesene.org/wp-content/uploads/2023/10/a80eb7a53a39eb2c32f15ac091a5cfa0-210x315.jpg',
    },
  ];

  return (
    <div className="recent-comments">
      <h2 className="recent-comments-title">Son Yorumlar</h2>
      <ul className="recent-comments-list">
        {comments.map((comment, index) => (
          <li key={index} className="recent-comment-item">
            <div className="recent-comment-poster-wrapper">
              <Image
                src={comment.poster}
                alt={`${comment.movieTitle} poster`}
                width={40} // CSS ile uyumlu nominal değer
                height={60} // CSS ile uyumlu nominal değer
                className="recent-comment-poster"
              />
            </div>
            <div className="recent-comment-details">
              <div className="recent-comment-header">
                <span className="recent-comment-username">{comment.username}</span>
                <span className="recent-comment-date">{comment.date}</span>
              </div>
              <h3 className="recent-comment-movie-title">{comment.movieTitle}</h3>
              <p className="recent-comment-text">{comment.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentComments;
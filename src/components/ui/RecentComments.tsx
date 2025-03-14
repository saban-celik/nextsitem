// src\components\ui\RecentComments.tsx
import Image from 'next/image';
import { recentComments } from '../../data/data';

interface RecentCommentsProps {
  searchTerm: string;
}

const RecentComments = ({ searchTerm }: RecentCommentsProps) => {
  const filteredComments = recentComments.filter((comment) =>
    comment.movieTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="recent-comments">
      <div className="recent-comments-title">Son Yorumlar</div>
      <ul className="recent-comments-list">
        {filteredComments.length > 0 ? (
          filteredComments.map((comment, index) => (
            <li key={index} className="recent-comment-item">
              <div className="row align-items-start">
                <div className="col-3 col-md-3 p-0">
                  <div className="recent-comment-poster-wrapper">
                    <Image
                      src={comment.poster}
                      alt={`${comment.movieTitle} poster`}
                      width={60}
                      height={90}
                      className="recent-comment-poster"
                    />
                  </div>
                </div>
                <div className="col-9 col-md-9">
                  <div className="recent-comment-details">
                    <div className="recent-comment-header">
                      <div className="recent-comment-username">{comment.username}</div>
                      <div className="recent-comment-date">{comment.date}</div>
                    </div>
                    <div className="recent-comment-movie-title">{comment.movieTitle}</div>
                    <div className="recent-comment-text">{comment.text}</div>
                  </div>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p>Aradığınız yoruma uygun sonuç bulunamadı.</p>
        )}
      </ul>
    </div>
  );
};

export default RecentComments;
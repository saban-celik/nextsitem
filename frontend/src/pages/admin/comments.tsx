// src/pages/admin/comments.tsx
import Head from 'next/head';
import { useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';

const CommentsPage = () => {
  const [mockComments, setMockComments] = useState([
    { id: '1', user: 'filmsever', movie: 'Matrix', comment: 'Harika bir film!', date: '22 Mart 2025', approved: false, reply: '' },
    { id: '2', user: 'user123', movie: 'Esaretin Bedeli', comment: 'Çok etkileyici.', date: '21 Mart 2025', approved: true, reply: '' },
    { id: '3', user: 'sinemaci', movie: 'Hızlı ve Öfkeli', comment: 'Aksiyon dolu!', date: '20 Mart 2025', approved: false, reply: '' },
  ]);

  const [replyText, setReplyText] = useState('');
  const [replyCommentId, setReplyCommentId] = useState<string | null>(null);

  const handleApprove = (id: string) => {
    setMockComments(mockComments.map((comment) => (comment.id === id ? { ...comment, approved: true } : comment)));
  };

  const handleDelete = (id: string) => {
    setMockComments(mockComments.filter((comment) => comment.id !== id));
  };

  const handleReply = (id: string) => {
    setReplyCommentId(id);
  };

  const submitReply = (id: string) => {
    setMockComments(mockComments.map((comment) => (comment.id === id ? { ...comment, reply: replyText } : comment)));
    setReplyText('');
    setReplyCommentId(null);
  };

  return (
    <>
      <Head>
        <title>Yorumlar - Admin Paneli</title>
      </Head>
      <AdminLayout>
        <div className="comments-page">
          <h2 className="dashboard__title">Yorumlar</h2>
          <table className="recent-activity__table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Kullanıcı</th>
                <th>Film</th>
                <th>Yorum</th>
                <th>Tarih</th>
                <th>Durum</th>
                <th>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {mockComments.map((comment) => (
                <tr key={comment.id}>
                  <td>{comment.id}</td>
                  <td>{comment.user}</td>
                  <td>{comment.movie}</td>
                  <td>{comment.comment}</td>
                  <td>{comment.date}</td>
                  <td>{comment.approved ? 'Onaylı' : 'Onay Bekliyor'}</td>
                  <td>
                    {!comment.approved && (
                      <button className="quick-action__btn" onClick={() => handleApprove(comment.id)}>Onayla</button>
                    )}
                    <button className="quick-action__btn" onClick={() => handleDelete(comment.id)}>Sil</button>
                    <button className="quick-action__btn" onClick={() => handleReply(comment.id)}>Cevap Ver</button>
                    {replyCommentId === comment.id && (
                      <div>
                        <textarea
                          className="auth-input"
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                          placeholder="Cevabınızı yazın"
                        />
                        <button className="quick-action__btn" onClick={() => submitReply(comment.id)}>Gönder</button>
                      </div>
                    )}
                    {comment.reply && <p>Cevap: {comment.reply}</p>}
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

export default CommentsPage;
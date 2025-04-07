//src\pages\admin\settings\delete-account.tsx
import Head from 'next/head';
import { useState } from 'react';
import AdminLayout from '../../../components/admin/AdminLayout';

const DeleteAccountPage = () => {
  const [deleteConfirmation, setDeleteConfirmation] = useState('');
  const [message, setMessage] = useState('');

  const handleAccountDeletion = (e: React.FormEvent) => {
    e.preventDefault();
    if (deleteConfirmation === 'DELETE') {
      setMessage('Hesap silme isteği gönderildi! (Statik)');
      setDeleteConfirmation('');
    } else {
      setMessage('Lütfen "DELETE" yazarak onaylayın!');
    }
  };

  return (
    <>
      <Head>
        <title>Hesabı Sil - Admin Paneli</title>
      </Head>
      <AdminLayout>
        <div className="settings-page centered-form">
          <div className="settings__section">
            <h3 className="settings__subtitle">Hesabı Sil</h3>
            {message && <p className="settings__message">{message}</p>}
            <p className="logout__message">
              Hesabınızı silmek geri alınamaz bir işlemdir. Devam etmek için "DELETE" yazın.
            </p>
            <form className="settings__form" onSubmit={handleAccountDeletion}>
              <div className="form-group">
                <label className="form-label">Onay</label>
                <input
                  type="text"
                  className="form-input"
                  value={deleteConfirmation}
                  onChange={(e) => setDeleteConfirmation(e.target.value)}
                  placeholder="DELETE"
                  required
                />
              </div>
              <button type="submit" className="form-button" style={{ background: '#ef4444' }}>
                Hesabı Sil
              </button>
            </form>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default DeleteAccountPage;
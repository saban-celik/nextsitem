import Head from 'next/head';
import { useState } from 'react';
import AdminLayout from '../../../components/admin/AdminLayout';

const PasswordChangePage = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentPassword !== '123456') {
      setMessage('Mevcut şifre yanlış!');
    } else if (newPassword !== confirmPassword) {
      setMessage('Yeni şifreler eşleşmiyor!');
    } else {
      setMessage('Şifre başarıyla değiştirildi! (Statik)');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <>
      <Head>
        <title>Şifre Değiştir - Admin Paneli</title>
      </Head>
      <AdminLayout>
        <div className="settings-page centered-form">
          <div className="settings__section">
            <h3 className="settings__subtitle">Şifre Değiştir</h3>
            {message && <p className="settings__message">{message}</p>}
            <form className="settings__form" onSubmit={handlePasswordChange}>
              <div className="form-group">
                <label className="form-label">Mevcut Şifre</label>
                <input
                  type="password"
                  className="form-input"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Yeni Şifre</label>
                <input
                  type="password"
                  className="form-input"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Yeni Şifreyi Onayla</label>
                <input
                  type="password"
                  className="form-input"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="form-button">Şifreyi Güncelle</button>
            </form>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default PasswordChangePage;
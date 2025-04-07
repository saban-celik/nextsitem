//src\pages\admin\settings\profile.tsx
import Head from 'next/head';
import { useState } from 'react';
import AdminLayout from '../../../components/admin/AdminLayout';

const ProfileEditPage = () => {
  const [profile, setProfile] = useState({
    username: 'admin',
    email: 'admin@example.com',
    fullName: 'Admin User',
  });
  const [message, setMessage] = useState('');

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('Profil başarıyla güncellendi! (Statik)');
  };

  return (
    <>
      <Head>
        <title>Profil Düzenle - Admin Paneli</title>
      </Head>
      <AdminLayout>
        <div className="settings-page centered-form">
          <div className="settings__section">
            <h3 className="settings__subtitle">Profil Düzenle</h3>
            {message && <p className="settings__message">{message}</p>}
            <form className="settings__form" onSubmit={handleProfileUpdate}>
              <div className="form-group">
                <label className="form-label">Kullanıcı Adı</label>
                <input
                  type="text"
                  className="form-input"
                  value={profile.username}
                  onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">E-posta</label>
                <input
                  type="email"
                  className="form-input"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Tam Ad</label>
                <input
                  type="text"
                  className="form-input"
                  value={profile.fullName}
                  onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="form-button">Kaydet</button>
            </form>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default ProfileEditPage;
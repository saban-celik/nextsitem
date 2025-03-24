import Head from 'next/head';
import { useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';

const SettingsPage = () => {
  // State for Profile Editing
  const [profile, setProfile] = useState({
    username: 'admin',
    email: 'admin@example.com',
    fullName: 'Admin User',
  });
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileMessage, setProfileMessage] = useState('');

  // State for Password Change
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');

  // State for Notification Preferences
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    activityAlerts: false,
  });
  const [notificationMessage, setNotificationMessage] = useState('');

  // State for Account Deletion
  const [deleteConfirmation, setDeleteConfirmation] = useState('');
  const [deleteMessage, setDeleteMessage] = useState('');

  // Handle Profile Update
  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setProfileMessage('Profil başarıyla güncellendi! (Statik)');
    setIsEditingProfile(false);
  };

  // Handle Password Change
  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentPassword !== '123456') {
      setPasswordMessage('Mevcut şifre yanlış!');
    } else if (newPassword !== confirmPassword) {
      setPasswordMessage('Yeni şifreler eşleşmiyor!');
    } else {
      setPasswordMessage('Şifre başarıyla değiştirildi! (Statik)');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    }
  };

  // Handle Notification Preferences Update
  const handleNotificationUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setNotificationMessage('Bildirim tercihleri güncellendi! (Statik)');
  };

  // Handle Account Deletion
  const handleAccountDeletion = (e: React.FormEvent) => {
    e.preventDefault();
    if (deleteConfirmation === 'DELETE') {
      setDeleteMessage('Hesap silme isteği gönderildi! (Statik)');
      setDeleteConfirmation('');
      // Here you could add logic to actually delete the account in a real app
    } else {
      setDeleteMessage('Lütfen "DELETE" yazarak onaylayın!');
    }
  };

  return (
    <>
      <Head>
        <title>Ayarlar - Admin Paneli</title>
      </Head>
      <AdminLayout>
        <div className="settings-page">
          <h2 className="dashboard__title">Hesap Ayarları</h2>

          {/* Profile Editing Section */}
          <div className="settings__section">
            <h3 className="settings__subtitle">Profil Bilgileri</h3>
            {profileMessage && <p className="settings__message">{profileMessage}</p>}
            <form className="settings__form" onSubmit={handleProfileUpdate}>
              <div className="form-group">
                <label className="form-label">Kullanıcı Adı</label>
                <input
                  type="text"
                  className="form-input"
                  value={profile.username}
                  onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                  disabled={!isEditingProfile}
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
                  disabled={!isEditingProfile}
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
                  disabled={!isEditingProfile}
                  required
                />
              </div>
              {isEditingProfile ? (
                <>
                  <button type="submit" className="form-button">Kaydet</button>
                  <button
                    type="button"
                    className="quick-action__btn"
                    onClick={() => setIsEditingProfile(false)}
                  >
                    İptal
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  className="form-button"
                  onClick={() => setIsEditingProfile(true)}
                >
                  Profili Düzenle
                </button>
              )}
            </form>
          </div>

          {/* Password Change Section */}
          <div className="settings__section">
            <h3 className="settings__subtitle">Şifre Değiştir</h3>
            {passwordMessage && <p className="settings__message">{passwordMessage}</p>}
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

          {/* Notification Preferences Section */}
          <div className="settings__section">
            <h3 className="settings__subtitle">Bildirim Tercihleri</h3>
            {notificationMessage && <p className="settings__message">{notificationMessage}</p>}
            <form className="settings__form" onSubmit={handleNotificationUpdate}>
              <div className="form-group">
                <label className="form-label">
                  <input
                    type="checkbox"
                    checked={notifications.emailNotifications}
                    onChange={(e) =>
                      setNotifications({ ...notifications, emailNotifications: e.target.checked })
                    }
                  />
                  E-posta Bildirimleri
                </label>
              </div>
              <div className="form-group">
                <label className="form-label">
                  <input
                    type="checkbox"
                    checked={notifications.activityAlerts}
                    onChange={(e) =>
                      setNotifications({ ...notifications, activityAlerts: e.target.checked })
                    }
                  />
                  Aktivite Uyarıları
                </label>
              </div>
              <button type="submit" className="form-button">Tercihleri Kaydet</button>
            </form>
          </div>

          {/* Account Deletion Section */}
          <div className="settings__section">
            <h3 className="settings__subtitle">Hesabı Sil</h3>
            {deleteMessage && <p className="settings__message">{deleteMessage}</p>}
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

export default SettingsPage;
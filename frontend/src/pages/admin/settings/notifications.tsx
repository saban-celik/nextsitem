import Head from 'next/head';
import { useState } from 'react';
import AdminLayout from '../../../components/admin/AdminLayout';

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    activityAlerts: false,
  });
  const [message, setMessage] = useState('');

  const handleNotificationUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('Bildirim tercihleri güncellendi! (Statik)');
  };

  return (
    <>
      <Head>
        <title>Bildirim Tercihleri - Admin Paneli</title>
      </Head>
      <AdminLayout>
        <div className="settings-page centered-form">
          <div className="settings__section">
            <h3 className="settings__subtitle">Bildirim Tercihleri</h3>
            {message && <p className="settings__message">{message}</p>}
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
        </div>
      </AdminLayout>
    </>
  );
};

export default NotificationsPage;
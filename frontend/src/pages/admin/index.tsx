// src/pages/admin/index.tsx
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import '../../assets/styles/admin.css';
import AdminLayout from '../../components/admin/AdminLayout';
import Dashboard from '../../components/admin/Dashboard';

const AdminPage = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const auth = localStorage.getItem('adminAuthenticated');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === '123456') {
      localStorage.setItem('adminAuthenticated', 'true');
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Kullanıcı adı veya şifre yanlış!');
    }
  };

  if (!isAuthenticated) {
    return (
      <>
        <Head>
          <title>Admin Giriş - 4KFilmizlesene</title>
        </Head>
        <div className="auth-container">
          <div className="auth-card">
            <h2 className="auth-title">Admin Giriş</h2>
            {error && <div className="auth-error">{error}</div>}
            <form className="auth-form" onSubmit={handleLogin}>
              <div className="auth-form-group">
                <label htmlFor="username" className="auth-label">Kullanıcı Adı</label>
                <input
                  type="text"
                  id="username"
                  className="auth-input"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Kullanıcı adınızı girin"
                  required
                />
              </div>
              <div className="auth-form-group">
                <label htmlFor="password" className="auth-label">Şifre</label>
                <input
                  type="password"
                  id="password"
                  className="auth-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Şifrenizi girin"
                  required
                />
              </div>
              <button type="submit" className="auth-button">Giriş Yap</button>
            </form>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Admin Paneli - 4KFilmizlesene</title>
      </Head>
      <AdminLayout>
        <Dashboard />
      </AdminLayout>
    </>
  );
};

export default AdminPage;
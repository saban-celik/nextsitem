import Image from 'next/image';
import { FormEvent, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { login } from '../../api/backendApi';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    try {
      const data = await login(username, password);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', data.username);
      localStorage.setItem('token', data.token);
      onClose();
      window.location.reload(); // Navbar'ı güncellemek için
    } catch (error: any) {
      setError(error.message || 'Giriş sırasında bir hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-btn" onClick={onClose} disabled={loading}>
          <FaTimes />
        </button>
        <div className="modal-header">
          <Image src="/images/4kfilmizlesene.png" alt="4K Film İzlesene Logo" width={150} height={50} />
          <h2 className="auth-title">Giriş Yap</h2>
        </div>
        {error && <div className="auth-error">{error}</div>}
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-form-group">
            <label htmlFor="username" className="auth-label">Kullanıcı Adı</label>
            <input
              type="text"
              className="auth-input"
              id="username"
              name="username"
              placeholder="Kullanıcı adınızı girin"
              required
              disabled={loading}
            />
          </div>
          <div className="auth-form-group">
            <label htmlFor="password" className="auth-label">Şifre</label>
            <input
              type="password"
              className="auth-input"
              id="password"
              name="password"
              placeholder="Şifrenizi girin"
              required
              disabled={loading}
            />
          </div>
          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? 'Yükleniyor...' : 'Giriş Yap'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
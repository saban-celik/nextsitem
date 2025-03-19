// src/components/ui/LoginModal.tsx
import Image from 'next/image';
import { FormEvent, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    if (username === 'user' && password === '12345678') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', username);
      onClose();
      window.location.reload(); // Sayfayı yenileyerek navbar'ı güncelliyoruz
    } else {
      setError('Kullanıcı adı veya şifre yanlış!');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-btn" onClick={onClose}>
          <FaTimes />
        </button>
        <div className="modal-header">
          <Image
            src="/images/4kfilmizlesene.png"
            alt="4K Film İzlesene Logo"
            width={150}
            height={50}
          />
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
            />
          </div>
          <button type="submit" className="auth-button">Giriş Yap</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
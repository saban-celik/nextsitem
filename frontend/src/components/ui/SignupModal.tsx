import Image from 'next/image';
import { FormEvent, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { signup } from '../../api/backendApi';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupModal = ({ isOpen, onClose }: SignupModalProps) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.target as HTMLFormElement);
    const username = formData.get('username') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const data = await signup(username, email, password);
      alert(data.message); // "Kayıt başarılı!"
      onClose();
    } catch (error: any) {
      setError(error.message || 'Kayıt sırasında bir hata oluştu');
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
          <h2 className="auth-title">Kayıt Ol</h2>
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
            <label htmlFor="email" className="auth-label">E-posta</label>
            <input
              type="email"
              className="auth-input"
              id="email"
              name="email"
              placeholder="E-posta adresinizi girin"
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
            {loading ? 'Yükleniyor...' : 'Kayıt Ol'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
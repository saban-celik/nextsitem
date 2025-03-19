// src/components/ui/SignupModal.tsx
import Image from 'next/image';
import { FormEvent } from 'react';
import { FaTimes } from 'react-icons/fa';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupModal = ({ isOpen, onClose }: SignupModalProps) => {
  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onClose(); // Şimdilik sadece kapatıyoruz
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
          <h2 className="auth-title">Kayıt Ol</h2>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-form-group">
            <label htmlFor="username" className="auth-label">Kullanıcı Adı</label>
            <input
              type="text"
              className="auth-input"
              id="username"
              placeholder="Kullanıcı adınızı girin"
            />
          </div>
          <div className="auth-form-group">
            <label htmlFor="email" className="auth-label">E-posta</label>
            <input
              type="email"
              className="auth-input"
              id="email"
              placeholder="E-posta adresinizi girin"
            />
          </div>
          <div className="auth-form-group">
            <label htmlFor="password" className="auth-label">Şifre</label>
            <input
              type="password"
              className="auth-input"
              id="password"
              placeholder="Şifrenizi girin"
            />
          </div>
          <button type="submit" className="auth-button">Kayıt Ol</button>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;


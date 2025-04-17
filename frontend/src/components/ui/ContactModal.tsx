// C:\nextjs\nextsitem\frontend\src\components\ui\ContactModal.tsx
import { FormEvent, useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
    if (loggedIn) {
      const storedUsername = localStorage.getItem('username') || 'Kullanıcı';
      setUsername(storedUsername);
      setName(storedUsername);
    } else {
      setName('');
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('İletişim Formu Gönderildi:', { name: isLoggedIn ? username : name, email, message });
    setEmail('');
    setMessage('');
    if (!isLoggedIn) setName(''); // Giriş yapılmamışsa name sıfırlanır
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <FaTimes />
        </button>
        <div className="modal-header">
          <h2>İletişim</h2>
        </div>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-form-group">
            {isLoggedIn ? (
              <>
                <label className="auth-label">İsim</label>
                <div className="auth-username-display">{username}</div>
              </>
            ) : (
              <>
                <label className="auth-label">İsim</label>
                <input
                  type="text"
                  className="auth-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Adınızı girin"
                  required
                />
              </>
            )}
          </div>
          <div className="auth-form-group">
            <label className="auth-label">E-posta</label>
            <input
              type="email"
              className="auth-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-posta adresinizi girin"
              required
            />
          </div>
          <div className="auth-form-group">
            <label className="auth-label">Mesaj</label>
            <textarea
              className="auth-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Mesajınızı buraya yazın"
              rows={4}
              required
            />
          </div>
          <button type="submit" className="auth-button">
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
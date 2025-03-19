// src/components/ui/ContactModal.tsx
import Image from 'next/image';
import { FormEvent, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Burada bir API çağrısı yapılabilir, şimdilik sadece simüle ediyoruz
    setSubmitted(true);
    setMessage('');
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
          <h2 className="auth-title">İletişim</h2>
        </div>
        {submitted ? (
          <div className="auth-error" style={{ backgroundColor: 'var(--darkGray)', border: '1px solid var(--hoverOrange)' }}>
            Mesajınız başarıyla gönderildi! En kısa sürede size geri döneceğiz.
          </div>
        ) : (
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-form-group">
              <label htmlFor="name" className="auth-label">Adınız</label>
              <input
                type="text"
                className="auth-input"
                id="name"
                name="name"
                placeholder="Adınızı girin"
                required
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
              />
            </div>
            <div className="auth-form-group">
              <label htmlFor="message" className="auth-label">Mesajınız</label>
              <textarea
                className="auth-input"
                id="message"
                name="message"
                placeholder="Mesajınızı buraya yazın"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                required
              />
            </div>
            <button type="submit" className="auth-button">Gönder</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
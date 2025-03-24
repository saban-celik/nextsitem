// src/pages/admin/users.tsx
import Head from 'next/head';
import { useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';

const UsersPage = () => {
  const [users, setUsers] = useState([
    { id: '1', username: 'filmsever', email: 'filmsever@example.com', role: 'Kullanıcı', joinDate: '15 Mart 2025' },
    { id: '2', username: 'admin', email: 'admin@example.com', role: 'Admin', joinDate: '10 Mart 2025' },
  ]);

  const [newUser, setNewUser] = useState({ username: '', email: '', role: 'Kullanıcı' });

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    const user = {
      id: String(users.length + 1),
      username: newUser.username,
      email: newUser.email,
      role: newUser.role,
      joinDate: new Date().toLocaleDateString('tr-TR'),
    };
    setUsers([...users, user]);
    setNewUser({ username: '', email: '', role: 'Kullanıcı' });
  };

  return (
    <>
      <Head>
        <title>Kullanıcılar - Admin Paneli</title>
      </Head>
      <AdminLayout>
        <div className="users-page">
          <h2 className="dashboard__title">Kullanıcılar</h2>
          <div className="users__form-section">
            <h3 className="section__subtitle">Yeni Kullanıcı Ekle</h3>
            <form className="users__form" onSubmit={handleAddUser}>
              <div className="form-group">
                <label className="form-label">Kullanıcı Adı</label>
                <input
                  type="text"
                  className="form-input"
                  value={newUser.username}
                  onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">E-posta</label>
                <input
                  type="email"
                  className="form-input"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Rol</label>
                <select
                  className="form-input"
                  value={newUser.role}
                  onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                >
                  <option value="Kullanıcı">Kullanıcı</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
              <button type="submit" className="form-button">Kullanıcı Ekle</button>
            </form>
          </div>
          <div className="users__list">
            <h3 className="section__subtitle">Kullanıcı Listesi</h3>
            <table className="users__table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Kullanıcı Adı</th>
                  <th>E-posta</th>
                  <th>Rol</th>
                  <th>Katılım Tarihi</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{user.joinDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default UsersPage;
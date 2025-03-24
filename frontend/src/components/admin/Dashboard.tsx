//src\components\admin\Dashboard.tsx
const Dashboard = () => {
  const stats = [
    { title: 'Toplam Kullanıcı', value: '1,245' },
    { title: 'Toplam Film', value: '350' },
    { title: 'Toplam Yorum', value: '2,890' },
    { title: 'Günlük Ziyaretçi', value: '450' },
  ];

  const recentActivities = [
    { user: 'user123', action: 'Yorum yaptı', date: '22 Mart 2025' },
    { user: 'admin', action: 'Film ekledi', date: '21 Mart 2025' },
    { user: 'filmsever', action: 'Giriş yaptı', date: '20 Mart 2025' },
  ];

  const quickActions = [
    { label: 'Yeni Film Ekle', path: '/admin/movies/new' },
    { label: 'Kullanıcı Düzenle', path: '/admin/users/edit' },
    { label: 'Yorumları Onayla', path: '/admin/comments/approve' },
    { label: 'Kategori Ekle', path: '/admin/categories/new' },
  ];

  const registeredUsers = [
    { id: '1', username: 'filmsever', email: 'filmsever@example.com', joinDate: '15 Mart 2025' },
    { id: '2', username: 'user123', email: 'user123@example.com', joinDate: '18 Mart 2025' },
    { id: '3', username: 'sinemaci', email: 'sinemaci@example.com', joinDate: '20 Mart 2025' },
  ];

  const movieCategories = [
    { name: 'Aksiyon', count: '85' },
    { name: 'Komedi', count: '60' },
    { name: 'Dram', count: '45' },
    { name: 'Bilim Kurgu', count: '30' },
  ];

  const analyticsData = [
    { label: 'Bu Hafta Ziyaret', value: '3,200' },
    { label: 'Film İzlenme', value: '1,890' },
    { label: 'Yeni Kayıtlar', value: '120' },
  ];

  return (
    <div className="dashboard">
      <h2 className="dashboard__title">Dashboard</h2>

      {/* İstatistikler */}
      <div className="dashboard__stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-card__title">{stat.title}</div>
            <div className="stat-card__value">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Hızlı Eylemler */}
      <div className="dashboard__quick-actions">
        <h3 className="recent-activity__title">Hızlı Eylemler</h3>
        <div className="quick-actions__grid">
          {quickActions.map((action, index) => (
            <a key={index} href={action.path} className="quick-action__btn">
              {action.label}
            </a>
          ))}
        </div>
      </div>

      {/* Kayıtlı Kullanıcılar */}
      <div className="registered-users">
        <h3 className="recent-activity__title">Son Kayıtlı Kullanıcılar</h3>
        <table className="recent-activity__table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Kullanıcı Adı</th>
              <th>E-posta</th>
              <th>Katılım Tarihi</th>
            </tr>
          </thead>
          <tbody>
            {registeredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.joinDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Film Kategorileri */}
      <div className="movie-categories">
        <h3 className="recent-activity__title">Film Kategorileri</h3>
        <div className="dashboard__stats-grid">
          {movieCategories.map((category, index) => (
            <div key={index} className="stat-card">
              <div className="stat-card__title">{category.name}</div>
              <div className="stat-card__value">{category.count}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Grafik Verileri */}
      <div className="analytics-data">
        <h3 className="recent-activity__title">Grafik Verileri</h3>
        <div className="dashboard__stats-grid">
          {analyticsData.map((data, index) => (
            <div key={index} className="stat-card">
              <div className="stat-card__title">{data.label}</div>
              <div className="stat-card__value">{data.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Son Aktiviteler */}
      <div className="recent-activity">
        <h3 className="recent-activity__title">Son Aktiviteler</h3>
        <table className="recent-activity__table">
          <thead>
            <tr>
              <th>Kullanıcı</th>
              <th>Eylem</th>
              <th>Tarih</th>
            </tr>
          </thead>
          <tbody>
            {recentActivities.map((activity, index) => (
              <tr key={index}>
                <td>{activity.user}</td>
                <td>{activity.action}</td>
                <td>{activity.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
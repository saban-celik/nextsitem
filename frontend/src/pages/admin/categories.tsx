//src\pages\admin\categories.tsx
import Head from 'next/head';
import AdminLayout from '../../components/admin/AdminLayout';

const CategoriesPage = () => {
  const mockCategories = [
    { name: 'Aksiyon', movieCount: '85' },
    { name: 'Komedi', movieCount: '60' },
    { name: 'Dram', movieCount: '45' },
    { name: 'Bilim Kurgu', movieCount: '30' },
  ];

  return (
    <>
      <Head>
        <title>Film Kategorileri - Admin Paneli</title>
      </Head>
      <AdminLayout>
        <div className="categories-page">
          <h2 className="dashboard__title">Film Kategorileri</h2>
          <div className="dashboard__stats-grid">
            {mockCategories.map((category, index) => (
              <div key={index} className="stat-card">
                <div className="stat-card__title">{category.name}</div>
                <div className="stat-card__value">{category.movieCount}</div>
              </div>
            ))}
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default CategoriesPage;
// src/components/layouts/MainLayout.tsx
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <main className="main-content">
        <div className="page-wrapper">
          <div className="container">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
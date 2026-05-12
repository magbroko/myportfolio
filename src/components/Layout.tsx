import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export function Layout() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Navbar />
      <Outlet />
    </div>
  );
}

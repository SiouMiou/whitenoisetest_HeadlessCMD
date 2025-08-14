import Link from 'next/link'
import {useRouter} from 'next/router'

export default function Navigation() {
  const router = useRouter()
  
  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          白噪島
        </Link>
        
        <div className="nav-links">
          <Link href="/" className={router.pathname === '/' ? 'active' : ''}>
            首頁
          </Link>
          <Link href="/studio" className={router.pathname.startsWith('/studio') ? 'active' : ''}>
            管理後台
          </Link>
        </div>
      </div>
      
      <style jsx>{`
        .navigation {
          background: white;
          border-bottom: 1px solid #e5e5e5;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav-logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #333;
          text-decoration: none;
        }
        .nav-logo:hover {
          color: #0070f3;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-links a {
          color: #666;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-links a:hover,
        .nav-links a.active {
          color: #0070f3;
        }
        @media (max-width: 768px) {
          .nav-container {
            padding: 1rem;
          }
          .nav-links {
            gap: 1rem;
          }
        }
      `}</style>
    </nav>
  )
} 
import Link from 'next/link'
import Image from 'next/image'
import {News} from '../types/news'

interface NewsListProps {
  news: News[]
}

export default function NewsList({news}: NewsListProps) {
  return (
    <div className="news-list">
      <h2>最新消息</h2>
      {news.length === 0 ? (
        <p>目前沒有最新消息</p>
      ) : (
        <div className="news-grid">
          {news.map((item) => (
            <article key={item._id} className="news-item">
              {item.coverImage && (
                <div className="news-image">
                  <Image
                    src={item.coverImage}
                    alt={item.title}
                    width={400}
                    height={250}
                    style={{objectFit: 'cover'}}
                  />
                </div>
              )}
              <div className="news-content">
                <h3>{item.title}</h3>
                <time dateTime={item.publishedAt}>
                  {new Date(item.publishedAt).toLocaleDateString('zh-TW')}
                </time>
                {item.excerpt && <p>{item.excerpt}</p>}
                <Link href={`/news/${item.slug.current}`}>
                  閱讀更多
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
      <style jsx>{`
        .news-list {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }
        .news-list h2 {
          font-size: 2rem;
          margin-bottom: 2rem;
          text-align: center;
        }
        .news-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .news-item {
          border: 1px solid #e5e5e5;
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.2s;
        }
        .news-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .news-image {
          width: 100%;
          height: 200px;
          position: relative;
        }
        .news-content {
          padding: 1.5rem;
        }
        .news-content h3 {
          margin: 0 0 0.5rem 0;
          font-size: 1.25rem;
        }
        .news-content time {
          color: #666;
          font-size: 0.875rem;
        }
        .news-content p {
          margin: 1rem 0;
          color: #333;
          line-height: 1.6;
        }
        .news-content a {
          color: #0070f3;
          text-decoration: none;
          font-weight: 500;
        }
        .news-content a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  )
} 
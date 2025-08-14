import {GetStaticPaths, GetStaticProps} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {PortableText} from '@portabletext/react'
import Navigation from '../../../components/Navigation'
import {client} from '../../../lib/sanity.client'
import {newsQuery, newsBySlugQuery} from '../../../lib/queries'
import {News} from '../../../types/news'
import Link from 'next/link'

interface NewsDetailProps {
  news: News
}

export default function NewsDetail({news}: NewsDetailProps) {
  if (!news) {
    return <div>文章不存在</div>
  }

  return (
    <>
      <Head>
        <title>{news.title} - 白噪島</title>
        <meta name="description" content={news.excerpt || news.title} />
      </Head>
      <Navigation />
      <div className="news-detail">
        <article>
          <header>
            <h1>{news.title}</h1>
            <time dateTime={news.publishedAt}>
              {new Date(news.publishedAt).toLocaleDateString('zh-TW')}
            </time>
          </header>
          
          {news.coverImage && (
            <div className="cover-image">
              <Image
                src={news.coverImage}
                alt={news.title}
                width={800}
                height={400}
                style={{objectFit: 'cover'}}
              />
            </div>
          )}
          
          {news.excerpt && (
            <div className="excerpt">
              <p>{news.excerpt}</p>
            </div>
          )}
          
          {news.body && (
            <div className="content">
              <PortableText value={news.body} />
            </div>
          )}
        </article>
        
        <div className="back-link">
          <Link href="/">← 返回首頁</Link>
        </div>
        
        <style jsx>{`
          .news-detail {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
          }
          header {
            margin-bottom: 2rem;
          }
          header h1 {
            font-size: 2.5rem;
            margin: 0 0 1rem 0;
            line-height: 1.2;
          }
          header time {
            color: #666;
            font-size: 1rem;
          }
          .cover-image {
            margin: 2rem 0;
            border-radius: 8px;
            overflow: hidden;
          }
          .excerpt {
            background: #f5f5f5;
            padding: 1.5rem;
            border-radius: 8px;
            margin: 2rem 0;
            font-style: italic;
            font-size: 1.1rem;
            line-height: 1.6;
          }
          .content {
            line-height: 1.8;
            font-size: 1.1rem;
          }
          .content :global(p) {
            margin-bottom: 1.5rem;
          }
          .content :global(h2) {
            font-size: 1.8rem;
            margin: 2rem 0 1rem 0;
          }
          .content :global(h3) {
            font-size: 1.4rem;
            margin: 1.5rem 0 0.5rem 0;
          }
          .back-link {
            margin-top: 3rem;
            padding-top: 2rem;
            border-top: 1px solid #e5e5e5;
          }
          .back-link a {
            color: #0070f3;
            text-decoration: none;
            font-weight: 500;
          }
          .back-link a:hover {
            text-decoration: underline;
          }
        `}</style>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const news = await client.fetch(newsQuery)
  
  const paths = news.map((item: News) => ({
    params: {slug: item.slug.current}
  }))
  
  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const slug = params?.slug as string
  const news = await client.fetch(newsBySlugQuery, {slug})
  
  if (!news) {
    return {
      notFound: true
    }
  }
  
  return {
    props: {
      news
    },
    revalidate: 60 // 每分鐘重新驗證
  }
} 
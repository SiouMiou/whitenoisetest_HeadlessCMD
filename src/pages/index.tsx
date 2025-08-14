import Head from "next/head";
import { GetStaticProps } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navigation from "../../components/Navigation";
import NewsList from "../../components/NewsList";
import { client } from "../../lib/sanity.client";
import { newsQuery } from "../../lib/queries";
import { News } from "../../types/news";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface HomeProps {
  news: News[];
}

export default function Home({ news }: HomeProps) {
  return (
    <>
      <Head>
        <title>白噪島 - 最新消息</title>
        <meta name="description" content="白噪島最新消息與資訊" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <Navigation />
        <main className={styles.main}>
          <h1 className={styles.title}>白噪島</h1>
          <p className={styles.description}>
            歡迎來到白噪島，這裡有最新的消息與資訊
          </p>
          
          <NewsList news={news} />
        </main>
        
        <style jsx>{`
          .title {
            font-size: 3rem;
            margin-bottom: 1rem;
            text-align: center;
          }
          .description {
            font-size: 1.2rem;
            color: #666;
            text-align: center;
            margin-bottom: 2rem;
          }
        `}</style>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const news = await client.fetch(newsQuery);
    
    return {
      props: {
        news: news || []
      },
      revalidate: 60 // 每分鐘重新驗證
    };
  } catch (error) {
    console.error('Error fetching news:', error);
    return {
      props: {
        news: []
      },
      revalidate: 60
    };
  }
};

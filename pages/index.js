import Head from 'next/head'
import styles from '../styles/Style.module.scss';
import Header from './header/header';
import Aside from './aside/aside';
import Content from './content/content';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My blog</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
      </Head>

      <main className={styles.main}>
        <Header></Header>
        <div className={styles.scroll_guide}><span>scroll</span><div className={styles.scroll_guide_divider}></div>down</div>
        {/* <Aside></Aside> */}
        <Content className={styles.main_content}></Content>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  )
}

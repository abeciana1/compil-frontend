import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Site from '../manifest.json'
import HeadTag from '../components/utils/Header'

export default function Home() {
  return (
    // <div className={styles.container}>
    <div>
      <HeadTag />
      <Head>
        <title>{Site.appName}</title>
        <meta name="description" content="Drop the needle!" />
        <link rel="stylesheet" href="https://use.typekit.net/ntq1bol.css"></link>
      </Head>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1> */}

        {/* <h1>Hello world</h1> */}

        <h1 className="text-9xl">Hello</h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.alexbeciana.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by{' '}Alex Beciana{" "}
          <span className="flex items-center">
            <Image src="https://www.alexbeciana.com/static/profile-pic-942ff21fde4f338dc11fe09b617b1130.png" alt="Vercel Logo" width={35} height={35} />
          </span>
        </a>
      </footer>
    </div>
  )
}

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get farted by editing <code>pages/index.js</code>
        </p>
    <p>Editing index.js</p>
    <button onclick={() => alert('told you not to')}>dont click</button>
      </main>

      <Footer />
    </div>
  )
}

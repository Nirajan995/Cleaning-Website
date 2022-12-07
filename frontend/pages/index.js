import Head from 'next/head';
import Navbar from '../components/Navbar.js';
import HomePage from '../components/Home.js';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cleaning Website</title>
      </Head>
      <Navbar />
      <HomePage />
    </div>

  )
}

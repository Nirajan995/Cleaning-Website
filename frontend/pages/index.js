import Head from 'next/head';
import Navbar from '../components/Navbar.js';
import HomeScreen from '../screens/HomeScreen.js';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cleaning Website</title>
      </Head>
      <Navbar />
      <HomeScreen />
    </div>

  )
}

import Head from 'next/head';
import HomeScreen from '../screens/HomeScreen.js';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cleaning Website</title>
      </Head>
      <HomeScreen />
    </div>

  )
}

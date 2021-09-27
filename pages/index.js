import Head from 'next/head'
import Header from '../components/Header'
import Banner from "../components/Banner"
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

export default function Home({exploreData, cardsData}) {
  return (
    <div className="">
      <Head>
        <title>AirBnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header/>
      {/* Banner */}
      <Banner/>
      {/* main section */}
      <main className="max-w-5xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-2xl font-bold pb-5">Explore Nearby</h2>
          {/* Pull from a server */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData?.map((item, index)=>(
            <SmallCard key={index} {...item}/>
          ))}
          </div>
        </section>

        <section className="pt-10">
          <h2 className="text-2xl font-bold">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
          {cardsData?.map((item, index)=>(
            <MediumCard key={index} {...item}/>
          ))}
          </div>
        </section>

        <LargeCard img="https://links.papareact.com/4cj" title="The Greatest Outdoors" description="Wishlists created by Airbnb" buttonText="Get Inspired"/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export async function getStaticProps(){
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  );
  const cardsData = await fetch("https://links.papareact.com/zp1").then(
    (res)=>res.json()
  )
  return {
    props: {
      exploreData,
      cardsData
    }
  }

}
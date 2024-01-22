import './Home.css'
import Social from '@/components/Home/Socials'
import Scroll from "@/components/Home/Scroll";
import Data from "@/components/Home/Data";

export default function Home() {
  return (
    <section className='home section' id="home">
      <div className='home__container container grid'>
        <div className='home__content grid'>
          <Social />
          <div className="home__img"></div>
          <Data />
        </div>
        <Scroll />
      </div>
    </section>
  )
}
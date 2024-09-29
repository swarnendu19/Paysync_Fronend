import Hero from '../components/Hero';
import Partners from '../components/Partners';
import UnifiedPlatform from '../components/UnifiedPlatform';
import WhySwipe from '../components/WhyPaySync';
import Global from '../components/Global';
import GettingStarted from '../components/GettingStarted';

function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Partners />
        <UnifiedPlatform />
        <WhySwipe />
        <Global />
        <GettingStarted />
      </main>
    </div>
  )
}

export default Home

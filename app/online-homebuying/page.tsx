import type { Metadata } from 'next'
import PurpleSaleBanner from '../components/purple-sale-banner'
import Header from '../components/header'
import Footer from '../components/footer'
import OnlineHomebuyingHero from '../components/online-homebuying-hero'
import HowItWorks from '../components/online-how-it-works'
import Benefits from '../components/online-benefits'
import AvailableHomesOnline from '../components/available-homes-online'

export const metadata: Metadata = {
  title: 'Online Homebuying | Century Communities',
  description: 'Purchase your new home completely online with Century Communities. Industry-first "Buy Now" option allows you to buy your dream home online from start to finish.',
}

export default function OnlineHomebuyingPage() {
  return (
    <div className="min-h-screen bg-white">
      <PurpleSaleBanner />
      <Header />
      <main>
        <OnlineHomebuyingHero />
        <HowItWorks />
        <Benefits />
        <AvailableHomesOnline />
      </main>
      <Footer />
    </div>
  )
}


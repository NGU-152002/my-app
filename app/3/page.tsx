import FinanciallyReady from "@/components/3/FinanciallyReady"
import FirstSection from "@/components/3/FirstSection"
import HomeOwner from "@/components/3/HomeOwner"
import StartYourSearch from "@/components/3/StartYourSearch"
import WhichHome from "@/components/3/WhichHome"
import WhyChoose from "@/components/3/WhyChoose"

function page() {
  return (
    <div className="space-y-7">
    <FirstSection />
    <WhyChoose />
    <HomeOwner />
    <FinanciallyReady />
    <WhichHome />
    <StartYourSearch />
    </div>
  )
}

export default page
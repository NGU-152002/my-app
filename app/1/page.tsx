import FeaturedProperties from "@/components/1/FeaturedProperties";
import First from "@/components/1/First";
import InvestmentBenefits from "@/components/1/InvestmentBenefits";
import MarketTrends from "@/components/1/MarketTrends";
import MoratageAssistance from "@/components/1/MoratageAssistance";
import PostCard from "@/components/1/PostCard";
import PostSection from "@/components/1/PostSection";
import ScheduleConsl from "@/components/1/ScheduleConsl";
import Second from "@/components/1/Second";
import Third from "@/components/1/Third";

export default function Home(){

    return(
        <>
        <First />
        <Second />
        <Third />
        <FeaturedProperties />
        <PostSection />
        <MoratageAssistance /> 
        <ScheduleConsl />
        <MarketTrends />
        <InvestmentBenefits />
        </>
    )
}
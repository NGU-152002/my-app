import First from "@/components/8/First";
import LastingImpression from "@/components/8/LastingImpression";
import Second from "@/components/8/Second";
import SeeTransform from "@/components/8/SeeTransform";
import WhyChoose from "@/components/8/WhyChoose";

export default function Page(){
    return(
        <div className="bg-[#F2F2F2] space-y-5">
        <First />
        <Second />
        <WhyChoose />
        <SeeTransform />
        <LastingImpression />
        </div>
    )
}
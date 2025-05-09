import First from "@/components/9/First";
import OurServices from "@/components/9/OurServices";
import ReImagine from "@/components/9/ReImagine";
import WhyChoose from "@/components/9/WhyChoose";

export default function Page(){

    return(
        <div className="space-y-5 bg-[#F2F2F2]">
        <First />
        <OurServices />
        <WhyChoose />
        <ReImagine />
        </div>
    )
}
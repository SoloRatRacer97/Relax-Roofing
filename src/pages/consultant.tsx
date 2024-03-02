import { siteConfig } from "@/config/site";
import SPLayoutRegular from "../components/services-professional/sp-layout";
import router, { useRouter } from "next/router";
import ConsLayoutRegular from "../components/consultant/constulatnt-layout";
import ConsHero from "../components/consultant/consultant-hero";
import ConsAbout from "../components/consultant/consultant-about";
import ConsServices from "../components/consultant/consultant-services";
import Portfolio from "../components/consultant/consultant-portfolio";
import ConsReviewSection from "../components/consultant/review-section";
import ConsFixedImageCallToAction from "../components/consultant/constultant-fixed-image";
import ConsContactUs from "../components/consultant/consultant-contact-us";
import AllOutFooterSection from "../components/footer/info-heavy";
import ConsultantAllOutFooterSection from "../components/consultant/consultant-info-heavy";

export default function Professional() {
    const router = useRouter();
    const href = router.pathname;
  return <div>
    <div className="">
    <ConsLayoutRegular >
        <ConsHero></ConsHero>
        <ConsAbout></ConsAbout>
        <ConsServices></ConsServices>
        <Portfolio></Portfolio>
        <ConsReviewSection></ConsReviewSection>
        <ConsFixedImageCallToAction></ConsFixedImageCallToAction>
        <ConsContactUs></ConsContactUs>
        <ConsultantAllOutFooterSection></ConsultantAllOutFooterSection>
    </ConsLayoutRegular>
    </div>
  </div>;
}

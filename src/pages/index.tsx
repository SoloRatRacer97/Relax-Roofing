import SPAbout from '../components/services-professional/sp-about';
import SPHero from '../components/services-professional/sp-hero';
import SPLayoutRegular from '../components/services-professional/sp-layout';

import SPFixedImageCallToAction from '../components/services-professional/sp-fixed-image';
import SPServices from '../components/services-professional/sp-services';
import SPPortfolio from '../components/services-professional/sp-portfolio';
import SPReviewSection from '../components/services-professional/sp-review-section';
import SPHomeContactForm from '../components/services-professional/sp-contact-us';
import SPAllOutFooterSection from '../components/services-professional/sp-info-heavy';

export default function ServicesProfessional() {
  return (
    <div className="bg-gray-50">
      <SPLayoutRegular
        title="Roofing Contractor in Mandeville | Relax Roofing"
        description="Relax Roofing, the go-to roofing contractor in Mandeville, is known for its exceptional craftsmanship and durable, aesthetically pleasing residential roofing services. We guarantee customer satisfaction through our reliable, high-quality roofing solutions."
      >
        <SPHero></SPHero>
        <SPAbout></SPAbout>
        {/* <SSServiceesWeOffer></SSServiceesWeOffer>
        <CarouselPlugin></CarouselPlugin> */}
        <SPServices></SPServices>
        <SPFixedImageCallToAction></SPFixedImageCallToAction>
        <SPPortfolio></SPPortfolio>
        {/* <SPReviewSection></SPReviewSection> */}
        <SPHomeContactForm></SPHomeContactForm>
        <SPAllOutFooterSection></SPAllOutFooterSection>
      </SPLayoutRegular>
    </div>
  );
}

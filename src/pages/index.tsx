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
      <SPLayoutRegular title="Decking Contractor in Tri Cities | Desmond and Sons Construction" description="Desmond and Sons Construction, the leading decking contractor in Tri Cities, specializing in custom decks and expert fencing contractor services. Renowned for quality craftsmanship, our team ensures customer satisfaction with durable, attractive outdoor solutions. Trust us for your decking and fencing needs.">
        <SPHero></SPHero>
        <SPAbout></SPAbout>
        {/* <SSServiceesWeOffer></SSServiceesWeOffer>
        <CarouselPlugin></CarouselPlugin> */}
        <SPServices></SPServices>
        <SPFixedImageCallToAction></SPFixedImageCallToAction>
        <SPPortfolio></SPPortfolio>
        <SPReviewSection></SPReviewSection>
        <SPHomeContactForm></SPHomeContactForm>
        <SPAllOutFooterSection></SPAllOutFooterSection>
      </SPLayoutRegular>
    </div>
  );
}

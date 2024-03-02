import SPAbout from '../components/services-professional/sp-about';
import SPHero from '../components/services-professional/sp-hero';

import SPFixedImageCallToAction from '../components/services-professional/sp-fixed-image';
import SPServices from '../components/services-professional/sp-services';
import SPPortfolio from '../components/services-professional/sp-portfolio';
import SPReviewSection from '../components/services-professional/sp-review-section';
import SPHomeContactForm from '../components/services-professional/sp-contact-us';
import SPAllOutFooterSection from '../components/services-professional/sp-info-heavy';
import StoreLayoutRegular from '../components/store/store-layout';
import StoreHero from '../components/store/store-hero';
import StoreAbout from '../components/store/store-about';
import StoreServices from '../components/store/store-food-highlight';
import StoreFoodShowcase from '../components/store/store-food-showcase';
import StoreReviewSection from '../components/store/store-review-section';

export default function Store() {
  return (
    <div className="bg-gray-50">
      <StoreLayoutRegular title="Single Service Website" description="This is the description of the page :D">
        <StoreHero></StoreHero>
        <StoreAbout></StoreAbout>
        <StoreServices></StoreServices>
        <StoreFoodShowcase></StoreFoodShowcase>
        <StoreReviewSection></StoreReviewSection>
        <SPHomeContactForm></SPHomeContactForm>
        <SPAllOutFooterSection></SPAllOutFooterSection>
      </StoreLayoutRegular>
    </div>
  );
}

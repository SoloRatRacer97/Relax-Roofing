import HomeContactForm from '../components/contact-form/contact-us';
import SSFixedImageCallToAction from '../components/services-soft/ss-fixed-image';
import AllOutFooterSection from '../components/footer/info-heavy';
import SSAbout from '../components/services-soft/ss-about';
import { CarouselPlugin } from '../components/services-soft/ss-carousel';

import SSHero from '../components/services-soft/ss-hero';
import SSLayoutRegular from '../components/services-soft/ss-layout';
import SSReviewSection from '../components/services-soft/ss-review-section';
import SSServiceesWeOffer from '../components/services-soft/ss-services-we-offer';

export default function ServicesSoft() {
  return (
    <div className="bg-gray-50">
      <SSLayoutRegular title="Single Service Website" description="This is the description of the page :D">
        <SSHero></SSHero>
        <SSAbout></SSAbout>
        <SSServiceesWeOffer></SSServiceesWeOffer>
        <CarouselPlugin></CarouselPlugin>
        <SSFixedImageCallToAction></SSFixedImageCallToAction>
        <SSReviewSection></SSReviewSection>
        <HomeContactForm></HomeContactForm>
        <AllOutFooterSection></AllOutFooterSection>
      </SSLayoutRegular>
    </div>
  );
}

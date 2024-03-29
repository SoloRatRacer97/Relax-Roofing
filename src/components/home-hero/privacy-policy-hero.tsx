import { siteConfig } from '@/config/site';
import { useRouter } from 'next/router';


export default function PrivacyPolicyHero() {
  const router = useRouter();
  const href = router.pathname;

  return (
    <div className="relative h-fit">
      <div className="relative bg-slate-100 pb-20 h-fit">
        <div className="container flex h-fit flex-col md:flex-row">
          <div className="mt-6 px-1 md:mt-28 ">
            <p className="my-2 text-lg drop-shadow-xl">Effective Date: Effective Date: {siteConfig.dateSiteLaunched}</p>
            <p className="my-2 text-lg drop-shadow-xl">
              {siteConfig.cwsName} (“us”, “we”, or “our”) operates the &nbsp;
              {siteConfig.url} website (hereinafter referred to as the “Service”) on behalf of {siteConfig.name}.
            </p>
            <p className="my-2 text-lg drop-shadow-xl">
              This page informs you of our policies regarding the collection, use, and disclosure of personal data when
              you use our Service and the choices you have associated with that data.
            </p>
            <p className="my-2 text-lg drop-shadow-xl">
              We use your data to provide and improve the Service. By using the Service, you agree to the collection and
              use of information in accordance with this policy.
            </p>
            <h3 className="text-5xl font-bold capitalize drop-shadow-xl">Definitions</h3>
            <h4 className="mt-4 text-lg font-bold uppercase text-slate-700 drop-shadow-lg md:mt-4">Service</h4>
            <p className="my-2 text-lg drop-shadow-xl">
              Service refers to the {siteConfig.url} website, which is operated by {siteConfig.cwsName} on behalf of {siteConfig.name}.
            </p>
            <h4 className="mt-4 text-lg font-bold uppercase text-slate-700 drop-shadow-lg md:mt-4">Personal Data</h4>
            <p className="my-2 text-lg drop-shadow-xl">
              Personal Data means data about a living individual who can be identified from those data (or from those
              and other information either in our possession or likely to come into our possession).
            </p>
            <h4 className="mt-4 text-lg font-bold uppercase text-slate-700 drop-shadow-lg md:mt-4">Usage Data</h4>
            <p className="my-2 text-lg drop-shadow-xl">
              Usage Data is data collected automatically either generated by the use of the Service or from the Service
              infrastructure itself (for example, the duration of a page visit).
            </p>
            <h4 className="mt-4 text-lg font-bold uppercase text-slate-700 drop-shadow-lg md:mt-4">Cookies</h4>
            <p className="my-2 text-lg drop-shadow-xl">
              Cookies are small files stored on your device (computer or mobile device).
            </p>
            <h4 className="mt-4 text-lg font-bold uppercase text-slate-700 drop-shadow-lg md:mt-4">Data Controller</h4>
            <p className="my-2 text-lg drop-shadow-xl">
              Data Controller means the natural or legal person who (either alone or jointly or in common with other
              persons) determines the purposes for which and the manner in which any personal information are, or are to
              be, processed.
            </p>
            <p className="my-2 text-lg drop-shadow-xl">
              For the purpose of this Privacy Policy, we are a Data Controller of your Personal Data.
            </p>
            <h4 className="mt-4 text-lg font-bold uppercase text-slate-700 drop-shadow-lg md:mt-4">
              Data Processors (or Service Providers)
            </h4>
            <p className="my-2 text-lg drop-shadow-xl">
              Data Processor (or Service Provider) means any natural or legal person who processes the data on behalf of
              the Data Controller.
            </p>
            <p className="my-2 text-lg drop-shadow-xl">
              We may use the services of various Service Providers in order to process your data more effectively.
            </p>
            <h4 className="mt-4 text-lg font-bold uppercase text-slate-700 drop-shadow-lg md:mt-4">
              Data Subject (or User)
            </h4>
            <p className="my-2 text-lg drop-shadow-xl">
              Data Subject is any living individual who is using our Service and is the subject of Personal Data.
            </p>
            <h3 className="text-5xl my-6 font-bold capitalize drop-shadow-xl">INFORMATION COLLECTION AND USE</h3>
            <p className="my-2 text-lg drop-shadow-xl">
              We collect several different types of information for various purposes to provide and improve our Service
              to you.
            </p>
            <h4 className="mt-4 text-lg font-bold uppercase text-slate-700 drop-shadow-lg md:mt-4">Personal Data</h4>
            <p className="my-2 text-lg drop-shadow-xl">
              While using our Service, we may ask you to provide us with certain personally identifiable information
              that can be used to contact or identify you (“Personal Data”). Personally identifiable information may
              include, but is not limited to:
            </p>
            <ul className="list-disc">
              <li className="ml-20">Email address </li>
              <li className="ml-20">First name and last name</li>
              <li className="ml-20">Phone number</li>
              <li className="ml-20">Address, State, Province, ZIP/Postal code, City</li>
              <li className="ml-20">Cookies and Usage Data</li>
            </ul>
            <p className="my-2 text-lg drop-shadow-xl">
              We may use your Personal Data to contact you with newsletters, marketing or promotional materials, updates
              about our Service, and other information that may be of interest to you. You have the option to opt-out of
              receiving any, or all, of these communications from us by following the unsubscribe link or the
              instructions provided in any email we send.
            </p>
            <h4 className="mt-4 text-lg font-bold uppercase text-slate-700 drop-shadow-lg md:mt-4">
              TRACKING & COOKIES DATA
            </h4>
            <p className="my-2 text-lg drop-shadow-xl">
              We utilize cookies and similar tracking technologies to monitor the activity on our Service and hold
              certain information.
            </p>
            <p className="my-2 text-lg drop-shadow-xl">
              Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies
              are sent to your browser from a website and stored on your device. Tracking technologies also used are
              beacons, tags, and scripts to collect and track information and to enhance and analyze our Service.
            </p>
            <p className="my-2 text-lg drop-shadow-xl">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However,
              if you do not accept cookies, you may not be able to use some parts of our Service.
            </p>
            <p className="my-2 text-lg drop-shadow-xl">Examples of Cookies we use:</p>
            <ul className="list-disc">
              <li className="ml-20">Session Cookies - We use Session Cookies to operate our Service.</li>
              <li className="ml-20">
                Preference Cookies - We use Preference Cookies to remember your preferences and various settings.
              </li>
              <li className="ml-20">Security Cookies - We use Security Cookies for security purposes.</li>
            </ul>
            <h3 className="text-5xl my-6 font-bold capitalize drop-shadow-xl">use of data</h3>
            <p className="my-2 text-lg drop-shadow-xl">
              {siteConfig.name} uses the collected data for various purposes:
            </p>
            <ul className="list-disc">
              <li className="ml-20">To provide and maintain our Service</li>
              <li className="ml-20">To notify you about changes to our Service</li>
              <li className="ml-20">
                To allow you to participate in interactive features of our Service when you choose to do so
              </li>
              <li className="ml-20">To provide customer support</li>
              <li className="ml-20">To gather analysis or valuable information so that we can improve our Service</li>
              <li className="ml-20">To monitor the usage of our Service</li>
              <li className="ml-20">To detect, prevent and address technical issues</li>
              <li className="ml-20">
                To provide you with news, special offers and general information about other goods, services and events
                which we offer that are similar to those that you have already purchased or inquired about unless you
                have opted not to receive such information.{' '}
              </li>
            </ul>
            <h3 className="text-5xl my-6 font-bold capitalize drop-shadow-xl">
              LEGAL BASIS FOR PROCESSING PERSONAL DATA UNDER THE GENERAL DATA PROTECTION REGULATION (GDPR)
            </h3>
            <p className="my-2 text-lg drop-shadow-xl">
              If you are from the European Economic Area (EEA), {siteConfig.name}&apos;s legal basis for
              collecting and using the personal information described in this Privacy Policy depends on the Personal
              Data we collect and the specific context in which we collect it.
            </p>
            <p className="my-2 text-lg drop-shadow-xl">
              {siteConfig.name} may process your Personal Data because:
            </p>
            <ul className="list-disc">
              <li className="ml-20">We need to perform a contract with you</li>
              <li className="ml-20">You have given us permission to do so</li>
              <li className="ml-20">
                The processing is in our legitimate interests and it&apos;s not overridden by your rights
              </li>
              <li className="ml-20">For payment processing purposes</li>
              <li className="ml-20">To comply with the law.</li>
            </ul>
            <h3 className="text-5xl my-6 font-bold capitalize drop-shadow-xl">RETENTION OF DATA</h3>
            <p className="my-2 text-lg drop-shadow-xl">
              {siteConfig.name} will retain your Personal Data only for as long as is necessary for the purposes
              set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to
              comply with our legal obligations (for example, if we are required to retain your data to comply with
              applicable laws), resolve disputes, and enforce our legal agreements and policies.
            </p>
            <p className="my-2 text-lg drop-shadow-xl">
              {siteConfig.name} will also retain Usage Data for internal analysis purposes. Usage Data is
              generally retained for a shorter period of time, except when this data is used to strengthen the security
              or to improve the functionality of our Service, or we are legally obligated to retain this data for longer
              periods.
            </p>
            <h3 className="text-5xl my-6 font-bold capitalize drop-shadow-xl">TRANSFER OF DATA</h3>
            <p className="my-2 text-lg drop-shadow-xl">
              Your information, including Personal Data, may be transferred to — and maintained on — computers located
              outside of your state, province, country or other governmental jurisdiction where the data protection laws
              may differ from those in your jurisdiction.
            </p>
            <p className="my-2 text-lg drop-shadow-xl">
              If you are located outside United States and choose to provide information to us, please note that we
              transfer the data, including Personal Data, to the United States and process it there.
            </p>
            <p className="my-2 text-lg drop-shadow-xl">
              Your consent to this Privacy Policy followed by your submission of such information represents your
              agreement to that transfer.
            </p>
            <p className="my-2 text-lg drop-shadow-xl">
              {siteConfig.name} will take all steps reasonably necessary to ensure that your data is treated
              securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place
              to an organization or a country unless there are adequate controls in place including the security of your
              data and other personal information.
            </p>
            <h3 className="text-5xl my-6 font-bold capitalize drop-shadow-xl">DISCLOSURE OF DATA</h3>
            <h4 className="mt-4 text-lg font-bold uppercase text-slate-700 drop-shadow-lg md:mt-4">
              BUSINESS TRANSACTION
            </h4>
            <p className="my-2 text-lg drop-shadow-xl">
              If {siteConfig.name} is involved in a merger, acquisition or asset sale, your Personal Data may be
              transferred. We will provide notice before your Personal Data is transferred and becomes subject to a
              different Privacy Policy.
            </p>
            <h4 className="mt-4 text-lg font-bold uppercase text-slate-700 drop-shadow-lg md:mt-4">
              DISCLOSURE FOR LAW ENFORCEMENT
            </h4>
            <p className="my-2 text-lg drop-shadow-xl">
              Under certain circumstances, {siteConfig.name} may be required to disclose your Personal Data if
              required to do so by law or in response to valid requests by public authorities (e.g. a court or a
              government agency).
            </p>
            <h4 className="mt-4 text-lg font-bold uppercase text-slate-700 drop-shadow-lg md:mt-4">
              Legal requirements
            </h4>
            <p className="my-2 text-lg drop-shadow-xl">
              {siteConfig.name} may disclose your Personal Data in the good faith belief that such action is
              necessary to:
            </p>
            <ul className="list-disc">
              <li className="ml-20">To comply with a legal obligation</li>
              <li className="ml-20">To prevent or investigate possible wrongdoing in connection with the Service</li>
              <li className="ml-20">To protect the personal safety of users of the Service or the public</li>
              <li className="ml-20">To protect against legal liability</li>
            </ul>
            <h3 className="text-5xl my-6 font-bold capitalize drop-shadow-xl">Security of data</h3>
            <p className="my-2 text-lg drop-shadow-xl">
              The security of your data is important to us at {siteConfig.name}, but remember that no method of
              transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use
              commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
            <h3 className="text-5xl my-6 font-bold capitalize drop-shadow-xl">
              OUR POLICY ON “DO NOT TRACK” SIGNALS UNDER THE CALIFORNIA ONLINE PROTECTION ACT (CALOPPA)
            </h3>
            <p className="my-2 text-lg drop-shadow-xl">
              {siteConfig.name} does not support Do Not Track (“DNT”). Do Not Track is a preference you can set
              in your web browser to inform websites that you do not want to be tracked.
            </p>
            <p className="my-2 text-lg drop-shadow-xl">
              You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser.
            </p>
            <h3 className="text-5xl my-6 font-bold capitalize drop-shadow-xl">
              YOUR DATA PROTECTION RIGHTS UNDER THE GENERAL DATA PROTECTION REGULATION (GDPR)
            </h3>
            <p className="my-2 text-lg drop-shadow-xl">
              If you are a resident of the European Economic Area (EEA), you have certain data protection rights.{' '}
              {siteConfig.name} aims to take reasonable steps to allow you to correct, amend, delete, or limit
              the use of your Personal Data.
            </p>
            <p className="my-2 text-lg drop-shadow-xl">
              If you wish to be informed about what Personal Data we hold about you and if you want it to be removed
              from our systems, please contact us.
            </p>
            <p className="my-2 text-lg drop-shadow-xl">
              In certain circumstances, you have the following data protection rights:
            </p>
            <ul className="list-disc">
              <li className="ml-20">
                The right to access, update or delete the information we have on you. Whenever made possible, you can
                access, update or request deletion of your Personal Data directly within your account settings section.
                If you are unable to perform these actions yourself, please contact us to assist you.
              </li>
              <li className="ml-20">
                The right of rectification. You have the right to have your information rectified if that information is
                inaccurate or incomplete.
              </li>
              <li className="ml-20">
                The right to object. You have the right to object to our processing of your Personal Data. The right of
                restriction. You have the right to request that we restrict the processing of your personal information.
              </li>
              <li className="ml-20">
                The right to data portability. You have the right to be provided with a copy of the information we have
                on you in a structured, machine-readable and commonly used format.
              </li>
              <li className="ml-20">
                The right to withdraw consent. You also have the right to withdraw your consent at any time where{' '}
                {siteConfig.name}
                relied on your consent to process your personal information. Please note that we may ask you to verify
                your identity before responding to such requests.
              </li>
            </ul>
            <p className="my-2 text-lg drop-shadow-xl">
              You have the right to complain to a Data Protection Authority about our collection and use of your
              Personal Data. For more information, please contact your local data protection authority in the European
              Economic Area (EEA).
            </p>
            <h3 className="text-5xl my-6 font-bold capitalize drop-shadow-xl">service providers</h3>
            <p className="my-2 text-lg drop-shadow-xl">
              We may engage third-party companies and individuals to facilitate our Service (“Service Providers”), offer
              the Service on our behalf, carry out Service-related services, or assist us in evaluating how our Service
              is utilized.
            </p>
            <p className="my-2 text-lg drop-shadow-xl">
              These third parties have access to your Personal Data solely to conduct these activities on our behalf and
              are contractually obligated not to disclose or use it for any other objective.
            </p>
            <h4 className="mt-4 text-lg font-bold uppercase text-slate-700 drop-shadow-lg md:mt-4">ANALYTICS</h4>
            <p className="my-2 text-lg drop-shadow-xl">
              We may utilize third-party Service Providers to monitor and analyze the use of our Service.
            </p>
            <h4 className="my-2 text-lg drop-shadow-xl font-medium">Google Analytics </h4>
            <p className="my-2 text-lg drop-shadow-xl">
              Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.
              Google utilizes the data gathered to track and monitor the use of our Service. This data is shared with
              other Google services. Google may use the collected data to contextualize and personalize the ads of its
              own advertising network.
            </p>
            <p className="my-2 text-lg drop-shadow-xl">
              You have the option to opt-out of having your activity on the Service available to Google Analytics by
              installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics
              JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google Analytics about visit
              activity.
            </p>
            <p className="my-2 text-lg drop-shadow-xl">
              For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page:
              https://policies.google.com/privacy?hl=en
            </p>
            <h3 className="mt-4 text-lg font-bold uppercase text-slate-700 drop-shadow-lg md:mt-4">
              BEHAVIORAL REMARKETING
            </h3>
            <p className="my-2 text-lg drop-shadow-xl">
              {siteConfig.name} uses remarketing services to advertise on third-party websites to you after you
              visited our Service. We and our third-party vendors use cookies to inform, optimize, and serve ads based
              on your past visits to our Service.
            </p>
            <h4 className="my-2 text-lg drop-shadow-xl font-medium">Google Ads (AdWords)</h4>
            <p className="my-2 text-lg drop-shadow-xl">
              Google Ads (AdWords) remarketing service is provided by Google Inc.
            </p>
            <p className="my-2 text-lg drop-shadow-xl">
              You can opt-out of Google Analytics for Display Advertising and customize the Google Display Network ads
              by visiting the Google Ads Settings page: http://www.google.com/settings/ads. Google also recommends
              installing the Google Analytics Opt-out Browser Add-on – https://tools.google.com/dlpage/gaoptout – for
              your web browser. Google Analytics Opt-out Browser Add-on provides visitors with the ability to prevent
              their data from being collected and used by Google Analytics.
            </p>
            <p className="my-2 text-lg drop-shadow-xl">
              For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page:
              https://policies.google.com/privacy?hl=en
            </p>
            <h4 className="my-2 text-lg drop-shadow-xl font-medium">Facebook</h4>
            <p className="my-2 text-lg drop-shadow-xl">Facebook remarketing service is provided by Facebook Inc.</p>
            <p className="my-2 text-lg drop-shadow-xl">
              To opt-out from Facebook&apos;s interest-based ads, follow these instructions from Facebook:
              https://www.facebook.com/help/568137493302217
            </p>
            <p className="my-2 text-lg drop-shadow-xl">
              Facebook adheres to the Self-Regulatory Principles for Online Behavioral Advertising established by the
              Digital Advertising Alliance. You can also opt-out from Facebook and other participating companies through
              the Digital Advertising Alliance in the USA http://www.aboutads.info/choices/, the Digital Advertising
              Alliance of Canada in Canada http://youradchoices.ca/ or the European Interactive Digital Advertising
              Alliance in Europe http://www.youronlinechoices.eu/, or opt-out using your mobile device settings.
            </p>
            <p className="my-2 text-lg drop-shadow-xl">
              For more information on the privacy practices of Facebook, please visit Facebook’s Data Policy:
              https://www.facebook.com/privacy/explanation.
            </p>
            <h3 className="text-5xl my-6 font-bold capitalize drop-shadow-xl">LINKS TO OTHER WEBSITES</h3>
            <p className="my-2 text-lg drop-shadow-xl">
              Our Service may include links to other websites that are not managed by us. If you select a third-party
              link, you will be directed to that third party’s website. We highly recommend you to review the Privacy
              Policy of each website you navigate to.
            </p>
            <p className="my-2 text-lg drop-shadow-xl">
              {siteConfig.name} has no authority over and bears no responsibility for the content, privacy
              policies, or practices of any third-party websites or services.
            </p>
            <h4 className="text-5xl my-6 font-bold capitalize drop-shadow-xl">CHILDREN&apos;S DATA PROTECTION</h4>
            <p className="my-2 text-lg drop-shadow-xl">
              Our Service is not intended for individuals below the age of 18 (&quot;Minors&quot;).
            </p>
            <p className="my-2 text-lg drop-shadow-xl">
              We intentionally avoid collecting personally identifiable information from anyone under the age of 18. If
              you are a parent or guardian and become aware that your Minor has shared Personal Data with us, please
              reach out to us. If we discover that we have inadvertently gathered Personal Data from Minors without
              obtaining parental approval, we undertake actions to delete that information from our servers.
            </p>
            <h3 className="text-5xl my-6 font-bold capitalize drop-shadow-xl">MODIFICATIONS TO THIS PRIVACY POLICY</h3>
            <p className="my-2 text-lg drop-shadow-xl">
              We reserve the right to revise our Privacy Policy as necessary. We will inform you of any amendments by
              showcasing the updated Privacy Policy on this page.
            </p>
            <p className="my-2 text-lg drop-shadow-xl">
              We will communicate any changes through an email and/or an important alert on our Service, before the
              alteration takes effect, and we&apos;ll update the &quot;effective date&quot; at the beginning of this
              Privacy Policy.
            </p>
            <div className="my-2 text-lg drop-shadow-xl">
              We recommend you revisit this Privacy Policy from time to time to stay informed about any modifications.
              Any changes to this Privacy Policy become valid at the moment they are made available on this page.
            </div>
            <h3 className="text-5xl my-6 font-bold capitalize drop-shadow-xl">REACH OUT TO US</h3>
            <div className="my-2 text-lg drop-shadow-xl">
              For any inquiries or concerns regarding this Privacy Policy, we welcome you to reach out to us:{' '}
            </div>
            <ul className="list-disc">
              <li className="ml-20">Via email at: {siteConfig.email}</li>
              <li className="ml-20">Through a phone call at {siteConfig.phone}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

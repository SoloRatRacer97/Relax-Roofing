export default function SPServices() {
  return (
    <div className="bg-white py-12 servicesSection">
      <div className="container">
        <div className="bg-spAccent flex flex-col items-center text-center gap-8 drop-shadow-2xl rounded-md lg:py-12 px-4">
          <h2 className="text-4xl lg:text-6xl font-bold text-primary capitalize pt-10 lg:pt-0">
            Premier Roofing Services
          </h2>
          <div className="text-xl w-full lg:w-[70%]">
            Experience top-tier roofing services with Relax Roofing. We are committed to precision and customer
            satisfaction in every roofing project we undertake.
          </div>
          <div className="w-full flex flex-wrap gap-12 justify-center pb-10 lg:pb-0">
            <div className="w-[90%] lg:w-[30%] bg-gray-200 text-start rounded-md flex flex-col items-start gap-2 p-6">
              <div className="h-14 w-14 bg-spPrimary flex items-center justify-center rounded-md font-medium text-white text-2xl">
                1
              </div>
              <div className="text-2xl font-medium">Customized Roofing Solutions</div>
              <div>
                Get a tailored roofing solution designed to meet your specific needs. Our experts work closely with you
                to ensure we deliver exactly what your home requires.
              </div>
            </div>
            <div className="w-[90%] lg:w-[30%] bg-gray-200 text-start rounded-md flex flex-col items-start gap-2 p-6">
              <div className="h-14 w-14 bg-spSecondary flex items-center justify-center rounded-md font-medium text-white text-2xl">
                2
              </div>
              <div className="text-2xl font-medium">High-Quality Materials & Craftsmanship</div>
              <div>
                We use only the best materials and employ skilled craftsmanship to ensure your roof is not only visually
                appealing but also robust and long-lasting.
              </div>
            </div>
            <div className="w-[90%] lg:w-[30%] bg-gray-200 text-start rounded-md flex flex-col items-start gap-2 p-6">
              <div className="h-14 w-14 bg-spPrimaryDark flex items-center justify-center rounded-md font-medium text-white text-2xl">
                3
              </div>
              <div className="text-2xl font-medium">Guaranteed Satisfaction</div>
              <div>
                Our job isn't done until you're completely satisfied. We ensure a thorough cleanup post-project and a
                final walkthrough to guarantee your full approval of our work.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

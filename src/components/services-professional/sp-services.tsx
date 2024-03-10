export default function SPServices() {
  return (
    <div className="bg-white py-12 servicesSection">
      <div className="container">
        <div className=" bg-spAccent flex flex-col items-center text-center gap-8 drop-shadow-2xl rounded-md lg:py-12 px-4">
          <h2 className="text-4xl lg:text-6xl font-bold text-primary capitalize pt-10 lg:pt-0">
            Exceptional Decking & Fencing Services
          </h2>
          <div className="text-xl w-full lg:w-[70%]">
            Experience the best in decking and fencing with Desmond and Sons Construction. We ensure every job is completed with utmost precision and customer satisfaction.
          </div>
          <div className="w-full flex flex-wrap gap-12 justify-center pb-10 lg:pb-0">
            <div className="w-[90%] lg:w-[30%] bg-gray-200 text-start rounded-md flex flex-col items-start gap-2 p-6">
              <div className="h-14 w-14 bg-spPrimary flex items-center justify-center rounded-md font-medium text-white text-2xl">
                1
              </div>
              <div className="text-2xl font-medium">Personalized Consultation</div>
              <div>
                Start with a personalized quote tailored to your specific decking or fencing needs. Our team works closely with you to understand and meet your requirements.
              </div>
            </div>
            <div className="w-[90%] lg:w-[30%] bg-gray-200 text-start rounded-md flex flex-col items-start gap-2 p-6">
              <div className="h-14 w-14 bg-spSecondary flex items-center justify-center rounded-md font-medium text-white text-2xl">
                2
              </div>
              <div className="text-2xl font-medium">Quality Construction</div>
              <div>
                Our skilled craftsmen use top-quality materials and techniques to ensure your deck or fence is not only aesthetically pleasing but also durable and long-lasting.
              </div>
            </div>
            <div className="w-[90%] lg:w-[30%] bg-gray-200 text-start rounded-md flex flex-col items-start gap-2 p-6">
              <div className="h-14 w-14 bg-spPrimaryDark flex items-center justify-center rounded-md font-medium text-white text-2xl">
                3
              </div>
              <div className="text-2xl font-medium">Complete Satisfaction</div>
              <div>
                We conclude each project with a thorough cleanup and a final walkthrough to ensure your complete satisfaction with our work and service.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SPServices() {
  return (
    <div className="bg-white py-12 servicesSection">
      <div className="container">
        <div className=" bg-spAccent flex flex-col items-center text-center gap-8 drop-shadow-2xl rounded-md lg:py-12 px-4">
          <h2 className="text-4xl lg:text-6xl font-bold text-spNeutral capitalize pt-10 lg:pt-0">
            We get the job done <br></br>right - every time
          </h2>
          <div className="text-xl w-full lg:w-[70%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, asperiores quos ab quia animi veniam autem
            nemo quas architecto distinctio.
          </div>
          <div className="w-full flex flex-wrap gap-12 justify-center pb-10 lg:pb-0">
            <div className="w-[90%] lg:w-[30%] bg-gray-200 text-start rounded-md flex flex-col items-start gap-2 p-6">
              <div className="h-14 w-14 bg-spPrimary flex items-center justify-center rounded-md font-medium text-white text-2xl">
                1
              </div>
              <div className="text-2xl font-medium">Get a quote</div>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam provident vel necessitatibus veniam
                magni aliquid non laborum iusto est repellendus.
              </div>
            </div>
            <div className="w-[90%] lg:w-[30%] bg-gray-200 text-start rounded-md flex flex-col items-start gap-2 p-6">
              <div className="h-14 w-14 bg-spSecondary flex items-center justify-center rounded-md font-medium text-white text-2xl">
                2
              </div>
              <div className="text-2xl font-medium">Word Start</div>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam provident vel necessitatibus veniam
                magni aliquid non laborum iusto est repellendus.
              </div>
            </div>
            <div className="w-[90%] lg:w-[30%] bg-gray-200 text-start rounded-md flex flex-col items-start gap-2 p-6">
              <div className="h-14 w-14 bg-spNeutral flex items-center justify-center rounded-md font-medium text-white text-2xl">
                3
              </div>
              <div className="text-2xl font-medium">Cleanup & Invoice</div>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam provident vel necessitatibus veniam
                magni aliquid non laborum iusto est repellendus.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

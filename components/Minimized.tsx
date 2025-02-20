export default function Minimized() {
  const steps = [
    {
      title: "Analysis",
      description:
        "Our GPS Tracking Software Development approach starts with a thorough project study to pinpoint your company’s requirements.",
      icon: "/Analysis.png",
      bgColor: "bg-[#f3f4f6]",
    },
    {
      title: "UX/UI Designing",
      description:
        "We develop user experience (UX/UI) for tracking device software that improves your GPS monitoring program.",
      icon: "/Designing.png",
      bgColor: "bg-[#f3f4f6]",
    },
    {
      title: "Development",
      description:
        "Our knowledgeable developers use the newest technology to create GPS tracking software that fits your particular requirements.",
      icon: "/Development.png",
      bgColor: "bg-[#f3f4f6]",
    },
    {
      title: "In-depth Testing",
      description:
        "We thoroughly test to guarantee the programs on GPS development tracking software runs fault-free and is easy to use.",
      icon: "/test.png",
      bgColor: "bg-[#f3f4f6]",
    },
    {
      title: "Project Launch",
      description:
        "We start the project after the testing is over and install the program on your chosen platform.",
      icon: "/Launch.png",
      bgColor: "bg-[#f3f4f6]",
    },
  ];

  return (
    <div className="w-full bg-white ">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center bg-white">
        <h2 className="mb-6 text-center text-[2rem] font-bold font-Poppins text-[#473bf0]">
          Minimized Software Development Process for GPS Tracking
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.slice(0, 3).map((step, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md ${step.bgColor}`}
            >
              <img
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                src={step.icon}
                alt={step.title}
                className="mx-auto mb-4 w-16 h-16"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {steps.slice(3).map((step, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md ${step.bgColor}`}
            >
              <img
                style={{ display: "flex" }}
                src={step.icon}
                alt={step.title}
                className="mx-auto mb-4 w-16 h-16"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

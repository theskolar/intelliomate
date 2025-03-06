export default function Minimized() {
  const steps = [
    {
      title: "Analysis",
      description:
        "Our GPS Tracking Software Development approach starts with a thorough project study to pinpoint your company’s requirements.",
      icon: "/Analysis.png",
      bgColor: "bg-box",
    },
    {
      title: "UX/UI Designing",
      description:
        "We develop user experience (UX/UI) for tracking device software that improves your GPS monitoring program.",
      icon: "/Designing.png",
      bgColor: "bg-box"
    },
    {
      title: "Development",
      description:
        "Our knowledgeable developers use the newest technology to create GPS tracking software that fits your particular requirements.",
      icon: "/Development.png",
      bgColor: "bg-box"
    },
    {
      title: "In-depth Testing",
      description:
        "We thoroughly test to guarantee the programs on GPS development tracking software runs fault-free and is easy to use.",
      icon: "/test.png",
      bgColor: "bg-box"
    },
    {
      title: "Project Launch",
      description:
        "We start the project after the testing is over and install the program on your chosen platform.",
      icon: "/Launch.png",
      bgColor: "bg-box"
    },
  ];

  return (
    <div className="w-full bg-background dark:bg-background-dark">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="mb-6 text-center text-[2rem]   font-[500] font-poppins text-boxfont 
dark:text-boxfont-dark
        ">
          Minimized Software Development Process for <span style={{color:'#50c878'}}>GPS Tracking</span> 
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
              <h3 className="text-xl  text-box3 mb-2   font-[500] font-poppins">
                {step.title}
              </h3>
              <p className="text-font text-sm   font-[400] font-poppins">{step.description}</p>
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
              <h3 className="text-xl  text-box3 mb-2   font-[500] font-poppins">
                {step.title}
              </h3>
              <p className="text-font text-sm   font-[400] font-poppins">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

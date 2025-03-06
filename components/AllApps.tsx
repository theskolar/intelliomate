export default function GPSTechnologies() {
  const categories = [
    {
      title: "IOS App Development",
      technologies: [
        { name: "Swift", icon: "swift.png" },
        { name: "Objective C", icon: "swift-ui.webp" },
        { name: "Odoo", icon: "oddo.webp" },
        { name: "RX Swift", icon: "rx-swift.webp" },
        { name: "Ionic", icon: "ionic.webp" },
        { name: "Cocoapods", icon: "cocoapods.webp" },
      ],
    },
    {
      title: "Cross-Platform Development",
      technologies: [
        { name: "React Native", icon: "react.webp" },
        { name: "JavaScript", icon: "javascript.webp" },
        { name: "TypeScript", icon: "typescript.webp" },
        { name: "Flutter", icon: "flutter.webp" },
        { name: "Xamarin", icon: "xamrine.webp" },
      ],
    },
    {
      title: "Android App",
      technologies: [
        { name: "Java", icon: "java.webp" },
        { name: "Kotlin", icon: "kotline.webp" },
        { name: "Fastlane", icon: "fastlane.webp" },
        { name: "Gradle", icon: "gredle.webp" },
        { name: "Dagger", icon: "dagger.webp" },
        { name: "Jetpack", icon: "jetpack.webp" },
      ],
    },
    {
      title: "Backend Development",
      technologies: [
        { name: "Java", icon: "java.webp" },
        { name: "Node.js", icon: "node-js.webp" },
        { name: "Rails", icon: "ruby-rails.webp" },
        { name: "Python", icon: "python.webp" },
        { name: "Firebase", icon: "firebase.webp" },
      ],
    },
  ];
  const costDetails = [
    {
      title: "GPS Tracking Software Development Cost",
      description:
        "The intricacy of features, platform, and customization determines the cost of creating GPS tracking system software. While more sophisticated solutions with advanced features like real-time monitoring, artificial intelligence integration, and cloud support might cost $50,000 or more, a simple app can run anywhere from $10,000 to $30,000.",
      icon: "map.png",
      bgColor: "bg-box",
    },
    // {
    //   title: "Cost to Hire GPS Tracking Software Developers",
    //   description:
    //     "Hiring committed GPS monitoring software engineers usually pays between $50 and $150 per hour, depending on their location and degree of experience. Project length and degree of complexity affect this cost.",
    //   icon: "hired.png",
    //   bgColor: "bg-[#f3f4f6]",
    // },
    {
      title: "GPS Tracking Software Maintenance Cost",
      description:
        "Software maintenance is vital for GPS tracker system software upgrades, bug repairs, and performance enhancement after release. Depending on the complexity of the software and continuous support requirements, maintenance expenses could vary from 15% to 25% of the yearly total development cost.",
      icon: "softwarecost.png",
      bgColor: "bg-box",
    },
    {
      title: "GPS Tracking Software UX/UI Cost",
      description:
        "Purchasing UX/UI design guarantees that your GPS tracking system is intuitive. Although UX/UI design expenses vary, depending on customization and the interface's complexity, you should spend between $5,000 to $15,000 for well-designed software.",
      icon: "uxuicost.png",
      bgColor: "bg-box",
    },
  ];

  return (
    <div className="w-full bg-background 
dark:bg-background-dark
    ">
      <div className="max-w-5xl mx-auto text-center py-10 px-6 sm:px-8">
        <h2 className="mb-6 text-center text-[2rem]  font-[500]   font-Poppins text-boxfont 
dark:text-boxfont-dark
        ">
          Trending Technologies for <span style={{ color: '#50c878' }}>Custom GPS Tracking </span> Software Development
        </h2>
        <p className="text-font text-md mt-2   font-[400] font-poppins">
          Businesses may improve functionality and accuracy with bespoke GPS
          tracking software developed using emerging technology that deliver
          accurate GPS tracking data. The automation, data security, and
          scalability of these technologies make GPS devices more efficient and
          adaptable to different industrial demands.
        </p>
        <div className="mt-6">
          {categories.map((category, index) => (
            <div key={index} className={`mt-6 bg-box p-4 rounded-lg flex flex-col ${index % 2 === 1 ? 'items-end': ''}`}>
              <h3 className="text-lg font-semibold text-box3 text-left   font-[500] font-poppins">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-start mt-3 ">
                {category.technologies.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-2 bg-white shadow-md p-2 rounded-lg m-2"
                  >
                    <img
                      src={`/${tech.icon}`}
                      alt={tech.name}
                      className="w-8 h-8"
                    />
                    <span className="text-gray-800 text-sm font-medium">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center py-10 px-6 sm:px-8 md:px-10 lg:px-12">
        <h2 className="mb-6 text-center text-[2rem]   font-[500]  font-Poppins text-boxfont
dark:text-boxfont-dark
        ">
          <span style={{ color: '#50c878' }}>GPS Tracking </span> Solutions Cost Estimation
        </h2>
        <p className="text-font text-md mt-2   font-[400] font-poppins">
          With our special GPS tracking systems, discover the power of accuracy.
          Thinking about the expenses to create GPS tracking systems? Well,
          choose us for GPS track solutions and forget everything about your
          budget. Get realistic cost projections to guarantee that you maximize
          efficiency without draining your pocket book. Discover with us the
          direction GPS tracking systems will go, where price and quality will
          coexist together.
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {costDetails.map((cost, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-md ${cost.bgColor}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex justify-center">
                  <img
                    src={`/${cost.icon}`}
                    alt={cost.title}
                    className="w-10 h-10"
                  />
                </div>
                <h3 className="text-lg  text-box3 font-[400] font-poppins text-justify max-w-[80%]">
                  {cost.title}
                </h3>
                <p className="text-font text-sm mt-2 font-[400] font-poppins text-justify max-w-[80%]">
                  {cost.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

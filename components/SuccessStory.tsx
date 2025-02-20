export default function SuccessStory() {
  const projects = [
    {
      title: "Quizzire",
      description:
        "To increase user involvement, we developed a dynamic quiz app with location-based challenges. The program lets users take tests depending on their location, therefore providing a customized and unique experience.",
      buttonText: "View Case Study",
      bgColor: "bg-gradient-to-r from-indigo-500 to-purple-500",
      buttonColor: "bg-indigo-700 hover:bg-indigo-900",
      textColor: "text-white",
      icon: "quizzire-icon.png",
      image: "quizzire-app.png",
    },
    {
      title: "Zaxbys",
      description:
        "We developed a whole pickup and delivery system for a chain of restaurants. The program simplified the order processing, therefore enhancing order accuracy and delivery times. It enabled the eatery to handle many orders at once, thus improving operational efficiency and providing a more fulfilling experience for patrons.",
      buttonText: "View Case Study",
      bgColor: "bg-gradient-to-r from-red-500 to-pink-500",
      buttonColor: "bg-red-700 hover:bg-red-900",
      textColor: "text-white",
      icon: "zaxbys-icon.png",
      image: "zaxbys-app.png",
    },
    {
      title: "Gro Supermart",
      description:
        "We developed a delivery management system for an online retailer. Our solution offered faster delivery times, lower operating costs, and generally improved customer happiness and experience followed by real-time updates and better delivery paths.",
      buttonText: "View Case Study",
      bgColor: "bg-gradient-to-r from-orange-500 to-yellow-500",
      buttonColor: "bg-orange-700 hover:bg-orange-900",
      textColor: "text-white",
      icon: "grosupermart-icon.png",
      image: "grosupermart-app.png",
    },
    {
      title: "Tokyo MK",
      description:
        "With precise GPS tracking software development strategies, we made special software for a private car service that made operations run more smoothly and improved customer service. We added features like real-time tracking, optimal routes, and improved vehicle management, thereby guaranteeing timely and seamless limo operations.",
      buttonText: "View Case Study",
      bgColor: "bg-gradient-to-r from-yellow-500 to-green-500",
      buttonColor: "bg-yellow-700 hover:bg-yellow-900",
      textColor: "text-white",
      icon: "tokyomk-icon.png",
      image: "tokyomk-app.png",
    },
  ];

  return (
    <div className="w-full bg-white">
      <div className="max-w-6xl mx-auto text-center py-12 px-4">
        <h2 className="text-4xl font-bold text-blue-700">Our Success Story</h2>
        <p className="text-black text-lg mt-4 max-w-3xl mx-auto">
          We specialize in providing mobile app development tools and
          specialized GPS tracking systems. Our varied portfolio showcases
          success in several sectors, enabling companies to maximize operations
          and enhance customer experiences.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl shadow-xl ${project.bgColor} ${project.textColor} transition-transform transform hover:scale-105`}
            >
              <div className="flex items-start space-x-4">
                <img
                  src={`/icons/${project.icon}`}
                  alt={project.title}
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm mt-2">{project.description}</p>
                  <button
                    className={`mt-4 px-5 py-2 text-lg font-medium rounded-lg shadow-lg transition-colors ${project.buttonColor}`}
                  >
                    {project.buttonText} →
                  </button>
                </div>
                <img
                  src={`/images/${project.image}`}
                  alt={project.title}
                  className="w-40 h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

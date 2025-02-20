export default function SolutionsWeOffer() {
  const solutions = [
    {
      title: "Trucking",
      description:
        "Real-time position tracking, route planning, and vehicle performance monitoring abound from our GPS tracking solutions for trucking. Our customized transportation solutions will help save running expenses and increase efficiency.",
      icon: "/truck.png",
      iconColor: "bg-red-600",
    },
    {
      title: "Agriculture",
      description:
        "GPS tracking finds use in agriculture for field management, equipment monitoring, and machinery route optimization. Our technologies provide exact resource monitoring, therefore guaranteeing more effective agricultural practices.",
      icon: "/culture.png",
      iconColor: "bg-green-700",
    },
    {
      title: "FMCGS",
      description:
        "GPS tracking app development helps the FMCG industry guarantee timely delivery, enhance inventory control, and provide a real-time supply chain view. Increase logistics' effectiveness and reduce delays.",
      icon: "/industry.png",
      iconColor: "bg-yellow-600",
    },
    {
      title: "Passenger Transport",
      description:
        "Systems for GPS tracking passenger vehicles enhance route optimization, real-time position monitoring, and safety. Our solutions improve the general quality of services by addressing buses, taxis, and ride-sharing programs.",
      icon: "/transport.png",
      iconColor: "bg-teal-600",
    },
    {
      title: "Waste & Recycling",
      description:
        "GPS tracking finds use in agriculture for field management, equipment monitoring, and machinery route optimization. Our technologies provide exact resource monitoring, therefore guaranteeing more effective agricultural practices.",
      icon: "/recycle.png",
      iconColor: "bg-yellow-500",
    },
    {
      title: "Financial Institutions",
      description:
        "GPS tracking app development provides real-time information for valuable items, security monitoring, and asset tracking in financial institutions. Our solutions guarantee constant tracking and protection of your valuables.",
      icon: "/financial.png",
      iconColor: "bg-blue-700",
    },
    {
      title: "Forestry & Wildlife",
      description:
        "Our forestry and wildlife GPS tracking systems software provide real-time data collecting, location monitoring for animal protection, and management of forests, therefore supporting environmental sustainability.",
      icon: "/wildlife.png",
      iconColor: "bg-purple-700",
    },
    {
      title: "Sports",
      description:
        "In sports, our Tracking App Development systems provide athletes with route tracking, real-time performance monitoring, and data analysis. With our tailored solutions, we monitor development and increase training effectiveness.",
      icon: "/sport.png",
      iconColor: "bg-pink-600",
    },
  ];

  return (
    <div className="w-full bg-white">
      <div className="max-w-10xl mx-auto p-6">
        <h2 className="mb-6 text-center text-[2rem] font-bold font-Poppins text-[#473bf0]">
          Solutions We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="p-6 bg-[#f3f4f6] shadow-md rounded-lg flex items-start space-x-4 border hover:shadow-lg transition"
            >
              <img
                src={solution.icon}
                alt={solution.title}
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-lg font-semibold text-[#473bf0]">
                  {solution.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

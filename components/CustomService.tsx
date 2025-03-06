export default function GPSTrackingServices() {
  const services = [
    {
      title: "Geo-tagging & Geo-location",
      description:
        "With accurate geo-tagging and geo-location tools provided by our GPS tracking software development team, companies can monitor staff members or assets in real-time. This On-demand app development function offers increased precision for location-based services, raising general efficiency.",
      icon: "📍",
    },
    {
      title: "Real-Time Location",
      description:
        "Our GPS app developers expertise in real-time location monitoring so companies can quickly check staff members, tools, and cars. Real-time location updates provide better control over operations for fleet management or asset monitoring.",
      icon: "📡",
    },
    {
      title: "Fleet Management",
      description:
        "Our fleet GPS tracking software development & management systems let companies monitor their vehicle fleet, optimize routes, measure fuel use, and guarantee vehicle upkeep. The software tracker GPS device advances logistics and helps reduce running expenses.",
      icon: "🚚",
    },
    {
      title: "Improved Security",
      description:
        "Through real-time monitoring, theft detection, and geofencing—all of which GPS tracking app development enable—businesses may improve their security. This guarantees general security by reducing hazards and protecting people, assets, and vehicles.",
      icon: "🔒",
    },
    {
      title: "Trips History",
      description:
        "Our software tracking tips tool lets you save journey history and provide comprehensive route, travel, and vehicle performance reports. You can choose Driving Apps To Make Money as a viable option that uses such features to assure maximum performance, and raise responsibility.",
      icon: "🛣️",
    },
    {
      title: "Driver Behavior Monitoring",
      description:
        "Software tracking gps driving behavior using acceleration monitoring, forceful braking, and speed tracking. By means of driver pattern analysis, this guarantees safer driving, lowers accidents, and enhances fleet performance.",
      icon: "👨‍✈️",
    },
  ];

  return (
    <div className="w-full bg-background  dark:bg-background-dark">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[2rem] font-[500] font-Poppins text-boxfont dark:text-boxfont-dark mb-12">
          Our Custom  <span style={{ color: '#50c878' }}>GPS Tracking App </span>Development Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-box shadow-md rounded-lg p-6 text-center shadow-[0_0_8px_#473bf0]"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-[500] font-poppins text-box3 mb-2">
                {service.title}
              </h3>
              <p className="text-font  font-[400] font-poppins text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

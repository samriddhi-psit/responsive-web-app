import Card from "../ui/Card";

export default function OurWork() {
  const workItems = [
    {
      title: "Web Development",
      desc: "We build modern, responsive, and fast websites using the latest technologies.",
      icon: "💻",
    },
    {
      title: "UI/UX Design",
      desc: "Designs that are not just pretty but also user-friendly and accessible.",
      icon: "🎨",
    },
    {
      title: "API Integration",
      desc: "Seamless API integration to bring dynamic data into your applications.",
      icon: "🔗",
    },
  ];

  return (
    <section id="our-work" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Work
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Here’s a glimpse of what we do best. Our focus is on building
          user-friendly, modern, and efficient digital products.
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {workItems.map((item, idx) => (
            <Card key={idx} title={item.title} desc={item.desc} icon={item.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}

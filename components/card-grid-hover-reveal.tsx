import Image from "next/image";

const projects = [
  {
    id: 1,
    image: "/images/revolution-motors-logo.png",
    title: "Revolution Motors",
    summary: "Social campaign + rebranding. Result: +140% leads.",
    url: "/case-studies/revolution-motors"
  },
  {
    id: 2,
    image: "/images/module-home-logo.png",
    title: "Module Home",
    summary: "Organic growth via SEO & email funnels.",
    url: "/case-studies/module-home"
  },
  {
    id: 3,
    image: "/images/thrifted-treasures-logo.jpg",
    title: "Thrifted Treasures",
    summary: "Social campaign + rebranding. Result: +140% leads.",
    url: "/case-studies/thrifted-treasures"
  },
  // Add more...
];

export default function ProjectGrid() {
  return (
    <section className="my-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Recent Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 xl:px-0">
        {projects.map((project) => (
          <a
            href={project.url}
            key={project.id}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={600}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#ba4b2f] bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white p-4">
              <div>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm">{project.summary}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

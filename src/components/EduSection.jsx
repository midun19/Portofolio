import React from "react";

const educations = [
  { name: "SMA NEGERI 2 SUBANG", year: "2015-2018" },
  { name: "ITENAS BANDUNG", year: "2018-2025" },
];

const experiences = [
  {
    name: "Radian Farmhouse Game",
    year: "Oct 2021 - Oct 2022",
    position: "Employee",
  },
  {
    name: "Extreme Sublimation",
    year: "Aug 2023 - Feb 2024",
    position: "Production Team",
  },
  {
    name: "Ethica Store Bandung",
    year: "Feb 2024 - May 2024",
    position: "Freelance Warehouse Team",
  },
  {
    name: "Red 9 Shoes Laundry",
    year: "Jan 2025 - May 2025",
    position: "Freelance",
  },
];

const EduSection = () => {
  return (
    <section className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Education &<span className="text-primary"> Experiences</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {educations.map((edu, key) => (
            <div
              key={key}
              className="bg-card p-5 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-2">
                <h3 className="font-semibold text-2xl">{edu.year}</h3>
                <h2 className="text-lg">{edu.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, key) => (
            <div
              key={key}
              className="bg-card p-5 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-2">
                <h3 className="font-semibold text-2xl">{exp.year}</h3>
                <h2 className="text-lg">{exp.name}</h2>
                <p className="text-sm opacity-50">{exp.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EduSection;

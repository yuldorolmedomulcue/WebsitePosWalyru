import aboutData from '@data/about.json';

function TeamSection() {
  if (!aboutData) {
    return null;
  }

  const team = aboutData.team;

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="mb-20 md:max-w-xl text-center mx-auto" data-aos="fade-up">
          <span className="inline-block mb-2.5 text-green-400 font-medium bg-gray-50 px-3 py-2 rounded-full">Nuestro Equipo</span>
          <h2 className="font-heading text-7xl lg:text-8xl text-black tracking-7xl lg:tracking-8xl">Equipo de Trabajo</h2>
        </div>
        <div className="flex flex-wrap -m-8" data-aos="fade-up" data-aos-delay="100">
          {team.map((member, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-8">
              <div className="text-center">
                <img className="mb-9 mx-auto rounded-full w-60 h-60 object-cover hover:scale-110 transition-transform duration-300" src={member.image} alt="" />
                <span className="inline-block mb-2 text-gray-600">{member.role}</span>
                <h3 className="text-3xl text-black"> {member.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
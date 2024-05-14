// import data
import { services } from "../data";

function Services() {
  return (
    <section
      className="section"
      id="services"
    >
      <div className="containser mx-auto">
        <h2 className="section-title">
          {services.title}
          <span className="dot"></span>
        </h2>
        <p className="section-subtitle">{services.subtitle}</p>
        {/* services items */}
        <div className="flex flex-col items-center gap-y-12 lg:flex-row lg:justify-between lg:px-[136px]">
          {services.skills.map((service, index) => {
            return (
              <div
                className="p-[30px] w-full max-w-[417px] flex flex-col text-center lg:text-left hover:bg-white hover:shadow-2xl cursor-crosshair transition-all"
                key={index}
              >
                {/* icon */}
                <div className="w-20 h-20 mb-12 mx-auto lg:mx-0">
                  <img
                    src={service.icon}
                    alt=""
                  />
                </div>
                {/* services name */}
                <h3 className="text-2xl mb-3 font-semibold">{service.name}</h3>
                {/* service description */}
                <p className="text-grey text-lg lg:mb-16">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;

import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="flex flex-col w-full mb-20">
              <h1 className="sm:text-4xl text-9xl mb-4 text-white text-center" >
                Data to transform social enterprises
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-center">
                At Technugget, we use data-driven intelligence to drive decision making for government and non-government
                organisations to help solve social problems. Because social enterprises are dynamic and complex, involing
                a number of stakeholders and feedback loops among interelated components, we are positioned to build the
                technology that will drive impact for your organisation.
              </p>
            </div> 
      </div>
    </section>
  );
}
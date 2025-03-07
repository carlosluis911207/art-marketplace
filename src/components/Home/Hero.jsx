import React from "react";
import { Link } from "react-router-dom";
import BannerHome from "../../assets/img/banner-2.png";
import { isAuthenticated } from "../../utils/isAuthenticated";

const Hero = () => (
  <section className="bg-white w-full">
    <div className="flex items-center w-full">
      <div className="flex flex-col lg:flex-row items-center lg:justify-start w-full">
        <div className="w-full lg:w-1/2 lg:pl-11 px-5 sm:px-0 py-20 lg:py-0">
          <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0 mx-auto text-justify lg:text-left">
            <h1 className="font-bold tracking-add text-lightblack text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl leading-add text-center lg:text-left">
              <span className="block">Entre al nuevo mundo</span>
              <span className="block">del Arte Digital</span>
            </h1>


            <div className="relative flex flex-col sm:flex-row sm:space-x-4 justify-center lg:justify-start">
              { isAuthenticated() ?
              <Link
                to="/products"
                className="shadow-button hover-scale inline-flex items-center justify-center px-11 py-3.5 text-xl font-semibold leading-6 text-white whitespace-nowrap bg-primary rounded-md shadow-sm tracking-add"
                >
                Descargar ahora
                </Link>
              :
              <Link
                to="/register"
                className="shadow-button hover-scale inline-flex items-center justify-center px-11 py-3.5 text-xl font-semibold leading-6 text-white whitespace-nowrap bg-primary rounded-md shadow-sm tracking-add"
              >
                Regístrate ahora
              </Link>
              }
            </div>

          </div>
        </div>
        <div className="w-full xl:h-full xl:w-1/2 lg:w-3/5 mx-auto">
          <div className="w-full h-full">
            <img
              alt="Main Banner"
              src={BannerHome}
              className="w-full lg:w-full xl:w-vh"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

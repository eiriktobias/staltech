import React from "react";
import {
  PhoneIcon,
  TruckIcon,
  WrenchIcon,
  ArrowSmallRightIcon,
} from "@heroicons/react/24/outline";
import Field from "../img/field.jpg";

const Support = () => {
  return (
    <div className="w-full h-screen mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img className="w-full h-full object-cover mix-blend-overlay" src={Field} alt="/" />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">Support</h2>
          <h3 className="text-5xl font-bold py-6 text-center">En eller annen tekst</h3>
          <p className="py-4 text-3xl text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic libero
            magni, provident eligendi non modi asperiores perferendis
            consequatur harum nihil!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <PhoneIcon className="w-16 p-4 bg-slate-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Salg</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Adipisci accusantium distinctio earum architecto sequi harum
                aliquam laborum incidunt, labore perspiciatis?
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-slate-600">
                Kontakt oss <ArrowSmallRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <TruckIcon className="w-16 p-4 bg-slate-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Frakt</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Adipisci accusantium distinctio earum architecto sequi harum
                aliquam laborum incidunt, labore perspiciatis?
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-slate-600">
                Kontakt oss <ArrowSmallRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <WrenchIcon className="w-16 p-4 bg-slate-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Deler</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Adipisci accusantium distinctio earum architecto sequi harum
                aliquam laborum incidunt, labore perspiciatis?
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-slate-600">
                Kontakt oss <ArrowSmallRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;

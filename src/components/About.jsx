import React from "react";

const About = () => {
  return (
    <div className="w-full my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold uppercase">
            Landbruksmaskiner som står for holdbarhet, funksjonalitet og
            estetikk
          </h2>
          <p className="text-2xl py-6 text-gray-500">
            Vi importerer og markedsfører Staltech i Norge. Basen for vår
            virksomhet er i Såner og vi forhandler Staltech over hele landet.
            Hos oss får du stor erfaring, høy kompetanse og en seriøs forhandler
            som tar ansvar hele veien fra kjøp til ettermarked.
          </p>
          <h3 className="text-3xl font-bold">STALTECH GIR VERDI FOR PENGENE</h3>
          <p className="text-2xl py-6 text-gray-500">
            Polske Staltech har vært aktiv i markedet for landbrukstjenester
            siden starten av 1980-tallet. De står for holdbarhet, funksjonalitet
            og estetikk. Deres hovedmål er å produsere og selge produkter av høy
            kvalitet til en fornuftig pris.
          </p>
          <h3 className="text-3xl font-bold">GARANTI</h3>
          <p className="text-4xl py-6 text-gray-500">
            Staltech gir 1 års garanti på alle maskiner for å sikre at du som
            kunde er fornøyd med ditt nye produkt. Vi har også reservedeler til
            alle maskiner vi selger. Velkommen til å kontakte oss!
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-slate-800">1 års</p>
            <p className="text-gray-400 mt-2">Garanti</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-slate-800">24/7</p>
            <p className="text-gray-400 mt-2">Levering</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-slate-800">70 års</p>
            <p className="text-gray-400 mt-2">Erfaring</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

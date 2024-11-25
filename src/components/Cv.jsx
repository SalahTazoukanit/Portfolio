const Cv = () => {
  return (
    <>
      <div className="mt-20">
        <h1 className="text-white max-sm:text-[40px]">CURRICULUM VITAE</h1>
      </div>
      <p className="text-zinc-500 mb-5">
        Telecharger mon cv pour avoir plus d'informations sur mon parcours.
      </p>
      <a
        href="/cv.pdf"
        download="CV_Salaheddine_Tazoukanit.pdf"
        className="bg-blue-500 px-4 py-3 rounded-lg md:w-1/5 text-center hover:opacity-50"
      >
        Télécharger le CV
      </a>
    </>
  );
};
export default Cv;

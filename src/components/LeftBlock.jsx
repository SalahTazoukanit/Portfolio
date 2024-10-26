const LeftBlock = () => {
  return (
    <div className="left-block text-black flex flex-col justify-center items-center border bg-white rounded-2xl p-5 gap-10 w-full md:w-1/5 md:sticky md:top-[15vh] md:mt-[50px] md:h-[70vh]">
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h3 className="text-center">Salaheddine Tazoukanit</h3>
      </div>
      <div>
        <p className="opacity-50 text-center">
          Développeur Web et Mobile passionné par la programmation et tout ce
          qui l’entoure.
        </p>
      </div>
      <div className="flex gap-10">
        <a
          className="hover:opacity-50"
          target="blank"
          href="https://github.com/SalahTazoukanit"
        >
          <img className="w-7" src="images/github.png" alt="logo github" />
        </a>
        <a
          className="hover:opacity-50"
          target="blank"
          href="https://www.linkedin.com/in/salaheddine-tazoukanit/"
        >
          <img className="w-7" src="images/linkedin.png" alt="logo linkedin" />
        </a>
        {/* <a
          className="hover:opacity-50"
          target="blank"
          href="https://github.com/SalahTazoukanit"
        > */}
        <img className="w-7" src="images/twitter.png" alt="logo twitter" />
        {/* </a> */}
      </div>
    </div>
  );
};

export default LeftBlock;

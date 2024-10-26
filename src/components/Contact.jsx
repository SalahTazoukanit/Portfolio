import Swal from "sweetalert2";

const Contact = () => {
  const sendMessage = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const access_key = "0135bf93-67dc-4549-b873-5efb9dc01c77";

    formData.append("access_key", access_key);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Envoyé",
        text: "Message envoyé avec succès.",
        icon: "success",
      });
    }
  };
  return (
    <>
      <div className="mt-20">
        <h1 id="contact" className="text-white max-sm:text-[40px]">
          CONTACT
        </h1>
        <div className="flex flex-col justify-center items-center md:mt-10">
          <div className="rounded-md">
            <form
              onSubmit={sendMessage}
              className="flex flex-col md:flex-row justify-center md:p-10 max-sm:gap-10"
            >
              <div className="md:w-1/2 flex flex-col gap-5 md:gap-10">
                <h2 className="text-white opacity-50 text-3xl font-extrabold max-sm:text-[20px]">
                  Parlons-en
                </h2>
                <p className="text-sm text-gray-500 w-10/12">
                  Vous avez une question ? N'hésitez pas à me contacter, je
                  serai ravis d'en entendre parler et de vous apporter une
                  réponse.
                </p>
                <div className="mt-3">
                  <h2 className="text-white opacity-50 text-base font-bold">
                    Email
                  </h2>
                  <ul className="mt-4">
                    <li className="flex items-center">
                      <div className=" h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="20px"
                          fill="#007bff"
                          viewBox="0 0 479.058 479.058"
                        >
                          <path
                            d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                            data-original="#000000"
                          />
                        </svg>
                      </div>
                      <a
                        href="javascript:void(0)"
                        className="text-third-color text-sm ml-4"
                      >
                        <small className="block text-white opacity-50">
                          Mail
                        </small>
                        <strong className="text-white opacity-50">
                          info@example.com
                        </strong>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:w-1/2 flex flex-col gap-5">
                <div>
                  <label htmlFor=""></label>
                  <input
                    placeholder="Nom"
                    className="w-full rounded-md px-3 py-1 bg text-white"
                    type="text"
                    name="name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor=""></label>
                  <input
                    placeholder="Votre mail"
                    className="w-full rounded-md px-3 py-1 bg text-white"
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor=""></label>
                  <input
                    placeholder="Objet"
                    className="w-full rounded-md px-3 py-1 bg text-white"
                    type="text"
                    name="objet"
                    required
                  />
                </div>
                <div>
                  <label htmlFor=""></label>
                  <textarea
                    placeholder="Message"
                    className="w-full h-48 rounded py-3 px-3 bg text-white"
                    id=""
                    name="message"
                    required
                  ></textarea>
                </div>
                <div
                  className="h-8 rounded-md text-white bg-blue-500 flex justify-center items-center hover:opacity-50"
                  type="submit"
                >
                  <button className="w-full" type="submit">
                    Envoyer
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;

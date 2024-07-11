// eslint-disable-next-line react/prop-types
function ButtonPrimayHig({ children }) {
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=pdroariasvilela@gmail.com&su=[Escribe aquí el asunto 😬]&body=[Escribe aquí tu mensaje 😉]!`;

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={gmailUrl}
    >
      <button className="bg-primary text-white font-semibold text-lg px-8 py-2 rounded-full w-[200px] sm:w-1/2 md:w-[200px] lg:w-[200px] max-w-full mx-auto h-[80px] flex items-center justify-center">
        {children}
      </button>
    </a>
  );
}

export default ButtonPrimayHig;

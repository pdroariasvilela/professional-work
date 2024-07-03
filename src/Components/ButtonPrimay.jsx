
// eslint-disable-next-line react/prop-types
function ButtonPrimay({children}) {
  return (
    <button className="bg-primary px-8 py-2 rounded-3xl max-w-max">
      <h1 className="text-white font-semibold text-lg truncate">
        {children}
      </h1>
    </button>
  );
}

export default ButtonPrimay;

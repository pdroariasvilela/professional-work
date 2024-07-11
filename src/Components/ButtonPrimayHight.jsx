// eslint-disable-next-line react/prop-types
function ButtonPrimayHig({children}) {
  return (
    <button className="bg-primary px-8 py-2 rounded-full w-11/12 sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-full mx-auto h-[80px]">
      <h1 className="text-white font-semibold text-lg truncate">
        {children}
      </h1>
    </button>
  );
}

export default ButtonPrimayHig;

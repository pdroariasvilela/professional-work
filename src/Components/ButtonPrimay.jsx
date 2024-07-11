// eslint-disable-next-line react/prop-types
function ButtonPrimay({ Link, children }) {
  return (
    <a target="_blank" rel="noopener noreferrer" href={Link}>
      <button className="bg-primary px-8 py-2 rounded-3xl max-w-max text-white font-semibold text-lg truncate">
        {children}
      </button>
    </a>
  );
}

export default ButtonPrimay;

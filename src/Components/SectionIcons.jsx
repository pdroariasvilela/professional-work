import InstagramIcon from "./InstagramIcon";
import LinkedinIcon from "./LinkedinIcon";
import GitHubIcon from "./GitHubIcon";

const SectionIcons = () => {
  return (
    <div className="flex items-center justify-center h-16 max-w-max gap-3">
      <a
        className="flex justify-center cursor-pointer items-center w-[50px] h-[50px] border-[3px] border-hover hover:bg-hover p-2 rounded-full group"
        href="https://www.instagram.com/pedroariasvilela/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon className="text-[#FFF5CE] group-hover:text-black" height={20} width={20} />
      </a>

      <a
        className="flex justify-center cursor-pointer items-center w-[50px] h-[50px] border-[3px] border-hover hover:bg-hover p-2 rounded-full group"
        href="https://www.linkedin.com/in/pedroarvl/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinIcon className="text-[#FFF5CE] group-hover:text-black" height={20} width={20} />
      </a>

      <a
        className="flex justify-center cursor-pointer items-center w-[50px] h-[50px] border-[3px] border-hover hover:bg-hover p-2 rounded-full group"
        href="https://github.com/pdroariasvilela"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon className="text-[#FFF5CE] group-hover:text-black" height={20} width={20} />
      </a>
    </div>
  );
};

export default SectionIcons;

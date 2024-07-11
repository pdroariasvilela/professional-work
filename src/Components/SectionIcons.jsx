import InstagramIcon from "./InstagramIcon";
import LinkedinIcon from "./LinkedinIcon";
import GitHubIcon from "./GitHubIcon";

const SectionIcons = () => {
  return (
    <div className="flex items-center justify-center h-16 max-w-max gap-3">
      <div className="flex justify-center cursor-pointer items-center w-[50px] h-[50px] border-[3px] border-hover p-2 rounded-full">
        <a
          href="https://www.instagram.com/pedroariasvilela/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon color={"#FFF5CE"} height={20} width={20} />
        </a>
      </div>
      <div className="flex justify-center cursor-pointer items-center w-[50px] h-[50px] border-[3px] border-hover p-2 rounded-full">
        <a
          href="https://www.linkedin.com/in/pedroarvl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon color={"#FFF5CE"} height={20} width={20} />
        </a>
      </div>
      <div className="flex justify-center cursor-pointer items-center w-[50px] h-[50px] border-[3px] border-hover p-2 rounded-full">
        <a
          href="https://github.com/pdroariasvilela"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon color={"#FFF5CE"} height={20} width={20} />
        </a>
      </div>
    </div>
  );
};

export default SectionIcons;

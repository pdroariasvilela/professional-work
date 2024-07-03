import InstagramIcon from "./InstagramIcon";
import LinkedinIcon from "./LinkedinIcon";
import GitHubIcon from "./GitHubIcon";

const SectionIcons = () => {
  return (
    <div className="flex items-center justify-center h-16 max-w-max gap-3">
      <div className="flex justify-center hover:bg-hover items-center w-[50px] h-[50px] border-[3px] border-hover p-2 rounded-full mt-[40px]">
        <InstagramIcon color={"white"} height={20} width={20}/>
      </div>
      <div className="flex justify-center hover:bg-hover items-center w-[50px] h-[50px] border-[3px] border-hover p-2 rounded-full mt-[40px]">
        <LinkedinIcon color={"white"} height={20} width={20}/>
      </div>
      <div className="flex justify-center hover:bg-hover items-center w-[50px] h-[50px] border-[3px] border-hover p-2 rounded-full mt-[40px]">
        <GitHubIcon color={"white"} height={20} width={20}/>
      </div>
    </div>
  );
};

export default SectionIcons;

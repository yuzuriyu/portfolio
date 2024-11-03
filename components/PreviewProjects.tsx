import PreviewList from "./PreviewList";
import PreviewGrid from "./PreviewGrid";
import PreviewProjectBtn from "./PreviewProjectBtn";
import ProjectSeeMoreBtn from "./ProjectSeeMoreBtn";

const PreviewProjects = () => {
  return (
    <div className="m-auto w-11/12 pb-20 md:w-10/12">
      <div className="m-auto mb-12 flex w-[80%] items-center justify-between">
        <p className="hidden text-xs text-gray-400 md:block">RECENT WORK</p>
        <PreviewProjectBtn />
      </div>
      <PreviewList />
      <PreviewGrid />
      <ProjectSeeMoreBtn />
    </div>
  );
};

export default PreviewProjects;

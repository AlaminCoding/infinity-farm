import IdeaListData from "assets/data/ideaList";
import List from "components/block/List";
const IdeaList = () => {
  return <List dataArray={IdeaListData} name={"idea"} />;
};

export default IdeaList;

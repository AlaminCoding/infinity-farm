import List from "components/block/List";
import tokenList from "assets/data/tokenList";
const TokenList = () => {
  return <List dataArray={tokenList} name={"token"} />;
};

export default TokenList;

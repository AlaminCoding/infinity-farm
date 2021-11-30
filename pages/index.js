import Head from "next/head";
import Image from "next/image";
import Banner from "components/block/Banner";
import Timer from "components/block/Timer";
import Idea from "components/block/Idea";
import IdeaList from "components/block/IdeaList";
import Layer from "components/block/Layer";
import Token from "components/block/Token";
import TokenList from "components/block/TokenList";
import Roadmap from "components/block/Roadmap";
import Faq from "components/block/Faq";
import Partners from "components/block/Partners";
import Team from "components/block/Team";
export default function Home() {
  return (
    <>
      <Banner />
      <Timer />
      <Idea />
      <Team />
      <IdeaList />
      <Layer />
      <Token />
      <TokenList />
      <Roadmap />
      <Faq />
      <Partners />
    </>
  );
}

import { CountersBox } from "./components/CountersBox/CountersBox";
import { PlayerOptionsBox } from "./components/PlayerOptionsBox/PlayerOptionsBox";
import { StoryBox } from "./components/StoryBox/StoryBox";
import Header from "./components/Header/Header";
import Quest from "./component/Quest/Quest";
import { hauntedForest } from "./component/Quest/assets/quest";

export function App() {
  return (
    <>
      <Header />
      <CountersBox />
      <PlayerOptionsBox />
      <StoryBox />
      <Quest quest={hauntedForest}></Quest>
    </>
  );
}

import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";

class MainState {
  count = 0;
  myBool = false;

  constructor() {
    makeAutoObservable(this);
  }

  increase() {
    this.count += 1;
  }

  reset() {
    this.count = 0;
  }
}

const myGlobalMainState = new MainState();

export const CounterAgain = observer(
  ({ mainState }: { mainState: MainState }) => {
    console.log("CounterAgain");
    return (
      <button onClick={() => mainState.increase()}>
        Counter is: {mainState.count}
      </button>
    );
  }
);

export const ConterWrapper = () => {
  // const myGlobalMainStateFromContext = useContext(MyStateContext);
  console.log("ConterWrapper (re)render");
  return <CounterAgain mainState={myGlobalMainState} />;
};

// const MyStateContext = createContext<MainState>(myGlobalMainState);

// const App = () => {
//   return (
//     <MyStateContext.Provider value={myGlobalMainState}>
//       <ConterWrapper/>
//     <MyStateContext.Provider>
//   )
// }

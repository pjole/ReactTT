import React, { useState } from "react";
import "./styles.css";

import {
  StateHook01Example,
  StateHook01V2Example
} from "./how-state-works/01-state-hook-01";

import { StateHook02Example } from "./how-state-works/02-state-hook-02";

import {
  StateHook03Example,
  StateHook03V2Example
} from "./how-state-works/03-state-hook-03";

import { StateClass01Example } from "./how-state-works/04-state-in-class-01";

import { StateClass02Example } from "./how-state-works/05-state-in-class-02";

import { StateClass03Example } from "./how-state-works/06-state-in-class-03";

import { StateClass04Example } from "./how-state-works/07-state-in-class-04";
import { PassingStateViaProps } from "./passing-state-around/01-passing-state-via-props";
import { PassingStateViaContext } from "./passing-state-around/02-passing-state-via-context";
import { ConterWrapper } from "./MobXExploratin";

const InnerContent = ({ tab }: { tab: string }) => {
  switch (tab) {
    case "passing-global":
      return <ConterWrapper />;
    case "passing-context":
      return <PassingStateViaContext />;
    case "passing-props":
      return <PassingStateViaProps />;
    case "intro":
    default:
      return (
        <div className="App">
          <StateHook01Example />
          <StateHook01V2Example />
          <br />
          <StateHook02Example />
          <br />
          <StateHook03Example />
          <br />
          <StateHook03V2Example />
          <br />
          <StateClass01Example />
          <br />
          <StateClass02Example />
          <br />
          <StateClass03Example />
          <br />
          <StateClass04Example />
          <br />
        </div>
      );
  }
};

export default function App() {
  console.log("App (re)rendered");

  const [tab, setCurrentTab] = useState<
    "intro" | "passing-global" | "passing-props" | "passing-context"
  >("intro");

  return (
    <div>
      <div style={{ display: "flex" }}>
        <button onClick={() => setCurrentTab("intro")}>How</button>
        <button onClick={() => setCurrentTab("passing-props")}>
          Passing Props
        </button>
        <button onClick={() => setCurrentTab("passing-context")}>
          Passing Context
        </button>
        <button onClick={() => setCurrentTab("passing-global")}>
          Passing Global
        </button>
      </div>
      <InnerContent tab={tab} />
    </div>
  );
}

import React, { createContext, useState } from "react";
import { UserCard } from "./user-card";
import { ItemRow } from "./item-row";
import { UserNameChanger } from "./user-name-changer";

export const MainStateContext = createContext({
  store: {
    user: {
      name: ""
    },
    cart: [{ itemName: "", count: 0 }]
  },
  actions: {
    onChangeUserName: (name: string) => {}
  }
});

export const PassingStateViaContext = () => {
  const [mainState, setMainState] = useState({
    user: { name: "Alice" },
    cart: [{ itemName: "Milk", count: 1 }]
  });

  console.log("PassingStateViaContext (re)renders", mainState);

  return (
    <MainStateContext.Provider
      value={{
        store: mainState,
        actions: {
          onChangeUserName: (newUserName: string) => {
            setMainState((mainState) => {
              return {
                ...mainState,
                user: {
                  ...mainState.user,
                  name: newUserName
                }
              };
            });
          }
        }
      }}
    >
      <div>
        <h3>PassingStateViaContext</h3>
        <button
          onClick={() => {
            setMainState((mainState) => {
              const newCartArray = [...mainState.cart];
              newCartArray[0].count += 1;
              return {
                ...mainState,
                cart: newCartArray
              };
            });
          }}
        >
          Add more milk
        </button>
        <UserNameChanger />
        <UserCard />
        {mainState.cart.map((item) => (
          <ItemRow
            key={item.itemName}
            name={item.itemName}
            count={item.count}
          />
        ))}
      </div>
    </MainStateContext.Provider>
  );
};

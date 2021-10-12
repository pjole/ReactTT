import React, { useState } from "react";
import { UserCard } from "./user-card";
import { ItemRow } from "./item-row";
import { UserNameChanger } from "./user-name-changer";

export const PassingStateViaProps = () => {
  const [mainState, setMainState] = useState({
    user: { name: "Alice" },
    cart: [{ itemName: "Milk", count: 1 }]
  });

  console.log("PassingStateViaProps (re)renders", mainState);

  return (
    <div>
      <h3>PassingStateViaProps</h3>
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
      <UserNameChanger
        user={mainState.user}
        onChangeUserName={(newUserName) => {
          setMainState((mainState) => {
            return {
              ...mainState,
              user: {
                ...mainState.user,
                name: newUserName
              }
            };
          });
        }}
      />
      <UserCard user={mainState.user} />
      {mainState.cart.map((item) => (
        <ItemRow key={item.itemName} name={item.itemName} count={item.count} />
      ))}
    </div>
  );
};

import { useContext, memo } from "react";
import { MainStateContext } from ".";

export const UserNameChanger = memo(() => {
  const mainState = useContext(MainStateContext);
  console.log("UserNameChanger (re)renders", mainState);
  return (
    <input
      type="text"
      value={mainState.store.user.name}
      onChange={(event) => {
        mainState.actions.onChangeUserName(event.target.value);
      }}
    />
  );
});

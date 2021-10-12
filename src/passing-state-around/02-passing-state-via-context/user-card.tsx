import { useContext } from "react";
import { MainStateContext } from ".";

export const UserCard = () => {
  const mainState = useContext(MainStateContext);
  console.log("UserCard (re)renders", mainState);
  return (
    <div>
      <h2>{mainState.store.user.name}</h2>
      <span>(user card)</span>
    </div>
  );
};

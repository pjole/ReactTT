import { memo } from "react";

export type UserCardProps = {
  user: { name: string };
};

// FOR VLAD: talk about re-rendering when
// the user did not change, and why it happens
export const UserCard = memo((props: UserCardProps) => {
  console.log("UserCard (re)renders", props);
  return (
    <div>
      <h2>{props.user.name}</h2>
      <span>(user card)</span>
    </div>
  );
});

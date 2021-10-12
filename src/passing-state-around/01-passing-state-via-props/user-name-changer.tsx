export type UserNameChangerProps = {
  user: {
    name: string;
  };

  onChangeUserName: (newName: string) => void;
};

export const UserNameChanger = (props: UserNameChangerProps) => {
  return (
    <input
      type="text"
      value={props.user.name}
      onChange={(event) => {
        props.onChangeUserName(event.target.value);
      }}
    />
  );
};

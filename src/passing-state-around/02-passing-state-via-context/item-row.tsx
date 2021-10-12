type ItemRowProps = { name: string; count: number };
export const ItemRow = (props: ItemRowProps) => {
  console.log("ItemRow (re)renders", props);
  return (
    <>
      {" "}
      <div style={{ display: "flex" }}>
        {" "}
        <h3>{props.name}</h3> <h4> - {props.count}</h4>{" "}
      </div>{" "}
      <span>(item row)</span>{" "}
    </>
  );
};

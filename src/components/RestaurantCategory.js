import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const onClickHandler = () => {
    setShowIndex();
  };
  return (
    <div className="w-6/12 mx-auto my-4 bg-green-50 shadow-lg p-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={onClickHandler}
      >
        <span className="font-bold text-lg">
          {data.title}
          {data?.itemCards?.length > 0 ? ` (${data?.itemCards?.length})` : ""}
        </span>
        <span>↓</span>
      </div>
      {/* <div>
        {data.itemCards?.map((item) => (
          <div key={item.card.info.id}>{item.card.info.name}</div>
        ))}
      </div> */}
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};
export default RestaurantCategory;

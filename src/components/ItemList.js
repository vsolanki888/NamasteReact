const { CDN_URL } = require("../utils/constant");
const { useDispatch } = require("react-redux");
const { addItem } = require("../utils/cartSlice");
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items?.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between"
        >
          <div>
            <div className="py-2">
              <span className="font-bold text-left">{item.card.info.name}</span>
              <span className="px-2 font-bold">
                ₹-{item.card.info.price / 100}
              </span>
              <p className="text-xs py-5">{item.card.info.description} </p>
            </div>
          </div>
          <div>
            <img
              className="w-20 h-20 rounded-lg float-left mr-4"
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
            />
            <button
              className="px-4 py-2 bg-green-100 rounded-lg float-right"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;

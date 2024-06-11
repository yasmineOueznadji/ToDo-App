import tick_icon from "../assets/tick.png";
import not_tick_icon from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";

const ListItems = ({ id, text, isComplete, deleteHandler, toggleHandler }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        className="flex flex-1 items-center cursor-pointer"
        onClick={() => {
          toggleHandler(id);
        }}
      >
        <img
          src={isComplete ? tick_icon : not_tick_icon}
          alt="tick-icon"
          className="w-7"
        />
        <p
          className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${
            isComplete ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <img
        src={delete_icon}
        alt="delete-icon"
        className="w-3.5 cursor-pointer"
        onClick={() => {
          deleteHandler(id);
        }}
      />
    </div>
  );
};

ListItems.propTypes;
export default ListItems;

import tick_icon from "../assets/tick.png";
import delete_icon from "../assets/delete.png";

const ListItems = () => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div className="flex flex-1 items-center cursor-pointer">
        <img src={tick_icon} alt="tick-icon" className="w-7" />
        <p className="text-slate-700 ml-4 text-[17px]">Learn Coding</p>
      </div>
      <img src={delete_icon} alt="delete-icon" className="w-3.5 cursor-pointer"/>
    </div>
  );
};

export default ListItems;

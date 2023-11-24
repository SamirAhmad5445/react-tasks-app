import { FaRegClock } from "react-icons/fa6";
import { categories } from "../data";

const Task = ({ data, onRemove }) => {
  const { id, title, description, date, isDone, category } = data;
  const catIndex = category === "learning" ? 0 : category === "working" ? 1 : 2;

  return (
    <div
      className={`bg-neutral-100 bg-gradient-to-r ${categories[catIndex].colors.cardColor} to-transparent from-[1rem] to-[1rem] pl-8 py-4 pr-4 whitespace-normal grid grid-cols-[1rem_1fr] items-baseline gap-4 rounded-xl shadow-lg`}
    >
      <div className={`checkbox ${categories[catIndex].colors.checkbox}`}>
        <input type="checkbox" checked={isDone} onChange={() => onRemove(id)} />
      </div>
      <div className="h-full grid grid-rows-[auto_1fr_auto]">
        <h3 className="text-xl leading-none text-neutral-950 font-bold mb-2">
          {title}
        </h3>
        <p className="text-neutral-400 pb-2">{description}</p>
        <p className="text-primary-300 flex items-center gap-1 pt-2 border-t-2 border-neutral-200">
          <FaRegClock /> Time {date}
        </p>
      </div>
    </div>
  );
};

export default Task;

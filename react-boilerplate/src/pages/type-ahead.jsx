import { useEffect, useRef } from "react";
import todos from "../assets/todos.json";

const useDebounce = function (fn, delay) {
  const ref = useRef(null);
  const [first, setfirst] = useState(second)

  useEffect(() => {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      
    }, delay);
    return () => {
      if (ref.current) clearTimeout(ref.current);
    };
  }, [delay]);

};

const TypeAhead = () => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="type-ahead">Todos</label>
      <select className="" name="" id="type-ahead">
        <option value=""></option>
      </select>
    </div>
  );
};

export default TypeAhead;

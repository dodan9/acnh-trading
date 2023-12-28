import { ChangeEvent, memo } from "react";
import { useBugFilter, useBugFilterAction } from "../store/bugFilter";

const BugFilter = () => {
  const filter = useBugFilter();
  const { setMonth } = useBugFilterAction();

  const handleSelectMonth = (event: ChangeEvent<HTMLSelectElement>) => {
    setMonth(parseInt(event.target.value));
  };

  return (
    <>
      <div>bug filter</div>
      <select
        name="month"
        onChange={handleSelectMonth}
        value={filter.month ?? ""}
      >
        <option value="" label="전체" />

        {Array.from({ length: 12 }, (_, index) => {
          return (
            <option key={index} value={index + 1} label={`${index + 1} 월`} />
          );
        })}
      </select>
    </>
  );
};

export default memo(BugFilter);

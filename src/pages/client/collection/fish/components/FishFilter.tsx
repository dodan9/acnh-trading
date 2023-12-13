import { ChangeEvent, memo } from "react";
import { useFishFilter, useFishFilterAction } from "../store/fishFilter";

const FishFilter = () => {
  const filter = useFishFilter();
  const { setMonth } = useFishFilterAction();

  const handleSelectMonth = (event: ChangeEvent<HTMLSelectElement>) => {
    setMonth(parseInt(event.target.value));
  };

  return (
    <>
      <div>fish filter</div>
      <select
        name="month"
        onChange={handleSelectMonth}
        value={filter.month ?? ""}
      >
        <option value="" label="전체" />

        {Array.from({ length: 12 }, (_, index) => {
          return (
            <option key={index} value={index + 1} label={String(index + 1)} />
          );
        })}
      </select>
    </>
  );
};

export default memo(FishFilter);

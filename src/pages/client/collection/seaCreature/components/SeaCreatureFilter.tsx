import { ChangeEvent, memo } from "react";
import {
  useSeaCreatureFilter,
  useSeaCreatureFilterAction,
} from "../store/seaCreatureFilter";

const FishFilter = () => {
  const filter = useSeaCreatureFilter();
  const { setMonth } = useSeaCreatureFilterAction();

  const handleSelectMonth = (event: ChangeEvent<HTMLSelectElement>) => {
    setMonth(parseInt(event.target.value));
  };

  return (
    <>
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

export default memo(FishFilter);

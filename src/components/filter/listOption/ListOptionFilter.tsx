import {
  useListOption,
  useListOptionActions,
} from "@src/common/listOptionStore";

const ListOptionFilter = () => {
  const isList = useListOption();
  const { setIsList } = useListOptionActions();
  return (
    <div>
      목록 형식으로 보기:
      <input
        type="checkbox"
        checked={isList}
        onChange={() => setIsList(!isList)}
      />
    </div>
  );
};

export default ListOptionFilter;

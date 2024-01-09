import styled from "@emotion/styled";
import {
  useListOption,
  useListOptionActions,
} from "@src/commons/store/listOptionStore";
import FilterBox from "../filterBox/FilterBox";

const ListOptionFilter = () => {
  const isList = useListOption();
  const { setIsList } = useListOptionActions();
  return (
    <FilterBox name="목록 형식으로 보기" direction="row">
      <ListOptionBox>
        <input
          type="checkbox"
          checked={isList}
          onChange={() => setIsList(!isList)}
        />
      </ListOptionBox>
    </FilterBox>
  );
};

export default ListOptionFilter;

const ListOptionBox = styled.div``;

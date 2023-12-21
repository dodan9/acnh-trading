import styled from "@emotion/styled";
import {
  useListOption,
  useListOptionActions,
} from "@src/common/store/listOptionStore";

const ListOptionFilter = () => {
  const isList = useListOption();
  const { setIsList } = useListOptionActions();
  return (
    <ListOptionBox>
      목록 형식으로 보기:
      <input
        type="checkbox"
        checked={isList}
        onChange={() => setIsList(!isList)}
      />
    </ListOptionBox>
  );
};

export default ListOptionFilter;

const ListOptionBox = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

import { useParams } from "react-router";
import { useVillagerListQuery } from "../services/query";

const VillagerDetail = () => {
  const { name } = useParams();

  const { data: villager } = useVillagerListQuery({ name, nhdetails: true });

  return (
    <>
      <div>주민 상세</div>

      {villager && (
        <>
          <div>{villager[0].name}</div>
          <div>
            <img src={villager[0].image_url} />
          </div>
        </>
      )}
    </>
  );
};

export default VillagerDetail;

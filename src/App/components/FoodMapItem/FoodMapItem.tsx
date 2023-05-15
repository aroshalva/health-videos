// import { makeStyles } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

type Props = {
  imageName: string;
  tooltipText: string;
};

const aa = {
  a: 1,
  b: 2,
};

console.log(11, aa);

export const FoodMapItem: React.FC<Props> = ({ imageName, tooltipText }) => {
  return (
    <Tooltip title={tooltipText}>
      <img src={`/foodMap/${imageName}`} style={{ width: "40px" }} />
    </Tooltip>
  );
};

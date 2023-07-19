import { TfiAngleLeft } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

const BackToList = () => {
  const navigate = useNavigate();
  const handleBackToList = () => {
    navigate(-1);
  };
  return (
    <>
      <button onClick={handleBackToList}>
        <TfiAngleLeft />
      </button>
    </>
  );
};
export default BackToList;

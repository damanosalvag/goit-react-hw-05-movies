import { TfiAngleLeft } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import "../App.css";

const BackToList = () => {
  const navigate = useNavigate();
  const handleBackToList = () => {
    navigate(-1);
  };
  return (
    <section className="back-to-list">
      <button onClick={handleBackToList} className="back-to-list__btn">
        <TfiAngleLeft />
        BACK TO LIST
      </button>
    </section>
  );
};
export default BackToList;

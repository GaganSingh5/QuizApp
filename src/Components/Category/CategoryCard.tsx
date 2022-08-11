import { useNavigate } from 'react-router-dom';
import "./categoryCard.scss"
function CategoryCard({bgColor, header, setCategory, iconClass}) {
  let navigate = useNavigate();

  const setQuestionCategory = () => {
    // setCategory(header);
    navigate(`../questions/${header}`, { replace: true });
  }
  return (
    <div className="card--col-md-6 col-lg-3 py-3">
      <div
        onClick={() => setQuestionCategory()}
        className={`card category--card__${bgColor} text-center bg-img`}
      >
        <div className="card-body">
          <i className={`card--icon ${iconClass}`}></i>
          <h5 className="card-title mt-3">{header}</h5>
        </div>
        {/* <button
          className="button btn--primary mt-2"
          onClick={() => setQuestionCategory()}
        >
          Select
        </button> */}
      </div>
    </div>
  );
}

export default CategoryCard
import "./option.scss"

const Option = (props) => {
  
  const { text, key, isSelected } = props.option;
  const toggleOption = props.toggleOption
  return (
    <div
      className={`my-2 px-2 py-1 option--card d-flex justify-content-between ${
        isSelected ? "option--card--border" : "option--card--no--border"
      }`}
      onClick={() => toggleOption(key)}
    >
      <h6 className="option_text m-3">{text}</h6>

      {isSelected ? (
        <span className="tick--container">
          <div className="tick d-flex justify-content-center align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="#F6F6F6"
                d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
              />
            </svg>
          </div>
        </span>
      ) : null}
    </div>
  );
};

export default Option;

import { useNavigate } from "react-router-dom";
import "./Hero.scss";

const questionCategories = [
  {
    categoryName: "Linux",
    categoryValue: "linux",
    categoryClass: "devicon-linux-plain",
  },
  {
    categoryName: "Docker",
    categoryValue: "docker",
    categoryClass: "devicon-docker-plain",
  },
  {
    categoryName: "MySQL",
    categoryValue: "mysql",
    categoryClass: "devicon-mysql-plain",
  },
  {
    categoryName: "JavaScript",
    categoryValue: "javascript",
    categoryClass: "devicon-javascript-plain",
  },
  {
    categoryName: "CSS",
    categoryValue: "css",
    categoryClass: "devicon-css3-plain",
  },
  // {
  //   categoryName: "Bash",
  //   categoryValue: "bash",
  //   categoryClass: "devicon-bash-plain",
  // },
];
function Hero() {
  let navigate = useNavigate();
  const navigateToCategories = () => {
    navigate("./categories");
  };

  return (
    <section className="rf-module--hero">
      <div className="rf-module--hero__text">
        <h1 className="rf-module--hero__title">Quizzz!!</h1>
        <div className="rf-module--hero__into">
          <p>
            Test you programming skills particular
            topic.
          </p>
        </div>
        <div className="rf-module--hero__cta">
          <button
            onClick={navigateToCategories}
            className="rf-module--hero__ctabutton"
          >
            Let's Start
          </button>
          <button className="rf-module--hero__githubbutton">
            <i className={`card--icon devicon-github-original`}></i>
          </button>
        </div>
      </div>
      <div className="rf-module--hero__categories">
        <div className="rf-module--hero__categories__grid">
          {questionCategories.map((cat) => {
            return (
              <div
                key={cat.categoryClass}
                className="rf-module--hero__card"
              >
                <i className={`card--icon ${cat.categoryClass}`}></i>
              </div>
            );
          })}
          <div className="rf-module--hero__card">
            <h3>.....</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

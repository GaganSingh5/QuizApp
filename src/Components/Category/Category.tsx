import CategoryCard from './CategoryCard'
import "./categoryCard.scss";

const QuestionCategories = [
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
];

const colors = ["1", "2", "3", "4", "5"];
function Category({setCategory}) {
  return (
    <section className="category--conatiner container">
      <div className="row d-flex justify-content-center mb-2">
        <h3 className='category__header text-center'>Choose a Category</h3>
      </div>
      <div className="row">
        {QuestionCategories.map(
          ({ categoryName, categoryValue, categoryClass },index) => {
            return (
              <CategoryCard
                bgColor={colors[index] ? colors[index] : "8e90f1"}
                setCategory={categoryValue}
                key={categoryValue}
                header={categoryName}
                iconClass={categoryClass}
              />
            );
          }
        )}
      </div>
    </section>
  );
}

export default Category
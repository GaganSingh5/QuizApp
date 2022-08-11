import React from "react"
import Nav from "./Navbar/Nav";
import Footer from "./Footer/Footer";
import QuizUI from "./QuizUI";
import Category from "./Category/Category";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Hero from "./Hero/Hero";

class QuizApp extends React.Component<{}, any> {
  constructor(props) {
    super(props);

    this.state = {
    category: "Linux",
    categorySelected: false
    };

    this.setCategory = this.setCategory.bind(this);
  }


  setCategory(category: string) {
    console.log("state changed", category);
    
    this.setState({ category: category, categorySelected: true });
  }
  render() {
    return (
      <Router>
        <Routes>
        <Route path={`/`} element={<Hero />} />
        <div className="d-flex flex-column min-vh-100">
          <div className="row px-4">
            <Nav />
          </div>
          <div className="row px-4 flex-grow-1">

              <Route
                path={`/questions`}
                element={<QuizUI category={this.state.category} />}
              />
              <Route
                path="/categories"
                element={<Category setCategory={this.setCategory} />}
              />
          </div>
          <div className="row px-4">
            <Footer />
          </div>
        </div>
        </Routes>
      </Router>
    );
  }
}


export default QuizApp;

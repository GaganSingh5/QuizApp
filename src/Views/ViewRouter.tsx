import HeroView from "./HeroView";
import QuestionView from "./QuestionView";
import CategoryView from "./CategoryView";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "../index.css";

const ViewRouter = () => {
  return (
      <CSSTransition classNames="alert" timeout={2000}>
        <Router>
          <Routes>
            <Route path="/" element={<HeroView />} />
            <Route path="/questions/:category" element={<QuestionView />} />
            <Route path="/categories" element={<CategoryView />} />
          </Routes>
        </Router>
      </CSSTransition>
  );
};

export default ViewRouter;

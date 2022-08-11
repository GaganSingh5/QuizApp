import React from "react";
import { getQuizQuestion } from "Services/QuizService";
import Option from "Components/Option/Option";
import QuestionCard from "Components/Question/QuestionCard";
import Loader from "Components/Loader/Loader";
import "Styles/quizUI.css";
// import "Styles/option.css";
import "Styles/timer.css";
// import Timer from "Components/Timer/Timer";

interface QuizOption {
  key: String;
  text: String;
  isSelected: boolean;
  isCorrect: boolean;
}
interface QuizState {
  question: String;
  options: Array<QuizOption>;
  isDataLoaded: boolean;
  tags: Array<String>;
  chooseMultiple: boolean;
}

class QuizUI extends React.Component<{ category: string | null }, QuizState> {
  state = {
    question: "",
    options: new Array<QuizOption>(0),
    isDataLoaded: false,
    tags: new Array<String>(0),
    chooseMultiple: false,
  };

  componentDidMount() {
    getQuizQuestion(this.props.category).then((response) => {
      console.log(response);

      const newState = {
        question: response.data[0].question,
        options: this.getOptions(
          response.data[0].answers,
          response.data[0].correct_answers
        ),
        isDataLoaded: true,
        tags: this.getTags(response),
        chooseMultiple:
          response.data[0].multiple_correct_answers === "false" ? false : true,
      };

      this.setState(newState);
    });
  }

  getTags(response) {
    const tags = new Array<String>(0);
    if (response.data[0].category) {
      tags.push(response.data[0].category);
    }

    tags.push(response.data[0].difficulty);

    response.data[0].tags.forEach((tag) => {
      if (tag.name !== tags[0]) {
        tags.push(tag.name);
      }
    });
    console.log(tags);

    return tags;
  }

  getOptions(answers: Object, correctAnswers: Object): QuizOption[] {
    console.log(answers);
    const options = new Array<QuizOption>(0);
    Object.keys(answers).forEach((optionKey) => {
      if (answers[optionKey]) {
        options.push({
          key: optionKey,
          text: answers[optionKey],
          isSelected: false,
          isCorrect:
            correctAnswers[`${optionKey}_correct`] === "true" ? true : false,
        });
      }
    });
    console.log(options);

    return options;
  }

  setSelectedOption = (key: string) => {
    const newOptionState = this.state.options.map((opt) => {
      if (!this.state.chooseMultiple) {
        opt.isSelected = false;
      }

      if (opt.key === key) {
        if (this.state.chooseMultiple) {
          opt.isSelected = !opt.isSelected;
        } else {
          opt.isSelected = true;
        }
      }
      return opt;
    });

    this.setState({ options: newOptionState });
  };

  submitAnswer = () => {
    const result = this.state.options.filter(
      (opt) => opt.isCorrect !== opt.isSelected
    );

    if (result.length === 0) {
      console.log("Correct");
    } else {
      console.log("Wrong");
    }

    this.getNextQuestion();
  };

  getNextQuestion = () => {
    this.setState({isDataLoaded: false});

    getQuizQuestion().then((response) => {
      console.log(response);

      const newState = {
        question: response.data[0].question,
        options: this.getOptions(
          response.data[0].answers,
          response.data[0].correct_answers
        ),
        isDataLoaded: true,
        tags: this.getTags(response),
        chooseMultiple:
          response.data[0].multiple_correct_answers === "false" ? false : true,
      };

      this.setState(newState);
    });
  };

  autoSubmit = () => {
    this.submitAnswer();
  };

  render() {
    return (
      <>
        <div className="question--module container px-4">
          <div className="question--module__conatiner">
            {this.state.isDataLoaded ? (
              <div className="row p-2 d-flex">
                {/* <Timer autoSubmit={this.autoSubmit} /> */}
                <QuestionCard
                  questionText={this.state.question}
                  tags={this.state.tags}
                  chooseMulti={this.state.chooseMultiple}
                />
                <div className="col-12 d-flex flex-column justify-content-between">
                  {this.state.options.map((option: QuizOption, index) => {
                    return (
                      <Option
                        key={option.key}
                        option={option}
                        toggleOption={this.setSelectedOption}
                      />
                    );
                  })}
                </div>
                <div className="col-12 d-flex justify-content-end">
                  <button
                    className="submit_btn mt-2"
                    onClick={(e) => this.submitAnswer()}
                  >
                    Submit
                  </button>
                </div>
              </div>
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </>
    );
  }
}

export default QuizUI;

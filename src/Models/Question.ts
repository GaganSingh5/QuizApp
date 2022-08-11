export class Question {
  id: String;
  question: String;
  category: String;
  difficulty: String;
  explanation: String;
  isMultipleChoice: Boolean;
  tags: Array<Tag>;
  options: Object;
  correctAnswers: Object;
  tip: String;

  constructor(id, question, category, difficulty, explantion, isMultipleChoice, 
              tags, options, correctAnswers, tip) {
    this.id = id;
    this.question = question;
    this.category = category;
    this.difficulty = difficulty;
    this.explanation = explantion;
    this.isMultipleChoice = isMultipleChoice;
    this.tags = tags;
    this.options = options;
    this.correctAnswers = correctAnswers;
    this.tip = tip;

  }
  getCorrectAnswers = ()=>{

  }
}


interface Tag {
  name: String
}
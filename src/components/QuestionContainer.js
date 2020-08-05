import React from 'react';
import Category from './Category';
import Question from './Question';
import Answers from './Answers';

export default class QuestionContainer extends React.Component {

    constructor(){
        super();
        this.state= {
            currentQuestion: {
                category: "",
                correct_answer: "",
                difficulty: "",
                question: "",
                type: "",
                incorrect_answers: []
            }
        }
    }
    
    componentDidMount(){
        this.fetchQuestion()
    }

    fetchQuestion = () => {
        fetch('https://opentdb.com/api.php?amount=1&type=multiple')
        .then(resp => resp.json())
        .then(question => {
            this.setState({
                currentQuestion: question.results[0]
            })
        })
    }

    makeArray = () => {
        const allAnswers = [...this.state.currentQuestion.incorrect_answers]
        let number = Math.floor(Math.random() * 4);
        allAnswers.splice(number, 0, this.state.currentQuestion.correct_answer);
        return(allAnswers)
    }

    render(){
        return(
            <div className="question-container">
                <Category category={this.state.currentQuestion.category}/>
                <Question question={this.state.currentQuestion.question}/><br></br>
                <Answers correctAnswer={this.state.currentQuestion.correct_answer} allAnswers={this.makeArray()}/>
            </div>
        )
    }
}
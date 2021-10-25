



export class Question{
    constructor(data){
        this.question = data.data.results[0].question
        this.answer = data.data.results[0].correct_answer
        this.wrong = data.data.results[0].incorrect_answer
    }
}
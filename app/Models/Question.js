



export class Question{
    constructor(data){
        this.question = data.question
        this.answer = data.correct_answer
        this.wrong = data.incorrect_answer
    }



get Template(){
    return `<h3> ${this.question}</h3>
    <button class="mx-5 bg-danger">TRUE</button><button class="bg-danger">FALSE</button>`
   
}



}
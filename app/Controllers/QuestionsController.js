import {questionsService} from "../Services/QuestionsService.js";



export class QuestionsController{

    constructor(){
        console.log('controller here')
        this.getquestions()
    }

    async getquestions(){
        try {await questionsService.getquestions()
            
        } catch (error) {
            console.error(error,'red and spooky')
        }
    }
}
import { ProxyState } from "../AppState.js";
import {questionsService} from "../Services/QuestionsService.js";




function _draw(){
    let questions = ProxyState.questions
    let template = ''
    questions.forEach(q => template += q.Template)
    document.getElementById('app').innerHTML = template
}











export class QuestionsController{

    constructor(){
        console.log('controller here')
        ProxyState.on('questions', _draw)
        this.getquestions()
    }

    async getquestions(){
        try {await questionsService.getquestions()
            
        } catch (error) {
            console.error(error,'red and spooky')
        }
    }
}
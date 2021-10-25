import { ProxyState } from "../AppState.js"
import {api} from "./AxiosService.js"
import {Question} from "../Models/Question.js"




 class QuestionsService{
     constructor(){
         console.log ('service here')
     }

     async getquestions(){
        const res = await api.get()
        console.log(res.data.results[0])
        ProxyState.questions = res.data.results.map(q => new Question(q))
        ProxyState.answer = res.data.results[0].correct_answer
     }

     getGuess(answer){
         
         if(answer === ProxyState.answer){
           return  alert('that is correct!!!!!')
         }
         alert('thats wrong yo!!!')
     }

 }







export const questionsService = new QuestionsService();

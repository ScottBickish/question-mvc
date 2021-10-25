import {api} from "./AxiosService.js"





 class QuestionsService{
     constructor(){
         console.log ('service here')
     }

     async getquestions(){
        const res = await api.get()
        console.log(res.data.results[0])
     }



 }







export const questionsService = new QuestionsService();

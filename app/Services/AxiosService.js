



export const api = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=1&category=11&difficulty=easy&type=boolean',
    timeout: 5000
})
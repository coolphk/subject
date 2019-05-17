import axios from 'axios'
const service = axios.create({
    baseURL: '/ruoyi-admin'
})
const api = {
    getQuestionRandom: () => {
        return service({
            url: '/examination/selectrandom',
            method: 'get'
        })
    }
}
export default api;
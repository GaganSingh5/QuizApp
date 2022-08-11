import axios from "axios";
// import {Question} from "@Models/Question"

axios.defaults.headers.common['X-Api-Key'] = "3D4GEtNirYKlUjt7IwsFCWKrGZF9p8Up7tvuvVTD";


export const getQuizQuestion = (category) => {
    return axios.get(`https://quizapi.io/api/v1/questions?limit=1&category=${"linux"}`)
}
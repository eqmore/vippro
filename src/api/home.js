import axios from './index.js';
export function getSlidersAPI(){
    return axios.get('/sliders').catch(function(error){
        console.log(error.response,error.request);
        return [];
    });
}
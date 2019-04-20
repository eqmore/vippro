import axios from 'axios';

function getPullsAPI(){
    return axios.get('http://www.wookmark.com/api/json/popular')
    .then(data=>data)
    .catch(err=>console.log(err));
}

export {
    getPullsAPI
}

import  http from "./http";
import configData from "../config/configData.json"
const url = configData.apiEndPoint + "/Title/k_5pu948ma/" ; 



function getArticle(setData , id){
   http.get(url + id + "/Trailer")
        .then(res => setData(res.data))
        .catch( error => console.log(error) )
}


export default getArticle


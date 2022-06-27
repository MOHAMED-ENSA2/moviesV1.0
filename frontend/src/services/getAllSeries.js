import  http from "./http";
import configData from "../config/configData.json"
const url = configData.apiEndPoint + "/Top250Movies/k_5pu948ma" ; 


function getAllSeries(setData){
   http.get(url)
        .then(res => setData(res.data.items))
        .catch( error => console.log(error) )
}

export default getAllSeries


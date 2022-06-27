import  http from "./http";
import configData from "../config/configData.json"
const url = configData.apiEndPoint + "/SearchMovie/k_5pu948ma/" ; 


function getSearchResults(setData , searchTitle){
   http.get(url + searchTitle)
        .then(res => {
            console.log("searchTitle : " , searchTitle)
            setData(res.data.results) ; 
            console.log(res.data.results) ; 
        })
        .catch( error => console.log(error) )
}


export default getSearchResults


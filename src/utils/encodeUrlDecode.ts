import { BuildType } from "../Types/TypeTest";

export const encodeURL = (obj:Object):string =>{
    const  json = JSON.stringify(obj);
    return btoa(json);
}
export const decodeURL = ():BuildType =>{
    const params = new URLSearchParams(window.location.search);
    const base64Data = params.get('data');
    const jsonString = atob(base64Data?base64Data:"");
    return JSON.parse(jsonString);
}
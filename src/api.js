const URL = "https://covid19.mathdro.id/api" ; 

export const fetchGlobalData = async() => {
    const response = await fetch(URL) ;
    const data = await response.json() ; 
    console.log(data) ; 
    return data ;  
}

export const fetchCountries = async() => {
    const response = await fetch(`${URL}/countries/`) ; 
    const data = await response.json()   ; 
    console.log(data.countries) ; 
    return data ; 
}
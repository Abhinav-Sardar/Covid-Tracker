const URL  = "https://covid19.mathdro.id/api"
export const fetchCountryList = async() => {
    try {
        const response = await fetch(`${URL}/countries`) ;
        const {countries} = await response.json() ; 
        console.log(countries);
        return countries ; 
    }
    catch(error){
        console.log(error) ; 
        alert('An error occured!Try refreshing the page.') ; 
    }
}

export const fetchIndivisualCountryData = async(countryname) => {
    try {
        if(countryname === "Global"){
            const response = await fetch(URL) ; 
            const data = await response.json() ; 
            console.log(data) ; 
            return data ; 
        }
        else {
            const response = await fetch(`${URL}/countries/${countryname}`) ; 
            const data = await response.json() ; 
            console.log(data) ; 
            return data ; 
        }
    }
    catch(error) {
        console.log(error) ; 
        alert('An error occured!Try refreshing the page.')
    }
}
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export async function fetcher(url :string , uri : RequestInit){
    const root = apiBaseUrl + url ;
    const response =  await fetch( root , uri)  ; 
    if(response.ok){
        try{
            return response.json();
        }catch(e){
            throw new Error("Erreur lors du parsing de la reponse ")
        }
    }else{
        throw new Error("Erreur lors de la requete : " + response.statusText)   
    }
}



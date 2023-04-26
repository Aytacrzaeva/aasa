$(function () {
    var availableTags = [
        "Germany",
        "United States of America",
        "Brazil",
        "Iceland",
        "Afganistan",
        "Aland Island",
        "Albania",
        "Algeria",
    ];
    $("#tags").autocomplete({
        source: availableTags
    });
});


const card=document.getElementById("card")
axios.get("https://restcountries.com/v3.1/all").then(res=>{
         console.log(res)
         let html=""
         for (let i = 0; i < res.data.length; i++) {
            const{flags,name,population,region,capital}=res.data[i]
            html+=`
            <div class="card" style="width: 18rem;">
            <img src="${flags.png}"
                class="card-img-top" alt="...">
            <div class="card-body">
                <h5>${name.common}</h5>
                <div class="text1"><p class="card-text">Population:${population}</p></div>
                <div class="text2"><p>Region :${region}<p></div>
                <div class="text3"><p>Capital :${capital}</p></div>
            </div>
       </div>
            `
            
            
         }
         card.innerHTML=html
    }
       
    
)
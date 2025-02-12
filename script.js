
let countriescontainer = document.querySelector(".countries-container");
const searchinput=document.querySelector(".search-container") 
console.log(searchinput.target);

let Allcountry;
fetch("https://restcountries.com/v3.1/all")
. then((res)=> {
    return res . json();
}) 
.then ((data)=> {
    Allcountry = data;
    rendercountries(data)
});


    function rendercountries(data) {
        countriescontainer.innerHTML = "";
        data.forEach ((ele,i) => {
        // console.log(ele,i); 
        let  countrtycard = document.createElement("a");
        countrtycard.classList.add("country-card");
        // console.log(countrtycard)
    
        let cardHTML = `
            <img src =${ele.flags.svg} alt="">
                    <div class="card-text">
                        <h3 class="card-title">${ele.name.common}</h3>
                        <p><strong>Population :</strong>${ele.population}</p>
                        <p><strong>Region :</strong>${ele.region}</p>
                        <p><strong>Capital :</strong>${ele.capital}</p>
                    </div>

            `;
            countrtycard.innerHTML = cardHTML;
    
            countriescontainer.appendChild(countrtycard)
        });

    }

    searchinput.addEventListener("input", (evt) => {
    //  console.log(evt.tarfet.value);
    let searchvalue = evt.target.value.toLowerCase();
    //  console.log(searchvalue);
     let filtercountries = Allcountry.filter ((country) => {
        // console.log(country);
        return country.name.common.toLowerCase().includes (searchvalue);
    });
         rendercountries(filtercountries)
        // console .log(filtercountries);
    });



    //  countriescontainer.appendChild(countrtycard);
    //  console.log (img);

    const toggleButton = document.getElementById("dark-mode-toggle");
const body = document.body;

// Check Local Storage for Theme Preference
if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    toggleButton.classList.add("dark");
    toggleButton.textContent = "☀️ Light Mode";
}

// Toggle Dark Mode
toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    toggleButton.classList.toggle("dark");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
        toggleButton.textContent = "☀️ Light Mode";
    } else {
        localStorage.setItem("dark-mode", "disabled");
        toggleButton.textContent = "🌙 Dark Mode";
    }
});

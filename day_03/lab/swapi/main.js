const resBtn = document.querySelector(".resBtn");

const updateRes = () => {
    document.querySelector(".resDisplay").innerHTML = "";
    axios.get("https://swapi.dev/api/planets/2")
    .then((response) => {
        let arr = response.data.residents;
        for (resident of arr) {
            axios.get(resident)
            .then((res) => {
                let { name, height, eye_color, birth_year, gender } = res.data;
                document.querySelector(".resDisplay").innerHTML += `<br>Name: ${name}<br>Height: ${height}cm<br>Eye Color: ${eye_color}<br>Birth Year: ${birth_year}<br>Gender: ${gender}<br>`;
            });
        };
    })
    .catch(err => console.log(err));
};

resBtn.addEventListener("click", updateRes);

const planetBtn = document.querySelector(".planetBtn");

const updatePlanet = () => {
    document.querySelector(".planetDisplay").innerHTML = "";
    axios.get("https://swapi.dev/api/planets/2")
    .then((response) => {
        let { name, climate, diameter, gravity, orbital_period, rotational_period, surface_water, terrain } = response.data;
        document.querySelector(".planetDisplay").innerHTML += `<br>Name: ${name}<br>Climate: ${climate}<br>Surface Water: ${surface_water}%<br>Terrain: ${terrain}<br>Diameter: ${diameter}km<br>Gravity: ${gravity}<br>Orbital Period: ${orbital_period} days<br>Rotational Period: ${rotational_period}<br>`;
    })
    .catch(err => console.log(err));
};

planetBtn.addEventListener("click", updatePlanet);



// const APP = {
// urls: {
//     base: 'https://swapi.dev/api/',
//     people: 'people/',
//     planets: 'planets/',
//     films: 'films/',
//     species: 'species/',
//     vehicles: 'vehicles/',
//     starships: 'starships/'
// },
// init: () => {
//     APP.addListeners();
//     APP.buildNav();
// },
// addListeners: () => {
//     let nav = document.getElementById('nav');
//     nav.addEventListener("click", APP.getData);
//     footer.addEventListener("click", APP.getData);
// },
// buildNav: () => {
//     let df = new DocumentFragment();
//     for (let nm in APP.urls) {
//         if(nm != 'base') {
//             let link = document.createElement('a');
//             link.href = `${APP.urls.base}${APP.urls[nm]}`;
//             link.textContent = nm;
//             link.setAttribute("data-link", `${APP.urls.base}${APP.urls[nm]}`);
//             df.append(link);
//         }
//     }
//     document.getElementById('nav').append(df);
// },
// getData: (event) => {
//     if (event) event.preventDefault();
// }

// }

// document.addEventListener("DOMContentLoaded", APP.init);
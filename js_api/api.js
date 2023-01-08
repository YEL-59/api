// console.log('api is really fun!')
// const loadbuddy=()=>{
//     fetch('https://randomuser.me/api/?results=5')
//     .then(res=>res.json())
//     .then(data=>displaybuddyes(data))
// }
// loadbuddy()
// const displaybuddyes=(data)=>{
// //console.log(data.results)
// const buddies=data.results

// for(const b of buddies){
//     console.log(buddies)
// }
// }



const loadcountries =()=>{
    fetch('https://restcountries.com/v2/all')
    .then(res=>res.json())
    .then(data=>display(data))
}

loadcountries()

const display=(countries)=>{
    //console.log(countries)


    // for(const country of countries){
    //     console.log(country)
    // }
const contriesdiv=document.getElementById('countries')
countries.forEach(country => {
    //console.log(country)
    const div=document.createElement('div')
    div.classList.add('country_class')
    div.innerHTML=`
    <h3>${country.name}</h3>
    <p>${country.capital}</p>
    <button onclick="loadcountrydetail('${country.name}')">Details</button>
    
    `
//     const h3=document.createElement('h3');
//     h3.innerText=country.name;
//     div.appendChild(h3);
//     const p=document.createElement('p')
//     p.innerText=country.capital
//     div.appendChild(p)
contriesdiv.appendChild(div)

});

}
const loadcountrydetail=name=>{
    
    const url=`https://restcountries.com/v3.1/name/${name}`
    console.log(url);
    console.log(name);
    fetch(url)
    .then(res=>res.json())
    .then(data=>displaycountrydetails(data[0]))
}

const displaycountrydetails=country=>{
    console.log(country)
}
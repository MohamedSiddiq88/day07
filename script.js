console.log("array methods");
let request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    let result=JSON.parse(request.response);
    ////////////////a.Get all the countries from the Asia continent /region using the Filter function
    let a=result.filter((ele)=>ele.region=="Asia");
    console.log(a.map((ele)=>ele.name));


////////////////////b.Get all the countries with a population of less than 2 lakhs using Filter function
// let b=result.filter((ele)=>ele.population<200000);
// console.log(b.map((ele)=>ele.name));


////////////////////c.Print the following details name, capital, flag using forEach function
// let c=result.forEach(element => {
//     console.log(`
//     NAME : ${element.name}
//     CAPITAL : ${element.capital}
//     FLAG : ${element.flag}
//     `);
// });


////////////////d.Print the total population of countries using reduce function
// let d=result.map((ele)=>ele.population);
// console.log(d.reduce((ele1,ele2)=>{return ele1+ele2}))


///////////////////e.Print the country which uses US Dollars as currency.
// let e=result.filter((ele)=>ele.currencies!=undefined);
// e=e.filter((ele)=>ele.currencies[0].code=="USD")
// console.log(e.map((ele)=>ele.name));
}
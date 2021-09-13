const form = document.querySelector('#searchForm');
form.addEventListener('submit' , async function(e){
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm , isFunny:'colt' } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config)

    makeImages(res.data);
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for (let result of shows) {
        if(result.show.image){
        const img = document.createElement('IMG');
        img.src = result.show.image.medium;
        document.body.append(img)
        }
    }
}































// const fetchBitcoinPrice = async () => {
//     try {
//         const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//         console.log(res.data.ticker.price)
//     } catch (e) {
//         console.log('ERROR!!!',e)
//     }
// }



// const jokes = document.querySelector('#jokes');
// const button = document.querySelector('button');



// const addNewJoke = async () => {
//     const jokeText = await getDadJoke();
//     console.log(jokeText);
//     const newLI = document.createElement('LI')
//     newLI.append(jokeText);
//     jokes.append(newLI)
// }


// const getDadJoke = async () => {
//     try {
//         const config = {headers: {Accept: 'application/json' } }
//         const res = await axios.get('https://icanhazdadjoke.com/' ,config)
//             return res.data.joke;
//     } catch (error) {
//         return "no jokes avliable :'("
//     }
   
// }


// button.addEventListener('click', addNewJoke)


// <!-- <h1>Click to get new joke!</h1>

// <button>Click me</button>

// <ul id="jokes"></ul> -->



















// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then( res =>{
//         console.log(res.data.ticker.price)
//     })
































// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log('RESPONSE!!' , res)
//     })
//     .catch(e => {
//         console.log('OH NO, ERROR!!' , e)
//     })


















// const req = new XMLHttpRequest()


// req.onload = function (){
//      console.log('all done!!')
//      console.log(this)
// }

// req.onerror = function() {
//     console.log("ERROR")
//     console.log(this)
// }


// req.open('GET' , 'https://api.cryptonator.com/api/ticker/btc-usd');

// req.send();






























// window.addEventListener('load', () => {

//     console.log('random.quots.js loaded')

//     fetch('https://icanhazdadjoke.com/')
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(json){
//         console.log(json)
//     })

// })
























// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log("response , waiting to parse...", res)
//         return res.json()
//     })
//     .then(data => {
//         console.log("DATA PARSED..." , data)
//         console.log(data.ticker.price)
//     })
//     .catch(e => {
//         console.log("OOH NO , ERROR" , e)    
//     })





























// const req = new XMLHttpRequest();

// req.onload =  function (){
//     console.log("ALL DONE WITH REQUEST!!!")
//     const data = JSON.parse(this.responseText)
//     console.log(data.ticker.price);

// }

// req.onerror = function (){
//     console.log("ERROR!!")
//     console.log(this)
// }

// req.open('GET' , 'https://api.cryptonator.com/api/ticker/btc-usd');
// req.send();

// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let movies=document.getElementById("movies")

let id;
async function searchMovies(){
    try{
        const query=document.getElementById("search").value
        let res=await fetch(`https://www.omdbapi.com/?s=${query}&apikey=53a7dd9f`)
        let data=await res.json();
        // console.log("data:",data)
         const movies=data.Search
        //   return movies
         appendMovies(movies)
         
    }
    catch(err){
console.log("err:",err)
    }
}
function appendMovies(data){
    data.forEach(function(el){
        let box=document.createElement("div")
        let img=document.createElement("img")
        img.src=el.Poster
        let title=document.createElement("p")
        title.innerText=el.Title
let btn=document.createElement("button")
  btn.innerText="book now"
      btn.setAttribute="class","book_now"
      btn.addEventListener("click",function(){cart(el)})
 box.append(img,title,btn)
 console.log(box)
    document.getElementById("movies").append(box)
});
}

 var list=[]
function cart(elem){
    list.push(elem)
 console.log(elem)
window.location.href="./checkout.html"
localStorage.setItem("movie",JSON.stringify(list))

}

    async function main(){
        let data=await searchMovies();
        if(data==undefined){
            return false
        }
        appendMovies(data)
    }

function debounce(func,delay){
    if(id){
        clearTimeout(id);
    }
    id=setTimeout(function (){
        func();
    
    },delay)
  }

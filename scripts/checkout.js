// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let movies=document.getElementById("movie")

var list=JSON.parse(localStorage.getItem("movie"))
 console.log(list)
    list.forEach(function(el){
        console.log(el)
        let box=document.createElement("div")
        let img=document.createElement("img")
        img.src=el.Poster
        let title=document.createElement("p")
        title.innerText=el.Title
        box.append(img,title)
         movies.append(box)

        });

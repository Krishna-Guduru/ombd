// Store the wallet amount to your local storage with key "amount"
function addtoWallet(){
    let amount=document.getElementById("amount").value
let h1=document.getElementById("wallet")
let p=document.createElement("h2")
p.style.float="right"
p.innerText=amount
h1.append(p)
    console.log(amount)

}




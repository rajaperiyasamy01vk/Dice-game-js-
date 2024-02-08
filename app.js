
let menu=document.querySelector(".menu-svg")

let nav = document.querySelector(".nav-rigth")

let c = 1; 

menu.addEventListener("click",()=>{
    
    if(c%2!=0){
        nav.classList.add("d-flex")
        c=c+1
    }else
    {
        nav.classList.remove("d-flex")
        c=1
    }


})

function closenav(){
    if(c=2){
        nav.classList.remove("d-flex")
        c=1
    }else{
        nav.classList.add("d-flex")
        c=2
    } 
}





let btn = document.querySelector(".btn")

let historys =[];

let hcount =0;

btn.addEventListener("click",()=>{

    let dice = document.getElementById("dice")

    let diceAudio = document.getElementById('diceAudio');

    let ran = Math.floor((Math.random()*6)+1)

    historys.push(ran)

    diceAudio.play()

    dice.innerHTML=""

    dice.classList.add("ro")

    setTimeout(()=>{
        dice.innerText= ran
        dice.classList.remove("ro")
    },1000)

    hcount = hcount +1;

    
})



let navhistory = document.querySelector(".nav-history")

let historelement = document.querySelector(".history")

historelement.style.display = "none"

let historycontainer = document.createElement("div")

historycontainer.classList.add("history-container")

historelement.appendChild(historycontainer)


navhistory.addEventListener("click",()=>{

    closenav();
    console.log(historys.length)


    historelement.style.display = "flex"

    let historysvg = document.querySelector(".history-svg")

    historysvg.addEventListener("click",()=>{

        historelement.style.display = "none"
    })

    if(historys.length==0){

        historycontainer.innerText="No Records..."
    }
    else if(historys.length>5){

        historycontainer.innerText =""

        for(let i =historys.length-5;i<historys.length;i++){


            let historycontainerelement = document.createElement("div")
    
            
            historycontainerelement.innerHTML = historys[i];
    
    
            historycontainer.appendChild(historycontainerelement)
        
        }

    }else{

        historycontainer.innerText =""

        for(let i =0;i<historys.length;i++){


            let historycontainerelement = document.createElement("div")
    
            
            historycontainerelement.innerHTML = historys[i];
    
    
            historycontainer.appendChild(historycontainerelement)
        
        }
    
    }


})


let navrule = document.querySelector(".nav-rule")

let rule = document.querySelector(".rule")

navrule.addEventListener("click",()=>{

    closenav();

    rule.style.display = "flex"

    let rulesvg = document.querySelector(".rule-svg")

    rulesvg.addEventListener("click",()=>{

        rule.style.display = "none"
    })

})



let navcontact = document.querySelector(".nav-contact")

let contact = document.querySelector(".contact")

navcontact.addEventListener("click",()=>{

    closenav();

   contact.style.display = "flex"

    let contactsvg = document.querySelector(".contact-svg")

    contactsvg.addEventListener("click",()=>{

        contact.style.display = "none"
    })

})



let navhelp = document.querySelector(".nav-help")

let help = document.querySelector(".help")

navhelp.addEventListener("click",()=>{

    closenav();

   help.style.display = "flex"

    let helpsvg = document.querySelector(".help-svg")

   helpsvg.addEventListener("click",()=>{

        help.style.display = "none"
    })

})
var objVar
// let objLet
const referOl = document.querySelector("#referOl")
const generateBtn = document.querySelector("#generateBtn")
generateBtn.addEventListener("click",swit)


function putin(){
    referOl.innerHTML = ""
    for(let i = 0; i < objVar.length; i++){
        referOl.innerHTML += " <li><a target = \"blank\" href=\"" + objVar[i]["link"] + "\"><i>" + objVar[i]["text"] + "</i></a></li>"
    }
}

// wait fetch until finish
async function getObjII(){
    const res = await fetch("links.json")
    const json = await res.json()
    objVar = json
    console.log(objVar)
    putin()
}

// getObjII() new method (with async function)
function swit(){
    getObjII()
    // putin() it runs too fast if you put the function here
}


// origin method 
function fillSpace(){
    // console.log(objVar)
    fetch('links.json').then(function(response){
        return response.json()
    }).then(function(result){
        // console.log(result)
        objVar = result
        objLet = result
        // console.log(objVar, objLet, "(1)")
    })
    setTimeout(() => {
        if(objVar === undefined){
            getJson()
            console.log("objVar-undefined")
        }else{
            console.log("objVar-defined")
            putin()
        }
    }, 1);
}

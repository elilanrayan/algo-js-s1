let a = "Jean"
let b = "Paul"
let result 

function checkName(namea,nameb){
    if (namea==nameb){
        return true
    }
    else{return false}   
}

result=checkName(a,b)

console.log(result)

function checkName2(namea,nameb){
    return (namea==nameb)
}
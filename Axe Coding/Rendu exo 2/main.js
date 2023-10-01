
let jason={ name :"Jason",hp: 100}


class survivor{
    constructor(name,probdie,probdmg,probdiedmg){
        this.name=name
        this.probdie=probdie
        this.probdmg=probdmg
        this.probdiedmg=probdiedmg
      
    }

}

let s1=new survivor("Ryan",0.2,0.4,0.4)
let s2=new survivor("John",0.1,0.6,0.3)
let s3=new survivor("Brent",0.3,0.5,0.2)
let s4=new survivor("David",0.4,0.3,0.3)
let s5=new survivor("Lisa",0.5,0.2,0.3)



let survivorname=[s1,s2,s3,s4,s5]

while(jason.hp>0 || survivorname !==null ){
    let persoran=Math.floor(survivorname.length*Math.random())
    let perso=survivorname[persoran]
    let die=perso.probdie
    let dmg=perso.probdmg
    let diedmg=perso.probdiedmg
    let proba= Math.random()

    if (proba<die){
        console.log(perso.name+" est mort !")
        survivorname.splice(persoran)
        if (survivorname==[]){
            console.log("Jason a gagné !")
            break
        }
    
        continue
    }

    if (proba<die+diedmg){
        jason.hp-=15
        survivorname.splice(persoran)
        console.log(perso.name+" a attaqué mais est mort")
        console.log("Jason a "+jason.hp+" de vie !")

        if (survivorname==[]){
            console.log("Jason a gagné !")
            break
        }

        if (jason.hp<=0){
            let winName=[]
            survivorname.forEach(name => {
               winName.push(" "+name.name+" ")  
            })
            console.log("Les survivants ont gagné ! mais il reste que " + winName)
            break
        }
        continue
    }

    else if (proba<die+diedmg+dmg){
        console.log(perso.name+" a attaqué Jason")
        jason.hp-=10
        console.log("Jason a "+jason.hp+" de vie !")
        if (jason.hp<=0){
            let winName=[]
            survivorname.forEach(name => {
               winName.push(" "+name.name+" ")  
            })
            console.log("Les survivants ont gagné ! mais il reste que " + winName)
            break
        }
        continue
    }

    
}

/* A la ligne 27, problème de type "indéfini", j'ai essayé de regler mais pas réussi, affiche le bon résultat mais ne marche pas quand je met dans une variable pour comparer donc impossibilité 
de voir Jason mourrir mais seulment survivant gagné. Pas trop compris le système de probabilités
Quand je fais let die=s1.probdie ca marche mais pour let die=perso.probdie ce ne marche pas.*/
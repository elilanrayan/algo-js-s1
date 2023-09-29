let music=["Anissa - Wejedene"," Fein - Travis Scot","Ma Joile - Jul","Blindin Lights - The Weeknd", "Fever - Dua Lipa & Angèle"]

class Character{
    constructor(name,hp){
        this.name= name
        this.hp= hp
    }

    random(music){
        return music[Math.floor(music.length*Math.random())]   
    }

    travel(){
        let taxichange=0
        let redfire=0
        while (redfire<30 || this.hp>=0){
            redfire+=1
            let radio= this.random(music)
            console.log(this.name+" est à "+redfire+" feux rouges et écoute "+ radio)
            if (radio=="Anissa - Wejedene"){
                this.hp-=1
                taxichange+=1
                console.log("Oh Zut ! J'ai "+this.hp+" vie et j'ai changé "+taxichange+" taxis !")
            }
            if (this.hp==0){
                console.log(this.name+" en a marre, "+this.name+ " est en dépression !")
                break
            }
            if (redfire==30){
                console.log("Bravo, "+this.name+" est arrivé chez lui avec "+taxichange+" taxi changés")
                break
            }

        }
    }


}

let perso1= new Character("John",10)


perso1.travel()


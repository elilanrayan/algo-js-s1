class pokemon {
    constructor(name,attack,defense,hp,luck){
        this.name= name
        this.attack=attack
        this.defense=defense
        this.hp=hp
        this.luck=luck
    }

    isLucky(){
        if (Math.random()<this.luck){
            return false
        }
        else{
            return true
        }
    }

    attackPokemon(pokemon){
        if(this.isLucky()===true){
            let damage=0
            damage=this.attack-pokemon.defense
            pokemon.hp-=damage
            console.log(pokemon.name+ " a "+pokemon.hp+" de vie et a reçu "+damage+ " de dégâts")
        }
    }
}


let pokemon1= new pokemon("Dracofeu",5,3,50,0.7)
let pokemon2= new pokemon("Pikachu",4,2,50,0.2)

while (pokemon1.hp>0 || pokemon2.hp>0){

    pokemon1.attackPokemon(pokemon2)
    if(pokemon2.hp<=0){
        console.log("Pas de bol, tu es mort " + pokemon2.name)
    break}
    
    pokemon2.attackPokemon(pokemon1)
    if(pokemon1.hp<=0){
        console.log("Pas de bol, tu es mort "+ pokemon1.name)
    break}
}



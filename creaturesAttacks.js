//Set a JS Object that contains the Creatures Attacks
//Each creature has a name, a type, a damage and a description
//The damage is a random number between 1 and 10
//The description is a string that describes the attack
//The type is a string that describes the type of attack
//The object should have at least 3 creatures
//The object should have at least 3 attacks for each creature
//The object should have at least 3 different types of attacks
//The object should have at least 3 different types of creatures
//The object should have at least 3 different descriptions
//The object should have at least 3 different damages
//The object should have at least 3 different names
//The object should have at least 3 different types
//The object should have at least 3 different creatures
//The object should have at least 3 different attacks

export const FireCreaturesAttacks = { 

    Dragon: { 

        name : "Fire Dragon",
        type : "Fire",
        damage : Math.floor(Math.random() * 10) + 1,
        description : "The Fire Dragon breathes fire",
        attacks : [
            { 
                name : "Fire Ball",
                type : "Fire",
                damage : 7.5,
                description : "The Fire Dragon throws a fire ball"
            },
            { 
                name : "Fire Breath",
                type : "Fire",
                damage : 8.5,
                description : "The Fire Dragon breathes fire"
            },
            { 
                name : "Fire Claw",
                type : "Fire",
                damage : 8,
                description : "The Fire Dragon scratches with its claws"
            }
        ]
    
    },
    Phoenix: { 

        name : "Fire Phoenix",
        type : "Fire",
        damage : Math.floor(Math.random() * 10) + 1,
        description : "The Fire Phoenix rises from the ashes",
        attacks : [
            { 
                name : "Fire Wing",
                type : "Fire",
                damage : 7,
                description : "The Fire Phoenix flaps its wings"
            },
            { 
                name : "Fire Feather",
                type : "Fire",
                damage : 8,
                description : "The Fire Phoenix shoots a fire feather"
            },
            { 
                name : "Fire Tail",
                type : "Fire",
                damage : 8.5,
                description : "The Fire Phoenix whips with its tail"
            }
        ]
    
    },
    Sphinx : {
        
        name : "Fire Sphinx",
        type : "Fire",
        damage : Math.floor(Math.random() * 10) + 1,
        description : "The Fire Sphinx guards the temple",
        attacks : [
            { 
                name : "Fire Eye",
                type : "Fire",
                damage : 7,
                description : "The Fire Sphinx shoots fire from its eyes"
            },
            { 
                name : "Fire Claw",
                type : "Fire",
                damage : 8,
                description : "The Fire Sphinx scratches with its claws"
            },
            { 
                name : "Fire Tail",
                type : "Fire",
                damage : 8.5,
                description : "The Fire Sphinx whips with its tail"
            }
        ]
    },
    WildFire : {

        name : "Wild Fire",
        type : "Fire",
        damage : Math.floor(Math.random() * 10) + 1,
        description : "The Wild Fire burns everything in its path",
        attacks : [
            { 
                name : "Fire Blast",
                type : "Fire",
                damage : 7,
                description : "The Wild Fire shoots a fire blast"
            },
            { 
                name : "Fire Wave",
                type : "Fire",
                damage : 8,
                description : "The Wild Fire sends a wave of fire"
            },
            { 
                name : "Fire Storm",
                type : "Fire",
                damage : 9,
                description : "The Wild Fire creates a fire storm"
            }
        ]
    },
    Volcano : {

        name : "Volcano",
        type : "Fire",
        damage : Math.floor(Math.random() * 10) + 1,
        description : "The Volcano erupts",
        attacks : [
            { 
                name : "Lava Blast",
                type : "Fire",
                damage : 7,
                description : "The Volcano shoots a lava blast"
            },
            { 
                name : "Lava Wave",
                type : "Fire",
                damage : 8,
                description : "The Volcano sends a wave of lava"
            },
            { 
                name : "Lava Storm",
                type : "Fire",
                damage : 9,
                description : "The Volcano creates a lava storm"
            }
        ]
    }
}


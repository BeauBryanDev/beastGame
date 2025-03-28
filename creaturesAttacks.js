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

attacksByCreatures = {

    Fire : [

        Phoenix = {
            name : "Fire Phoenix",
            type : "Fire",
            ranDamage : Math.floor(Math.random() * 10) + 1,
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
        Sphinx = {
            name : "Fire Sphinx",
            type : "Fire",
            ranDamage  : Math.floor(Math.random() * 10) + 1,
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
        Dragon = {

            name : "Fire Dragon",
            type : "Fire",
            ranDamage  : Math.floor(Math.random() * 10) + 1,
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

        WildFire = {

            name : "Wild Fire",
            type : "Fire",
            ranDamage  : Math.floor(Math.random() * 10) + 1,
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
        Volcano = {

            name : "Volcano",
            type : "Fire",
            ranDamage  : Math.floor(Math.random() * 10) + 1,
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
    
            ],

        }

    ],

    Water : [ 

        CatFish = {

            name : "Cat Fish",
            type : "Water",
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The Cat Fish swims in the river",
            attacks : [
                { 
                    name : "Water Splash",
                    type : "Water",
                    damage : 7,
                    description : "The Cat Fish splashes water"
                },
                { 
                    name : "Water Wave",
                    type : "Water",
                    damage : 8,
                    description : "The Cat Fish sends a wave of water"
                },
                { 
                    name : "Water Storm",
                    type : "Water",
                    damage : 9,
                    description : "The Cat Fish creates a water storm"
                }
            ]
        },
        Piranha = {

            name : "Piranha",
            type : "Water",
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The Piranha swims in the river",
            attacks : [
                { 
                    name : "Water Bite",
                    type : "Water",
                    damage : 7,
                    description : "The Piranha bites"
                },
                { 
                    name : "Water Claw",
                    type : "Water",
                    damage : 8,
                    description : "The Piranha scratches with its claws"
                },
                { 
                    name : "Water Tail",
                    type : "Water",
                    damage : 8.5,
                    description : "The Piranha whips with its tail"
                }
            ]
        },
        Eel = {

            name : "Eel",
            type : "Water",
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The Eel swims in the river",
            attacks : [
                { 
                    name : "Water Bite",
                    type : "Water",
                    damage : 7,
                    description : "The Eel bites"
                },
                { 
                    name : "Water Claw",
                    type : "Water",
                    damage : 8,
                    description : "The Eel scratches with its claws"
                },
                { 
                    name : "Water Tail",
                    type : "Water",
                    damage : 8.5,
                    description : "The Eel whips with its tail"
                }
            ]
        },
        Hippo = {

            name : "Hippo",
            type : "Water",
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The Hippo swims in the river",
            attacks : [
                { 
                    name : "Water Bite",
                    type : "Water",
                    damage : 7,
                    description : "The Hippo bites"
                },
                { 
                    name : "Water Claw",
                    type : "Water",
                    damage : 8,
                    description : "The Hippo scratches with its claws"
                },
                { 
                    name : "Water Tail",
                    type : "Water",
                    damage : 8.5,
                    description : "The Hippo whips with its tail"
                }
            ]
        },
        Dolphin = {

            name : "Dolphin",
            type : "Water",
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The Dolphin swims in the river",
            attacks : [
                { 
                    name : "Water Bite",
                    type : "Water",
                    damage : 7,
                    description : "The Dolphin bites"
                },
                { 
                    name : "Water Claw",
                    type : "Water",
                    damage : 8,
                    description : "The Dolphin scratches with its claws"
                },
                { 
                    name : "Water Tail",
                    type : "Water",
                    damage : 8.5,
                    description : "The Dolphin whips with its tail"
                }
            ]
        },
        Shark = {

            name : "Shark",
            type : "Water",
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The Shark swims in the river",
            attacks : [
                { 
                    name : "Water Bite",
                    type : "Water",
                    damage : 7,
                    description : "The Shark bites"
                },
                { 
                    name : "Water Claw",
                    type : "Water",
                    damage : 8,
                    description : "The Shark scratches with its claws"
                },
                { 
                    name : "Water Tail",
                    type : "Water",
                    damage : 8.5,
                    description : "The Shark whips with its tail"
                }
            ]
        },
        Whale = {

            name : "Whale",
            type : "Water",
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The Whale swims in the river",
            attacks : [
                { 
                    name : "Water Bite",
                    type : "Water",
                    damage : 7,
                    description : "The Whale bites"
                },
                { 
                    name : "Water Claw",
                    type : "Water",
                    damage : 8,
                    description : "The Whale scratches with its claws"
                },
                { 
                    name : "Water Tail",
                    type : "Water",
                    damage : 8.5,
                    description : "The Whale whips with its tail"
                }
            ]
        },
        SeaSerpent = {

            name : "Sea Serpent",
            type : "Water",
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The Sea Serpent swims in the river",
            attacks : [
                { 
                    name : "Water Bite",
                    type : "Water",
                    damage : 7,
                    description : "The Sea Serpent bites"
                },
                { 
                    name : "Water Claw",
                    type : "Water",
                    damage : 8,
                    description : "The Sea Serpent scratches with its claws"
                },
                { 
                    name : "Water Tail",
                    type : "Water",
                    damage : 8.5,
                    description : "The Sea Serpent whips with its tail"
                }
            ]
        }
    ],

    Snow : [

        Seal = {
            
            name : "Seal",
            type : "Snow",
            ranDamage : Math.floor(Math.random() * 10) + 1,
            description : "The Seal swims in the snow",
            attacks : [
                { 
                    name : "Snow Ball",
                    type : "Snow",
                    damage : 7,
                    description : "The Seal throws a snow ball"
                },
                { 
                    name : "Snow Claw",
                    type : "Snow",
                    damage : 8,
                    description : "The Seal scratches with its claws"
                },
                { 
                    name : "Snow Tail",
                    type : "Snow",
                    damage : 8.5,
                    description : "The Seal whips with its tail"
                }
            ]
        },
        WhiteBear = {
            
            name : "White Bear",
            type : "Snow",
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The White Bear swims in the snow",
            attacks : [
                { 
                    name : "Snow Ball",
                    type : "Snow",
                    damage : 7,
                    description : "The White Bear throws a snow ball"
                },
                { 
                    name : "Snow Claw",
                    type : "Snow",
                    damage : 8,
                    description : "The White Bear scratches with its claws"
                },
                { 
                    name : "Snow Tail",
                    type : "Snow",
                    damage : 8.5,
                    description : "The White Bear whips with its tail"
                }
            ]
        },
        Orca = {
            
            name : "Orca",
            type : "Snow",
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The Orca swims in the snow",
            attacks : [
                { 
                    name : "Snow Ball",
                    type : "Snow",
                    damage : 7,
                    description : "The Orca throws a snow ball"
                },
                { 
                    name : "Snow Claw",
                    type : "Snow",
                    damage : 8,
                    description : "The Orca scratches with its claws"
                },
                { 
                    name : "Snow Tail",
                    type : "Snow",
                    damage : 8.5,
                    description : "The Orca whips with its tail"
                }
            ]
        },
        BlueWhale = {
            
            name : "Blue Whale",
            type : "Snow",
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The Blue Whale swims in the snow",
            attacks : [
                { 
                    name : "Snow Ball",
                    type : "Snow",
                    damage : 7,
                    description : "The Blue Whale throws a snow ball"
                },
                { 
                    name : "Snow Claw",
                    type : "Snow",
                    damage : 8,
                    description : "The Blue Whale scratches with its claws"
                },
                { 
                    name : "Snow Tail",
                    type : "Snow",
                    damage : 8.5,
                    description : "The Blue Whale whips with its tail"
                }
            ]
        },
        IceDragon = {
            
            name : "Ice Dragon",
            type : "Snow",
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The Ice Dragon swims in the snow",
            attacks : [
                { 
                    name : "Snow Ball",
                    type : "Snow",
                    damage : 7,
                    description : "The Ice Dragon throws a snow ball"
                },
                { 
                    name : "Snow Claw",
                    type : "Snow",
                    damage : 8,
                    description : "The Ice Dragon scratches with its claws"
                },
                { 
                    name : "Snow Tail",
                    type : "Snow",
                    damage : 8.5,
                    description : "The Ice Dragon whips with its tail"
                }
            ]
        }

    ],

    Air : [

        Parrot = {

            name : "Parrot",
            type : "Air",
            ranDamage : Math.floor(Math.random() * 10) + 1,
            description : "The Parrot flies in the sky",
            attacks : [
                { 
                    name : "Air Wing",
                    type : "Air",
                    damage : 7,
                    description : "The Parrot flaps its wings"
                },
                { 
                    name : "Air Feather",
                    type : "Air",
                    damage : 8,
                    description : "The Parrot shoots a feather"
                },
                { 
                    name : "Air Tail",
                    type : "Air",
                    damage : 8.5,
                    description : "The Parrot whips with its tail"
                }
            ]

        },

        Eagle = {   

            name : "Eagle",
            type : "Air",
            ranDamage : Math.floor(Math.random() * 10) + 1,
            description : "The Eagle flies in the sky",
            attacks : [
                { 
                    name : "Air Wing",
                    type : "Air",
                    damage : 7,
                    description : "The Eagle flaps its wings"
                },
                { 
                    name : "Air Feather",
                    type : "Air",
                    damage : 8,
                    description : "The Eagle shoots a feather"
                },
                { 
                    name : "Air Tail",
                    type : "Air",
                    damage : 8.5,
                    description : "The Eagle whips with its tail"
                }
            ]

        },

        Owl = {   

            name : "Owl",
            type : "Air",
            ranDamage : Math.floor(Math.random() * 10) + 1,
            description : "The Owl flies in the sky",
            attacks : [
                { 
                    name : "Air Wing",
                    type : "Air",
                    damage : 7,
                    description : "The Owl flaps its wings"
                },
                { 
                    name : "Air Feather",
                    type : "Air",
                    damage : 8,
                    description : "The Owl shoots a feather"
                },
                { 
                    name : "Air Tail",
                    type : "Air",
                    damage : 8.5,
                    description : "The Owl whips with its tail"
                }
            ]

        },

        Hawk = {    
            
            name : "Hawk",
            type : "Air",
            ranDamage : Math.floor(Math.random() * 10) + 1,
            description : "The Hawk flies in the sky",
            attacks : [
                { 
                    name : "Air Wing",
                    type : "Air",
                    damage : 7,
                    description : "The Hawk flaps its wings"
                },
                { 
                    name : "Air Feather",
                    type : "Air",
                    damage : 8,
                    description : "The Hawk shoots a feather"
                },
                { 
                    name : "Air Tail",
                    type : "Air",
                    damage : 8.5,
                    description : "The Hawk whips with its tail"
                }
            ]

        },

        Falcon = {   

            name : "Falcon",
            type : "Air",
            ranDamage : Math.floor(Math.random() * 10) + 1,
            description : "The Falcon flies in the sky",
            attacks : [
                { 
                    name : "Air Wing",
                    type : "Air",
                    damage : 7,
                    description : "The Falcon flaps its wings"
                },
                { 
                    name : "Air Feather",
                    type : "Air",
                    damage : 8,
                    description : "The Falcon shoots a feather"
                },
                { 
                    name : "Air Tail",
                    type : "Air",
                    damage : 8.5,
                    description : "The Falcon whips with its tail"
                }
            ]

        }

    ],

    Earth : [

        Elephant = {
            
            name : "Elephant",
            type : "Earth",
            ranDamage : Math.floor(Math.random() * 10) + 1,
            description : "The Elephant walks on the ground",
            attacks : [
                { 
                    name : "Earth Stomp",
                    type : "Earth",
                    damage : 7,
                    description : "The Elephant stomps the ground"
                },
                { 
                    name : "Earth Tusk",
                    type : "Earth",
                    damage : 8,
                    description : "The Elephant attacks with its tusks"
                },
                { 
                    name : "Earth Tail",
                    type : "Earth",
                    damage : 8.5,
                    description : "The Elephant whips with its tail"
                }
            ]
        },
        Rhino = {
            
            name : "Rhino",
            type : "Earth",
            ranDamage : Math.floor(Math.random() * 10) + 1,
            description : "The Rhino walks on the ground",
            attacks : [
                { 
                    name : "Earth Stomp",
                    type : "Earth",
                    damage : 7,
                    description : "The Rhino stomps the ground"
                },
                { 
                    name : "Earth Tusk",
                    type : "Earth",
                    damage : 8,
                    description : "The Rhino attacks with its tusks"
                },
                { 
                    name : "Earth Tail",
                    type : "Earth",
                    damage : 8.5,
                    description : "The Rhino whips with its tail"
                }
            ]
        },

        Gorilla = {

            name : "Gorilla",
            type : "Earth",
            ranDamage : Math.floor(Math.random() * 10) + 1,
            description : "Gorilla walks on the ground and hit its chest",

            attacks : [

                {
                    name : "Earth Punch",
                    type : "Earth",
                    damage : 7,
                    description : "The Gorilla punches the ground"
                },
                {
                    name : "Earth Kick",
                    type : "Earth",
                    damage : 8,
                    description : "The Gorilla kicks the ground"
                },
                {
                    name : "Earth Tail",
                    type : "Earth",
                    damage : 8.5,
                    description : "The Gorilla whips with its tail"
                }

            ]

        }, 

        Lion = {

            name : "Lion",
            type : "Earth",
            ranDamage : Math.floor(Math.random() * 10) + 1,
            description : "The Lion walks on the ground and roars",

            attacks : [

                {
                    name : "Earth Bite",
                    type : "Earth",
                    damage : 7,
                    description : "The Lion bites"
                },
                {
                    name : "Earth Claw",
                    type : "Earth",
                    damage : 8,
                    description : "The Lion scratches with its claws"
                },
                {
                    name : "Earth Scratch",
                    type : "Earth",
                    damage : 8.5,
                    description : "The Lion Scratch within its claws"
                }

            ]

        },

        Mammoth = {

            name : "Mammoth",
            type : "Earth",
            ranDamage : Math.floor(Math.random() * 10) + 1,
            description : "The Mammoth walks on the ground and trumpets",

            attacks : [

                {
                    name : "Earth Stomp",
                    type : "Earth",
                    damage : 7,
                    description : "The Mammoth stomps the ground"
                },
                {
                    name : "Earth Tusk",
                    type : "Earth",
                    damage : 8,
                    description : "The Mammoth attacks with its tusks"
                },
                {
                    name : "Earth Tail",
                    type : "Earth",
                    damage : 8.5,
                    description : "The Mammoth whips with its tail"
                }

            ]

        }

    ]

}


const DragonFireClawsAttack = attacksByCreatures.Fire[2].attacks[2].name;
const DragonFireClawsDamage = attacksByCreatures.Fire[2].attacks[2].damage;
const DragonFireClawsDescription = attacksByCreatures.Fire[2].attacks[2].description;

console.log(`The Dragon's Fire Claws Attack is ${DragonFireClawsAttack} with a damage of ${DragonFireClawsDamage} and the description is ${DragonFireClawsDescription}`);

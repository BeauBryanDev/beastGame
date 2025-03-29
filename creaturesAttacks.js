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

GameAttacks  = {

    Fire : [

        Phoenix = {
            name : "Phoenix",
            type : "Fire",
            strength : 75,
            weak : 25,
            BtnColor : "red",
            Power : 45 ,
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
            name : "Sphinx",
            type : "Fire",
            strength : 75,
            weak : 15,
            BtnColor : "red",
            Power : 65 ,
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

            name : "FireDragon",
            type : "Fire",
            strength : 85,
            weak : 20,
            BtnColor : "red",
            Power : 85 ,
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

            name : "WildFire",
            type : "Fire",
            strength : 85,
            weak : 35,
            BtnColor : "red",
            Power : 95 ,
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
            strength : 75,
            weak : 15,
            BtnColor : "red",
            Power : 90 ,
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

            name : "CatFish",
            type : "Water",
            strength : 35,
            weak : 55,
            BtnColor : "blue",
            Power : 25 ,
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The Cat Fish swims in the river",
            attacks : [
                { 
                    name : "Water Splash",
                    type : "Water",
                    damage : 5,
                    description : "The Cat Fish splashes water",
                },
                { 
                    name : "Water Wave",
                    type : "Water",
                    damage : 3,
                    description : "The Cat Fish sends a wave of water",
                },
                { 
                    name : "Water Storm",
                    type : "Water",
                    damage : 3,
                    description : "The Cat Fish creates a water storm"
                }
            ]
        },
        Piranha = {

            name : "Piranha",
            type : "Water",
            strength : 75,
            weak : 35,
            BtnColor : "blue",
            Power : 55 ,
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The Piranha swims in the river and they attack in groups",
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
                    name : "Group River Pack",
                    type : "Water",
                    damage : 8.5,
                    description : "The Piranha hunt un the river"
                }
            ]
        },
        Eel = {

            name : "Eel",
            type : "Water",
            strength : 75,
            weak : 35,
            Power : 55 ,
            BtnColor : "blue",
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The Eel swims in the river and relase electric shocks",
            attacks : [
                { 
                    name : "Water Bite",
                    type : "Electricity",
                    damage : 7,
                    description : "The Eel bites"
                },
                { 
                    name : "Water Claw",
                    type : "Electricity",
                    damage : 8,
                    description : "The Eel scratches with its claws"
                },
                { 
                    name : "Electrical Shock",
                    type : "Electricity",
                    damage : 8.5,
                    description : "The Eel release a powerfull electric shock in the river"
                }
            ]
        },
        Hippo = {

            name : "Hippo",
            type : "Water",
            strength : 75,
            weak : 35,
            Power : 55 ,
            BtnColor : "blue",
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The Hippo swims in the river and it is very aggressive",
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
                    name : "Hippo Squeeze",
                    type : "Water",
                    damage : 8.5,
                    description : "The Hippo crush with its powerful claws"
                }
            ]
        },
        Dolphin = {

            name : "Dolphin",
            type : "Water",
            strength : 75,
            weak : 35,
            Power : 55 ,
            BtnColor : "blue",
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The Dolphin swims in open Seas",
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
            strength : 75,
            weak : 35,
            Power : 55 ,
            BtnColor : "blue",
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The Shark swims in the blue Sea",
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
            strength : 75,
            weak : 35,
            Power : 55 ,
            BtnColor : "blue",
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The Whale swims in the deep Sea and it is very big",
            attacks : [
                { 
                    name : "Water Tail Hit",
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

            name : "SeaSerpent",
            type : "Water",
            strength : 75,
            weak : 35,
            Power : 55 ,
            BtnColor : "blue",
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
                    description : "The Sea Serpent whips with its Body"
                }
            ]
        }
    ],

    Snow : [

        Seal = {
            
            name : "Seal",
            type : "Snow",
            strength : 75,
            weak : 35,
            Power : 55 ,
            BtnColor : "white",
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
            
            name : "WhiteBear",
            type : "Snow",
            strength : 75,
            weak : 35,
            Power : 55 ,
            BtnColor : "blue",
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
        KillerWhale = {
            
            name : "KillerWhale",
            type : "Snow",
            strength : 75,
            weak : 35,
            Power : 55 ,
            BtnColor : "blue",
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
            
            name : "BlueWhale",
            type : "Snow",
            strength : 75,
            weak : 35,
            Power : 55 ,
            BtnColor : "blue",
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
            
            name : "IceDragon",
            type : "Snow",
            strength : 75,
            weak : 35,
            Power : 55 ,
            BtnColor : "lightblue",
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
            strength : 75,
            weak : 35,
            Power : 55 ,
            BtnColor : "ligthgray",
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
            strength : 75,
            weak : 35,
            Power : 55 ,
            BtnColor : "cyan",
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
                    name : "Air Claws",
                    type : "Air",
                    damage : 8.5,
                    description : "The Eagle Scratch with its claws"
                }
            ]

        },

        Owl = {   

            name : "Owl",
            type : "Air",
            strength : 75,
            weak : 35,
            Power : 55 ,
            BtnColor : "lightgray",
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
                    name : "Air Claws",
                    type : "Air",
                    damage : 8.5,
                    description : "The Owl whips with its claws"
                }
            ]

        },

        Hawk = {    
            
            name : "Hawk",
            type : "Air",
            name : "Eagle",
            type : "Air",
            strength : 75,
            weak : 35,
            Power : 55 ,
            BtnColor : "lightgray",
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
            name : "Eagle",
            type : "Air",
            strength : 75,
            weak : 35,
            Power : 55 ,
            BtnColor : "lightgray",
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
            name : "Eagle",
            type : "Air",
            strength : 75,
            weak : 35,
            Power : 55 ,
            BtnColor : "brown",
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
            strength : 75,
            weak : 35,
            Power : 55 ,
            BtnColor : "brown",
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
            strength : 75,
            weak : 35,
            Power : 55 ,
            BtnColor : "green",
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
            strength : 75,
            weak : 35,
            Power : 55 ,
            BtnColor : "brown",
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
            strength : 75,
            weak : 35,
            Power : 55 ,
            BtnColor : "brown",
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

        },

    ],

    River : [

        Trout = {

            name : "Trout",
            type : "River",
            strength : 75,
            weak : 35,
            Power : 55 ,
            BtnColor : "lightblue",
            ranDamage : Math.floor(Math.random() * 10) + 1,
            description : "The Fish walks Swim in the River",
            attacks : [
                { 
                    name : "Swimming Flee",
                    type : "River",
                    damage : 7,
                    description : "The Trout Escape by Fast Swimming",
                },
            ]
        },
        Otter = {

            name : "Otter",
            type : "River",
            strength : 75,
            weak : 35,
            Power : 55 ,
            BtnColor : "lightblue",
            ranDamage : Math.floor(Math.random() * 10) + 1,
            description : "The Fish walks Swim in the River",
            attacks : [
                { 
                    name : "bite",
                    type : "River",
                    damage : 7,
                    description : "The otter bites with is little mouth"
                },
                {
                    name : "Fast Swimm",
                    type : "River",
                    damage : 6,
                    description : "The Otter rapidly escape  flee from its enemies by swimming downstream"
                }
            ]
        },
        Beaver = {

            name : "Beaver",
            type : "River",
            strength : 75,
            weak : 35,
            Power : 55 ,
            BtnColor : "lightblue",
            ranDamage : Math.floor(Math.random() * 10) + 1,
            description : "The Fish walks Swim in the River",
            attacks : [
                { 
                    name : "bite",
                    type : "River",
                    damage : 7,
                    description : "The Beaver bites with is little mouth"
                },
            ]
        },

        FisherBird = {

            name : "FisherBird",
            type : "River",
            strength : 75,
            weak : 35,
            Power : 55 ,
            BtnColor : "lightblue",
            ranDamage : Math.floor(Math.random() * 10) + 1,
            description : "The Fish walks Swim in the River",
            attacks : [
                { 
                    name : "bite",
                    type : "River",
                    damage : 7,
                    description : "This Bird bite with is little powerfull beak"
                },
                {
                    name : "Hunt in the River",
                    type : " River",
                    damage : 6,
                    description : "The Fishing Bird attack river animals"
                }
            ]

        },
        Crocodrile = {

            name: "Crocodile",
            type: "Swamp",
            strength: 85,
            weak: 25,
            Power: 75,
            BtnColor: "darkolivegreen",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A powerful reptile lurking beneath the water surface.",
            attacks: [
                { 
                    name: "Jaw Crush",
                    type: "Swamp",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "The Crocodile crushes its prey with immense force."
                },
                { 
                    name: "Tail Whip",
                    type: "Swamp",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "The Crocodile swings its tail with brutal strength."
                }
            ]

        },
    ],

    Poison : [

        Snake = {

            name : "Snake",
            type : "Poison",
            strength : 75,
            weak : 35,
            Power : 55 ,
            BtnColor : "purple",
            ranDamage : Math.floor(Math.random() * 10) + 1,
            description : "The Snake crawls on the ground and bite at first seen",
            attacks : [
                { 
                    name : "bite",
                    type : "Posion",
                    damage : 7,
                    description : "The Snake bite with is two poisonous fangs"
                },
                {
                    name : "harsh-hug",
                    type : "Poison",
                    damage : 5,
                    description : "The Snake squeeze its victim with a mortal hug"
                }
            ]
        },
        Scorpion = {

            ame: "Scorpion",
            type: "Poison",
            strength: 80,
            weak: 30,
            Power: 60,
            BtnColor: "purple",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "The Scorpion lurks in the shadows, ready to strike with its venomous sting.",
            attacks: [
                { 
                    name: "Venom Sting",
                    type: "Poison",
                    damage: 8,
                    description: "The Scorpion injects venom with its sharp tail."
                },
                { 
                    name: "Claw Grip",
                    type: "Poison",
                    damage: 7,
                    description: "The Scorpion grabs its prey tightly with its claws."
                },
                { 
                    name: "Poison Spray",
                    type: "Poison",
                    damage: 6,
                    description: "The Scorpion releases a toxic mist around itself."
                }
            ]

        },
        Spider = {

            name: "Spider",
            type: "Poison",
            strength: 70,
            weak: 25,
            Power: 50,
            BtnColor: "purple",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "The Spider weaves deadly webs and waits for its prey to get trapped.",
            attacks: [
                { 
                    name: "Web Trap",
                    type: "Poison",
                    damage: 5,
                    description: "The Spider ensnares its enemy with a sticky web."
                },
                { 
                    name: "Venom Fang",
                    type: "Poison",
                    damage: 8,
                    description: "The Spider injects venom through its sharp fangs."
                },
                { 
                    name: "Shadow Leap",
                    type: "Poison",
                    damage: 6,
                    description: "The Spider swiftly jumps at its prey from the darkness."
                }
            ]

        },
        Wasp = {

            name: "Wasp",
            type: "Poison",
            strength: 65,
            weak: 20,
            Power: 55,
            BtnColor: "purple",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "The Wasp is fast and deadly, striking with precision.",
            attacks: [
                { 
                    name: "Sting Strike",
                    type: "Poison",
                    damage: 7,
                    description: "The Wasp delivers a painful sting to its target."
                },
                { 
                    name: "Aerial Slash",
                    type: "Poison",
                    damage: 6,
                    description: "The Wasp dashes through the air, cutting its enemy."
                },
                { 
                    name: "Toxic Pollen",
                    type: "Poison",
                    damage: 5,
                    description: "The Wasp releases a poisonous pollen to weaken its foe."
                }
            ]

        },
        SeaUrchin = {

            name: "SeaUrchin",
            type: "Poison",
            strength: 60,
            weak: 40,
            Power: 50,
            BtnColor: "purple",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "The Sea Urchin lies in waitin the sea bottom, covered in deadly spikes.",
            attacks: [
                { 
                    name: "Spine Pierce",
                    type: "Poison",
                    damage: 8,
                    description: "The Sea Urchin impales its enemy with sharp spikes."
                },
                { 
                    name: "Poison Wave",
                    type: "Poison",
                    damage: 7,
                    description: "The Sea Urchin releases a poisonous wave around itself."
                },
                { 
                    name: "Toxic Shield",
                    type: "Poison",
                    damage: 6,
                    description: "The Sea Urchin hardens its spikes to fend off attackers."
                }
            ]

        },
        GlobeFish = {

            name: "GlobeFish",
            type: "Poison",
            strength: 55,
            weak: 35,
            Power: 45,
            BtnColor: "purple",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "The Globe Fish inflates itself as a defense mechanism, secreting a deadly toxin.",
            attacks: [
                { 
                    name: "Toxic Puff",
                    type: "Poison",
                    damage: 6,
                    description: "The Globe Fish inflates and releases a toxic gas."
                },
                { 
                    name: "Spike Thrust",
                    type: "Poison",
                    damage: 7,
                    description: "The Globe Fish hurls itself at the enemy with its sharp spines."
                },
                { 
                    name: "Neurotoxin Blast",
                    type: "Poison",
                    damage: 8,
                    description: "The Globe Fish releases a neurotoxin, paralyzing its foe."
                }
            ]


        },

    ],

    Desert : [

        Cactus = {

            name: "Cactus",
            type: "Desert",
            strength: 60,
            weak: 40,
            Power: 50,
            BtnColor: "sandybrown",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A spiky cactus that thrives in the arid desert",
            attacks: [
                { 
                    name: "Needle Shot",
                    type: "Desert",
                    damage: 7,
                    description: "Shoots sharp needles at the enemy"
                },
                { 
                    name: "Thorn Shield",
                    type: "Desert",
                    damage: 5,
                    description: "Uses thorns to protect itself and counterattack"
                },
                { 
                    name: "Desert Growth",
                    type: "Desert",
                    damage: 6,
                    description: "Rapidly grows and extends its roots to trap its enemy"
                }
            ]

        },

        YellowScorpion = {

            name: "YellowScorpion",
            type: "Desert",
            strength: 75,
            weak: 25,
            Power: 65,
            BtnColor: "gold",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A venomous scorpion lurking under the desert sands",
            attacks: [
                { 
                    name: "Venom Sting",
                    type: "Desert",
                    damage: 8,
                    description: "Injects venom with a powerful sting"
                },
                { 
                    name: "Sand Ambush",
                    type: "Desert",
                    damage: 7,
                    description: "Hides under the sand and strikes suddenly"
                },
                { 
                    name: "Claw Crush",
                    type: "Desert",
                    damage: 6,
                    description: "Uses its strong claws to grip and crush the enemy"
                }
            ]
        },
        DesertSnake = {

            name: "DesertSnake",
            type: "Desert",
            strength: 70,
            weak: 30,
            Power: 60,
            BtnColor: "tan",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A stealthy snake that blends with the desert sands",
            attacks: [
                { 
                    name: "Sandbite",
                    type: "Desert",
                    damage: 8,
                    description: "A quick and venomous bite"
                },
                { 
                    name: "Sand Camouflage",
                    type: "Desert",
                    damage: 5,
                    description: "Blends into the environment, making it harder to hit"
                },
                { 
                    name: "Coil Crush",
                    type: "Desert",
                    damage: 7,
                    description: "Wraps around the enemy and squeezes tightly"
                }
            ]
        },
        Vulture = {

            name: "Vulture",
            type: "Desert",
            strength: 65,
            weak: 35,
            Power: 55,
            BtnColor: "brown",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A scavenger bird circling over the desert, waiting for its prey to weaken",
            attacks: [
                { 
                    name: "Talon Strike",
                    type: "Desert",
                    damage: 7,
                    description: "Attacks with its razor-sharp talons"
                },
                { 
                    name: "Sandstorm Dive",
                    type: "Desert",
                    damage: 6,
                    description: "Creates a sandstorm before diving onto the enemy"
                },
                { 
                    name: "Desert Screech",
                    type: "Desert",
                    damage: 5,
                    description: "Unleashes a terrifying screech that weakens the opponent"
                }
            ]
        },
        Camel = {

            name: "Vulture",
            type: "Desert",
            strength: 65,
            weak: 35,
            Power: 55,
            BtnColor: "brown",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A scavenger bird circling over the desert, waiting for its prey to weaken",
            attacks: [
                { 
                    name: "Talon Strike",
                    type: "Desert",
                    damage: 7,
                    description: "Attacks with its razor-sharp talons"
                },
                { 
                    name: "Sandstorm Dive",
                    type: "Desert",
                    damage: 6,
                    description: "Creates a sandstorm before diving onto the enemy"
                },
                { 
                    name: "Desert Screech",
                    type: "Desert",
                    damage: 5,
                    description: "Unleashes a terrifying screech that weakens the opponent"
                }
            ]
        },

    ],

    Forest : [

        Hive = {

            name: "Bee_Hive",
            type: "Forest",
            strength: 60,
            weak: 20,
            Power: 50,
            BtnColor: "yellow",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A swarm of bees attacks.",
            attacks: [
                {
                    name : "Swarm Attack",
                    type : "Poison",
                    damage : 9,
                    description : "A Fourious Swarm of Bees come after You to kill You in Group."
                },
                {
                    name: "Bee Sting",
                    type: "Forest",
                    damage: 6,
                    description: "A swarm of bees stings the enemy."
                },
                {
                    name: "Honey Trap",
                    type: "Forest",
                    damage: 4,
                    description: "The Hive releases sticky honey."
                }
            ]
        },
        Raccoon = {

            name: "Raccoon",
            type: "Forest",
            strength: 65,
            weak: 25,
            Power: 55,
            BtnColor: "gray",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A sneaky raccoon attacks.",
            attacks: [
                {
                    name: "Scratch",
                    type: "Forest",
                    damage: 7,
                    description: "The Raccoon scratches with its claws."
                },
                {
                    name: "Trash Toss",
                    type: "Forest",
                    damage: 5,
                    description: "The Raccoon throws trash."
                }
            ]
        },
        Wildboar = {

            name: "Wildboar",
            type: "Forest",
            strength: 75,
            weak: 30,
            Power: 65,
            BtnColor: "brown",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A powerful wild boar charges.",
            attacks: [
                {
                    name: "Tusk Charge",
                    type: "Forest",
                    damage: 8,
                    description: "The Wildboar charges with its tusks."
                },
                {
                    name: "Mud Throw",
                    type: "Forest",
                    damage: 6,
                    description: "The Wildboar throws mud."
                }
            ]

        },
        Bison = {

            name: "Bison",
            type: "Forest",
            strength: 80,
            weak: 35,
            Power: 70,
            BtnColor: "brown",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A massive bison charges.",
            attacks: [
                {
                    name: "Gore Charge",
                    type: "Forest",
                    damage: 9,
                    description: "The Bison gores with its horns."
                },
                {
                    name: "Stampede",
                    type: "Forest",
                    damage: 7,
                    description: "The Bison stampedes."
                }
            ]

        },
        Deer = {

            name: "Deer",
            type: "Forest",
            strength: 60,
            weak: 20,
            Power: 50,
            BtnColor: "tan",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A swift deer kicks.",
            attacks: [
                {
                    name: "Kick",
                    type: "Forest",
                    damage: 6,
                    description: "The Deer kicks with its hooves."
                },
                {
                    name: "Antler Strike",
                    type: "Forest",
                    damage: 5,
                    description: "The Deer strikes with its antlers."
                }
            ]

        },
        Fox = {

            name: "Fox",
            type: "Forest",
            strength: 65,
            weak: 25,
            Power: 55,
            BtnColor: "orange",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A cunning fox bites.",
            attacks: [
                {
                    name: "Bite",
                    type: "Forest",
                    damage: 7,
                    description: "The Fox bites."
                },
                {
                    name: "Sly Dodge",
                    type: "Forest",
                    damage: 4,
                    description: "The Fox dodges and counterattacks."
                }
            ]

        },

         Wolf = {
            
            name: "Wolf",
            type: "Forest",
            strength: 70,
            weak: 30,
            Power: 60,
            BtnColor: "gray",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A fierce wolf bites.",
            attacks: [
                {
                    name: "Bite",
                        type: "Forest",
                        damage: 8,
                        description: "The Wolf bites."
                    },
                    {
                        name: "Howl",
                        type: "Forest",
                        damage: 5,
                        description: "The Wolf howls, causing fear."
                    },
                    {
                        name : "Pack Attack",
                        type : "Forest",
                        damage : 8,
                        description : "A Whole Pack of Wolves attacks its Enemy",
                    }
                ]

        },
        Bear = {

            name: "Bear",
            type: "Forest",
            strength: 85,
            weak: 35,
            Power: 75,
            BtnColor: "brown",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A powerful bear swipes.",
            attacks: [
                {
                    name: "Claw Swipe",
                    type: "Forest",
                    damage: 9,
                    description: "The Bear swipes with its claws."
                },
                {
                    name: "Bear Hug",
                    type: "Forest",
                    damage: 7,
                    description: "The Bear hugs tightly."
                }
            ]

        },
        Owl = {

            name: "Owl",
            type: "Forest",
            strength: 60,
            weak: 20,
            Power: 50,
            BtnColor: "white",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A silent owl swoops.",
            attacks: [
                {
                    name: "Talons",
                    type: "Forest",
                    damage: 6,
                    description: "The Owl attacks with its talons."
                },
                {
                    name: "Silent Flight",
                    type: "Forest",
                    damage: 4,
                    description: "The Owl uses stealth to attack and grap its pray with claus."
                }
            ]

        },
        Raven = {

            name: "Raven",
            type: "Forest",
            strength: 65,
            weak: 25,
            Power: 55,
            BtnColor: "black",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A Cunning raven pecks.",
            attacks: [
                {
                    name: "Peck",
                    type: "Forest",
                    damage: 7,
                    description: "The Raven pecks."
                },
                {
                    name: "Shadow Dive",
                    type: "Forest",
                    damage: 5,
                    description: "The Raven dives from the shadows."
                }
            ]

        },
        BaldEagle = {

            name: "Bald Eagle",
            type: "Forest",
            strength: 70,
            weak: 30,
            Power: 60,
            BtnColor: "brown",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A majestic eagle swoops.",
            attacks: [
                {
                    name: "Talons Dive",
                    type: "Forest",
                    damage: 8,
                    description: "The Eagle dives with its talons."
                },
                {
                    name: "Beak Strike",
                    type: "Forest",
                    damage: 6,
                    description: "The Eagle strikes with its beak."
                }
            ]

        },

    ],

    Jungle : [

        Lizard = {
            name: "Lizard",
            type: "Jungle",
            strength: 55,
            weak: 20,
            Power: 40,
            BtnColor: "green",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A quick and agile lizard attacks.",
            attacks: [
                {
                    name: "Tail Whip",
                    type: "Jungle",
                    damage: 5,
                    description: "The Lizard whips its tail."
                },
                {
                    name: "Bite",
                    type: "Jungle",
                    damage: 6,
                    description: "The Lizard bites and leave a rotten blood on its victim."
                }
            ]
        },
        Tiger = {
            name: "Tiger",
            type: "Jungle",
            strength: 80,
            weak: 30,
            Power: 70,
            BtnColor: "orange",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A powerful tiger pounces.",
            attacks: [
                {
                    name: "Claw Slash",
                    type: "Jungle",
                    damage: 9,
                    description: "The Tiger slashes with its claws."
                },
                {
                    name: "Bite",
                    type: "Jungle",
                    damage: 8,
                    description: "The Tiger bites and harms."
                }
            ]
        },
        Monkey = {

            name: "Monkey",
            type: "Jungle",
            strength: 65,
            weak: 25,
            Power: 50,
            BtnColor: "brown",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A mischievous monkey throws objects.",
            attacks: [
                {
                    name: "Throw",
                    type: "Jungle",
                    damage: 6,
                    description: "The Monkey throws a projectile."
                },
                {
                    name: "Agile Leap",
                    type: "Jungle",
                    damage: 5,
                    description: "The Monkey leaps and strikes back."
                }
            ]

        },
        Ostrich = {

            name: "Ostrich",
            type: "Jungle",
            strength: 70,
            weak: 35,
            Power: 60,
            BtnColor: "tan",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A fast ostrich kicks.",
            attacks: [
                {
                    name: "Kick",
                    type: "Jungle",
                    damage: 8,
                    description: "The Ostrich kicks with its powerful legs."
                },
                {
                    name: "Beak Peck",
                    type: "Jungle",
                    damage: 6,
                    description: "The Ostrich pecks with its beak."
                }
            ]

        },
        Porcupine = {

            name: "Porcupine",
            type: "Jungle",
            strength: 60,
            weak: 40,
            Power: 45,
            BtnColor: "gray",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A defensive porcupine throws quills.",
            attacks: [
                {
                    name: "Quill Throw",
                    type: "Jungle",
                    damage: 7,
                    description: "The Porcupine throws sharp quills."
                },
                {
                    name: "Spike Attack",
                    type: "Jungle",
                    damage: 5,
                    description: "The Porcupine attacks with its spikes."
                }
            ]

        },
        JungleBoar = {

            name: "Jungle_Boar",
            type: "Jungle",
            strength: 75,
            weak: 30,
            Power: 65,
            BtnColor: "brown",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A ferocious jungle boar charges.",
            attacks: [
                {
                    name: "Tusk Gore",
                    type: "Jungle",
                    damage: 8,
                    description: "The Jungle Boar gores with its tusks."
                },
                {
                    name: "Charge",
                    type: "Jungle",
                    damage: 7,
                    description: "The Jungle Boar charges with force."
                }
            ]

        },
        Orangutan = {

            name: "Orangutan",
            type: "Jungle",
            strength: 70,
            weak: 25,
            Power: 60,
            BtnColor: "orange",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A powerful orangutan swings and strikes.",
            attacks: [
                {
                    name: "Swing Strike",
                    type: "Jungle",
                    damage: 8,
                    description: "The Orangutan swings and strikes with its powerful arms."
                },
                {
                    name: "Throw",
                    type: "Jungle",
                    damage: 6,
                    description: "The Orangutan throws objects."
                }
            ]

        },
        Lion = {
            name: "Lion",
            type: "Jungle",
            strength: 85,
            weak: 30,
            Power: 75,
            BtnColor: "goldenrod",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A majestic lion roars and attacks.",
            attacks: [
                {
                    name: "Roar",
                    type: "Jungle",
                    damage: 7,
                    description: "The Lion's roar causes fear and weakens the enemy."
                },
                {
                    name: "Bite",
                    type: "Jungle",
                    damage: 9,
                    description: "The Lion bites with its powerful jaws."
                },
                {
                    name : "Clauws Hurt",
                    type : "Jungle",
                    damage : 8.5,
                    description : "The Lion King Graps tis Prays with its claws"
                }
            ]

        },
        Giraffe = {
            name: "Giraffe",
            type: "Jungle",
            strength: 70,
            weak: 35,
            Power: 60,
            BtnColor: "yellow",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A tall giraffe kicks with its long legs.",
            attacks: [
                {
                    name: "Kick",
                    type: "Jungle",
                    damage: 8,
                    description: "The Giraffe kicks with its long legs."
                },
                {
                    name: "Neck Strike",
                    type: "Jungle",
                    damage: 6,
                    description: "The Giraffe strikes with its long neck."
                }
            ]

        },
        Buffalo = {

            name: "Buffalo",
            type: "Jungle",
            strength: 80,
            weak: 30,
            Power: 70,
            BtnColor: "brown",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A strong buffalo charges with its horns.",
            attacks: [
                {
                    name: "Horn Charge",
                    type: "Jungle",
                    damage: 9,
                    description: "The Buffalo charges with its horns."
                },
                {
                    name: "Stampede",
                    type: "Jungle",
                    damage: 7,
                    description: "The Buffalo stampedes."
                }
            ]

        },
        Elephant = {

            name: "Elephant",
            type: "Jungle",
            strength: 90,
            weak: 40,
            Power: 80,
            BtnColor: "gray",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A massive elephant charges with its tusks.",
            attacks: [
                {
                    name: "Tusk Charge",
                    type: "Jungle",
                    damage: 10,
                    description: "The Elephant charges with its tusks."
                },
                {
                    name: "Trunk Slam",
                    type: "Jungle",
                    damage: 8,
                    description: "The Elephant slams with its trunk."
                }
            ]

        },       

    ],

    Mountain : [

        Goat = {
            name: "Goat",
            type: "Mountain",
            strength: 65,
            weak: 25,
            Power: 50,
            BtnColor: "gray",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A nimble goat strikes with its horns.",
            attacks: [
                {
                    name: "Horn Charge",
                    type: "Mountain",
                    damage: 7,
                    description: "The Goat charges with its horns."
                },
                {
                    name: "Rock Fall",
                    type: "Mountain",
                    damage: 5,
                    description: "The Goat kicks down rocks."
                }
            ]

        },
        Eagle = {

            name : "Eagle",
            type: "Mountain",
            strength: 70,
            weak: 30,
            Power: 60,
            BtnColor: "brown",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A majestic Eagle swoops.",
            attacks: [
                {
                    name: "Talons Dive",
                    type: "Forest",
                    damage: 8,
                    description: "The Eagle dives with its talons."
                },
                {
                    name: "Beak Strike",
                    type: "Forest",
                    damage: 6,
                    description: "The Eagle strikes with its beak."
                }
            ]
        },
        Bear = {

            name: "MountainBear",
            type: "Mountain",
            strength: 80,
            weak: 30,
            Power: 70,
            BtnColor: "brown",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A powerful mountain bear swipes.",
            attacks: [
                {
                    name: "Claw Swipe",
                    type: "Mountain",
                    damage: 9,
                    description: "The Bear swipes with its claws."
                },
                {
                    name: "Bear Hug",
                    type: "Mountain",
                    damage: 7,
                    description: "The Bear hugs tightly and scratch with is clawsNails."
                }
            ]
        },
        MountainLion = {

            name: "MountainLion",
            type: "Mountain",
            strength: 75,
            weak: 30,
            Power: 65,
            BtnColor: "tan",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A stealthy mountain lion pounces.",
            attacks: [
                {
                    name: "Pounce",
                    type: "Mountain",
                    damage: 8,
                    description: "The Mountain Lion pounces."
                },
                {
                    name: "Claw Slash",
                    type: "Mountain",
                    damage: 7,
                    description: "The Mountain Lion slashes with its claws."
                }
            ]

        },
        Rock = { 

            name : "Rock",
            strength: 70,
            weak: 30,
            Power: 60,
            BtnColor: "black",

            attacks: [
                {
                name : "Rollong Rock",
                type : "Mountain_Rock",
                damage : 6,
                description : "Falling Rock hits hard againt whoever on its way down"
                }
            ]
        },

    ],

    Volcano : [

        Lava = {},
        Ash = {},
        Smoke = {},
        Magma = {},
        Eruption = {},

    ],

    Swamp : [

        Alligator = {
            
            name: "Alligator",
            type: "Swamp",
            strength: 80,
            weak: 30,
            Power: 70,
            BtnColor: "darkgreen",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A fierce alligator lurking in the murky waters.",
            attacks: [
                { 
                    name: "Death Roll",
                    type: "Swamp",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "The Alligator grabs its prey and spins violently underwater."
                },
                { 
                    name: "Swamp Bite",
                    type: "Swamp",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "The Alligator bites with crushing force."
                }
            ]
        },
        Mosquito = {

            name: "Mosquito",
            type: "Swamp",
            strength: 40,
            weak: 80,
            Power: 35,
            BtnColor: "brown",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A bloodsucking menace of the swamp.",
            attacks: [
                { 
                    name: "Blood Drain",
                    type: "Swamp",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "The Mosquito pierces its target and drains their blood, their attack in swarp."
                },
                { 
                    name: "Toxic Sting",
                    type: "Swamp",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "The Mosquito injects a venomous sting."
                }
            ]
        },
        Frog = {

            name: "Frog",
            type: "Swamp",
            strength: 60,
            weak: 40,
            Power: 50,
            BtnColor: "green",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A nimble amphibian that leaps through the swamp.",
            attacks: [
                { 
                    name: "Sticky Tongue",
                    type: "Swamp",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "The Frog extends its tongue to capture prey."
                },
                { 
                    name: "Poison Skin",
                    type: "Swamp",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "The Frog secretes a toxic substance on its skin."
                }
            ]
        },
        Flamingo = {

            name: "Flamingo",
            type: "Swamp",
            strength: 55,
            weak: 45,
            Power: 60,
            BtnColor: "pink",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A majestic bird standing tall in swamp waters.",
            attacks: [
                { 
                    name: "Sharp Beak Peck",
                    type: "Swamp",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "The Flamingo pecks fiercely with its beak."
                },
                { 
                    name: "Wing Slash",
                    type: "Swamp",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "The Flamingo swings its wings to knock back enemies."
                }
            ]
        },
        Crocodrile = {

            name: "Crocodile",
            type: "Swamp",
            strength: 85,
            weak: 25,
            Power: 75,
            BtnColor: "darkolivegreen",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A powerful reptile lurking beneath the water surface.",
            attacks: [
                { 
                    name: "Jaw Crush",
                    type: "Swamp",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "The Crocodile crushes its prey with immense force."
                },
                { 
                    name: "Tail Whip",
                    type: "Swamp",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "The Crocodile swings its tail with brutal strength."
                }
            ]

        },

    ],

    Sea : [

        Crab = {

            name: "Crab",
            type: "Sea",
            strength: 50,
            weak: 30,
            Power: 45,
            BtnColor: "red",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A tough crab pinches with its claws.",
            attacks: [
                {
                    name: "Pinch",
                    type: "Sea",
                    damage: 6,
                    description: "The Crab pinches with its claws."
                },
                {
                    name: "Shell Defense",
                    type: "Sea",
                    damage: 4,
                    description: "The Crab hides in its shell."
                }
            ]

        },
        Shark = {
            name: "Shark",
            type: "Sea",
            strength: 80,
            weak: 20,
            Power: 70,
            BtnColor: "blue",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A powerful shark bites with its sharp teeth.",
            attacks: [
                {
                    name: "Bite",
                    type: "Sea",
                    damage: 9,
                    description: "The Shark bites with its sharp teeth."
                },
                {
                    name: "Tail Strike",
                    type: "Sea",
                    damage: 7,
                    description: "The Shark strikes with its tail."
                },
                {
                    name : "Jaws",
                    type : "Water",
                    damage : 8,
                    description : "The Shark harm with its Jaws"
                }
            ]
            
        },
        Whale = {

            name: "Whale",
            type: "Sea",
            strength: 85,
            weak: 35,
            Power: 75,
            BtnColor: "blue",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A massive whale strikes with its tail.",
            attacks: [
                {
                    name: "Tail Strike",
                    type: "Sea",
                    damage: 10,
                    description: "The Whale strikes with its powerful tail."
                },
                {
                    name: "Water Spout",
                    type: "Sea",
                    damage: 8,
                    description: "The Whale releases a powerful water spout."
                }
            ]

        },
        Octopus = {

            name: "Octopus",
            type: "Sea",
            strength: 70,
            weak: 25,
            Power: 60,
            BtnColor: "purple",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A cunning octopus wraps with its tentacles.",
            attacks: [
                {
                    name: "Tentacle Wrap",
                    type: "Sea",
                    damage: 8,
                    description: "The Octopus wraps with its tentacles."
                },
                {
                    name: "Ink Cloud",
                    type: "Sea",
                    damage: 6,
                    description: "The Octopus releases an ink cloud."
                }
            ]

        },
        JellyFish = {

            name: "JellyFish",
            type: "Sea",
            strength: 65,
            weak: 40,
            Power: 50,
            BtnColor: "lightblue",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A stinging jellyfish releases its tentacles.",
            attacks: [
                {
                    name: "Sting",
                    type: "Sea",
                    damage: 7,
                    description: "The Jellyfish releases its stinging tentacles."
                },
                {
                    name: "Paralyze",
                    type: "Sea",
                    damage: 5,
                    description: "The Jellyfish's sting paralyzes."
                }
            ]

        },
        Elver = {

            name: "Elver",
            type: "Sea",
            strength: 55,
            weak: 30,
            Power: 40,
            BtnColor: "green",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A slippery elver bites.",
            attacks: [
                {
                    name: "Bite",
                    type: "Sea",
                    damage: 6,
                    description: "The Elver bites with its sharp teeth."
                },
                {
                    name: "Slippery Dodge",
                    type: "Sea",
                    damage: 4,
                    description: "The Elver dodges with its slippery body."
                }
            ]

        },

        Squid = {

            name: "Squid",
            type: "Sea",
            strength: 75,
            weak: 25,
            Power: 65,
            BtnColor: "black",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A fast squid strikes with its tentacles.",
            attacks: [
                {
                    name: "Tentacle Strike",
                    type: "Sea",
                    damage: 8,
                    description: "The Squid strikes with its tentacles."
                },
                {
                    name: "Ink Cloud",
                    type: "Sea",
                    damage: 6,
                    description: "The Squid releases an ink cloud."
                }
            ]

        },
        CaveFish = {

            name: "Cave Fish",
            type: "Sea",
            strength: 60,
            weak: 40,
            Power: 45,
            BtnColor: "gray",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A blind cave fish bites.",
            attacks: [
                {
                    name: "Bite",
                    type: "Sea",
                    damage: 7,
                    description: "The Cave Fish bites."
                },
                {
                    name: "Echolocation",
                    type: "Sea",
                    damage: 5,
                    description: "The Cave Fish uses echolocation to attack."
                },
                {
                    name : "Abbysal Lure",
                    type : "Sea",
                    damage : 6,
                    description : "The CaveFish lure in the abyssal Deep Sea"
                }
            ]


        },
        SeaTurtle = {

            name: "Sea Turtle",
            type: "Sea",
            strength: 80,
            weak: 30,
            Power: 70,
            BtnColor: "green",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A resilient sea turtle bites.",
            attacks: [
                {
                    name: "Bite",
                    type: "Sea",
                    damage: 9,
                    description: "The Sea Turtle bites with its strong jaws."
                },
                {
                    name: "Shell Defense",
                    type: "Sea",
                    damage: 7,
                    description: "The Sea Turtle retracts into its shell."
                }
            ]

        },

    ],

    Bugs : [

        Amoeba = {

            name: "Amoeba",
            type: "Bugs",
            strength: 10,
            weak: 90,
            Power: 5,
            BtnColor: "green",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A tiny amoeba engulfs.",
            attacks: [
                {
                    name: "Engulf",
                    type: "Bugs",
                    damage: 2,
                    description: "The Amoeba engulfs its target."
                },
                {
                    name: "Divide",
                    type: "Bugs",
                    damage: 1,
                    description: "The Amoeba divides."
                }
            ]

        },
        Bacterium = {

            name: "Bacterium",
            type: "Bugs",
            strength: 15,
            weak: 85,
            Power: 10,
            BtnColor: "yellow",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A swarm of bacteria infects.",
            attacks: [
                {
                    name: "Infect",
                    type: "Bugs",
                    damage: 3,
                    description: "The Bacteria infects its target and cause stomach pain."
                },
                {
                    name: "Multiply",
                    type: "Bugs",
                    damage: 2,
                    description: "The Bacteria multiplies.",
                },
                {
                    name : "Illness",
                    type : "Bug",
                    damage : 6,
                    description : "Bacteria turns people sick"
                }
            ]

        },
        Beetle = {

            name: "Beetle",
            type: "Bugs",
            strength: 20,
            weak: 80,
            Power: 15,
            BtnColor: "brown",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A tough beetle bites.",
            attacks: [
                {
                    name: "Bite",
                    type: "Bugs",
                    damage: 4,
                    description: "The Beetle bites."
                },
                {
                    name: "Shell Defense",
                    type: "Bugs",
                    damage: 3,
                    description: "The Beetle hides in its shell."
                }
            ]

        },
        Worm = {

            name: "Worm",
            type: "Bugs",
            strength: 18,
            weak: 82,
            Power: 12,
            BtnColor: "red",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A slithering worm burrows.",
            attacks: [
                {
                    name: "Burrow",
                    type: "Bugs",
                    damage: 3,
                    description: "The Worm burrows."
                },
                {
                    name: "Slither",
                    type: "Bugs",
                    damage: 2,
                    description: "The Worm slithers."
                }
            ]

        },
        
        Bloodbug = {
            name: "Bloodbug",
            type: "Bugs",
            strength: 25,
            weak: 75,
            Power: 20,
            BtnColor: "red",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A bloodsucking bug drains life.",
            attacks: [
                {
                    name: "Drain Life",
                    type: "Bugs",
                    damage: 5,
                    description: "The Bloodbug drains life."
                },
                {
                    name: "Spread Disease",
                    type: "Bugs",
                    damage: 4,
                    description: "The Bloodbug spreads disease."
                }
            ]
        },

        Parasite = {

            name: "Parasite",
            type: "Bugs",
            strength: 30,
            weak: 70,
            Power: 25,
            BtnColor: "purple",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A parasite drains and weakens.",
            attacks: [
                {
                    name: "Drain",
                    type: "Bugs",
                    damage: 6,
                    description: "The Parasite drains life."
                },
                {
                    name: "Weaken",
                    type: "Bugs",
                    damage: 5,
                    description: "The Parasite weakens and make feel sick."
                }
            ]

        },
        EvilBug = {

            name: "EvilBug",
            type: "Bugs",
            strength: 90,
            weak: 10,
            Power: 85,
            BtnColor: "black",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A highly dangerous bug that spreads deadly diseases.",
            attacks: [

                {
                    name : "Toxic Sting",
                    type : "Bugs",
                    damage : 7,
                    description : "The Evil Bug bite and Sting, it relase a toxic fluid on its victim"

                },
                {
                    name: "Rapid Mutation",
                    type: "Bugs",
                    damage: 9,
                    description: "The Evil Bug mutates rapidly, becoming stronger."
                },
                {
                    name: "Deadly Infection",
                    type: "Bugs",
                    damage: 10,
                    description: "The Evil Bug spreads a deadly infection."
                },
            ]

        } ,
        EvilVirus = {

            name: "EvilVirus",
            type: "Bugs",
            strength: 95,
            weak: 5,
            Power: 90,
            BtnColor: "darkred",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A highly contagious and lethal virus.",
            attacks: [
                {
                    name: "Lethal Contagion",
                    type: "Bugs",
                    damage: 10,
                    description: "The Evil Virus is highly contagious."
                },
                {
                    name: "Cellular Decay",
                    type: "Bugs",
                    damage: 9,
                    description: "The Evil Virus causes rapid cellular decay over its victim."
                }
            ]

        },

    ],

    Darkness : [

        Shadow = {

            name: "DarkShadow",
            type: "Darkness",
            strength: 70,
            weak: 30,
            Power: 65,
            BtnColor: "black",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A shadowy figure strikes.",
            attacks: [
                {
                    name: "Shadow Strike",
                    type: "Darkness",
                    damage: 8,
                    description: "The Shadow strikes from the darkness."
                }
            ]
        },
        Ash = {

            name: "Ash",
            type: "Darkness",
            strength: 65,
            weak: 35,
            Power: 60,
            BtnColor: "gray",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A cloud of ash chokes.",
            attacks: [
                {
                    name: "Ash Choke",
                    type: "Darkness",
                    damage: 7,
                    description: "The Ash chokes the target and block the SunLight."
                }
            ]
        },
        Eclipse = {

            name: "Eclipse",
            type: "Darkness",
            strength: 80,
            weak: 20,
            Power: 75,
            BtnColor: "darkblue",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "An eclipse drains light and energy.",
            attacks: [
                {
                    name: "Dark Drain",
                    type: "Darkness",
                    damage: 9,
                    description: "The Eclipse drains light and energy, make it dark as block the SunLight."
                }
            ]
        },
        BlackHole = {

            name: "Black Hole",
            type: "Darkness",
            strength: 90,
            weak: 10,
            Power: 85,
            BtnColor: "black",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A black hole consumes all.",
            attacks: [
                {
                    name: "Consume",
                    type: "Darkness",
                    damage: 10,
                    description: "The Black Hole consumes its target."
                }
            ]

        },
        EvilEye = {
            name: "EvilEye",
            type: "Darkness",
            strength: 85,
            weak: 15,
            Power: 80,
            BtnColor: "black",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "An evil eye curses.",
            attacks: [
                {
                    name: "Curse",
                    type: "Darkness",
                    damage: 9,
                    description: "The Evil Eye curses the target."
                }
            ]
        },

    ],

    Monsters : [

        Orc = {

            name: "Orc",
            type: "Monsters",
            strength: 70,
            weak: 25,
            Power: 60,
            BtnColor: "green",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A brutal orc swings its axe.",
            attacks: [
                {
                    name: "Axe Swing",
                    type: "Monsters",
                    damage: 8,
                    description: "The Orc swings its axe."
                },
                {
                    name: "Brutal Strike",
                    type: "Monsters",
                    damage: 6,
                    description: "The Orc strikes with brute force."
                }
            ]

        },
        Goblin = {

            name: "Goblin",
            type: "Monsters",
            strength: 60,
            weak: 35,
            Power: 45,
            BtnColor: "brown",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A cunning goblin throws daggers.",
            attacks: [
                {
                    name: "Dagger Throw",
                    type: "Monsters",
                    damage: 7,
                    description: "The Goblin throws daggers."
                },
                {
                    name: "Sneak Attack",
                    type: "Monsters",
                    damage: 5,
                    description: "The Goblin attacks from the shadows."
                }
            ]

        },
        Ogre = {

            name: "Ogre",
            type: "Monsters",
            strength: 80,
            weak: 20,
            Power: 70,
            BtnColor: "darkgreen",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A massive ogre clubs with its fist.",
            attacks: [
                {
                    name: "Club Smash",
                    type: "Monsters",
                    damage: 9,
                    description: "The Ogre smashes with its club."
                },
                {
                    name: "Ground Stomp",
                    type: "Monsters",
                    damage: 8,
                    description: "The Ogre stomps the ground."
                }
            ]

        },
        Troll = {

            name: "Troll",
            type: "Monsters",
            strength: 75,
            weak: 30,
            Power: 65,
            BtnColor: "darkgray",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A regenerative troll claws.",
            attacks: [
                {
                    name: "Claw Swipe",
                    type: "Monsters",
                    damage: 8,
                    description: "The Troll swipes with its claws."
                },
                {
                    name: "Regenerate",
                    type: "Monsters",
                    damage: 6,
                    description: "The Troll regenerates health."
                }
            ]

        },
        Cyclops = {

            name: "Cyclops",
            type: "Monsters",
            strength: 85,
            weak: 25,
            Power: 75,
            BtnColor: "brown",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A massive cyclops swings its club.",
            attacks: [
                {
                    name: "Club Smash",
                    type: "Monsters",
                    damage: 9,
                    description: "The Cyclops smashes with its club."
                },
                {
                    name: "Eye Beam",
                    type: "Monsters",
                    damage: 8,
                    description: "The Cyclops fires a powerful eye beam."
                }
            ]

        },

        Dragon = {

            name: "Dragon",
            type: "Monsters",
            strength: 90,
            weak: 40,
            Power: 80,
            BtnColor: "red",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A mighty dragon breathes fire.",
            attacks: [
                {
                    name : "Fire Ball",
                    type : "Fire",
                    damage : 7.5,
                    description : "The Fire Dragon throws a fire ball",
                },
                {
                    name: "Fire Breath",
                    type: "Monsters",
                    damage: 10,
                    description: "The Dragon breathes fire."
                },
                {
                    name: "Claw Strike",
                    type: "Monsters",
                    damage: 9,
                    description: "The Dragon strikes with its claws."
                }
            ]

        },
        
    ],

    SeaMonster : [

        Kraken = {

            name: "Kraken",
            type: "SeaMonster",
            strength: 95,
            weak: 20,
            Power: 90,
            BtnColor: "darkblue",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A legendary sea creature with massive tentacles.",
            attacks: [
                { 
                    name: "Tentacle Crush",
                    type: "SeaMonster",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "The Kraken wraps its powerful tentacles around the target, crushing them."
                },
                { 
                    name: "Abyssal Pull",
                    type: "SeaMonster",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "The Kraken drags its enemy into the dark depths of the ocean."
                },
            ]
        
        },
        Hydra = {

            name: "Hydra",
            type: "SeaMonster",
            strength: 90,
            weak: 25,
            Power: 85,
            BtnColor: "darkcyan",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A monstrous serpent with multiple regenerating heads.",
            attacks: [
                { 
                    name: "Multi-Head-Strike",
                    type: "SeaMonster",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "The Hydra attacks with all its heads simultaneously."
                },
                { 
                    name: "Toxic-Spit",
                    type: "SeaMonster",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "The Hydra spews a deadly toxin at its enemy."
                }
            ]

        },
        Mermaid = {
            name: "Mermaid",
            type: "SeaMonster",
            strength: 70,
            weak: 50,
            Power: 60,
            BtnColor: "aqua",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A mystical sea being with enchanting powers.",
            attacks: [
                { 
                    name: "Siren Song",
                    type: "SeaMonster",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "The Mermaid sings a hypnotic melody that weakens enemies."
                },
                { 
                    name: "Water Whip",
                    type: "SeaMonster",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "The Mermaid manipulates water to lash at her foes."
                }
            ]

        },
        SeaSerpent = {

            name: "Sea Serpent",
            type: "SeaMonster",
            strength: 85,
            weak: 30,
            Power: 80,
            BtnColor: "teal",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A colossal serpent lurking beneath the waves.",
            attacks: [
                { 
                    name: "Wave Crash",
                    type: "SeaMonster",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "The Sea Serpent summons a massive wave to crush opponents."
                },
                { 
                    name: "Venomous Bite",
                    type: "SeaMonster",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "The Sea Serpent injects venom into its target."
                }
            ]

        },
        SeaDragon = {

            name: "SeaDragon",
            type: "SeaMonster",
            strength: 100,
            weak: 15,
            Power: 95,
            BtnColor: "navy",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A fearsome dragon that commands the power of the ocean.",
            attacks: [
                { 
                    name: "Tsunami Strike",
                    type: "SeaMonster",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "The Sea Dragon creates a devastating tsunami to annihilate enemies."
                },
                { 
                    name: "Lightning Storm",
                    type: "SeaMonster",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "The Sea Dragon calls forth a storm to rain lightning upon its foes."
                }
            ]

        },

    ],

    underGround : [

        Ghost = {
            name: "Ghost",
            type: "underGround",
            strength: 60,
            weak: 70,
            Power: 55,
            BtnColor: "gray",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A restless spirit that haunts the living.",
            attacks: [
                { 
                    name: "Phantom Strike",
                    type: "underGround",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "The Ghost phases through its target, draining energy."
                },
                { 
                    name: "Ethereal Screech",
                    type: "underGround",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "A chilling scream that weakens the enemy’s willpower."
                }
            ]

        },
        Witch = {
            name: "Witch",
            type: "underGround",
            strength: 75,
            weak: 40,
            Power: 70,
            BtnColor: "purple",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A powerful spellcaster skilled in dark magic.",
            attacks: [
                { 
                    name: "Hex Curse",
                    type: "underGround",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "Curses the target, reducing their strength."
                },
                { 
                    name: "Shadow Blast",
                    type: "underGround",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "Unleashes a burst of dark energy at the enemy."
                }
            ]

        },
        Troll = {
            name: "Troll",
            type: "underGround",
            strength: 90,
            weak: 20,
            Power: 85,
            BtnColor: "darkgreen",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A monstrous brute with immense strength.",
            attacks: [
                { 
                    name: "Boulder Smash",
                    type: "underGround",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "The Troll hurls a massive rock at its target."
                },
                {
                    name : "Hammer Hit",
                    type : "underGround",
                    damage : Math.floor( Math.random() * 10 ) + 1 ,
                    description : "Troll Hit the Enemy wiithin his big HarmmerMass",
                },
                { 
                    name: "Regeneration",
                    type: "underGround",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "The Troll rapidly heals from wounds."
                }
            ]
        },
        Vampire = {
            name: "Vampire",
            type: "underGround",
            strength: 85,
            weak: 30,
            Power: 80,
            BtnColor: "crimson",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A bloodthirsty immortal with supernatural abilities.",
            attacks: [
                { 
                    name: "Blood Drain",
                    type: "underGround",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "The Vampire bites its target, draining life energy."
                },
                { 
                    name: "Bat Swarm",
                    type: "underGround",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "Summons a swarm of bats to blind and attack enemies."
                }
            ]
        },
        Zombie = {
            name: "Zombie",
            type: "underGround",
            strength: 50,
            weak: 80,
            Power: 45,
            BtnColor: "olive",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A reanimated corpse that hungers for flesh.",
            attacks: [
                { 
                    name: "Rotten Bite",
                    type: "underGround",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "The Zombie bites, infecting the target with decay."
                },
                { 
                    name: "Undead Resilience",
                    type: "underGround",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "The Zombie refuses to die, rising again after defeat."
                }
            ]
        },
        SpiderWeb = {

            name: "SpiderWeb",
            type: "underGround",
            strength: 65,
            weak: 50,
            Power: 60,
            BtnColor: "black",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A giant spider lurking in the darkness.",
            attacks: [
                { 
                    name: "Web Trap",
                    type: "underGround",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "Spins a sticky web, immobilizing enemies."
                },
                { 
                    name: "Venomous Fang",
                    type: "underGround",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "Injects a deadly venom into its prey."
                }
            ]
            
        },
        Wizard = {
            type: "underGround",
            strength: 95,
            weak: 10,
            Power: 90,
            BtnColor: "gold",
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A master of arcane knowledge and powerful spells.",
            attacks: [
                { 
                    name: "Fireball",
                    type: "underGround",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "Hurls a blazing sphere of fire at the enemy."
                },
                { 
                    name: "Arcane Barrier",
                    type: "underGround",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "Creates a magical shield to block incoming attacks."
                },
                {
                    name : "Frog Spell",
                    type : "underGround",
                    damage : Math.floor(Math.random() + 10) + 5,
                    description : "Magician Wizard turn its enemy into a tiny Green Frog", 
                }
            ],

        },

    ],

    Mythical : [

        Elf = {
            name: "Elf",
            type: "Mythical",
            strength: 90,
            weak: 40,
            Power: 85,
            BtnColor: "forestgreen",
            ranDamage: Math.floor(Math.random() * 15) + 5,
            description: "A noble and swift warrior with unmatched agility.",
            attacks: [
                { 
                    name: "Elven Arrow",
                    type: "Mythical",
                    damage: Math.floor(Math.random() * 12) + 5,
                    description: "Shoots a magically imbued arrow with deadly precision."
                },
                { 
                    name: "Nature’s Blessing",
                    type: "Mythical",
                    damage: Math.floor(Math.random() * 12) + 5,
                    description: "Harnesses the power of nature to heal wounds instantly."
                },
                {
                    name : "Sword  Combat",
                    type : "Mythical",
                    damage : Math.floor(Math.random() * 12) + 5,
                    description : " Elves fight agains its enemy with powerfull Light Sword",
                }
            ]

        },
        Unicorn = {

            name: "Unicorn",
            type: "Mythical",
            strength: 95,
            weak: 35,
            Power: 90,
            BtnColor: "white",
            ranDamage: Math.floor(Math.random() * 15) + 5,
            description: "A mystical horse with a divine horn and healing powers.",
            attacks: [
                { 
                    name: "Holy Charge",
                    type: "Mythical",
                    damage: Math.floor(Math.random() * 12) + 5,
                    description: "Gallops at blinding speed, striking with pure energy."
                },
                { 
                    name: "Celestial Light",
                    type: "Mythical",
                    damage: Math.floor(Math.random() * 12) + 5,
                    description: "Emits a divine glow that blinds enemies and restores allies."
                }
            ]

        },
        Centaur = {

            name: "Centaur",
            type: "Mythical",
            strength: 100,
            weak: 30,
            Power: 95,
            BtnColor: "brown",
            ranDamage: Math.floor(Math.random() * 15) + 5,
            description: "A fierce warrior with the body of a horse and the skill of a hunter.",
            attacks: [
                { 
                    name: "Stampede Fury",
                    type: "Mythical",
                    damage: Math.floor(Math.random() * 12) + 5,
                    description: "Charges forward, trampling all in its path."
                },
                { 
                    name: "Piercing Spear",
                    type: "Mythical",
                    damage: Math.floor(Math.random() * 12) + 5,
                    description: "Throws a mighty spear that ignores armor."
                }
            ]

        },

        Minotaur = {

            name: "Minotaur",
            type: "Mythical",
            strength: 130,
            weak: 20,
            Power: 125,
            BtnColor: "darkbrown",
            ranDamage: Math.floor(Math.random() * 15) + 5,
            description: "A monstrous beast with immense strength and a warrior’s rage.",
            attacks: [
                { 
                    name: "Labyrinth Charge",
                    type: "Mythical",
                    damage: Math.floor(Math.random() * 12) + 5,
                    description: "Rushes forward, smashing everything in its way."
                },
                { 
                    name: "War Hammer",
                    type: "Mythical",
                    damage: Math.floor(Math.random() * 12) + 5,
                    description: "Wields a colossal hammer that crushes enemies with ease."
                }
            ]
        },

        Fairy = {
            name: "Fairy",
            type: "Mythical",
            strength: 80,
            weak: 60,
            Power: 75,
            BtnColor: "lightpink",
            ranDamage: Math.floor(Math.random() * 15) + 5,
            description: "A small but incredibly powerful magical being.",
            attacks: [
                { 
                    name: "Pixie Dust",
                    type: "Mythical",
                    damage: Math.floor(Math.random() * 12) + 5,
                    description: "Sprinkles enchanted dust, causing hallucinations in enemies."
                },
                { 
                    name: "Mystic Shield",
                    type: "Mythical",
                    damage: Math.floor(Math.random() * 12) + 5,
                    description: "Creates a magical barrier that reflects attacks."
                }
            ]

        },
        Harpy = {

            name: "Harpy",
            type: "Mythical",
            strength: 85,
            weak: 50,
            Power: 80,
            BtnColor: "darkred",
            ranDamage: Math.floor(Math.random() * 15) + 5,
            description: "A winged predator with a voice that can mesmerize or destroy.",
            attacks: [
                { 
                    name: "Sonic Screech",
                    type: "Mythical",
                    damage: Math.floor(Math.random() * 12) + 5,
                    description: "Unleashes a deafening scream that stuns enemies."
                },
                { 
                    name: "Wind Slash",
                    type: "Mythical",
                    damage: Math.floor(Math.random() * 12) + 5,
                    description: "Creates sharp air currents that cut through foes."
                },
                {
                    name : "Hurt Wing Attack",
                    type : "Mythical",
                    damage : Math.floor(Math.random() * 10 ) + 3 ,
                    description : "Throw its Stingy Sharp Wings agains its enemies"
                }
            ]
        },
        Sphinx = {
            
            name : "Fire Sphinx",
            type : "Fire",
            strength : 75,
            weak : 15,
            BtnColor : "red",
            Power : 65 ,
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The Fire Sphinx guards the temple",
            attacks : [
                { 
                    name : "Fire Eye",
                    type : "Fire",
                    damage : 7,
                    description : "The Sphinx shoots fire from its eyes"
                },
                { 
                    name : "Fire Claw",
                    type : "Fire",
                    damage : 8,
                    description : "The  Sphinx scratches with its claws"
                },
                { 
                    name : "Fire Tail",
                    type : "Fire",
                    damage : 8.5,
                    description : "The Sphinx whips with its tail"
                }
            ]

        },
        Phoenix = {

            name: "Phoenix",
            type: "Mythical",
            strength: 120,
            weak: 10,
            Power: 110,
            BtnColor: "orange",
            ranDamage: Math.floor(Math.random() * 15) + 5,
            description: "A legendary firebird that is reborn from its ashes.",
            attacks: [
                { 
                    name: "Flame Rebirth",
                    type: "Mythical",
                    damage: Math.floor(Math.random() * 12) + 5,
                    description: "When defeated, rises from its own ashes, restoring health."
                },
                { 
                    name: "Inferno Wing",
                    type: "Mythical",
                    damage: Math.floor(Math.random() * 12) + 5,
                    description: "Flaps its wings, releasing a massive explosion of fire."
                }
            ]
        },
        SpaceDragon = {

            name: "SpaceDragon",
            type: "Mythical",
            strength: 150,
            weak: 5,
            Power: 140,
            BtnColor: "darkblue",
            ranDamage: Math.floor(Math.random() * 15) + 15,
            description: "A cosmic being that breathes pure energy from the stars.",
            attacks: [
                {
                    name : "Gamma Ray",
                    type : "Mythical",
                    damage : Math.floor(Math.random() + 10 )  + 10,
                    description : "SpaceDragon breath a powerfull Gamma Ray against its enemies",
                },
                { 
                    name: "Galactic Breath",
                    type: "Mythical",
                    damage: Math.floor(Math.random() * 12) + 15,
                    description: "Unleashes a beam of cosmic energy, obliterating everything."
                },
                { 
                    name: "Black Hole Strike",
                    type: "Mythical",
                    damage: Math.floor(Math.random() * 12) + 15,
                    description: "Creates a miniature black hole that pulls in enemies."
                }
            ]

        },

    ],

    Storm : [

        Thunder = {},
        Lightning = {},
        Rain = {},
        Flood = {},
        Typhoon = {},
        Twister = {},
        Vortex = {},
        Hurricane = {},

    ],

}


const DragonFireClawsAttack = GameAttacks.Fire[2].attacks[2].name;
const DragonFireClawsDamage = GameAttacks.Fire[2].attacks[2].damage;
const DragonFireClawsDescription = GameAttacks.Fire[2].attacks[2].description;

console.log(`The Dragon's Fire Claws Attack is ${DragonFireClawsAttack} with a damage of ${DragonFireClawsDamage} and the description is ${DragonFireClawsDescription} .`);

console.log( typeof GameAttacks.Fire );

//________

// Accessing the Shark's attacks and logging them to the console.
const sharkAttacks = GameAttacks.Sea.find(creature => creature.name === "Shark").attacks;

console.log("Shark's Attacks:", sharkAttacks);

// Accessing the Shark's Bite attack and logging it to the console.
const shark = GameAttacks.Sea.find(creature => creature.name === "Shark");

if (shark && shark.attacks) {
    const biteAttack = shark.attacks.find(attack => attack.name === "Bite");

    if (biteAttack) {
        console.log("Shark's Bite Attack:", biteAttack);
    } else {
        console.log("Shark's Bite attack not found.");
    }
} else {
    console.log("Shark not found or shark attacks not defined.");
}

// Access the Spider creature object
const spider = GameAttacks.Poison.find(creature => creature.name === "Spider");

if (spider) {
    // Extract the desired properties
    const spiderName = spider.name;
    const spiderType = spider.type;
    const spiderStrength = spider.strength;
    const spiderWeak = spider.weak;
    const spiderBtnColor = spider.BtnColor;
    const spiderPower = spider.Power;
    const spiderRanDamage = spider.ranDamage;
    const spiderDescription = spider.description;

    // Log the extracted properties to the console
    console.log("Spider Name:", spiderName);
    console.log("Spider Type:", spiderType);
    console.log("Spider Strength:", spiderStrength);
    console.log("Spider Weakness:", spiderWeak);
    console.log("Spider Button Color:", spiderBtnColor);
    console.log("Spider Power:", spiderPower);
    console.log("Spider Random Damage:", spiderRanDamage);
    console.log("Spider Description:", spiderDescription);

    console.log("Spider Attacks ");

    spider.attacks.forEach( attack => {

        console.log( `${attack.name } : ${attack.description} : Damage: ${attack.damage}`);
    });

} else {
    console.log("Spider creature not found in the Poison array.");
}


const Mosquit0 = GameAttacks.Swamp.find( creature => creature.name === "Mosquito" );
//const Mosquito = GameAttacks.Swamp.Mosquito;

if ( Mosquit0 ) {

    console.log("Mosquito Attacks");

    Mosquit0.attacks.forEach( attack => {

        console.log(`Mosquito ${attack.name}: ${attack.description} _Damage: ${attack.damage} ` );

    });

} else {

    console.log( "Mosquit0 was not found");

}
console.log("\n--------------\n");
console.log("Check the Desert_Snake Sub Object \n");
// Access the DesertSnake object in the Desert array
const desertSnake = GameAttacks.Desert.find(creature => creature.name === "DesertSnake");

if (desertSnake) {
    // Extract the desired properties
    const desertSnakeName = desertSnake.name;
    const desertSnakeType = desertSnake.type;
    const desertSnakeStrength = desertSnake.strength;
    const desertSnakeWeak = desertSnake.weak;
    const desertSnakeBtnColor = desertSnake.BtnColor;
    const desertSnakePower = desertSnake.Power;
    const desertSnakeRanDamage = desertSnake.ranDamage;
    const desertSnakeDescription = desertSnake.description;

    // Log the extracted properties to the console
    console.log("DesertSnake Name:", desertSnakeName);
    console.log("DesertSnake Type:", desertSnakeType);
    console.log("DesertSnake Strength:", desertSnakeStrength);
    console.log("DesertSnake Weakness:", desertSnakeWeak);
    console.log("DesertSnake Button Color:", desertSnakeBtnColor);
    console.log("DesertSnake Power:", desertSnakePower);
    console.log("DesertSnake Random Damage:", desertSnakeRanDamage);
    console.log("DesertSnake Description:", desertSnakeDescription);

    // Log the attacks to the console
    console.log("DesertSnake Attacks:");
    desertSnake.attacks.forEach(attack => {
        console.log(`${attack.name}: ${attack.description} - Damage: ${attack.damage}`);
    });
    
} else {
    console.log("DesertSnake creature not found in the Desert array.");
}

//Function to get the Creature Information ...
//This function takes the creature's name (creatureName) as input.
//then it fetch all is data from the GameAttacks Arrays....
console.log("++++++++++++++++++++++++++++++++\n");

function getCreatureInfo(creatureName) {

    console.log("Results for " + creatureName + "\n");
    let foundCreature = null;

    // Iterate through all arrays within meAttacks
    for (const key in GameAttacks) {

        if (Array.isArray(GameAttacks[key])) {

            const creature = GameAttacks[key].find(c => c.name === creatureName);

            if (creature) {

                foundCreature = creature;
                break; // Stop searching once found .

            }
        }
    }

    if (foundCreature) {
        // Extract and log information
        console.log("Creature Name:", foundCreature.name);
        console.log("Creature Type:", foundCreature.type);
        console.log("Creature Strength:", foundCreature.strength);
        console.log("Creature Weakness:", foundCreature.weak);
        console.log("Creature Button Color:", foundCreature.BtnColor);
        console.log("Creature Power:", foundCreature.Power);
        console.log("Creature Random Damage:", foundCreature.ranDamage);
        console.log("Creature Description:", foundCreature.description);
        console.log("\n");
        console.log(`${foundCreature.name} Attacks`);
        console.log("\n");
        let i = 1;
        foundCreature.attacks.forEach( attack => {

        console.log( `${i}. ${attack.name } : ${attack.description} : Damage: ${attack.damage}`);
        i++;    
    });

    } else {

        console.log(`Creature "${creatureName}" not found.`);

    }

}
console.log("/*****************\n");
// Example usage
const searchCreature = "YellowScorpion"; // Change this to the desired creature name
getCreatureInfo(searchCreature);
console.log("*****************\n");
const searchCreature2 = "Bee_Hive";
getCreatureInfo(searchCreature2);
console.log("*****************\n");
const searchCreature3 = "SeaSerpent";
getCreatureInfo(searchCreature3);
console.log("*****************\n");
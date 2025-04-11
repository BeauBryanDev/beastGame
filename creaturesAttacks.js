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

export const AttacksByCreatures  = {

    Fire : [

        {
            name : "Phoenix",
            type : "Fire",
            strength : 75,
            wearknessLevel : 25,
            BtnColor : "red",
            Power : 45 ,
            cid : 2 ,
            powerId : 3500,
            creatureId : 3501,
            ranDamage : Math.floor(Math.random() * 10) + 1,
            description : "The Fire Phoenix rises from the ashes.",
            attacks : [
                { 
                    name : "Fire Wing",
                    type : "Fire",
                    damage : 7,
                    description : "The Fire Phoenix flaps its wings."
                },
                { 
                    name : "Fire Feather",
                    type : "Fire",
                    damage : 8,
                    description : "The Fire Phoenix shoots a fire feather."
                },
                { 
                    name : "Fire Tail",
                    type : "Fire",
                    damage : 8.5,
                    description : "The Fire Phoenix whips with its tail."
                }
            ]
        },
        {
            name : "Sphinx",
            type : "Fire",
            strength : 75,
            wearknessLevel : 15,
            BtnColor : "red",
            Power : 65 ,
            cid : 3 ,
            powerId : 3500,
            creatureId : 3502,
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The Fire Sphinx guards the temple.",
            attacks : [
                { 
                    name : "Fire Eye",
                    type : "Fire",
                    damage : 7,
                    description : "The Fire Sphinx shoots fire from its eyes."
                },
                { 
                    name : "Fire Claw",
                    type : "Fire",
                    damage : 8,
                    description : "The Fire Sphinx scratches with its claws."
                },
                { 
                    name : "Fire Tail",
                    type : "Fire",
                    damage : 8.5,
                    description : "The Fire Sphinx whips with its tail."
                }
            ]
        },
        {

            name : "FireDragon",
            type : "Fire",
            strength : 85,
            wearknessLevel : 20,
            BtnColor : "red",
            Power : 85 ,
            powerId : 3500,
            creatureId : 3503,
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The Fire Dragon breathes fire to Destroy its Enemies.",
            attacks : [
                { 
                    name : "Fire Ball",
                    type : "Fire",
                    damage : 7.5,
                    description : "The Fire Dragon throws a fire ball."
                },
                { 
                    name : "Fire Breath",
                    type : "Fire",
                    damage : 8.5,
                    description : "The Fire Dragon breathes fire."
                },
                { 
                    name : "Fire Claw",
                    type : "Fire",
                    damage : 8,
                    description : "The Fire Dragon scratches with its claws."
                }
            ]
        },

        {

            name : "WildFire",
            type : "Fire",
            strength : 85,
            wearknessLevel : 35,
            BtnColor : "red",
            Power : 95 ,
            powerId : 3500,
            creatureId : 3504,
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The Wild Fire burns everything in its path.",
            attacks : [
                { 
                    name : "Fire Blast",
                    type : "Fire",
                    damage : 7,
                    description : "The Wild Fire shoots a fire blast."
                },
                { 
                    name : "Fire Wave",
                    type : "Fire",
                    damage : 8,
                    description : "The Wild Fire sends a wave of fire that burn its enemies."
                },
                { 
                    name : "Fire Storm",
                    type : "Fire",
                    damage : 9,
                    description : "The Wild Fire creates a fire storm that set fire everything aroung."
                }
            ]
        },
        {

            name : "Volcano",
            type : "Fire",
            strength : 75,
            wearknessLevel : 15,
            BtnColor : "red",
            Power : 90 ,
            powerId : 3500,
            creatureId : 3505,
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The Volcano erupts",
            attacks : [
                { 
                    name : "Lava Blast",
                    type : "Fire",
                    damage : 7,
                    description : "The Volcano shoots a lava blast."
                },
                { 
                    name : "Lava Wave",
                    type : "Fire",
                    damage : 8,
                    description : "The Volcano sends a wave of lava."
                },
                { 
                    name : "Lava Storm",
                    type : "Fire",
                    damage : 9,
                    description : "The Volcano creates a lava storm."
                }
    
            ],

        }

    ],

    Water : [ 

        {

            name : "CatFish",
            type : "Water",
            strength : 35,
            wearknessLevel : 55,
            BtnColor : "blue",
            Power : 25 ,
            powerId : 3100,
            creatureId : 3101,
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The Cat Fish swims in the river.",
            attacks : [
                { 
                    name : "Water Splash",
                    type : "Water",
                    damage : 5,
                    description : "The Cat Fish splashes water.",
                },
                { 
                    name : "Water Wave",
                    type : "Water",
                    damage : 3,
                    description : "The Cat Fish sends a wave of water.",
                },
                { 
                    name : "Water Storm",
                    type : "Water",
                    damage : 3,
                    description : "The Cat Fish creates a water storm.",
                }
            ]
        },
        {

            name : "Piranha",
            type : "Water",
            strength : 75,
            wearknessLevel : 35,
            BtnColor : "blue",
            Power : 55 ,
            powerId : 3100,
            creatureId : 3102,
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The Piranha swims in the river and they attack in groups.",
            attacks : [
                { 
                    name : "Water Bite",
                    type : "Water",
                    damage : 7,
                    description : "The Piranha bites with its sharp teeth."
                },
                { 
                    name : "Water Claw",
                    type : "Water",
                    damage : 8,
                    description : "The Piranha scratches with its claws."
                },
                { 
                    name : "Group River Pack",
                    type : "Water",
                    damage : 8.5,
                    description : "The Piranhas hunt un the river as Group."
                }
            ]
        },
        {

            name : "Eel",
            type : "Water",
            strength : 75,
            wearknessLevel : 35,
            Power : 55 ,
            BtnColor : "blue",
            powerId : 3100,
            creatureId : 3103,
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The Eel swims in the river and relase electric shocks.",
            attacks : [
                { 
                    name : "Water Bite",
                    type : "Electricity",
                    damage : 7,
                    description : "The Eel bites."
                },
                { 
                    name : "Water Claw",
                    type : "Electricity",
                    damage : 8,
                    description : "The Eel scratches with its claws."
                },
                { 
                    name : "Electrical Shock",
                    type : "Electricity",
                    damage : 8.5,
                    description : "The Eel release a powerfull electric shock in the river."
                }
            ]
        },
        {

            name : "Hippo",
            type : "Water",
            strength : 75,
            wearknessLevel : 35,
            Power : 80 ,
            BtnColor : "blue",
            powerId : 3100,
            creatureId : 3104,
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The Hippo swims in the river and it is very aggressive.",
            attacks : [
                { 
                    name : "Water Bite",
                    type : "Water",
                    damage : 7,
                    description : "The Hippo bites."
                },
                { 
                    name : "Water Dive",
                    type : "Water",
                    damage : 8,
                    description : "The Hippo drawn its victim with its claws."
                },
                { 
                    name : "Hippo Squeeze",
                    type : "Water",
                    damage : 8.5,
                    description : "The Hippo crush with its powerful claws."
                }
            ]
        },
        {

            name : "Dolphin",
            type : "Water",
            strength : 75,
            wearknessLevel : 35,
            Power : 55 ,
            BtnColor : "blue",
            powerId : 3100,
            creatureId : 3105,
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The Dolphin swims in open Seas.",
            attacks : [
                { 
                    name : "Water Bite",
                    type : "Water",
                    damage : 7,
                    description : "The Dolphin bites."
                },
                { 
                    name : "Water Claw",
                    type : "Water",
                    damage : 8,
                    description : "The Dolphin finds its victim with its echo sonar."
                },
                { 
                    name : "Water Tail",
                    type : "Water",
                    damage : 8.5,
                    description : "The Dolphin whips with its tail."
                }
            ]
        },
        {

            name : "Shark",
            type : "Water",
            strength : 75,
            wearknessLevel : 35,
            Power : 55 ,
            BtnColor : "blue",
            powerId : 3100,
            creatureId : 3106,
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The Shark swims in the blue Sea.",
            attacks : [
                { 
                    name : "Water Bite",
                    type : "Water",
                    damage : 7,
                    description : "The Shark bites with sharp teeth."
                },
                { 
                    name : "Water Claw",
                    type : "Water",
                    damage : 8,
                    description : "The Shark scratches with its Jaws."
                },
                { 
                    name : "Water Tail",
                    type : "Water",
                    damage : 8.5,
                    description : "The Shark whips with its tail."
                }
            ]
        },
        {

            name : "Whale",
            type : "Water",
            strength : 75,
            wearknessLevel : 35,
            Power : 55 ,
            BtnColor : "blue",
            powerId : 3100,
            creatureId : 3107,
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The Whale swims in the deep Sea and it is very big.",
            attacks : [
                { 
                    name : "Water Tail Hit",
                    type : "Water",
                    damage : 7,
                    description : "The Whale bites.",
                },
                { 
                    name : "Water Claw",
                    type : "Water",
                    damage : 8,
                    description : "The Whale swallow everything in the sea.",
                },
                { 
                    name : "Water Tail",
                    type : "Water",
                    damage : 8.5,
                    description : "The Whale whips with its tail."
                }
            ]
        },
        {

            name : "SeaSerpent",
            type : "Water",
            strength : 75,
            wearknessLevel : 35,
            Power : 55 ,
            BtnColor : "blue",
            powerId : 3100,
            creatureId : 3108,
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The Sea Serpent swims in the Oveam.",
            attacks : [
                { 
                    name : "Water Bite",
                    type : "Water",
                    damage : 7,
                    description : "The Sea Serpent bites."
                },
                { 
                    name : "Water Claw",
                    type : "Water",
                    damage : 8,
                    description : "The Sea Serpent scratches with its Jaws."
                },
                { 
                    name : "Water Tail",
                    type : "Water",
                    damage : 8.5,
                    description : "The Sea Serpent whips with its long Body."
                }
            ]
        }
    ],

    Snow : [

        {
            
            name : "Seal",
            type : "Snow",
            strength : 75,
            wearknessLevel : 35,
            Power : 55 ,
            BtnColor : "white",
            powerId : 3200,
            creatureId : 3201,
            ranDamage : Math.floor(Math.random() * 10) + 1,
            description : "The Seal swims in the snow.",
            attacks : [
                { 
                    name : "Snow Ball",
                    type : "Snow",
                    damage : 7,
                    description : "The Seal throws a snow ball."
                },
                { 
                    name : "Snow Claw",
                    type : "Snow",
                    damage : 8,
                    description : "The Seal scratches with its claws."
                },
                { 
                    name : "Snow Tail",
                    type : "Snow",
                    damage : 8.5,
                    description : "The Seal whips with its tail.",
                }
            ]
        },
        {
            
            name : "WhiteBear",
            type : "Snow",
            strength : 75,
            wearknessLevel : 35,
            Power : 55 ,
            BtnColor : "blue",
            powerId : 3200,
            creatureId : 3202,
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The White Bear swims in the snow.",
            attacks : [
                { 
                    name : "Snow Ball",
                    type : "Snow",
                    damage : 7,
                    description : "The White Bear throws a snow ball."
                },
                { 
                    name : "Snow Claw",
                    type : "Snow",
                    damage : 8,
                    description : "The White Bear scratches with its claws."
                },
                { 
                    name : "Snow Tail",
                    type : "Snow",
                    damage : 8.5,
                    description : "The White Bear whips with its tail."
                }
            ]
        },
        {
            
            name : "KillerWhale",
            type : "Snow",
            strength : 75,
            wearknessLevel : 35,
            Power : 55 ,
            BtnColor : "blue",
            powerId : 3200,
            creatureId : 3203,
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The Orca swims in the snow.",
            attacks : [
                { 
                    name : "Snow Ball",
                    type : "Snow",
                    damage : 7,
                    description : "The Orca throws a snow ball."
                },
                { 
                    name : "Snow Claw",
                    type : "Snow",
                    damage : 8,
                    description : "The Orca scratches with its big teeth and jaus."
                },
                { 
                    name : "Snow Tail",
                    type : "Snow",
                    damage : 8.5,
                    description : "The Orca whips with its tail."
                }
            ]
        },
        {
            
            name : "BlueWhale",
            type : "Snow",
            strength : 75,
            wearknessLevel : 35,
            Power : 55 ,
            BtnColor : "blue",
            powerId : 3200,
            creatureId : 3204,
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The Blue Whale swims in the cold seas.",
            attacks : [
                { 
                    name : "Snow Ball",
                    type : "Snow",
                    damage : 7,
                    description : "The Blue Whale throws a snow ball."
                },
                { 
                    name : "Cold Water Bubble",
                    type : "Snow",
                    damage : 8,
                    description : "The Blue Whale attack with a bubble flow to sneeze its victims."
                },
                { 
                    name : "Snow Tail",
                    type : "Snow",
                    damage : 8.5,
                    description : "The Blue Whale whips with its tail."
                }
            ]
        },
        {
            
            name : "IceDragon",
            type : "Snow",
            strength : 75,
            wearknessLevel : 35,
            Power : 55 ,
            BtnColor : "lightblue",
            powerId : 3200,
            creatureId : 3205,
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The Ice Dragon swims in the snow.",
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
                    description : "The Ice Dragon scratches with its claws."
                },
                { 
                    name : "Snow Tail",
                    type : "Snow",
                    damage : 8.5,
                    description : "The Ice Dragon whips with its tail."
                }
            ]
        }

    ],

    Air : [

        {

            name : "Bat",
            type : "Air",
            strength : 35,
            wearknessLevel : 65,
            Power : 55 ,
            BtnColor : "Bat",
            powerId : 1200,
            creatureId : 1201,
            ranDamage : Math.floor(Math.random() * 10) + 1,
            description : "The Bat flies at Night",
            attacks : [
                { 
                    name : "Air Wing",
                    type : "Air",
                    damage : 7,
                    description : "The Bat flaps its wings."
                },
                { 
                    name : "Bloody Sucks",
                    type : "Air",
                    damage : 8,
                    description : "The Bat drain the blood from its victim."
                },

            ]

        },

        {

            name : "Eagle",
            type : "Air",
            strength : 75,
            wearknessLevel : 35,
            Power : 55 ,
            BtnColor : "cyan",
            powerId : 1200,
            creatureId : 1202,
            ranDamage : Math.floor(Math.random() * 10) + 1,
            description : "The Eagle flies in the sky.",
            attacks : [
                { 
                    name : "Air Wing",
                    type : "Air",
                    damage : 7,
                    description : "The Eagle flaps its wings."
                },
                { 
                    name : "Air Feather",
                    type : "Air",
                    damage : 8,
                    description : "The Eagle shoots a feather."
                },
                { 
                    name : "Air Claws",
                    type : "Air",
                    damage : 8.5,
                    description : "The Eagle Scratch with its claws."
                }
            ]

        },

        {   

            name : "Owl",
            type : "Air",
            strength : 75,
            wearknessLevel : 35,
            Power : 55 ,
            BtnColor : "lightgray",
            powerId : 1200,
            creatureId : 1205,
            ranDamage : Math.floor(Math.random() * 10) + 1,
            description : "The Owl flies in the sky.",
            attacks : [
                { 
                    name : "Air Wing",
                    type : "Air",
                    damage : 7,
                    description : "The Owl flaps its wings."
                },
                { 
                    name : "Air Feather",
                    type : "Air",
                    damage : 8,
                    description : "The Owl shoots a feather."
                },
                { 
                    name : "Air Claws",
                    type : "Air",
                    damage : 8.5,
                    description : "The Owl whips with its claws."
                }
            ]

        },

        {    
            
            name : "Hawk",
            type : "Air",
            strength : 75,
            wearknessLevel : 35,
            Power : 55 ,
            BtnColor : "lightgray",
            powerId : 1200,
            creatureId : 1203,
            ranDamage : Math.floor(Math.random() * 10) + 1,
            description : "The Hawk flies in the sky.",
            attacks : [
                { 
                    name : "Air Wing",
                    type : "Air",
                    damage : 7,
                    description : "The Hawk flaps its wings."
                },
                { 
                    name : "Air Feather",
                    type : "Air",
                    damage : 8,
                    description : "The Hawk shoots a feather."
                },
                { 
                    name : "Air Tail",
                    type : "Air",
                    damage : 8.5,
                    description : "The Hawk whips with its tail."
                }
            ]

        },

        {   

            name : "Falcon",
            type : "Air",
            strength : 75,
            wearknessLevel : 35,
            Power : 55 ,
            BtnColor : "lightgray",
            powerId : 1200,
            creatureId : 1204,
            ranDamage : Math.floor(Math.random() * 10) + 1,
            description : "The Falcon flies in the sky.",
            attacks : [
                { 
                    name : "Air Wing",
                    type : "Air",
                    damage : 7,
                    description : "The Falcon flaps its wings."
                },
                { 
                    name : "Air Feather",
                    type : "Air",
                    damage : 8,
                    description : "The Falcon shoots a feather."
                },
                { 
                    name : "Air Tail",
                    type : "Air",
                    damage : 8.5,
                    description : "The Falcon whips with its tail."
                }
            ]

        }

    ],

    Earth : [

        {
            
            name : "Elephant",
            type : "Earth",
            strength : 75,
            wearknessLevel : 35,
            Power : 80 ,
            BtnColor : "brown",
            powerId : 2100,
            creatureId : 2104,
            ranDamage : Math.floor(Math.random() * 10) + 1,
            description : "The Elephant heavily walks on the ground.",
            attacks : [
                { 
                    name : "Earth Stomp",
                    type : "Earth",
                    damage : 7,
                    description : "The Elephant stomps the ground."
                },
                { 
                    name : "Earth Tusk",
                    type : "Earth",
                    damage : 8,
                    description : "The Elephant attacks with its tusks."
                },
                { 
                    name : "Earth Tail",
                    type : "Earth",
                    damage : 8.5,
                    description : "The Elephant whips with its thrump."
                }
            ]
        },
        {
            
            name : "Rhino",
            type : "Earth",
            strength : 75,
            wearknessLevel : 35,
            Power : 55 ,
            BtnColor : "brown",
            powerId : 2100,
            creatureId : 2101,
            ranDamage : Math.floor(Math.random() * 10) + 1,
            description : "The Rhino walks on the ground.",
            attacks : [
                { 
                    name : "Earth Stomp",
                    type : "Earth",
                    damage : 7,
                    description : "The Rhino stomps the ground."
                },
                { 
                    name : "Earth Tusk",
                    type : "Earth",
                    damage : 8,
                    description : "The Rhino attacks with its tusks."
                },
                { 
                    name : "Earth Tail",
                    type : "Earth",
                    damage : 8.5,
                    description : "The Rhino whips with its sharp head."
                }
            ]
        },

        {

            name : "Gorilla",
            type : "Earth",
            strength : 75,
            wearknessLevel : 35,
            Power : 55 ,
            BtnColor : "green",
            powerId : 2100,
            creatureId : 2103,
            ranDamage : Math.floor(Math.random() * 10) + 1,
            description : "Gorilla walks on the ground and hit its chest.",

            attacks : [

                {
                    name : "Earth Punch",
                    type : "Earth",
                    damage : 7,
                    description : "The Gorilla punches the ground."
                },
                {
                    name : "Earth Kick",
                    type : "Earth",
                    damage : 8,
                    description : "The Gorilla kicks the ground."
                },
                {
                    name : "Earth Tail",
                    type : "Earth",
                    damage : 8.5,
                    description : "The Gorilla hit with its fist."
                }

            ]

        }, 

        {

            name : "Lion",
            type : "Earth",
            strength : 85,
            wearknessLevel : 35,
            Power : 85 ,
            BtnColor : "brown",
            powerId : 2100,
            creatureId : 2105,
            ranDamage : Math.floor(Math.random() * 10) + 1,
            description : "The Lion walks on the ground and roars.",

            attacks : [

                {
                    name : "Earth Bite",
                    type : "Earth",
                    damage : 7,
                    description : "The Lion bites."
                },
                {
                    name : "Earth Claw",
                    type : "Earth",
                    damage : 8,
                    description : "The Lion scratches with its claws."
                },
                {
                    name : "Earth Scratch",
                    type : "Earth",
                    damage : 8.5,
                    description : "The Lion Scratch within its claws."
                }

            ]

        },

        {

            name : "Mammoth",
            type : "Earth",
            strength : 75,
            wearknessLevel : 35,
            Power : 55 ,
            BtnColor : "brown",
            powerId : 2100,
            creatureId : 2106,
            ranDamage : Math.floor(Math.random() * 10) + 1,
            description : "The Mammoth walks on the ground and trumpets.",

            attacks : [

                {
                    name : "Earth Stomp",
                    type : "Earth",
                    damage : 7,
                    description : "The Mammoth stomps the ground."
                },
                {
                    name : "Earth Tusk",
                    type : "Earth",
                    damage : 8,
                    description : "The Mammoth attacks with its tusks."
                },
                {
                    name : "Earth Tail",
                    type : "Earth",
                    damage : 8.5,
                    description : "The Mammoth whips with its long trumpet."
                }

            ]

        },

    ],

    River : [

        {

            name : "Trout",
            type : "River",
            strength : 75,
            wearknessLevel : 35,
            Power : 55 ,
            BtnColor : "lightblue",
            powerId : 1300,
            creatureId : 1301,
            ranDamage : Math.floor(Math.random() * 10) + 1,
            description : "The Fish walks Swim in the River.",
            attacks : [
                { 
                    name : "Swimming Flee",
                    type : "River",
                    damage : 7,
                    description : "The Trout Escape by Fast Swimming.",
                },
            ]
        },
        {

            name : "Otter",
            type : "River",
            strength : 75,
            wearknessLevel : 35,
            Power : 55 ,
            BtnColor : "lightblue",
            powerId : 1300,
            creatureId : 1303,
            ranDamage : Math.floor(Math.random() * 10) + 1,
            description : "The Fish walks Swim in the Rive.r",
            attacks : [
                { 
                    name : "bite",
                    type : "River",
                    damage : 7,
                    description : "The otter bites with is little mouth."
                },
                {
                    name : "Fast Swimm",
                    type : "River",
                    damage : 6,
                    description : "The Otter rapidly escape  flee from its enemies by swimming downstream."
                }
            ]
        },
        {

            name : "Beaver",
            type : "River",
            strength : 75,
            wearknessLevel : 35,
            Power : 55 ,
            BtnColor : "lightblue",
            powerId : 1300,
            creatureId : 1302,
            ranDamage : Math.floor(Math.random() * 10) + 1,
            description : "The Fish walks Swim in the River.",
            attacks : [
                { 
                    name : "bite",
                    type : "River",
                    damage : 7,
                    description : "The Beaver bites with is little mouth."
                },
            ]
        },

        {

            name : "FisherBird",
            type : "River",
            strength : 75,
            wearknessLevel : 35,
            Power : 55 ,
            BtnColor : "lightblue",
            powerId : 1300,
            creatureId : 1306,
            ranDamage : Math.floor(Math.random() * 10) + 1,
            description : "The Fish walks Swim in the River.",
            attacks : [
                { 
                    name : "bite",
                    type : "River",
                    damage : 7,
                    description : "This Bird bite with is little powerfull beak."
                },
                {
                    name : "Hunt in the River",
                    type : " River",
                    damage : 6,
                    description : "The Fishing Bird attack river animals."
                }
            ]

        },
        {

            name: "Crocodrile",
            type: "Swamp",
            strength: 85,
            wearknessLevel: 25,
            Power: 75,
            BtnColor: "darkolivegreen",
            powerId : 1300,
            creatureId : 1305,
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A powerful Reptile lurking beneath the water surface.",
            attacks: [
                { 
                    name: "Jaw Crush",
                    type: "Swamp",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "The Crocodrile crushes its prey with immense force."
                },
                { 
                    name: "Tail Whip",
                    type: "Swamp",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "The Crocodrile swings its tail with brutal strength."
                }
            ]

        },
    ],

    Poison : [

        {

            name : "Snake",
            type : "Poison",
            strength : 75,
            wearknessLevel : 35,
            Power : 55 ,
            BtnColor : "purple",
            powerId : 3300,
            creatureId : 3005,
            ranDamage : Math.floor(Math.random() * 10) + 1,
            description : "The Snake crawls on the ground and bite at first seen.",
            attacks : [
                { 
                    name : "bite",
                    type : "Posion",
                    damage : 7,
                    description : "The Snake bite with is two poisonous fangs."
                },
                {
                    name : "harsh-hug",
                    type : "Poison",
                    damage : 5,
                    description : "The Snake squeeze its victim with a mortal hug."
                }
            ]
        },
        {

            ame: "Scorpion",
            type: "Poison",
            strength: 80,
            wearknessLevel: 30,
            Power: 60,
            BtnColor: "purple",
            powerId : 3300,
            creatureId : 3003,
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
        {

            name: "Spider",
            type: "Poison",
            strength: 70,
            wearknessLevel: 25,
            Power: 50,
            BtnColor: "purple",
            powerId : 3300,
            creatureId : 3004,
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
        {

            name: "Wasp",
            type: "Poison",
            strength: 65,
            wearknessLevel: 20,
            Power: 55,
            BtnColor: "purple",
            powerId : 3300,
            creatureId : 3006,
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
                    description: "The Wasp releases a poisonous pollen to wearknessLevelen its foe."
                }
            ]

        },
        {

            name: "SeaUrchin",
            type: "Poison",
            strength: 60,
            wearknessLevel: 40,
            Power: 50,
            BtnColor: "purple",
            powerId : 3300,
            creatureId : 3001,
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
        {

            name: "GlobeFish",
            type: "Poison",
            strength: 55,
            wearknessLevel: 35,
            Power: 45,
            BtnColor: "purple",
            powerId : 3300,
            creatureId : 3002,
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

        {

            name: "Cactus",
            type: "Desert",
            strength: 60,
            wearknessLevel: 40,
            Power: 50,
            BtnColor: "sandybrown",
            powerId : 3400,
            creatureId : 3401,
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A spiky cactus that thrives in the arid desert.",
            attacks: [
                { 
                    name: "Needle Shot",
                    type: "Desert",
                    damage: 7,
                    description: "Shoots sharp needles at the enemy."
                },
                { 
                    name: "Thorn Shield",
                    type: "Desert",
                    damage: 5,
                    description: "Uses thorns to protect itself and counterattack."
                },
                { 
                    name: "Desert Growth",
                    type: "Desert",
                    damage: 6,
                    description: "Rapidly grows and extends its roots to trap its enemy."
                }
            ]

        },

        {

            name: "YellowScorpion",
            type: "Desert",
            strength: 75,
            wearknessLevel: 25,
            Power: 65,
            BtnColor: "gold",
            powerId : 3400,
            creatureId : 3402,
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A venomous scorpion lurking under the desert sands.",
            attacks: [
                { 
                    name: "Venom Sting",
                    type: "Desert",
                    damage: 8,
                    description: "Injects venom with a powerful sting."
                },
                { 
                    name: "Sand Ambush",
                    type: "Desert",
                    damage: 7,
                    description: "Hides under the sand and strikes suddenly."
                },
                { 
                    name: "Claw Crush",
                    type: "Desert",
                    damage: 6,
                    description: "Uses its strong claws to grip and crush the enemy."
                }
            ]
        },
        {

            name: "DesertSnake",
            type: "Desert",
            strength: 70,
            wearknessLevel: 30,
            Power: 60,
            BtnColor: "tan",
            powerId : 3400,
            creatureId : 3403,
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A stealthy snake that blends with the desert sands.",
            attacks: [
                { 
                    name: "Sandbite",
                    type: "Desert",
                    damage: 8,
                    description: "A quick and venomous bite."
                },
                { 
                    name: "Sand Camouflage",
                    type: "Desert",
                    damage: 5,
                    description: "Blends into the environment, making it harder to hit."
                },
                { 
                    name: "Coil Crush",
                    type: "Desert",
                    damage: 7,
                    description: "Wraps around the enemy and squeezes tightly."
                }
            ]
        },
        {

            name: "Vulture",
            type: "Desert",
            strength: 65,
            wearknessLevel: 35,
            Power: 55,
            BtnColor: "brown",
            powerId : 3400,
            creatureId : 3405,
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A scavenger bird circling over the desert, waiting for its prey to wearknessLevelen.",
            attacks: [
                { 
                    name: "Talon Strike",
                    type: "Desert",
                    damage: 7,
                    description: "Attacks with its razor-sharp talons."
                },
                { 
                    name: "Sandstorm Dive",
                    type: "Desert",
                    damage: 6,
                    description: "Creates a sandstorm before diving onto the enemy."
                },
                { 
                    name: "Desert Screech",
                    type: "Desert",
                    damage: 5,
                    description: "Unleashes a terrifying screech that wearknessLevelens the opponent."
                }
            ]
        },
        {

            name: "Camel",
            type: "Desert",
            strength: 80,
            wearknessLevel: 20,
            Power: 70,
            BtnColor: "khaki",
            powerId : 3400,
            creatureId : 3404,
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A resilient camel that endures the harsh desert conditions.",
            attacks: [
                { 
                    name: "Sand Kick",
                    type: "Desert",
                    damage: 7,
                    description: "Kicks up sand to blind the enemy."
                },
                { 
                    name: "Water Reserve",
                    type: "Desert",
                    damage: 6,
                    description: "Replenishes stamina with stored water."
                },
                { 
                    name: "Hump Slam",
                    type: "Desert",
                    damage: 8,
                    description: "Uses its weight to slam into the enemy."
                }
            ]

        },

    ],

    Forest : [

        {

            name: "Bee_Hive",
            type: "Forest",
            strength: 60,
            wearknessLevel: 20,
            Power: 50,
            BtnColor: "yellow",
            powerId : 1400,
            creatureId : 1401,
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
        {

            name: "Raccoon",
            type: "Forest",
            strength: 65,
            wearknessLevel: 25,
            Power: 55,
            BtnColor: "gray",
            powerId : 1400,
            creatureId : 1402,
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
        {

            name: "Wildboar",
            type: "Forest",
            strength: 75,
            wearknessLevel: 30,
            Power: 65,
            BtnColor: "brown",
            powerId : 1400,
            creatureId : 1404,
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A powerful wild boar charges.",
            attacks: [
                {
                    name: "Tusk Charge",
                    type: "Forest",
                    damage: 8,
                    description: "The Wildboar charges against its enemy with its tusks."
                },
                {
                    name: "Mud Throw",
                    type: "Forest",
                    damage: 6,
                    description: "The Wildboar throws mud."
                }
            ]

        },
        {

            name: "Bison",
            type: "Forest",
            strength: 80,
            wearknessLevel: 35,
            Power: 70,
            BtnColor: "brown",
            powerId : 1400,
            creatureId : 1403,
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
        {

            name: "Deer",
            type: "Forest",
            strength: 60,
            wearknessLevel: 20,
            Power: 50,
            BtnColor: "tan",
            powerId : 1400,
            creatureId : 1406,
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
        {
            name: "Fox",
            type: "Forest",
            strength: 65,
            wearknessLevel: 25,
            Power: 55,
            BtnColor: "orange",
            powerId : 1400,
            creatureId : 1407,
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A cunning fox bites.",
            attacks: [
                {
                    name: "Bite",
                    type: "Forest",
                    damage: 7,
                    description: "The Fox quicky bites its pray in stealth."
                },
                {
                    name: "Sly Dodge",
                    type: "Forest",
                    damage: 4,
                    description: "The Fox dodges and counterattacks."
                }
            ]

        },

        {
            
            name: "Wolf",
            type: "Forest",
            strength: 70,
            wearknessLevel: 30,
            Power: 60,
            BtnColor: "gray",
            powerId : 1400,
            creatureId : 1408,
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A fierce wolf bites.",
            attacks: [
                {
                    name: "Bite",
                        type: "Forest",
                        damage: 8,
                        description: "The Wolf bites and make blood its enemy."
                    },
                    {
                        name: "Howl",
                        type: "Forest",
                        damage: 5,
                        description: "The Wolf howls, causing fear its enemy."
                    },
                    {
                        name : "Pack Attack",
                        type : "Forest",
                        damage : 8,
                        description : "A Whole Pack of Wolves attacks its Enemy.",
                    }
                ]

        },
        {

            name: "Bear",
            type: "Forest",
            strength: 85,
            wearknessLevel: 35,
            Power: 75,
            BtnColor: "brown",
            powerId : 1400,
            creatureId : 1409,
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
        {

            name: "Owl",
            type: "Forest",
            strength: 60,
            wearknessLevel: 20,
            Power: 50,
            BtnColor: "white",
            powerId : 1200,
            creatureId : 1205,
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
        {

            name: "Raven",
            type: "Forest",
            strength: 65,
            wearknessLevel: 25,
            powerId : 1200,
            creatureId : 1209,
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A Cunning raven pecks.",
            attacks: [
                {
                    name: "Peck",
                    type: "Forest",
                    damage: 7,
                    description: "The Raven pecks the eyes of its enemy."
                },
                {
                    name: "Shadow Dive",
                    type: "Forest",
                    damage: 5,
                    description: "The Raven dives from the shadows."
                }
            ]

        },
        {

            name: "BaldEagle",
            type: "Forest",
            strength: 70,
            wearknessLevel: 30,
            powerId : 1200,
            creatureId : 1208,
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

        {
            name: "Lizard",
            type: "Jungle",
            strength: 55,
            wearknessLevel: 20,
            Power: 40,
            BtnColor: "green",
            powerId : 1500,
            creatureId : 1501,
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
                    description: "The Lizard bites and leave a rotten hurt on its victim."
                }
            ]
        },
        {

            name: "Tiger",
            type: "Jungle",
            strength: 80,
            wearknessLevel: 30,
            Power: 70,
            BtnColor: "orange",
            powerId : 1500,
            creatureId : 1502,
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
        {

            name: "Monkey",
            type: "Jungle",
            strength: 65,
            wearknessLevel: 25,
            Power: 50,
            BtnColor: "brown",
            powerId : 1500,
            creatureId : 1503,
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
        {

            name: "Ostrich",
            type: "Jungle",
            strength: 70,
            wearknessLevel: 35,
            Power: 60,
            BtnColor: "tan",
            powerId : 1500,
            creatureId : 1504,
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
        {

            name: "Porcupine",
            type: "Jungle",
            strength: 60,
            wearknessLevel: 40,
            Power: 45,
            BtnColor: "gray",
            powerId : 1500,
            creatureId : 1505,
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
        {

            name: "Jungle_Boar",
            type: "Jungle",
            strength: 75,
            wearknessLevel: 30,
            Power: 65,
            BtnColor: "brown",
            powerId : 1500,
            creatureId : 1508,
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
        {

            name: "Orangutan",
            type: "Jungle",
            strength: 70,
            wearknessLevel: 25,
            Power: 60,
            BtnColor: "orange",
            powerId : 1500,
            creatureId : 1506,
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
        {

            name: "Lion",
            type: "Jungle",
            strength: 85,
            wearknessLevel: 30,
            Power: 75,
            BtnColor: "goldenrod",
            powerId : 1500,
            creatureId : 1509,
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A majestic lion roars and attacks.",
            attacks: [
                {
                    name: "Roar",
                    type: "Jungle",
                    damage: 7,
                    description: "The Lion's roar causes fear and wearknessLevelens the enemy."
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
                    description : "The Lion King Graps tis Prays with its claws."
                }
            ]

        },
        {

            name: "Giraffe",
            type: "Jungle",
            strength: 70,
            wearknessLevel: 35,
            Power: 60,
            BtnColor: "yellow",
            powerId : 1500,
            creatureId : 1513,
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
        {

            name: "Buffalo",
            type: "Jungle",
            strength: 80,
            wearknessLevel: 30,
            Power: 70,
            BtnColor: "brown",
            powerId : 1500,
            creatureId : 1512,
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
        {

            name: "Elephant",
            type: "Jungle",
            strength: 90,
            wearknessLevel: 40,
            Power: 80,
            BtnColor: "gray",
            powerId : 1500,
            creatureId : 1515,
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

        {

            name: "Goat",
            type: "Mountain",
            strength: 65,
            wearknessLevel: 25,
            Power: 50,
            BtnColor: "gray",
            powerId : 2400,
            creatureId : 2401,
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
        {

            name : "Eagle",
            type: "Mountain",
            strength: 70,
            wearknessLevel: 30,
            Power: 60,
            BtnColor: "brown",
            powerId : 2400,
            creatureId : 2402,
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
        {

            name: "MountainBear",
            type: "Mountain",
            strength: 80,
            wearknessLevel: 30,
            Power: 70,
            BtnColor: "brown",
            powerId : 2400,
            creatureId : 2403,
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
                    description: "The Bear hugs tightly and scratch with is claws Nails."
                }
            ]
        },
        {

            name: "MountainLion",
            type: "Mountain",
            strength: 75,
            wearknessLevel: 30,
            Power: 65,
            BtnColor: "tan",
            powerId : 2400,
            creatureId : 2405,
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
        {

            name : "Rock",
            strength: 70,
            wearknessLevel: 30,
            Power: 60,
            BtnColor: "black",
            powerId : 2400,
            creatureId : 2408,
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

        {},
        {},
        {},

    ],

    Swamp : [

        {
            
            name: "Alligator",
            type: "Swamp",
            strength: 80,
            wearknessLevel: 30,
            Power: 70,
            BtnColor: "darkgreen",
            powerId : 2300,
            creatureId : 2301,
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
        {

            name: "Mosquito",
            type: "Swamp",
            strength: 40,
            wearknessLevel: 80,
            Power: 35,
            BtnColor: "brown",
            powerId : 2300,
            creatureId : 2302,
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
        {

            name: "Frog",
            type: "Swamp",
            strength: 60,
            wearknessLevel: 40,
            Power: 50,
            BtnColor: "green",
            powerId : 2300,
            creatureId : 2303,
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
        {

            name: "Flamingo",
            type: "Swamp",
            strength: 55,
            wearknessLevel: 45,
            Power: 60,
            BtnColor: "pink",
            powerId : 2300,
            creatureId : 2304,
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
        {

            name: "Crocodile",
            type: "Swamp",
            strength: 85,
            wearknessLevel: 25,
            Power: 75,
            BtnColor: "darkolivegreen",
            powerId : 2300,
            creatureId : 2305,
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
                },
                {
                    name : "Sudden Attacl",
                    type : "Swamp",
                    damage : Math.floor(Math.random() * 9) + 3,
                    description : "The Crocodrile hide it dark water and suddenly attack is prey."
                }
            ]

        },

    ],

    Sea : [

        {

            name: "Crab",
            type: "Sea",
            strength: 50,
            wearknessLevel: 30,
            Power: 45,
            BtnColor: "red",
            powerId : 2200,
            creatureId : 2201,
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
        {

            name: "Shark",
            type: "Sea",
            strength: 80,
            wearknessLevel: 20,
            Power: 70,
            BtnColor: "blue",
            powerId : 2200,
            creatureId : 2202,
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
        {

            name: "Whale",
            type: "Sea",
            strength: 85,
            wearknessLevel: 35,
            Power: 75,
            BtnColor: "blue",
            powerId : 2200,
            creatureId : 2205,
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
        {

            name: "Octopus",
            type: "Sea",
            strength: 70,
            wearknessLevel: 25,
            Power: 60,
            BtnColor: "purple",
            powerId : 2200,
            creatureId : 2208,
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
        {

            name: "JellyFish",
            type: "Sea",
            strength: 65,
            wearknessLevel: 40,
            Power: 50,
            BtnColor: "lightblue",
            powerId : 2200,
            creatureId : 2209,
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
        {

            name: "Elver",
            type: "Sea",
            strength: 55,
            wearknessLevel: 30,
            Power: 40,
            BtnColor: "green",
            powerId : 2200,
            creatureId : 2205,
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

        {

            name: "Squid",
            type: "Sea",
            strength: 75,
            wearknessLevel: 25,
            Power: 65,
            BtnColor: "black",
            powerId : 2200,
            creatureId : 2212,
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
        {

            name: "CaveFish",
            type: "Sea",
            strength: 60,
            wearknessLevel: 40,
            Power: 45,
            BtnColor: "gray",
            powerId : 2200,
            creatureId : 2215,
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
                    description : "The CaveFish lure in the abyssal Deep Sea."
                }
            ]


        },
        {

            name: "Sea-Turtle",
            type: "Sea",
            strength: 80,
            wearknessLevel: 30,
            Power: 70,
            BtnColor: "green",
            powerId : 2200,
            creatureId : 2218,
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
        {
            name : "BlueWhale",
            type : "Snow",
            strength : 75,
            wearknessLevel : 35,
            Power : 55 ,
            BtnColor : "blue",
            powerId : 3200,
            creatureId : 3204,
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The Blue Whale swims in the cold seas.",
            attacks : [
                { 
                    name : "Snow Ball",
                    type : "Snow",
                    damage : 7,
                    description : "The Blue Whale throws a snow ball."
                },
                { 
                    name : "Cold Water Bubble",
                    type : "Snow",
                    damage : 8,
                    description : "The Blue Whale attack with a bubble flow to sneeze its victims."
                },
                { 
                    name : "Snow Tail",
                    type : "Snow",
                    damage : 8.5,
                    description : "The Blue Whale whips with its tail."
                }
            ]

        }

    ],

    Bugs : [

        {

            name: "Amoeba",
            type: "Bugs",
            strength: 10,
            wearknessLevel: 90,
            Power: 5,
            BtnColor: "green",
            powerId : 1100,
            creatureId : 1101,
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
        {

            name: "Bacterium",
            type: "Bugs",
            strength: 15,
            wearknessLevel: 85,
            Power: 10,
            BtnColor: "yellow",
            powerId : 1100,
            creatureId : 1103,
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
        {

            name: "Beetle",
            type: "Bugs",
            strength: 20,
            wearknessLevel: 80,
            Power: 15,
            BtnColor: "brown",
            powerId : 1100,
            creatureId : 1102,
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
        {

            name: "Worm",
            type: "Bugs",
            strength: 18,
            wearknessLevel: 82,
            Power: 12,
            BtnColor: "red",
            powerId : 1100,
            creatureId : 1105,
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A slithering worm burrows.",
            attacks: [
                {
                    name: "Burrow",
                    type: "Bugs",
                    damage: 1,
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
        
        {

            name: "Bloodbug",
            type: "Bugs",
            strength: 25,
            wearknessLevel: 75,
            Power: 20,
            BtnColor: "red",
            powerId : 1100,
            creatureId : 1106,
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

        {

            name: "Parasite",
            type: "Bugs",
            strength: 30,
            wearknessLevel: 70,
            Power: 25,
            BtnColor: "purple",
            powerId : 1100,
            creatureId : 1109,
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A parasite drains and wearknessLevelens.",
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
                    description: "The Parasite wearknessLevelens and make feel sick."
                }
            ]

        },
        {

            name: "EvilBug",
            type: "Bugs",
            strength: 90,
            wearknessLevel: 10,
            Power: 85,
            BtnColor: "black",
            powerId : 1100,
            creatureId : 1113,
            ranDamage: Math.floor(Math.random() * 10) + 11,
            description: "A highly dangerous bug that spreads deadly diseases.",
            attacks: [

                {
                    name : "Toxic Sting",
                    type : "Bugs",
                    damage : 7,
                    description : "The Evil Bug bite and Sting, it relase a toxic fluid on its victims."

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
        {

            name: "EvilVirus",
            type: "Bugs",
            strength: 95,
            wearknessLevel: 5,
            Power: 90,
            BtnColor: "darkred",
            powerId : 1100,
            creatureId : 1115,
            ranDamage: Math.floor(Math.random() * 10) + 13,
            description: "A highly contagious and lethal virus.",
            attacks: [
                {
                    name: "Lethal Contagion",
                    type: "Bugs",
                    damage: 10,
                    description: "The Evil Virus is highly contagious and cause pain and dead."
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

        {

            name: "DarkShadow",
            type: "Darkness",
            strength: 70,
            wearknessLevel: 30,
            Power: 65,
            BtnColor: "black",
            powerId : 5400,
            creatureId : 5401,
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
        {

            name: "Ash",
            type: "Darkness",
            strength: 65,
            wearknessLevel: 35,
            Power: 60,
            BtnColor: "gray",
            powerId : 5400,
            creatureId : 5402,
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
        {

            name: "Eclipse",
            type: "Darkness",
            strength: 80,
            wearknessLevel: 20,
            Power: 75,
            BtnColor: "black",
            powerId : 5400,
            creatureId : 5404,
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
        {

            name: "Black Hole",
            type: "Darkness",
            strength: 90,
            wearknessLevel: 10,
            Power: 95,
            BtnColor: "black",
            powerId : 5400,
            creatureId : 5410,
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A black hole consumes all.",
            attacks: [
                {
                    name: "Consume",
                    type: "Darkness",
                    damage: 10,
                    description: "The Black Hole fully consumes its target."
                }
            ]

        },
        {

            name: "EvilEye",
            type: "Darkness",
            strength: 85,
            wearknessLevel: 15,
            Power: 80,
            BtnColor: "black",
            powerId : 5400,
            creatureId : 5420,
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "An evil eye curses.",
            attacks: [
                {
                    name: "Curse",
                    type: "Darkness",
                    damage: 9,
                    description: "The Evil Eye see everything and curses the target."
                }
            ]
        },

    ],

    Monsters : [

        {

            name: "Orc",
            type: "Monsters",
            strength: 70,
            wearknessLevel: 25,
            Power: 60,
            BtnColor: "green",
            powerId : 4100,
            creatureId : 4101,
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
        {

            name: "Goblin",
            type: "Monsters",
            strength: 60,
            wearknessLevel: 35,
            Power: 45,
            BtnColor: "brown",
            powerId : 4100,
            creatureId : 4103,
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
        {

            name: "Ogre",
            type: "Monsters",
            strength: 80,
            wearknessLevel: 20,
            Power: 70,
            BtnColor: "darkgreen",
            powerId : 4100,
            creatureId : 4105,
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
        {

            name: "Troll",
            type: "Monsters",
            strength: 75,
            wearknessLevel: 30,
            Power: 65,
            BtnColor: "darkgray",
            powerId : 4100,
            creatureId : 4108,
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
        {

            name: "Cyclops",
            type: "Monsters",
            strength: 85,
            wearknessLevel: 25,
            Power: 75,
            BtnColor: "brown",
            powerId : 4100,
            creatureId : 4110,
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

        {
            name: "Dragon",
            type: "Monsters",
            strength: 90,
            wearknessLevel: 40,
            Power: 80,
            BtnColor: "red",
            powerId : 4100,
            creatureId : 4116,
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

        {

            name: "Kraken",
            type: "SeaMonster",
            strength: 95,
            wearknessLevel: 20,
            Power: 90,
            BtnColor: "darkblue",
            powerId : 4200,
            creatureId : 4218,
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
        {

            name: "Hydra",
            type: "SeaMonster",
            strength: 90,
            wearknessLevel: 25,
            Power: 85,
            BtnColor: "darkcyan",
            powerId : 4200,
            creatureId : 4210,
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A monstrous serpent with multiple regenerating heads.",
            attacks: [
                { 
                    name: "Multi-Head-Strike",
                    type: "SeaMonster",
                    damage: Math.floor(Math.random() * 9) + 5,
                    description: "The Hydra attacks with all its heads simultaneously."
                },
                { 
                    name: "Toxic-Spit",
                    type: "SeaMonster",
                    damage: Math.floor(Math.random() * 9) + 3,
                    description: "The Hydra spews a deadly toxin at its enemy."
                }
            ]

        },
        {

            name: "Mermaid",
            type: "SeaMonster",
            strength: 70,
            wearknessLevel: 50,
            Power: 60,
            BtnColor: "aqua",
            powerId : 4200,
            creatureId : 4205,
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A mystical sea being with enchanting powers.",
            attacks: [
                { 
                    name: "Siren Song",
                    type: "SeaMonster",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "The Mermaid sings a hypnotic melody that wearknessLevelens enemies."
                },
                { 
                    name: "Water Whip",
                    type: "SeaMonster",
                    damage: Math.floor(Math.random() * 9) + 1,
                    description: "The Mermaid manipulates water to lash at her foes."
                }
            ]

        },
        {

            name: "SeaSerpent",
            type: "SeaMonster",
            strength: 85,
            wearknessLevel: 30,
            Power: 80,
            BtnColor: "teal",
            powerId : 4200,
            creatureId : 4209,
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
        {

            name: "SeaDragon",
            type: "SeaMonster",
            strength: 100,
            wearknessLevel: 15,
            Power: 95,
            BtnColor: "navy",
            powerId : 4200,
            creatureId : 4216,
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

    UnderGround : [

        {

            name: "Ghost",
            type: "UnderGround",
            strength: 60,
            wearknessLevel: 70,
            Power: 55,
            BtnColor: "gray",
            powerId : 4300,
            creatureId : 4301,
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
                    description: "A chilling scream that wearknessLevelens the enemy’s willpower."
                }
            ]

        },
        {

            name: "Witch",
            type: "UnderGround",
            strength: 75,
            wearknessLevel: 40,
            Power: 70,
            BtnColor: "purple",
            powerId : 4300,
            creatureId : 4303,
            ranDamage: Math.floor(Math.random() * 10) + 1,
            description: "A powerful spellcaster skilled in dark magic.",
            attacks: [
                {
                    name : "Poison Drink",
                    type : "Poison",
                    damage : 7,
                    description : "The Witch make a harsh Poison and throw it to its enemies.",

                },
                { 
                    name: "Hex Curse",
                    type: "UnderGround",
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
        {

            name: "Troll",
            type: "UnderGround",
            strength: 90,
            wearknessLevel: 20,
            Power: 85,
            BtnColor: "darkgreen",
            powerId : 4300,
            creatureId : 4302,
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
        {

            name: "Vampire",
            type: "UnderGround",
            strength: 85,
            wearknessLevel: 30,
            Power: 80,
            BtnColor: "crimson",
            powerId : 4300,
            creatureId : 4305,
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
        {

            name: "Zombie",
            type: "UnderGround",
            strength: 50,
            wearknessLevel: 80,
            Power: 45,
            BtnColor: "olive",
            powerId : 4300,
            creatureId : 4307,
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
        {

            name: "Spider-Web",
            type: "UnderGround",
            strength: 65,
            wearknessLevel: 50,
            Power: 60,
            BtnColor: "black",
            powerId : 4300,
            creatureId : 4309,
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
        {   name : "Wizard",
            type: "UnderGround",
            strength: 95,
            wearknessLevel: 10,
            Power: 90,
            BtnColor: "gold",
            powerId : 4300,
            creatureId : 4315,
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
                    description : "Magician Wizard turn its enemy into a tiny Green Frog.", 
                }
            ],

        },

    ],

    Mythical : [

        {

            name: "Elf",
            type: "Mythical",
            strength: 90,
            wearknessLevel: 40,
            Power: 85,
            BtnColor: "forestgreen",
            powerId : 4500,
            creatureId : 4505,
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
        {

            name: "Unicorn",
            type: "Mythical",
            strength: 95,
            wearknessLevel: 35,
            Power: 90,
            BtnColor: "white",
            powerId : 4300,
            creatureId : 4301,
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
        {

            name: "Centaur",
            type: "Mythical",
            strength: 100,
            wearknessLevel: 30,
            Power: 95,
            BtnColor: "brown",
            powerId : 4300,
            creatureId : 4303,
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

        {

            name: "Minotaur",
            type: "Mythical",
            strength: 130,
            wearknessLevel: 20,
            Power: 125,
            BtnColor: "darkbrown",
            powerId : 4300,
            creatureId : 4304,
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

        {

            name: "Fairy",
            type: "Mythical",
            strength: 80,
            wearknessLevel: 60,
            Power: 75,
            BtnColor: "lightpink",
            powerId : 4300,
            creatureId : 4309,
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
        {

            name: "Harpy",
            type: "Mythical",
            strength: 85,
            wearknessLevel: 50,
            Power: 80,
            BtnColor: "darkred",
            powerId : 4300,
            creatureId : 4314,
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
                    description : "Throw its Stingy Sharp Wings agains its enemies."
                }
            ]
        },
        {
            
            name : "Sphinx",
            type : "Fire",
            strength : 75,
            wearknessLevel : 15,
            BtnColor : "red",
            Power : 65 ,
            powerId : 4300,
            creatureId : 4315,
            ranDamage  : Math.floor(Math.random() * 10) + 1,
            description : "The Fire Sphinx guards the temple",
            attacks : [
                { 
                    name : "Fire Eye",
                    type : "Fire",
                    damage : 7,
                    description : "The Sphinx shoots fire from its eyes."
                },
                { 
                    name : "Fire Claw",
                    type : "Fire",
                    damage : 8,
                    description : "The  Sphinx scratches with its claws."
                },
                { 
                    name : "Fire Tail",
                    type : "Fire",
                    damage : 8.5,
                    description : "The Sphinx whips with its tail."
                }
            ]

        },
        {
            name: "Griffin",
            type: "Mythical",
            strength: 110,
            wearknessLevel: 20,
            Power: 100,
            BtnColor: "gold",
            strength : 115,
            powerId : 4300,
            creatureId : 4310,
            ranDamage: Math.floor(Math.random() * 15) + 5,
            ranDamage : Math.floor(Math.random() * 10) + 12,
            description : "Ancient creature with the body of a lion and the head of an eagle.",
            attacks : [
                { 
                    name : "Air Claw",
                    type : "Air",
                    damage : 8,
                    description : "The  Griffin scratches with its claws."
                },
                { 
                    name : "Air Beak",
                    type : "Air",
                    damage : 8.5,
                    description : "The Griffin peak with is powerfull Beak."
                }
            ],

        },
        {

            name: "Phoenix",
            type: "Mythical",
            strength: 120,
            wearknessLevel: 10,
            Power: 110,
            BtnColor: "orange",
            powerId : 4300,
            creatureId : 4311,
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
        {

            name: "SpaceDragon",
            type: "Mythical",
            strength: 150,
            wearknessLevel: 5,
            Power: 140,
            BtnColor: "darkblue",
            powerId : 4300,
            creatureId : 4320,
            ranDamage: Math.floor(Math.random() * 15) + 15,
            description: "A cosmic being that breathes pure energy from the stars.",
            attacks: [
                {
                    name : "Gamma Ray",
                    type : "Mythical",
                    damage : Math.floor(Math.random() + 10 )  + 10,
                    description : "SpaceDragon breath a Powerfull Gamma Ray against its enemies.",
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


    ],

}

const DragonFireClawsAttack = AttacksByCreatures.Fire[2].attacks[2].name;
const DragonFireClawsDamage = AttacksByCreatures.Fire[2].attacks[2].damage;
const DragonFireClawsDescription = AttacksByCreatures.Fire[2].attacks[2].description;

console.log(`The Dragon's Fire Claws Attack is ${DragonFireClawsAttack} with a damage of ${DragonFireClawsDamage} and the description is ${DragonFireClawsDescription} .`);

console.log( typeof AttacksByCreatures.Fire );

//________

// Accessing the Shark's attacks and logging them to the console.
const sharkAttacks = AttacksByCreatures.Sea.find(creature => creature.name === "Shark").attacks;

console.log("Shark's Attacks:", sharkAttacks);

// Accessing the Shark's Bite attack and logging it to the console.
const shark = AttacksByCreatures.Sea.find(creature => creature.name === "Shark");

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
const spider = AttacksByCreatures.Poison.find(creature => creature.name === "Spider");

if (spider) {
    // Extract the desired properties
    const spiderName = spider.name;
    const spiderType = spider.type;
    const spiderStrength = spider.strength;
    const spiderWeak = spider.wearknessLevel;
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


const Mosquit0 = AttacksByCreatures.Swamp.find( creature => creature.name === "Mosquito" );
//const Mosquito = AttacksByCreatures.Swamp.Mosquito;

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
const desertSnake = AttacksByCreatures.Desert.find(creature => creature.name === "DesertSnake");

if (desertSnake) {
    // Extract the desired properties
    const desertSnakeName = desertSnake.name;
    const desertSnakeType = desertSnake.type;
    const desertSnakeStrength = desertSnake.strength;
    const desertSnakeWeak = desertSnake.wearknessLevel;
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
    for (const key in AttacksByCreatures ) {

        if (Array.isArray(AttacksByCreatures[key])) {

            const creature = AttacksByCreatures[key].find(c => c.name === creatureName);

            if (creature) {

                foundCreature = creature;
                break; // Stop searching once found .

            }
        }
    }

    if (foundCreature) {
        // Extract and log information .
        const foundCreatureName = foundCreature.name;
    	const foundCreatureType =  foundCreature.type;
    	const foundCreatureStrength = foundCreature.strength;
    	const foundCreatureWeaknessLevel = foundCreature.wearknessLevel;
    	const foundCreaturePower = foundCreature.Power;
    	const foundCreaturepowerId =  foundCreature.powerId;
    	const foundCreatureId =  foundCreature.creatureId;
    	const foundCreatureRandDamage =  foundCreature.ranDamage ;
    	const foundCreatureBtnColor =   foundCreature.BtnColor;
    	const foundCreatureDescription =   foundCreature.description ;
        //Shows  the foundCreature Info by Console.log(). ...
        console.log("Creature Name:", foundCreatureName);
        console.log("Creature Type:", foundCreatureType);
        console.log("Creature Strength:", foundCreatureStrength);
        console.log("Creature Weakness:", foundCreatureWeaknessLevel);
        console.log("Creature Button Color:",foundCreatureBtnColor);
        console.log("Creature Power:", foundCreaturePower);
        console.log("Creature Random Damage:", foundCreatureRandDamage);
        console.log("Creature PowerId : ", foundCreaturepowerId);
        console.log("Creature Id :", foundCreatureId);
        console.log("Creature Button Color:",foundCreatureBtnColor);
        console.log("Creature Description:", foundCreatureDescription);
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

/*
function displaySelectedCreatures() {
    // Clear the container
    battleContainer.innerHTML = "";
    const chosenCreatueres = document.createElement("h2");
    const thisCreatuere = selectCreature();
    chosenCreatueres.textContent = `Your have Chosen  ${thisCreatuere}, and the Web Browser has Chosen ${computerCreature} as its Creature`;
    battleContainer.appendChild(chosenCreatueres);
    const fightingField = document.createElement("div");
    fightingField.classList.add("fighting-field");
    // Apply flex styling to the battle container
    fightingField.style.display = "flex";
    fightingField.style.justifyContent = "space-evenly";
    fightingField.style.alignItems = "center";

    const playerCreatureDiv = document.createElement("div");
    playerCreatureDiv.classList.add("fighting-field");

    const playerCreatureName = document.createElement("h3");
    playerCreatureName.textContent = `Your Creature: ${thisCreatuere}`;
    playerCreatureDiv.appendChild(playerCreatureName);

    const imgPlayerCreature = document.createElement("img");
    imgPlayerCreature.src = `./creatures/${thisCreatuere}.svg`;
    imgPlayerCreature.alt = `${thisCreatuere} Creature`;
    imgPlayerCreature.classList.add("creature-image");
    playerCreatureDiv.appendChild(imgPlayerCreature);
    fightingField.appendChild(playerCreatureDiv);
    battleContainer.appendChild(fightingField);

    // Get the User Creature Selected Power ...
    let currentPower = getSelectedPower(thisCreatuere);
    console.log("this is the current player Power here : ", currentPower);
    // Get the computer selected Power 
    let computerPower = getSelectedPower(computerCreature);
    console.log("this is the current computer Power here : ", computerPower);

    // Set div container for the computer creature ...
    const computerCreatureDiv = document.createElement("div");
    computerCreatureDiv.classList.add("fighting-field");

    computerCreatureName = document.createElement("h3");
    computerCreatureName.textContent = `Computer Creature: ${computerCreature}`;
    computerCreatureDiv.appendChild(computerCreatureName);

    const imgComputerCreature = document.createElement("img");
    imgComputerCreature.src = `./creatures/${computerCreature}.svg`;
    imgComputerCreature.alt = `${computerCreature} Creature`;
    imgComputerCreature.classList.add("creature-image");
    computerCreatureDiv.appendChild(imgComputerCreature);
    fightingField.appendChild(computerCreatureDiv)
    battleContainer.appendChild(fightingField);

    // Fetch and display creature info
    const foundCreature = getCreatureInfo(thisCreatuere);
    showCreatureInfo(foundCreature);

    // Get the computer selected attack
    let computerAttack = computerChooseAttack(computerCreature);
    console.log(`Computer selected creature: ${computerCreature}`);
    console.log(`Computer selected attack: ${computerAttack}`);
}

function showCreatureInfo(foundCreature) {
    const foundCreatureName = foundCreature.name;
    const foundCreatureType = foundCreature.type;
    const foundCreatureStrength = foundCreature.strength;
    const foundCreatureWeaknessLevel = foundCreature.weak;
    const foundCreaturePower = foundCreature.Power;
    const foundCreatureRandDamage = foundCreature.ranDamage;
    const foundCreatureBtnColor = foundCreature.BtnColor;
    const foundCreatureDescription = foundCreature.description;

    // Create and append elements to display creature info
    const creatureInfoDiv = document.createElement("div");
    creatureInfoDiv.classList.add("creature-info");

    const nameElement = document.createElement("p");
    nameElement.textContent = `Name: ${foundCreatureName}`;
    creatureInfoDiv.appendChild(nameElement);

    const typeElement = document.createElement("p");
    typeElement.textContent = `Type: ${foundCreatureType}`;
    creatureInfoDiv.appendChild(typeElement);

    const strengthElement = document.createElement("p");
    strengthElement.textContent = `Strength: ${foundCreatureStrength}`;
    creatureInfoDiv.appendChild(strengthElement);

    const weaknessElement = document.createElement("p");
    weaknessElement.textContent = `Weakness: ${foundCreatureWeaknessLevel}`;
    creatureInfoDiv.appendChild(weaknessElement);

    const powerElement = document.createElement("p");
    powerElement.textContent = `Power: ${foundCreaturePower}`;
    creatureInfoDiv.appendChild(powerElement);

    const damageElement = document.createElement("p");
    damageElement.textContent = `Random Damage: ${foundCreatureRandDamage}`;
    creatureInfoDiv.appendChild(damageElement);

    const btnColorElement = document.createElement("p");
    btnColorElement.textContent = `Button Color: ${foundCreatureBtnColor}`;
    creatureInfoDiv.appendChild(btnColorElement);

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = `Description: ${foundCreatureDescription}`;
    creatureInfoDiv.appendChild(descriptionElement);

    battleContainer.appendChild(creatureInfoDiv);
}

*/
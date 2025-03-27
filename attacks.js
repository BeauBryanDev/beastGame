// Create an Array of Arrays  each element of this Attack array will be an object that represents an attack
// Each object will have the following properties:
// name: a string that represents the name of the attack
// type: a string that represents the type of the attack
// damage: a number that represents the damage of the attack
// description: a string that describes the attack
// Each Object will be an Element Power of the Array Attacks like : Fire, Water, Snow, Forest, Air, Earth, Light, River, Poison, Ice, Desert, Mountain, Sky, Swamp, Volcano, Bugs, Forest, Jungle, Sea, Wind, Storm, Disasters, Darkness, OuterSpace, Cold, Monster, SeaMonster, UnderGround, Mythical

export const attacksByPower = {

    Fire: [
        { 
            name : "Fire Ball",
            type : "Fire",
            damage : {
                
                Phoenix : 24,
                Sphinx: 54,
                Dragon : 64,
                WildFire : 84,
                Volcano : 86,
            },
            description : "The Fire Creature throws a fire ball",
            BackGroundColor : "red",
        },
        { 
            name : "Fire Breath",
            type : "Fire",
            damage : {

                Phoenix : 24,
                Sphinx: 54,
                Dragon : 64,
                WildFire : 84,
                Volcano : 86,
            },
            description : "The Fire Creature breathes fire",
            BackGroundColor : "red",
        },
        { 
            name : "Fire Claw",
            type : "Fire",
            damage : {

                Phoenix : 24,
                Sphinx: 54,
                Dragon : 64,
                WildFire : 84,
                Volcano : 86,
            },
            description : "The Fire Creature scratches with its claws",
            BackGroundColor : "red",
        }
    ],
    Water : [
        { 
            name : "Water Ball",
            type : "Water",
            damage : {
                catFish : 24,
                Piranha : 54,
                eel : 64,
                Hippo : 84,
                Dolphin : 86,
                Shark : 86,
                Whale : 86,
                SeaSerpent : 86,
            },

            description : "The Water Creature throws a water ball",
            BackGroundColor : "blue",
        },
        { 
            name : "Water Flow",
            type : "Water",
            damage  : {
                catFish : 24,
                Piranha : 54,
                eel : 64,
                Hippo : 84,
                Dolphin : 86,
                Shark : 86,
                Whale : 86,
                SeaSerpent : 86,
            },
            description : "The Water Creature breathes water",
            BackGroundColor : "blue",
        },
        { 
            name : "Water Claw",
            type : "Water",
            damage : {
                catFish : 24,
                Piranha : 54,
                eel : 64,
                Hippo : 84,
                Dolphin : 86,
                Shark : 86,
                Whale : 86,
                SeaSerpent : 86,
            },
            description : "The Water Creature scratches with its claws",
            BackGroundColor : "blue",
        }
    ],
    Snow : [
        { 
            name : "Snow Ball",
            type : "Snow",
            damage : {
                Seal : 24,
                WhiteBear : 54,
                Orca : 64,
                BlueWhale : 84,
                IceDragon : 86,
            },
            description : "The Snow Creature throws a snow ball",
            BackGroundColor : "white",
        },
        { 
            name : "Snow Breath",
            type : "Snow",
            damage : {
                Seal : 24,
                WhiteBear : 54,
                Orca : 64,
                BlueWhale : 84,
                IceDragon : 86,
            },
            description : "The Snow Creature breathes snow",
            BackGroundColor  : "white",
        },
        { 
            name : "Snow Claw",
            type : "Snow",
            damage : {
                Seal : 24,
                WhiteBear : 54,
                Orca : 64,
                BlueWhale : 84,
                IceDragon : 86,
            },
            description : "The Snow Creature scratches with its claws",
            BackGroundColor : "white",
        }
    ],
    Forest : [
        { 
            name : "Forest Ball",
            type : "Forest",
            damage : {
                Fox : 24,
                Wolf : 54,
                GrizzlyBear : 64,
                Deer : 84,
                Oak : 86,
                Pine : 86,
                Maple : 86,
            },
            description : "The Forest Creature throws a forest ball",
            BackGroundColor: "green",
        },
        { 
            name : "Forest Growth",
            type : "Forest",
            damage : {
                Fox : 24,
                Wolf : 54,
                GrizzlyBear : 64,
                Deer : 84,
                Oak : 86,
                Pine : 86,
                Maple : 86,
            },
            description : "The Forest Creature rise roots underground",
            BackGroundColor : "green",
        },
        { 
            name : "Forest Claw",
            type : "Forest",
            damage : {
                Fox : 24,
                Wolf : 54,
                GrizzlyBear : 64,
                Deer : 84,
                Oak : 86,
                Pine : 86,
                Maple : 86,
            },
            description : "The Forest Creature scratches with its claws",
            BackGroundColor : "green",

        },
        {
            name : "BeastHit",
            type : "Forest",
            damage: {
                Fox : 24,
                Wolf : 54,
                GrizzlyBear : 64,
                Deer : 84,
                Oak : 86,
                Pine : 86,
                Maple : 86,
            },
            description: "The Forest Creature hits with its body",
            BackGroundColor : "green",
        }
    ],  
    Earth : [
        { 
            name : "Earth Ball",
            type : "Earth",
            damage : {
                Elephant : 24,
                Rhino : 54,
                Gorilla : 64,
                Lion : 84,
                Mammoth : 86,
            },
            description : "The Earth Creature throws a earth ball",
            BackGroundColor : "brown",
        },
        { 
            name : "EarthQuake",
            type : "Earth",
            damage : {
                Elephant : 24,
                Rhino : 54,
                Gorilla : 64,
                Lion : 84,
                Mammoth : 86,
            },
            description : "The Earth Creature breathes earth",
            BackGroundColor : "brown",
        },
        { 
            name : "Earth Claw",
            type : "Earth",
            damage : {
                Elephant : 24,
                Rhino : 54,
                Gorilla : 64,
                Lion : 84,
                Mammoth : 86,
            },
            description : "The Earth Creature scratches with its claws",
            BackGroundColor : "brown",
        }
    ],
    River : [
        { 
            name : "River Ball",
            type : "River",
            damage : {
                Fish : 24,
                trout : 54,
                Otter : 64,
                Beaver : 84,
                Duck : 86,
                Swan : 86,
                Salmon : 86,
                FisherBird : 86,
                Waterfall : 86,
            },
            description : "The River Creature throws a river ball",
            BackGroundColor : "lightblue",
        },
        { 
            name : "River Flow",
            type : "River",
            damage : {
                Fish : 24,
                trout : 54,
                Otter : 64,
                Beaver : 84,
                Duck : 86,
                Swan : 86,
                Salmon : 86,
                FisherBird : 86,
                Waterfall : 86,
            },
            description : "The River elicit a river flow that wipe everything",
            BackGroundColor : "lightblue",
            
        },
        { 
            name : "River Flood",
            type : "River",
            damage : {
                Fish : 24,
                trout : 54,
                Otter : 64,
                Beaver : 84,
                Duck : 86,
                Swan : 86,
                Salmon : 86,
                FisherBird : 86,
                Waterfall : 86,
            },
            description : "The River Creature drown the enemy",
            BackGroundColor : "lightblue",
        }
    ],
    Poison : [
        { 
            name : "Poison Ball",
            type : "Poison",
            damage :  { 
                Snake : 24,
                Scorpion : 54,
                Spider : 64,
                Wasp : 84,
                SeaUrchin : 86,
                GlobeFish : 86,
            },
            description : "The Poison Creature throws a poison ball",
            BackGroundColor : "purple",
        },
        { 
            name : "Poison Sting",
            type : "Poison",
            damage : { 
                Snake : 24,
                Scorpion : 54,
                Spider : 64,
                Wasp : 84,
                SeaUrchin : 86,
                GlobeFish : 86,
            },
            description : "The Poison Creature stings with its tail",
            BackGroundColor : "purple",
        },
        { 
            name : "Poison Bite",
            type : "Poison",
            damage : { 
                Snake : 24,
                Scorpion : 54,
                Spider : 64,
                Wasp : 84,
                SeaUrchin : 86,
                GlobeFish : 86,
            },
            description : "The Poison Creature bites the enemy",
            BackGroundColor : "purple",
        }
    ],
    Ice : [
        { 
            name : "Ice Ball",
            type : "Ice",
            damage : {
                Iceberg : 24,
                Glacier : 54,
                SnowStorm : 64,
                IceCube : 84,
                iceDragon : 86,
            },
            description : "The Ice Creature throws a ice ball",
            BackGroundColor : "cyan",
        },
        { 
            name : "Ice Breath",
            type : "Ice",
            damage : {
                Iceberg : 24,
                Glacier : 54,
                SnowStorm : 64,
                IceCube : 84,
                iceDragon : 86,
            },
            description : "The Ice Creature breathes ice",
            BackGroundColor : "cyan",
        },
        { 
            name : "Ice Claw",
            type : "Ice",
            damage : {
                Iceberg : 24,
                Glacier : 54,
                SnowStorm : 64,
                IceCube : 84,
                iceDragon : 86,
            },
            description : "The Ice Creature scratches with its claws",
            BackGroundColor : "cyan",
        }
    ],
    Desert : [
        { 
            name : "Desert Ball",
            type : "Desert",
            damage : {
                Cactus : 24,
                YellowScorpion : 54,
                desertsnake : 64,
                Vulture : 84,
                Camel : 86,
            },
            description : "The Desert Creature throws a desert ball",
            BackGroundColor : "orange",
        },
        { 
            name : "Desert Wind",
            type : "Desert",
            damage : {
                Cactus : 24,
                YellowScorpion : 54,
                desertsnake : 64,
                Vulture : 84,
                Camel : 86,
            },
            description : "The Desert Creature breathes desert wind",
            BackGroundColor : "orange",
        },
        { 
            name : "Desert Claw",
            type : "Desert",
            damage : {
                Cactus : 24,
                YellowScorpion : 54,
                desertsnake : 64,
                Vulture : 84,
                Camel : 86,
            },
            description : "The Desert Creature scratches with its claws",
            BackGroundColor : "orange",
        }
    ],
    Jungle : [
        { 
            name : "Jungle Ball",
            type : "Jungle",
            damage :{
                Lizard : 24,
                Tiger : 54,
                Monkey : 64,
                ostrich : 84,
                Porcupine : 86,
                WildBoar : 86,
                Orangutan : 86,
                Lion : 86,
                giraffe : 86,
                Buffalo : 86,
                Elephant : 86,
            },
            description : "The Jungle Creature throws a jungle ball",
            BackGroundColor : "darkgreen",
        },
        { 
            name : "Jungle Wind",
            type : "Jungle",
            damage : {
                Lizard : 24,
                Tiger : 54,
                Monkey : 64,
                ostrich : 84,
                Porcupine : 86,
                WildBoar : 86,
                Orangutan : 86,
                Lion : 86,
                giraffe : 86,
                Buffalo : 86,
                Elephant : 86,
            },
            description : "The Jungle Creature breathes jungle wind",
            BackGroundColor : "darkgreen",

        },
        { 
            name : "Jungle Claw",
            type : "Jungle",
            damage : {
                Lizard : 24,
                Tiger : 54,
                Monkey : 64,
                ostrich : 84,
                Porcupine : 86,
                WildBoar : 86,
                Orangutan : 86,
                Lion : 86,
                giraffe : 86,
                Buffalo : 86,
                Elephant : 86,
            },
            description : "The Jungle Creature scratches with its claws",
            BackGroundColor : "darkgreen",
        }
    ],
    Sky : [
        { 
            name : "Sky Ball",
            type : "Sky",
            damage : {
                Cloud : 24,
                Rainbow : 54,
                Sunset : 64,
                Meteor : 84,
                Eclipse : 86,
            },
            description : "The Sky Creature throws a sky ball",
            BackGroundColor : "skyblue",
        },
        { 
            name : "Sky Wind",
            type : "Sky",
            damage : {
                Cloud : 24,
                Rainbow : 54,
                Sunset : 64,
                Meteor : 84,
                Eclipse : 86,
            },
            description : "The Sky Creature breathes sky wind",
            BackGroundColor : "skyblue",
        },
        { 
            name : "Sky Claw",
            type : "Sky",
            damage : {
                Cloud : 24,
                Rainbow : 54,
                Sunset : 64,
                Meteor : 84,
                Eclipse : 86,
            },
            description : "The Sky Creature scratches with its claws",
            BackGroundColor : "skyblue",
        }
    ],
    Swamp : [
        { 
            name : "Swamp Ball",
            type : "Swamp",
            damage : {
                Alligator : 24,
                Mosquito : 54,
                Frog : 64,
                Flamingo : 84,
                crocodrile : 86,
            },
            description : "The Swamp Creature throws a swamp ball",
            BackGroundColor : "darkcyan",
        },
        { 
            name : "Swamp Wind",
            type : "Swamp",
            damage : {
                Alligator : 24,
                Mosquito : 54,
                Frog : 64,
                Flamingo : 84,
                crocodrile : 86,
            },
            description : "The Swamp Creature breathes swamp wind",
            BackGroundColor : "darkcyan",
        },
        { 
            name : "Swamp Claw",
            type : "Swamp",
            damage : {
                Alligator : 24,
                Mosquito : 54,
                Frog : 64,
                Flamingo : 84,
                crocodrile : 86,
            },
            description : "The Swamp Creature scratches with its claws",
            BackGroundColor : "darkcyan",
        }
    ],
    Volcano : [
        { 
            name : "Volcano Ball",
            type : "Volcano",
            damage : 
            {
                Lava : 24,
                Ash : 54,
                Smoke : 64,
                magma : 84,
                Eruption : 86,
            },
            description : "The Volcano Creature throws a volcano ball",
            BackGroundColor : "darkred",
        },
        { 
            name : "Lava Blast",
            type : "Volcano",
            damage : {
                Lava : 24,
                Ash : 54,
                Smoke : 64,
                magma : 84,
                Eruption : 86,
            },
            description : "The Volcano Creature breathes volcano wind",
            BackGroundColor : "darkred",
        },
        { 
            name : "Volcano Claw",
            type : "Volcano",
            damage : {
                Lava : 24,
                Ash : 54,
                Smoke : 64,
                magma : 84,
                Eruption : 86,
            },
            description : "The Volcano Creature scratches with its claws",
            BackGroundColor : "darkred",
        }
    ],
    Light : [
        { 
            name : "Light Ball",
            type : "Light",
            damage :  
            {
                Sun : 24,
                Moon : 54,
                Star : 64,
                Lightning : 84,
                SuperNova : 86,
            },
            description : "The Light Creature throws a light ball",
            BackGroundColor : "yellow",
        },
        { 
            name : "Light Wind",
            type : "Light",
            damage : {
                Sun : 24,
                Moon : 54,
                Star : 64,
                Lightning : 84,
                SuperNova : 86,
            },
            description : "The Light Creature breathes light wind",
            BackGroundColor : "yellow",
        },
        { 
            name : "Light Claw",
            type : "Light",
            damage : {
                Sun : 24,
                Moon : 54,
                Star : 64,
                Lightning : 84,
                SuperNova : 86,
            },
            description : "The Light Creature scratches with its claws",
            BackGroundColor : "yellow",
        }
    ],
    Air : [
        { 
            name : "Air Ball",
            type : "Air",
            damage : 
            {
                Parrot : 24,
                Eagle : 54,
                Owl : 64,
                Hawk : 84,
                Falcon : 86,
            },
            description : "The Air Creature throws a air ball",
            BackGroundColor : "lightgrey",
        },
        { 
            name : "Air Wind",
            type : "Air",
            damage : {
                Parrot : 24,
                Eagle : 54,
                Owl : 64,
                Hawk : 84,
                Falcon : 86,
            },
            description : "The Air Creature breathes air wind",
            BackGroundColor : "lightgrey",
        },
        { 
            name : "Air Claw",
            type : "Air",
            damage : {
                Parrot : 24,
                Eagle : 54,
                Owl : 64,
                Hawk : 84,
                Falcon : 86,
            },
            description : "The Air Creature scratches with its claws",
            BackGroundColor : "lightgrey",
        }
    ],

};



// Función para mostrar ataques de Fire
function showFireAttacks() {
    console.log("🔥 Fire Attacks 🔥");
    attacksByPower.Fire.forEach(attack => {
        console.log(`\n🗡️ Attack: ${attack.name}`);
        console.log(`📖 Description: ${attack.description}`);
        console.log("💥 Damage: ");
        for (let creature in attack.damage) {
            console.log(`   - ${creature}: ${attack.damage[creature]}`);
        }
    });
}

// Llamamos a la función
showFireAttacks();


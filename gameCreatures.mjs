export const creaturesByPower = {

        Fire: ["Phoenix", "Sphinx", "FireDragon","WildFire","Volcano"],
        Water: ["CatFish", "Piranha", "Eel", "Hippo", "Dolphin", "Shark", "Whale","SeaSerpent"],
        Snow: ["Seal", "WhiteBear", "KillerWhale", "BlueWhale","IceDragon"],
        Air : [ "Parrot","Eagle", "Owl", "Hawk", "Falcon",],
        Earth: ["Elephant", "Rhino", "Gorilla", "Lion","Mammoth"],
        Light: ["Sun", "Moon", "Star", "Lightning", "SuperNova"],
        River: [ "Trout","Otter", "Beaver", "FisherBird", "Piranha", "Crocodrile" ],
        Poison: ["Snake", "Scorpion", "Spider", "Wasp","SeaUrchin","GlobeFish"],
        Ice: ["Iceberg", "Glacier","SnowStorm", "IceCube", "IceDragon"],
        Desert: ["Cactus", "YellowScorpion", "DesertSnake", "Vulture", "Camel"],
        Forest: ["Bee_Hive", "Raccoon","Tree","Wildboar","Bison", "Deer", "Fox", "Wolf","Bear","Owl","Raven","BaldEagle"],
        Jungle: ["Lizard","Tiger", "Monkey","Ostrich", "Porcupine","Jungle_Boar", "Orangutan", "Gorilla", "Lion","Giraffe","Buffalo","Elephant"],
        Mountain: ["Goat", "Eagle", "Bear", "MountainLion","Rock"],
        Sky: ["Cloud", "Rainbow", "Sunset", "Meteor","Eclipse"],
        Swamp: ["Alligator", "Mosquito", "Frog", "Flamingo", "Crocodrile"],
        Volcano: ["Lava", "Ash", "Smoke", "Magma","Eruption"],
        Bugs: ["Amoeba","Bacterium","Beetle","Worm","Bloodbug","Bug","Parasite","CockRoach","Dragonfly","Virus","EvilVirus","EvilBug"],
        Sea: ["SeaFish","Crab", "Shark", "Whale", "Octopus", "JellyFish", "Elver", "Squid","SeaHorse","CaveFish","Starfish","Sea-Turtle"],
        Wind: ["Breeze", "Gust", "Twister", "Typhoon","Hurricane"],
        Storm: ["Thunder","Lightning","Rain", "Flood", "Typhoon","Twister" ,"Vortex","Hurricane"],
        Disasters: ["Flood", "Drought","Earthquake","Tsunami", "Landslide"],
        Darkness : ["DarkShadow", "Ash", "Eclipse", "BlackHole","EvilEye"],
        OuterSpace: ["Planet", "Alien", "Galaxy", "SpaceComet", "Quasar", "BlackHole"],
        Cold: ["Snow", "Ice", "SnowStorm", "Frost","WaterWave"],
        Monster: ["Orc","Goblin", "Ogre", "Troll", "Dragon", "Cyclops"],
        SeaMonster: ["Kraken", "Hydra","Mermaid", "SeaSerpent", "SeaDragon"],
        UnderGround: [ "Ghost", "Witch", "Troll", "Vampire", "Zombie", "Spider-Web","Wizard"] ,
        Mythical: ["Elf", "Unicorn", "Griffin", "Centaur","Harpy" , "Sphinx", "Phoenix", "SpaceDragon","Minotaur", "Fairy"],
       
    };

    function getSelectedPower(animal) {

        animal = animal.charAt(0).toUpperCase() + animal.slice(1);

        for (const [category, creatures] of Object.entries(creaturesByPower)) {

            if (creatures.includes(animal)) {
                return category;
            }
        }
        return "Not found";

    }

    // let playerCreature = "Frost";

    // let currentPower = getSelectedPower(playerCreature);

    // console.log("this is the current player Power here : ", currentPower);


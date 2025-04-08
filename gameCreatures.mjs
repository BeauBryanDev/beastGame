export const creaturesByPower = {

        Fire: ["Phoenix", "Sphinx", "FireDragon","WildFire","Volcano"],
        Water: ["CatFish", "Piranha", "Eel", "Hippo", "Dolphin", "Shark", "Whale","SeaSerpent"],
        Snow: ["Penguin","Seal", "WhiteBear", "KillerWhale","IceDragon"],
        Air : [ "Parrot","Eagle", "Owl", "Hawk", "Falcon",],
        Earth: ["Bull","Horse", "Rhino", "Gorilla", "Lion","Mammoth"],
        Light: ["Sun", "Moon", "Star", "Lightning", "SuperNova"],
        River: [ "Trout","Otter", "Beaver", "FisherBird", "Piranha", "Crocodrile" ,"Hippo"],
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
        Sea: ["SeaFish","Crab", "Shark", "Whale", "Octopus", "JellyFish", "Elver", "Squid","SeaHorse","CaveFish","Starfish","Sea-Turtle","BlueWhale",],
        Wind: ["Breeze", "Gust", "Twister", "Typhoon","Hurricane"],
        Storm: ["Thunder","Lightning","Rain", "Flood", "Typhoon","Twister" ,"Vortex","Hurricane"],
        Disasters: ["Flood", "Drought","Earthquake","Tsunami", "Landslide"],
        Darkness : ["DarkShadow", "Ash", "Eclipse", "BlackHole","EvilEye"],
        OuterSpace: ["Planet", "Alien", "Galaxy", "SpaceComet", "Quasar", "BlackHole"],
        Cold: ["Snow", "Ice", "SnowStorm", "Frost","WaterWave"],
        Monsters: ["Orc","Goblin", "Ogre", "Troll", "Dragon", "Cyclops"],
        SeaMonster: ["Kraken", "Hydra","Mermaid", "SeaSerpent", "SeaDragon"],
        UnderGround: [ "Ghost", "Witch", "Troll", "Vampire", "Zombie", "Spider-Web","Wizard"] ,
        Mythical: [ "Fairy" ,"Elf","Phoenix", "Harpy" ,"Griffin", "Sphinx", "Unicorn",  "Centaur","Minotaur", "SpaceDragon"],
       
    };

    export const colorByPowers = {
        Fire: "red",
        Water: "blue",
        Snow: "white",
        Air: "lightblue",
        Earth: "brown",
        Light: "yellow",
        River: "cyan",
        Poison: "purple",
        Ice: "cyan",
        Desert: "orange",
        Forest: "green",
        Jungle: "darkgreen",
        Mountain: "gray",
        Sky: "skyblue",
        Swamp: "darkgreen",
        Volcano: "red",
        Bugs: "black",
        Sea: "blue",
        Wind: "lightblue",
        Storm: "gray",
        Disasters: "brown",
        Darkness: "white",
        OuterSpace: "darkblue",
        Cold: "white",
        Monster: "green",
        SeaMonster: "blue",
        UnderGround: "darkgray",
        Mythical: "darkviolet",
    };
    // Function to get the power of a selected animal
    // This function takes an animal name as input and returns its corresponding power category
    // It first capitalizes the first letter of the animal name and then iterates through the creaturesByPower object
    // to find the matching power category. If found, it returns the category; otherwise, it returns "Not found".

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


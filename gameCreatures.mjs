export const creaturesByPower = {

        Fire: ["Phoenix", "Sphinx", "Dragon","WildFire","Volcano"],
        Water: ["catFish", "Piranha", "eel", "Hippo", "Dolphin", "Shark", "Whale","SeaSerpent"],
        Snow: ["Seal", "WhiteBear", "Orca", "BlueWhale","IceDragon"],
        Forest: ["Fox", "Wolf", "Grizzly Bear", "Deer","Oak","Pine", "Maple",],
        Air : [ "Parrot","Eagle", "Owl", "Hawk", "Falcon",],
        Earth: ["Elephant", "Rhino", "Gorilla", "Lion","Mammoth"],
        Light: ["Sun", "Moon", "Star", "Lightning", "SuperNova"],
        River: ["Fish", "trout","Otter", "Beaver", "Duck", "Swan", "Salmon","FisherBird","Waterfall",],
        Poison: ["Snake", "Scorpion", "Spider", "Wasp","SeaUrchin","GlobeFish"],
        Ice: ["Iceberg", "Glacier","SnowStorm", "IceCube", "iceDragon"],
        Desert: ["Cactus", "YellowScorpion", "desertsnake", "Vulture", "Camel"],
        Mountain: ["Goat", "Eagle", "Bear", "MountainLion","rock","cliff","Granite"],
        Sky: ["Cloud", "Rainbow", "Sunset", "Meteor","Eclipse"],
        Swamp: ["Alligator", "Mosquito", "Frog", "Flamingo", "crocodrile"],
        Volcano: ["Lava", "Ash", "Smoke", "magma","Eruption"],
        Bugs: ["Amoeba","Bacterium","Beetle","Worm","BloodBug","Bug","Parasite","CockRoach","DragonFly","Virus","EvilVirus","EvilBug"],
        Forest: ["Beetle","Hive", "raccoon","Tree","WildBoar","Bison", "Deer", "Fox", "Wolf","Bear","Owl","Raven","BaldEagle"],
        Jungle: ["Lizard","Tiger", "Monkey","ostrich", "Porcupine","Wild-Boar", "Orangutan", "Lion","giraffe","Buffalo","Elephant"],
        Sea: ["seaFish","Crab", "Shark", "Whale", "Octopus", "Jellyfish", "elver", "squid","seahorse","CaveFish","Starfish","SeaTurtle"],
        Wind: ["Breeze", "Gust", "Twister", "Typhoon","Hurricane"],
        Storm: ["Breeze","Thunder","Lightning","Rain", "Flood", "Typhoon","Twister" ,"Vortex","Hurricane"],
        Disasters: ["Flood", "Drought","Earthquake","Tsunami", "Landslide"],
        Darkness : ["Shadow", "Night", "Eclipse", "BlackHole"],
        OuterSpace: ["Planet", "Alien", "Galaxy", "SpaceComet", "Quasar", "BlackHole"],
        Cold: ["Snow", "Ice", "SnowStorm", "Frost","WaterWave"],
        Monster: ["Orc","Goblin", "Ogre", "Troll", "Dragon", "Cyclops", "Minotaur", "Sasquatch"],
        SeaMonster: ["Kraken", "Hydra","MerMaid", "SeaSerpent", "SeaDragon"],
        UnderGround: [ "Ghost", "Witch", "Troll", "Vampire", "Zombie", "Spider-Web","Wizard"] ,
        Mythical: ["Elf", "Unicorn", "Griffin", "Centaur","harpy" , "Sphinx", "Phoenix", "SpaceDragon", "Fairy", "EvilEye"],
       
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

    let playerCreature = "Frost";

    let currentPower = getSelectedPower(playerCreature);

    console.log("this is the current player Power here : ", currentPower);


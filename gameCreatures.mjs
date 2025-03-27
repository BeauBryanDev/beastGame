export const creaturesByPower = {

        Fire: ["Phoenix", "Sphinx", "Dragon","Wildfire","Volcano"],
        Water: ["Catfish", "Piranha", "Eel", "Hippo", "Dolphin", "Shark", "Whale","Sea-serpent"],
        Snow: ["Seal", "White-bear", "Orca", "Blue-whale","Ice-dragon"],
        Forest: ["Fox", "Wolf", "Grizzly Bear", "Deer","Oak","Pine", "Maple",],
        Air : [ "Parrot","Eagle", "Owl", "Hawk", "Falcon",],
        Earth: ["Elephant", "Rhino", "Gorilla", "Lion","Mammoth"],
        Light: ["Sun", "Moon", "Star", "Lightning", "Super-nova"],
        River: ["Fish", "trout","Otter", "Beaver", "Duck", "Swan", "Salmon","Fisherbird","Waterfall",],
        Poison: ["Snake", "Scorpion", "Spider", "Wasp","Sea-urchin","Globefish"],
        Ice: ["Iceberg", "Glacier","Snow-storm", "Ice-cube", "ice-dragon"],
        Desert: ["Cactus", "Yellow-scorpion", "Desert-snake", "Vulture", "Camel"],
        Mountain: ["Goat", "Eagle", "Bear", "MountainLion","rock","cliff","Granite"],
        Sky: ["Cloud", "Rainbow", "Sunset", "Meteor","Eclipse"],
        Swamp: ["Alligator", "Mosquito", "Frog", "Flamingo", "crocodrile"],
        Volcano: ["Lava", "Ash", "Smoke", "magma","Eruption"],
        Bugs: ["Amoeba","Bacterium","Beetle","Worm","Bloodbug","Bug","Parasite","CockRoach","Dragonfly","Virus","EvilVirus","EvilBug"],
        Forest: ["Beetle","Hive", "raccoon","Tree","WildBoar","Bison", "Deer", "Fox", "Wolf","Bear","Owl","Raven","BaldEagle"],
        Jungle: ["Lizard","Tiger", "Monkey","Ostrich", "Porcupine","Wild-boar", "Orangutan", "Lion","giraffe","Buffalo","Elephant"],
        Sea: ["seaFish","Crab", "Shark", "Whale", "Octopus", "Jellyfish", "Elver", "Squid","Seahorse","CaveFish","Starfish","SeaTurtle"],
        Wind: ["Breeze", "Gust", "Twister", "Typhoon","Hurricane"],
        Storm: ["Breeze","Thunder","Lightning","Rain", "Flood", "Typhoon","Twister" ,"Vortex","Hurricane"],
        Disasters: ["Flood", "Drought","Earthquake","Tsunami", "Landslide"],
        Darkness : ["Shadow", "Night", "Eclipse", "Blackhole"],
        OuterSpace: ["Planet", "Alien", "Galaxy", "SpaceComet", "Quasar", "Blackhole"],
        Cold: ["Snow", "Ice", "Snow-storm", "Frost","Water-wave"],
        Monster: ["Orc","Goblin", "Ogre", "Troll", "Dragon", "Cyclops", "Minotaur", "Sasquatch"],
        SeaMonster: ["Kraken", "Hydra","Mermaid", "Sea-serpent", "Sea-dragon"],
        UnderGround: [ "Ghost", "Witch", "Troll", "Vampire", "Zombie", "Spider-Web","Wizard"] ,
        Mythical: ["Elf", "Unicorn", "Griffin", "Centaur","harpy" , "Sphinx", "Phoenix", "SpaceDragon", "Fairy", "Evil-eye"],
       
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


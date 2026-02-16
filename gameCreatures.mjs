export const creaturesByPower = {

        Fire: ["Phoenix", "Sphinx", "FireDragon","WildFire","Volcano"],
        Water: ["CatFish", "Piranha", "Eel", "Hippo", "Dolphin", "Shark", "Whale","SeaSerpent"],
        Snow: ["Penguin","Seal", "WhiteBear", "KillerWhale","IceDragon"],
        Air : [ "Bat","Eagle", "Owl", "Hawk", "Falcon",],
        Earth: ["Bull","Horse", "Rhino", "Gorilla", "Lion","Mammoth"],
        //Light: ["Sun", "Moon", "Star", "Lightning", "SuperNova"],
        River: [ "Trout","Otter", "Beaver", "FisherBird", "Piranha", "Crocodrile" ,"Hippo"],
        Poison: ["Snake", "Scorpion", "Spider", "Wasp","SeaUrchin","GlobeFish"],
        //Ice: ["Iceberg", "Glacier","SnowStorm", "IceCube", "IceDragon"],
        Desert: ["Cactus", "YellowScorpion", "DesertSnake", "Vulture", "Camel"],
        Forest: ["Bee_Hive", "Raccoon","Wildboar","Bison", "Deer", "Fox", "Wolf","Bear","Owl","Raven","BaldEagle"],
        Jungle: ["Lizard","Tiger", "Monkey", "Porcupine","Jungle_Boar", "Orangutan", "Gorilla", "Lion","Giraffe","Buffalo","Elephant"],
        Mountain: ["Goat", "Eagle", "Bear", "MountainLion","Rock"],
        //Sky: ["Cloud", "Rainbow", "Sunset", "Meteor","Eclipse"],
        Swamp: ["Alligator", "Mosquito", "Frog", "Flamingo", "Crocodrile"],
        //Volcano: ["Lava", "Ash", "Smoke", "Magma","Eruption"],
        Bugs: ["Bacteria","Beetle","Bloodbug","Parasite","Virus","EvilBug","EvilVirus"],
        Sea: ["SeaFish","Crab", "Shark", "Whale", "Octopus", "JellyFish", "Elver", "Squid","CaveFish","Sea-Turtle","BlueWhale",],
        //Wind: ["Breeze", "Gust", "Twister", "Typhoon","Hurricane"],
        //Storm: ["Thunder","Lightning","Rain", "Flood", "Typhoon","Twister" ,"Vortex","Hurricane"],
        //Disasters: ["Flood", "Drought","Earthquake","Tsunami", "Landslide"],
        Darkness : ["DarkShadow", "Ash", "Eclipse", "BlackHole","EvilEye"],
        //OuterSpace: ["Planet", "Alien", "Galaxy", "SpaceComet", "Quasar", "BlackHole"],
        //Cold: ["Snow", "Ice", "SnowStorm", "Frost","WaterWave"],
        Monsters: ["Orc","Goblin", "Ogre", "Troll", "Dragon", "Cyclops"],
        SeaMonster: ["Mermaid", "SeaSerpent", "SeaDragon","Kraken", "Hydra"],
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
    //Define the Basic Creatures for beginners users with not points ...
    //PayWell Attention  ,  BasicCreatures is an Array of objects, each objects contains the properties of a creature as its objectCreature .
    //Each object has the following properties: name, lifePoints, strength, power, attackPoints, defensePoints, speedPoints, and color.
    //These properties are used to define the characteristics of the creature in the game.
    //The BasicCreatures array contains a list of creatures with their respective properties.
    //The BasicCreatures array is used to create the initial set of creatures that players can choose from when starting the game.

    export const BasicCreatures = [
        //Important Notes :  lifePoints is the total health of the creature, strength is the physical power of the creature, and it goes from 101  to 200 , strength is the physical power of the creature, and it goes from 1 to 100 , power is the type of power the creature has, attackPoints is the damage dealt by the creature in an attack, defensePoints is the resistance of the creature to attacks, speedPoints is the speed of the creature in battle, and color is the color of the creature.
        //attackPoints  is between 10 and 20 .
        { name : "catFish", lifePoints : 105, strength : 45 , power : "Water", attackPoints : 10, defensePoints : 5, speedPoints : 7, weakeness : "Earth", cid : 1 , color: "blue" }, 
        { name : "Eel", lifePoints : 125, strength : 85 , power : "Water", attackPoints : 15, defensePoints : 10, speedPoints : 8, weakeness : "Earth", cid : 1 ,color: "blue" },
        { name : "Penguin", lifePoints : 120, strength : 35 ,power : "Snow", attackPoints : 12, cid : 1 ,defensePoints : 8, speedPoints : 6, weakeness : [ "Fire", "Earth", "Desert"], color: "white" },
        { name : "Bat", lifePoints : 113, strength : 45, power : "Air", attackPoints : 10, defensePoints : 5, speedPoints : 7, weakeness : [ "Fire" ] ,cid : 1 , color: "lightblue" },
        { name : "Penguin,", lifePoints : 115, strength : 35 ,power : "Snow", attackPoints : 12, cid : 1 ,defensePoints : 8, speedPoints : 6, weakeness : [ "Desert", "Fire", "Jungle"], color: "white" },
        { name : "Seal", lifePoints : 120, strength : 35 ,power : "Snow", attackPoints : 12, defensePoints : 8, speedPoints : 6, weakeness : [ "Desert", "Fire", "Jungle"], cid : 1 ,color: "white" },
        { name : "Trout", lifePoints : 103 , strength : 45 , power : "River", attackPoints : 10, defensePoints : 5, speedPoints : 7, weakeness : [ "Earth" ], cid : 1 ,color: "cyan" },
        { name : "Otter", lifePoints : 105 , strength : 45 , power : "River", attackPoints : 10, defensePoints : 5, speedPoints : 7, weakeness : [ "Earth" ], cid : 1 , color: "cyan" },
        { name : "Beaver", lifePoints : 110 , strength : 45 , power : "River", attackPoints : 10, defensePoints : 5, speedPoints : 7, weakeness : [ "Earth" ],cid : 1 , color: "cyan" },
        { name : "Cactus", lifePoints : 135, weakeness : [ "Fire"], strength : 45 , power : "Desert", attackPoints : 10, defensePoints : 5, speedPoints : 7, color: "orange" },
        { name : "Camel", lifePoints : 159, strength : 65 , weakeness : "Fire", power : "Desert", attackPoints : 10, defensePoints : 5, speedPoints : 7, cid : 1 ,color: "orange" },
        { name : "Frog", lifePoints : 100, strength : 65 , power : "Swamp", attackPoints : 8, defensePoints : 5, speedPoints : 10, weakeness : "Desert", cid : 1 ,color: "green" },
        { name : "Flamingo", lifePoints : 100, strength : 45 , power : "Swamp", attackPoints : 10, defensePoints : 5, speedPoints : 7, weakeness : [ "Desert" ], cid : 1 ,color: "green" },
        { name : "Mosquito", lifePoints : 100, strength : 45 , power : "Swamp", attackPoints : 10, defensePoints : 5, speedPoints : 7, weakeness : [ "Desert" ], cid : 1 ,color: "green" },
        { name : "Bee_Hive", lifePoints : 145, weakeness : "Fire", strength : 55, power : "Forest", attackPoints : 10, defensePoints : 5, speedPoints : 7, cid : 1 ,color: "green" },
        { name : "Raccoon", lifePoints : 135, strength : 45 , power : "Forest", attackPoints : 10, defensePoints : 5, speedPoints : 7, weakeness : [ "Fire" ], cid : 1 ,color: "green" },
        { name : "raven", lifePoints : 125, weakness : "Earth", strength : 45, power : "Forest", attackPoints : 10, defensePoints : 5, speedPoints : 7, cid : 1 ,color: "green" },
        { name : "SeaFish", lifePoints : 105, strength : 45 , power : "Sea", attackPoints : 10, defensePoints : 5, speedPoints : 7, weakeness : [ "Earth" ], cid : 1 ,color: "blue" },
        { name : "Crab", lifePoints : 125, strength : 85 , power : "Sea", attackPoints : 15, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 1 ,color: "blue" },
        { name : "Elver", lifePoints : 125, strength : 85 , power : "Sea", attackPoints : 15, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 1 ,color: "blue" },
        { name : "Octopus", lifePoints : 185, strength : 85 , power : "Water", attackPoints : 45, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 1 ,color: "blue" },
        { name : "Monkey", lifePoints : 155, strength : 65 , power : "Jungle", attackPoints : 10, defensePoints : 5, speedPoints : 7, weakeness : [ "Fire" ], cid : 1 ,color: "green" },
        { name : "Lizard", lifePoints : 135, strength : 45 , power : "Jungle", attackPoints : 10, defensePoints : 5, speedPoints : 7, weakeness : [ "Fire" ], cid : 1 ,color: "green" },
        { name : "Ostrich", lifePoints : 135, strength : 45 , power : "Jungle", attackPoints : 10, defensePoints : 5, speedPoints : 7, weakeness : [ "Fire" ], cid : 1 ,color: "green" },
        { name : "Bacteria", lifePoints : 105, strength : 45 , power : "Bugs", attackPoints : 10, defensePoints : 5, speedPoints : 7, weakeness : [ "Earth" ], cid : 1 ,color: "black" },
        { name : "Beetle", lifePoints : 115, strength : 85 , power : "Bugs", attackPoints : 15, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 1 ,color: "black" },
        { name : "Bloodbug", lifePoints : 125, strength : 85 , power : "Bugs", attackPoints : 15, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 1 ,color: "black" },
        { name : "Parasite", lifePoints : 135, strength : 85 , power : "Bugs", attackPoints : 15, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 1 ,color: "black" },
        { name : "Virus", lifePoints : 145, strength : 85 , power : "Bugs", attackPoints : 15, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 1 ,color: "black" },
        //These were all the Basic Creatures on this Game for just-starting Players with not account Credit Points over this web game .
    ]
    //Now I am defining the Intermediate Creatures which are quite more powerful than the Basic Creatures.
    //The IntermediateCreatures is an Array of objects, each objects contains the properties of a creature as its objectCreature .
    //These creatures  have better lifePoints , stronger, and more attack power points and defense points than the Basic Creatures.
    //lifePoints is the total health of the creature, strength is the physical power of the creature, and it goes from 201 to 300 , strength is the physical power of the creature, and it goes from 1 to 100 , power is the type of power the creature has, attackPoints is the damage dealt by the creature in an attack, defensePoints is the resistance of the creature to attacks, speedPoints is the speed of the creature in battle, and color is the color of the creature.
    //The IntermediateCreatures array contains a list of creatures with their respective properties.

    export const IntermediateCreatures = [ 
        //attackPoints  is between 20 and 50 .
        { name : "Phonenix", lifePoints : 295, strength : 85 , power : "Fire", attackPoints : 15, defensePoints : 10, speedPoints : 8, weakeness : [ "Water" ], cid : 2 , color: "red" },
        //Water Creatures
        { name : "Piranha", lifePoints : 225, strength : 85 , power : "Water", attackPoints : 45, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 2 ,  color: "blue" },
        { name : "Dolphin", lifePoints : 225, strength : 85 , power : "Water", attackPoints : 45, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 2 , color: "blue" },
        //Air Creatures 
        { name : "Owl", lifePoints : 225, strength : 85 , power : "Air", attackPoints : 35, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 2 , color: "lightblue" },
        { name : "Hawk", lifePoints : 245, weakeness : [ "Earth"], cid : 2 , color: "lightblue", strength : 85, power : "Air", attackPoints : 35, defensePoints : 10, speedPoints : 8 },
        { name : "Falcon", lifePoints : 245, strength : 85 , power : "Air", attackPoints : 35, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 2 , color: "lightblue" },
        //Earth Creatures
        { name : "Bull" , lifePoints : 255, strength : 95, power : "Earth", attackPoints : 40, defensePoints : 10, speedPoints : 8, weakeness : [ "Fire" ], cid : 2 , color: "brown" },
        { name : "Horse", lifePoints : 265, strength : 75 , power : "Earth", attackPoints : 30, defensePoints : 10, speedPoints : 8, weakeness : [ "Fire" ], cid : 2 , color: "brown" },
        //River Creatures 
        { name : "FisherBird", lifePoints : 265, strength : 75 , power : "River", attackPoints : 30, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 2 , color: "cyan" },
        { name : "Piranha", lifePoints : 265, strength : 75 , power : "River", attackPoints : 30, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 2 , color: "cyan" },
        { name : "Crocodile", lifePoints : 265, strength : 75 , power : "River", attackPoints : 30, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 2 , color: "cyan" },
        //Swamp Creatures 
        { name : " Alligator", lifePoints : 265, strength : 75 , power : "Swamp", attackPoints : 30, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 2 , color: "green" },
        //Forest Creatures 
        { name : "Fox", lifePoints : 265, strength : 75 , power : "Forest", attackPoints : 30, defensePoints : 10, speedPoints : 8, weakeness : [ "Water" ], cid : 2 , color: "green" },
        { name : "WildBoar", lifePoints : 265, strength : 75 , power : "Forest", attackPoints : 30, defensePoints : 10, speedPoints : 8, weakeness : [ "Water" ], cid : 2 , color: "green" },
        { name : "Deer", lifePoints : 265, strength : 75 , power : "Forest", attackPoints : 30, defensePoints : 10, speedPoints : 8, weakeness : [ "Water" ], cid : 2 , color: "green" },
        { name : "Bison", lifePoints : 265, strength : 75 , power : "Forest", attackPoints : 30, defensePoints : 10, speedPoints : 8, weakeness : [ "Water" ], cid : 2 , color: "green" },
        //Mountain Creatures 
        { name : "MountainLion", lifePoints : 265, strength : 75 , power : "Mountain", attackPoints : 30, defensePoints : 10, speedPoints : 8, weakeness : [ "Water" ], cid : 2 , color: "gray" },
        { name : "Rock", lifePoints : 265, strength : 75 , power : "Mountain", attackPoints : 30, defensePoints : 10, speedPoints : 8, weakeness : [ "Water" ], cid : 2 , color: "gray" },
        { name :"Goat", lifePoints : 265, strength : 75 , power : "Mountain", attackPoints : 30, defensePoints : 10, speedPoints : 8, weakeness : [ "Water" ], cid : 2 , color: "gray" },
        { name : "Bear", lifePoints : 265, strength : 75 , power : "Mountain", attackPoints : 30, defensePoints : 10, speedPoints : 8, weakeness : [ "Water" ], cid : 2 , color: "gray" },
        //Jungle Creatures
        {  name : "Orangutan", lifePoints : 265, strength : 75 , power : "Jungle", attackPoints : 30, defensePoints : 10, speedPoints : 8, weakeness : [ "Water" ], cid : 2 , color: "green" },
        { name : "Gorilla", lifePoints : 265, strength : 75 , power : "Jungle", attackPoints : 30, defensePoints : 10, speedPoints : 8, weakeness : [ "Water" ], cid : 2 , color: "green" },
        { name : "Gorilla", lifePoints : 265, strength : 75 , power : "Jungle", attackPoints : 30, defensePoints : 10, speedPoints : 8, weakeness : [ "Water" ],cid : 2 ,  color: "green" },
        { name :"Pourcupine", lifePoints : 265, strength : 75 , power : "Jungle", attackPoints : 30, defensePoints : 10, speedPoints : 8, weakeness : [ "Water" ], cid : 2 , color: "green" },
        { name : "Jungle_Boar", lifePoints : 265, strength : 75 , power : "Jungle", attackPoints : 30, defensePoints : 10, speedPoints : 8, weakeness : [ "Water" ], cid : 2 , color: "green" },
        { name : "Buffalo", lifePoints : 265, strength : 75 , power : "Jungle", attackPoints : 30, defensePoints : 10, speedPoints : 8, weakeness : [ "Water" ], cid : 2 , color: "green" },
        //Sea Creatures 
        { name : "Dolphin", lifePoints : 225, strength : 85 , power : "Water", attackPoints : 45, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 2 , color: "blue" },
        { name : "JellyFish", lifePoints : 265, weakeness : [ "Earth"], power : "Sea", attackPoints : 40,
        defensePoints : 10, speedPoints : 6, strength : 35, cid : 2 , color : "blue" },
        { name : "Squid", lifePoints : 215, strength : 85 , power : "Water", attackPoints : 45, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 2 , color: "blue" },
        { name : "Sea-Turtle", lifePoints : 275, strength : 80, power : "Sea", attackPoints : 25 , defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 2 , color: "blue" },
        // Bugs Creatures : EvilBugs
        { name : "EvilBug", lifePoints : 265, strength : 75 , power : "Bugs", attackPoints : 30, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 2 , color: "black" },
        //Monsters Creatures
        { name : "Orc", lifePoints : 265, strength : 75 , power : "Monsters", attackPoints : 30, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 2 , color: "green" },
        { name : "Goblin", lifePoints : 265, strength : 75 , power : "Monsters", attackPoints : 30, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 2 , color: "green" },
        { name : "Ogre", lifePoints : 265, strength : 75 , power : "Monsters", attackPoints : 30, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 2 , color: "green" },
        //UnderGround Creatures ...
        { name : "Ghost", lifePoints : 265, strength : 75 , power : "UnderGround", attackPoints : 30, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 2 , color: "darkgray" },
        //Mythical Creatures : 
        { name : "Phoenix", lifePoints : 255, strength : 75 , power : "Mythical", attackPoints : 30, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ],cid : 2 ,  color: "darkviolet" },
        { name : "Fairy", lifePoints : 265, strength : 75 , power : "Mythical", attackPoints : 30, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 2 , color: "darkviolet" },
        { name : "Harpy", lifePoints : 295, strength : 65, power : "Mythical", attackPoints : 30, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 2 , color: "darkviolet" },
        //These were all the Intermediate Creatures on this Game for just-starting Players with not account Credit Points over this web game ...

    ]
    //Advance Creatures on this web Game .
    //The AdvanceCreatures is an Array of objects, each objects contains the properties of a creature as its objectCreature .
    //These creatures  have better lifePoints , stronger, and more attack power points and defense points than the Intermediate Creatures.
    //lifePoints is the total health of the creature, strength is the physical power of the creature, and it goes from 301 to 400 , strength is the physical power of the creature, and it goes from 1 to 100 , power is the type of power the creature has, attackPoints is the damage dealt by the creature in an attack, defensePoints is the resistance of the creature to attacks, speedPoints is the speed of the creature in battle, and color is the color of the creature.

    export const AdvanceCreatures = [
        //attackPoints is between 50 and 100 .
        {  name : "Sphinx", lifePoints : 325, strength : 85 , power : "Fire", attackPoints : 65, defensePoints : 10, speedPoints : 8, weakeness : [ "Water" ], cid : 3 , color: "red" },
        //Fire Creatures
        { name : "FireDragon", lifePoints : 385, strength : 85 , power : "Fire", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Water" ], cid : 3 ,color: "red" },
        //Water Creatures 
        { name : "Shark", lifePoints : 385, strength : 85 , power : "Water", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "blue" },
        { name : "Whale", lifePoints : 385, strength : 85 , power : "Water", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "blue" },
        { name : "SeaSerpent", lifePoints : 385, strength : 85 , power : "Water", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "blue" },
        //Snow Creatures
        { name : "IceDragon", lifePoints : 385, strength : 85 , power : "Snow", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "white" },
        { name : "KillerWhale", lifePoints : 385, strength : 85 , power : "Snow", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "white" },
        { name : "WhiteBear", lifePoints : 385, strength : 85 , power : "Snow", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "white" },
        //Air Creatures
        { name : "Eagle", lifePoints : 385, strength : 85 , power : "Air", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "lightblue" },
        //River Creatures
        { name : "Hippo", lifePoints : 385, strength : 85 , power : "River", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "cyan" },
        //Desert Creatures
        { name : "YellowScorpion", lifePoints : 385, strength : 85 , power : "Desert", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "orange" },
        { name : "DesertSnake", lifePoints : 385, strength : 85 , power : "Desert", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "orange" },
        //Forest Creatures
        { name : "Wolf", lifePoints : 385, strength : 85 , power : "Forest", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "green" },
        { name : "Bear", lifePoints : 385, strength : 85 , power : "Forest", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "green" },
        { name : "BaldEagle", lifePoints : 385, strength : 85 , power : "Forest", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "green" },
        //Jungle Creatures
        { name : "Tiger", lifePoints : 385, strength : 85 , power : "Jungle", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "green" },
        { name : "Elepant", lifePoints : 385, strength : 85 , power : "Jungle", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "green" },
        { name : "Lion", lifePoints : 385, strength : 85 , power : "Jungle", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "green" },
        //Poison Creatures
        { name : "Snake", lifePoints : 385, strength : 85 , power : "Poison", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "purple" },
        { name : "Scorpion", lifePoints : 385, strength : 85 , power : "Poison", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "purple" },
        { name : "Spider", lifePoints : 385, strength : 85 , power : "Poison", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "purple" },
        { name : "Wasp", lifePoints : 385, strength : 85 , power : "Poison", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "purple" },
        { name : "SeaUrchin", lifePoints : 385, strength : 85 , power : "Poison", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "purple" },
        { name : "GlobeFish", lifePoints : 385, strength : 85 , power : "Poison", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "purple" },
        //Sea Creaures 
        { name : "Shark", lifePoints : 385, strength : 85 , power : "Sea", attackPoints : 95, 
            defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "blue" },
        { name : "Whale", lifePoints : 385, strength : 85 , power : "Sea", cid : 3 , attackPoints : 95, 
            defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 , color: "blue" },
        //SeaMonster Creatures
        { name :"Mermaid", lifePoints : 385, strength : 85 , power : "SeaMonster", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "blue" },
        { name : "SeaSerpent", lifePoints : 385, strength : 85 , power : "SeaMonster", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "blue" },
        { name : "SeaDragon", lifePoints : 385, strength : 85 , power : "SeaMonster", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "blue" },
        //Monsters Creatures 
        { name : "Dragon", lifePoints : 385, strength : 85 , power : "Monsters", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "green" },
        { name : "Cyclops", lifePoints : 385, strength : 85 , power : "Monsters", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "green" },
        { name : "Ogre", lifePoints : 385, strength : 85 , power : "Monsters", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "green" },
        { name : "Troll", lifePoints : 385, strength : 85 , power : "Monsters", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "green" },
        //UnderGround Creatures
        { name : "Witch", lifePoints : 385, strength : 85 , power : "UnderGround", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "darkgray" },
        { name : "Vampire", lifePoints : 385, strength : 85 , power : "UnderGround", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "darkgray" },
        { name :"Zombie", lifePoints : 385, strength : 85 , power : "UnderGround", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "darkgray" },    
        { name : "Troll", lifePoints : 385, strength : 85 , power : "UnderGround", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "darkgray" },
        { name : "Spider-Web", lifePoints : 385, strength : 85 , power : "UnderGround", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "darkgray" },
        //Mythical Creatures
        { name : "Elf", lifePoints : 385, strength : 85 , power : "Mythical", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "darkviolet" },
        { name : "Griffin", lifePoints : 385, strength : 85 , power : "Mythical", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "darkviolet" },
        { name : " Sphinx", lifePoints : 385, strength : 85 , power : "Mythical", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "darkviolet" },
        { name : "Unicorn", lifePoints : 385, strength : 85 , power : "Mythical", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "darkviolet" },
        { name : "Centaur", lifePoints : 385, strength : 85 , power : "Mythical", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "darkviolet" },
        { name : "Minotaur", lifePoints : 385, strength : 85 , power : "Mythical", attackPoints : 95, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 3 ,color: "darkviolet" },
            //These were all the Advance Creatures on this Game for just-starting Players with not account Credit Points over this web game ...
    ]
    // Supreme Creatures as Expert Titan on this Web Game ...
    //They are the most powerful creautures in combat. 

    //The SupremeCreatures is an Array of objects, each objects contains the properties of a creature as its objectCreature .
    //These creatures  have better lifePoints , stronger, and more attack power points and defense points than the Advance Creatures.
    //lifePoints is the total health of the creature, strength is the physical power of the creature, and it goes from 401 to 500 , strength is the physical power of the creature, and it goes from 1 to 100 , power is the type of power the creature has, attackPoints is the damage dealt by the creature in an attack, defensePoints is the resistance of the creature to attacks, speedPoints is the speed of the creature in battle, and color is the color of the creature.

    export const SupremeCreatures = [ 

        //attackPoints is between 100 and 200 .
        { name :"WildFire", lifePoints : 425, strength : 85 , power : "Fire", attackPoints : 125, defensePoints : 10, speedPoints : 8, weakeness : [ "Water" ], cid : 5 , color: "red" },
        { name : "Volcano", lifePoints : 465, strength : 85 , power : "Fire", attackPoints : 165, defensePoints : 10, speedPoints : 8, weakeness : [ "Water" ], cid : 5 ,color: "red" },
        { name : "MutanVirus", lifePoints : 465, strength : 85 , power : "Fire", attackPoints : 165, defensePoints : 10, speedPoints : 8, weakeness : [ "Fire" ], cid : 5 ,color: "red" },
        { name : "Hydra", lifePoints : 465, strength : 85 , power : "Fire", attackPoints : 165, defensePoints : 10, speedPoints : 8, weakeness : [ "Water" ], cid : 5 ,color: "red" },
        { name : "Kraken", lifePoints : 465, strength : 85 , power : "Water", attackPoints : 165, defensePoints : 10, speedPoints : 8, weakeness : [ "Earth" ], cid : 5 ,color: "blue" },
        { name : "Wizard", lifePoints : 485,  strength : 95, power : "UnderGround", attackPoints :190, 
        defensePoints : 10, speedPoints : 8, weakeness : [ "Fire"], cid : 5 ,color : "Gray" },         
        { name : "SpaceDragon", lifePoints : 500, strength : 100, power : "Mythical", attackPoints : 200,
            defensePoints : 10, speedPoints : 10, weakeness : [ null ] , cid : 5 ,color : "violet" },

        //Thesee were all creautues on this Game ....

    ]

    /// OuterSpace ....

    export const Spacial = [ 

        { name : "BlackHole"},
        { name : "Eclipse"},
        { name : "Quasar"}
    ]

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


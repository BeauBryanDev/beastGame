console.log("Hello World");
import { creaturesByPower, colorByPowers , BasicCreatures,  IntermediateCreatures , AdvanceCreatures , SupremeCreatures } from "./gameCreatures.mjs";
import { AttacksByCreatures  } from "./creaturesAttacks.js";
// import { showCurrentAttacks, getDamageByAttack } from "./attacks.js";

// Function to start the game

let playerAttack;

function startGame() {

    let BattleGround = document.getElementById("battle-Container");
    BattleGround.style.display = 'none';


    let selectFire = document.getElementById("fire-btn--select");

    selectFire.addEventListener("click", function() {
        console.log("Fire selected");
        alert("Fire selected");
    });

    let selectWaterBtn = document.getElementById("water-btn--select");
    selectWaterBtn.addEventListener("click", selectWater );

    let creatureContainer = document.getElementById("Creature-Container");

    const powerButtons = document.querySelectorAll(".rootElements button");

    alert("Welcome to the Creature Game");
    alert("Select a power to see the creatures");

    powerButtons.forEach(button => {

        button.addEventListener("click", () => {

            var selectedPower = button.textContent.trim(); 
            console.log(selectedPower);
            console.log(creaturesByPower[selectedPower]);
            window.selectedPower = button.textContent.trim(); 
            console.log(window.selectedPower);
            //showCreaturesOnAlert(selectedPower);
            // checkedSelectedCreature();
            // getSelectedCreature();
            showCreatures(selectedPower);

        });
    });

    function getCreaturesByPower(power) {

        return creaturesByPower[power];

    }

    function showCreaturesOnConsole(power) {

        const creatures = getCreaturesByPower(power);

        creatures.forEach(creature => {

            console.log(creature);

        });

    }   

    function showCreaturesOnAlert(power) {  
        
        const creatures = getCreaturesByPower(power);

        alert(creatures.join("\n"));

    }   

    function checkedSelectedCreature() {

        const selectedCreature = document.querySelector("input[name='creature']:checked");

        if (!selectedCreature) {

            alert("Please select a creature I ");
            return;
        }
        alert(`You selected I : ${selectedCreature.id}`);

    }


    // Ensure creatures are displayed before attempting to get the selected creature
    showCreatures("Fire"); // Replace "Fire" with the desired default power if needed
    const myCreature = getSelectedCreature();
    console.log(myCreature);

    if (myCreature) {
        const userCreature = myCreature;
        console.log(`User selected creature: ${userCreature}`);
    }

    //this Function() is to dynamically display the creatures based on the power selected ...
    function showCreatures(power) {
        if (!creaturesByPower[power]) return; 
    
        //Clear the container

        //Avoid Template Literals, it is a major CyberSecurity concern as it can be used to inject malicious codeXXS to daface my game webpage , 
        //It is not secure.  interms of security, it is not recommended to use Template Literals
        //Instead use the DOM API to create elements and append them to the container
        creatureContainer.innerHTML = "";
        //create an h2 title that show the Power selected by the User ...
        const h2Power = document.createElement("h2");
        h2Power.textContent = `Your have Chosen  ${power}, Then these are the Monster from ${power}`;
        creatureContainer.appendChild(h2Power);

        //create an h2 title inside Creature-Container div
        const h2Title = document.createElement("h2");
        h2Title.textContent = "Choose your Creature";
        h2Title.style.textAlign = "center";
        h2Title.style.fontSize = "2rem";
        h2Title.style.color = "black";
        h2Title.style.fontWeight = "bold";
        h2Title.style.fontFamily = "Arial, sans-serif";
        h2Title.style.margin = "10px";
        h2Title.style.padding = "10px";
        creatureContainer.appendChild(h2Title);

        const displayMonsters = document.createElement("div");
        displayMonsters.classList.add("monster-display");
        displayMonsters.style.display = 'flex';
        displayMonsters.style.flexDirection = 'row';
        displayMonsters.style.justifyContent = 'space-evenly';
        displayMonsters.style.alignItems = 'center';
        displayMonsters.style.flexWrap = 'wrap';
        displayMonsters.style.gap = '10px';
        displayMonsters.style.width = '100%';
        displayMonsters.style.margin = 'auto';
        displayMonsters.style.padding = '10px';
        displayMonsters.style.border = '2px solid black';

        const currentColor =  colorByPowers[power];
        displayMonsters.style.backgroundColor = currentColor;
        displayMonsters.style.borderRadius = '10px';
        displayMonsters.style.padding = '10px';
        displayMonsters.style.width = '100%';
        displayMonsters.style.height = 'auto';
        displayMonsters.style.margin = 'auto';
        displayMonsters.style.gap = '10px';
        displayMonsters.style.textAlign = 'center';
        displayMonsters.style.fontSize = '1.2rem';
        displayMonsters.style.color = 'black';
        displayMonsters.style.fontWeight = 'bold';
        displayMonsters.style.fontFamily = 'Arial, sans-serif';
        displayMonsters.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        displayMonsters.style.border = '2px solid black';
        displayMonsters.style.borderRadius = '10px';

        creaturesByPower[power].forEach(creature => {
            const creatureDiv = document.createElement("div");
            creatureDiv.classList.add("creature-card");

            const label = document.createElement("label");
            label.htmlFor = creature.toLowerCase();
            label.textContent = creature;
            label.style.fontSize = "1.2rem";
            label.style.color = "black";
            label.style.padding = "10px";
            label.style.border = "2px solid black";
            label.style.borderRadius = "10px";
            label.style.cursor = "pointer";
            label.style.margin = "10px";
            label.style.width = "auto";
            label.style.height = "auto";
            //label.style.height = "20px";
            label.style.display = "flex";
            label.style.alignItems = "center";
            label.style.justifyContent = "center";
            label.style.fontSize = "1.2rem";
            label.style.fontWeight = "bold";
            label.style.textAlign = "center";
            label.style.backgroundColor = 'black';
            label.style.color = currentColor;
            label.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';

            const input = document.createElement("input");
            input.type = "radio";
            input.name = "creature";
            input.value = creature;
            input.id = creature.toLowerCase();
            // input.style.backgroundColor = currentColor.BtnColor;
            // input.style.color = currentColor.BtnColor;
            input.style.border = "2px solid black";
            input.style.width = "50px";
            input.style.height = "70px";
            input.style.borderRadius = "10px";
            input.style.cursor = "pointer";
            input.style.margin = "10px";
            input.style.padding = "10px";
            input.style.fontSize = "1.2rem";
            input.id = creature;

            const img = document.createElement("img");
            img.src = `./creatures/${creature}.svg`;
            img.alt = `${creature} Creature`;
            img.classList.add("creature-image");

            creatureDiv.appendChild(label);
            creatureDiv.appendChild(img);
            creatureDiv.appendChild(input);

            displayMonsters.appendChild(creatureDiv);
            creatureContainer.appendChild(displayMonsters);


        });
        //Avoid using innerHTML , It may be a security concern, use the DOM API to create elements and append them to the container
        //Instead Use document.createElement() and appendChild() to create elements and append them to the container.

    }

    function randomNumber(min, max) {

        return Math.floor(Math.random() * (max - min + 1)) + min;

    }

    function computerPlay() {

        let BattleGround = document.getElementById("battle-Container");
        BattleGround.style.display = 'block';

        const powers = Object.keys(creaturesByPower);
        //console.log(powers);
        const randomPower = powers[randomNumber(0, powers.length - 1)];
        const creatures = creaturesByPower[randomPower];
        const randomCreature = creatures[randomNumber(0, creatures.length - 1)];
        //const capitalizedComputerCreature = randomCreature.charAt(0).toUpperCase() + randomCreature.slice(1);
        return randomCreature;
    }

    function computerPlayBasic() {

        let BattleGround = document.getElementById("battle-Container");
        BattleGround.style.display = 'block';

    }



    let playerCreature ;
    // Call computerPlay after the user has selected their creature
    let chooseCreatureBtn = document.getElementById("select-creature--btn");

    if (chooseCreatureBtn) {
        chooseCreatureBtn.addEventListener("click", function () {
            const selectedCreature = document.querySelector("input[name='creature']:checked");
            if (!selectedCreature) {
                alert("Please select a creature before proceeding.");
                return;
            }
            // Assign the selected creature to the global variable
            playerCreature = selectCreature();
            console.log(`Player selected creature: ${playerCreature}`);

            const playerCreatureObject = AttacksByCreatures[window.selectedPower]?.find(c => c.name === playerCreature);
            // Add error handling
            if (!playerCreatureObject) {
                console.error(`Creature "${playerCreature}" not found in power "${window.selectedPower}".`);
                alert(`Creature "${playerCreature}" not found for the selected power.`);
                return;
            }  
            else {
                const categoryID = playerCreatureObject.creatureId;
                console.log("Player Creature ID: ", categoryID);
                console.log("Player Creature Object: ", playerCreatureObject);
                console.log("Player Creature Name: ", playerCreatureObject.name);
                console.log("Player Creature Type: ", playerCreatureObject.type);
                console.log("Player Creature Strength: ", playerCreatureObject.strength);
                console.log("Player Creature Weakness: ", playerCreatureObject.wearknessLevel);
                console.log("Player Creature Power: ", playerCreatureObject.Power);
                console.log("Player Creature Power ID: ", playerCreatureObject.powerId);
                console.log("Player Crature cid : ", playerCreatureObject.cid);
            }

            // const playerCid = playerCreatureObject.cid ;

            // if ( playerCid ==  1 )  {

            //     const compputerChoseCreature = computerPlayBasic();
            //     console.log(`Computer selected creature: ${ compputerChoseCreature}`);

            // } else  if ( playerCid == 2 ) {

            //     const compputerChoseCreature = computerPlayMid();
            //     console.log( `Computer selected creature: ${ compputerChoseCreature}` );

            // } else if ( playerCid == 3 ) {

            //     const compputerChoseCreature = computerPlayAdv();
            //     console.log( `Computer selected creature: ${ compputerChoseCreature}` );

            // } else if ( playerCid == 4 ) {

            //     const compputerChoseCreature = computerPlayDragon();
            //     console.log( `Computer selected creature: ${ compputerChoseCreature}` );
                
            // } else if (  playerCid == 5 ) {

            //     const computerChooseAttack = computerPlaySupreme();
            //     console.log( `Computer selected creature: ${ compputerChoseCreature}` );

            // } else {

            //     //it is for Disasters;
            // }

            const playerCreatureCid = playerCreatureObject.cid;

            // Filter the computer's creatures by cid
            const computerCreaturesPool = Object.values(AttacksByCreatures).flat() // Flatten the array of arrays
                .filter(creature => creature.cid === playerCreatureCid);

            if (computerCreaturesPool.length === 0) {
                console.error(`No computer creatures found with cid "${playerCreatureCid}".`);
                alert(`No computer creatures available for the selected player creature.`);
                return;
            }
            // Randomly select a computer creature from the filtered pool
            const computerCreature2 = computerCreaturesPool[Math.floor(Math.random() * computerCreaturesPool.length)];

            // Log the computer's chosen creature
            console.log("Computer selected creature2:", computerCreature2);
            console.log("Computer Creature2 Name:", computerCreature2.name);
            console.log("Computer Creature2 cid:", computerCreature2.cid);
            console.log("Computer Creature2 Strength:", computerCreature2.strength);
            console.log("Computer Creature2 Life Points:", computerCreature2.lifePoints);
            console.log("Computer Creature2 Attack Points:", computerCreature2.attackPoints);
            console.log("Computer Creature2 Defense Points:", computerCreature2.defensePoints);

            //Continue with ComputerPlay Logic .
            const computerCreature = computerPlay();
            console.log(`Computer selected creature: ${computerCreature}`);

        });

    }

    //console.log("User Chosen Power: ", window.selectedPower);

    let computerCreature = computerPlay();

    console.log(`Computer selected creature: ${computerCreature}`); 

    console.log(`Player selected creature: ${playerCreature}`);

    let computerCreatureName = document.getElementById("computer-creature--name");
    // computerCreatureName.innerHTML = `Computer has Chosen: ${computerCreature} as its Creature`;

    // Ensure the computer chooses its creature after the user has chosen theirs
    chooseCreatureBtn.addEventListener("click", function () {

        const selectedCreature = document.querySelector("input[name='creature']:checked");
        if (!selectedCreature) {
            alert("Please select a creature before proceeding.");
            return;
        }

        console.log(`Computer selected creature: ${computerCreature}`);
        computerCreatureName.innerHTML = `Computer has Chosen: ${computerCreature} as its Creature, `;
    });
    // Modify the DOM in oder to clear the container and display the selected creatures and its svg pictures ...
    // Create a function that will display the selected creatures and its svg pictures ...

    // This is a Function to get the selected power by the Player / User ..
    // This function will travers the creatureByPoser Object , then get the selected power by the Player / User
    // This function will return the selected power by the Player / User beased on the selected creature ...

    let battleContainer = document.getElementById("battle-Container");

    battleContainer.style.display = "block";
    battleContainer.style.textAlign = "center";
    battleContainer.style.margin = "auto";
    battleContainer.style.width = "80%";
    battleContainer.style.border = "1px solid black";
    battleContainer.style.padding = "10px";
    battleContainer.style.borderRadius = "10px";
    battleContainer.style.backgroundColor = "lightgrey";
    battleContainer.style.gap = "10px";
    
    // let thisCreatuere = getSelectedCreature();
    // let currentPower = getSelectedPower(thisCreatuere);

    function displaySelectedCreatures() {

        //clear the container 

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
        //Get the computer  selected Power 
        let computerPower = getSelectedPower(computerCreature);
        console.log("this is the current computer Power here : ", computerPower);
        
        //Set div container for the computer creature ...

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
        getCreatureInfo(thisCreatuere);
        showCreaturesInfo(thisCreatuere);
        //Get the computer selected attack
        let computerAttack = computerChooseAttack(computerCreature);
        console.log(`Computer selected creature: ${computerCreature}`);
        console.log(`Computer selected attack: ${computerAttack}`);
        

    }
    
    function showCreaturesInfo(creature) {   

        const myAttacks = document.createElement("div");
        myAttacks.classList.add("my-attacks");
        const h3Attacks = document.createElement("h3");
        h3Attacks.textContent = "Choose your Attack";
        myAttacks.appendChild(h3Attacks);
        let thisCreatuere = getSelectedCreature();
        let currentPower = getSelectedPower(creature);
        
       console.log("Creatures  name _line 319 :", creature);
       console.log("Show CurrentPower in Line 319 : ", currentPower);

       const currentCreatureObject = AttacksByCreatures[currentPower]?.find(c => c.name === creature);

       // Add error handling
        if (!currentCreatureObject) {
            console.error(`Creature "${creature}" not found in power "${currentPower}".`);
            alert(`Creature "${creature}" not found for the selected power.`);
            return;
        }

        const attacks = currentCreatureObject.attacks;
        //debug attacks array in console ....
        console.log("Current Creature Object:", currentCreatureObject);
        console.log("Attacks Array:", attacks);

        if (!attacks || attacks.length === 0) {
            console.error(`No attacks found for creature "${creature}".`);
            alert(`No attacks found for creature "${creature}".`);
            return;
        }

        // Ensure battleContainer is defined
        if (typeof battleContainer === 'undefined') {
            console.error('battleContainer is not defined.');
            return;
        }

        battleContainer.appendChild(myAttacks);

        attacks.forEach(attack => {

            const attackBtn = document.createElement("button");
            attackBtn.textContent = attack.name;
            //set styles to attackBtns 
            attackBtn.style.padding = "10px";
            attackBtn.style.margin = "10px";
            attackBtn.style.border = "2px solid black";
            attackBtn.style.borderRadius = "10px";
            attackBtn.style.cursor = "pointer";
            attackBtn.style.fontSize = "1.2rem";
            attackBtn.style.backgroundColor = currentCreatureObject.BtnColor;
            attackBtn.style.color = "black";
            //attackBtn.disabled = true ;
            attackBtn.id = attack.name.toLowerCase().split(" ").join("-");
            console.log(attackBtn.id);
            attackBtn.classList.add("attack-btn");
            myAttacks.appendChild(attackBtn);
            //displayAttackDescription(attack);

        });
        //Get the player selected attack
        let attackBtns = document.querySelectorAll(".attack-btn");
        attackBtns.forEach(attackBtn => {
            attackBtn.addEventListener("click", function() {
                playerAttack = attackBtn.id;
                console.log(playerAttack);
                // const computerAttack = computerChooseAttack( computerCreature );
                // console.log(`Computer selected attack: ${computerAttack}`);
                // battle(playerAttack, computerAttack);
                
            });
            
        });

        return playerAttack;

    }

    console.log("++++++++++++++++++++++++++++++++\n");

    //Function in order to get creature Information on display ....
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
            let i = 1;
            foundCreature.attacks.forEach( attack => {

            console.log( `${i}. ${attack.name } : ${attack.description} : Damage: ${attack.damage}`);
            i++;    
        });

        } else {

            console.log(`Creature "${creatureName}" not found.`);

        }

        //let categoryId = foundCreature.cid ;

        //return categoryId;

    }
    console.log("/*****************\n");

    function computerChooseAttack(creature) {

        let currentPower = getSelectedPower(creature);
        const attacks = AttacksByCreatures[currentPower];
        const randomAttack = attacks[randomNumber(0, attacks.length - 1)];

        return randomAttack.name.toLowerCase().split(" ").join("-");

    }
    
    function displayAttackDescription(attack) { 

        const attackName = document.createElement("h4");
        attackName.textContent = attack.name;
        battleContainer.appendChild(attackName);

        const myAttacks = document.createElement("div");
        myAttacks.classList.add("my-attacks");
        /* Beau , You have to CHANGE ALL THIS LOGIC SINCE I WILL BE USING THE Main Object attackByCreatures
        that is in ./creaturesAttack.js file, I will be using the attackByCreatures object to get the attacks of the creatures
        based on the selected power by the user, I will be using the attackByCreatures object to get the attacks of the creatures,  that is a better Object Option with more detailed Information about each creatures attacks rather tnat the current attackByPower object that I have created in the ./attacks.js file,
        I will be using the attackByCreatures object to get the attacks of the creatures based on the selected power by the user, I will be using the attackByCreatures object to get the attacks of the creatures,  that is a better Object Option with more detailed Information about each creatures attacks rather tnat the current attackByPower object that I have created in the ./attacks.js file
*/
        let thisCreatuere = selectCreature();
        let currentPower = getSelectedPower(thisCreatuere);
        const attacks = attacksByPower[currentPower];
        console.log(attacks);
        battleContainer.appendChild(myAttacks);

        const attackDamage = document.createElement("p");
        console.log("Debugging attack.damage object:", attack.damage);
        console.log("Debugging thisCreatuere value:", thisCreatuere);

        //const capitalizedCreature = thisCreatuere.charAt(0).toUpperCase() + thisCreatuere.slice(1);
        const creatureDamage = attack.damage && attack.damage[thisCreatuere];
        console.log("Fetched creatureDamage:", creatureDamage);

        if (creatureDamage !== undefined) {

            attackDamage.textContent = `Damage: ${creatureDamage}`;

        } else {

            attackDamage.textContent = "Damage: Not available";

        }
        battleContainer.appendChild(attackDamage);
        const attackDescription = document.createElement("p");
        attackDescription.textContent = attack.description;
        battleContainer.appendChild(attackDescription);
        
    }

    let restartBtn = document.getElementById("restart-game--bnt");

    restartBtn.addEventListener("click", restartGame );

    function attack() { 

        
        let computerAttack = computerChooseAttack(computerCreature);
        console.log(`Computer selected attack: ${computerAttack}`);
        //battle(playerAttack, computerAttack);        

    }

    const battleBtn = document.getElementById("battle--btn");

    if (battleBtn) {
        battleBtn.addEventListener("click", function () {
            const selectedCreature = document.querySelector("input[name='creature']:checked");
            if (!selectedCreature) {
                alert("You have to pick a creature before you can battle");
                return;
            }
            displaySelectedCreatures();
            attack();
        });
    }

    console.log("Player Attack| ", playerAttack);
    //End of the Game Function() ...

}

function selectWater() {
    console.log("Water selected");
    alert("Water selected");
}

function selectCreature() {

    const selectedCreature = document.querySelector("input[name='creature']:checked");
    let playerCreature = selectedCreature.id;
    console.log(playerCreature);
    let playerCreatureName = document.getElementById("player-creature--name");

    if (!selectedCreature) {

        alert("Please pick a creature on the list");
        return;
    }
    const capitalizedCreature = playerCreature.charAt(0).toUpperCase() + playerCreature.slice(1);
    alert(`You selected III : ${capitalizedCreature}`);
    playerCreatureName.innerHTML = `Your have Chosen: ${capitalizedCreature} as your Creature, `;
    return capitalizedCreature;
}

function getSelectedPower(animal) {

    animal = animal.charAt(0).toUpperCase() + animal.slice(1);

    for (const [category, creatures] of Object.entries(creaturesByPower)) {

        if (creatures.includes(animal)) {
            return category;
        }
    }
    return "Not found";

}

function getSelectedCreature() { 

    const selectedCreature = document.querySelector("input[name='creature']:checked");

    if (!selectedCreature) {

        alert("Please select a creature II ");
        return;
    } 
    else {

        //alert(`You selected II : ${selectedCreature.id}`);
        return selectedCreature.id;
    }
    

}

function restartGame() {

    location.reload();
}
 

document.addEventListener("DOMContentLoaded", function () {
        
    const chooseCreatureBtn = document.getElementById("select-creature--btn");

    if (chooseCreatureBtn) { 

        chooseCreatureBtn.addEventListener("click", selectCreature);
    }

});



window.addEventListener("load", startGame );

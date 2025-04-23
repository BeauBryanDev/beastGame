

  // Add event listener to change the background color of the selected creature card
            input.addEventListener("change", function () {
                const allCreatureCards = document.querySelectorAll(".creature-card");
                allCreatureCards.forEach(card => {
                    card.style.backgroundColor = ""; // Reset background color for all cards
                });
                if (input.checked) {
                    creatureDiv.style.backgroundColor = "red"; // Highlight the selected card
                }
            });
            displayMonsters.appendChild(creatureDiv);
            creatureContainer.appendChild(displayMonsters);






let footballTeam = {
    team: "France",
    year: 2024,
    headCoach: "Didier Deschamps",
    players: [
        { name: "Kylian Mbappé", position: "forward", isCaptain: false },
        { name: "Antoine Griezmann", position: "forward", isCaptain: false },
        { name: "N'Golo Kanté", position: "midfielder", isCaptain: false },
        { name: "Paul Pogba", position: "defender", isCaptain: false },
        { name: "Hugo Lloris", position: "goalkeeper", isCaptain: true }
    ]
};

const coach = document.getElementById("head-coach");
const team = document.getElementById("team");
const year = document.getElementById("year");
const playerCardsContainer = document.getElementById("player-cards");
const positionFilter = document.getElementById("players");

const displayTeam = () => {
    team.textContent = footballTeam.team;
    year.textContent = footballTeam.year;
    coach.textContent = footballTeam.headCoach;
};   

displayTeam();

const displayPlayers = (filterCards) => {
    playerCardsContainer.innerHTML = ""; 

    footballTeam.players
        .filter(player => filterCards === "all" || player.position === filterCards)
        .forEach(player => {
            const playerCard = document.createElement("div");
            playerCard.classList.add("player-card");

            const playerName = document.createElement("h2");
            playerName.innerText = player.isCaptain ? `(Captain) ${player.name}` : player.name;

            const playerPosition = document.createElement("p");
            playerPosition.innerText = `Position: ${player.position}`;

            playerCard.appendChild(playerName);
            playerCard.appendChild(playerPosition);
            playerCardsContainer.appendChild(playerCard);
        });
};

// Load all players on page load
displayPlayers("all");

// Listen for dropdown selection changes
positionFilter.addEventListener("change", (e) => {
    displayPlayers(e.target.value);
});

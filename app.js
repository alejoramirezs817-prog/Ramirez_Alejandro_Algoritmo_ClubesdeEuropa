// ===============================
// LISTA DE EQUIPOS (ELEMENTOS)
// ===============================
let teams = [
    { name: "Real Madrid", score: 0 },
    { name: "FC Barcelona", score: 0 },
    { name: "Bayern Múnich", score: 0 },
    { name: "Manchester City", score: 0 },
    { name: "Liverpool", score: 0 },
    { name: "AC Milan", score: 0 },
    { name: "Inter de Milán", score: 0 },
    { name: "Paris Saint-Germain", score: 0 }
];

// Equipos en comparación A/B
let teamA;
let teamB;

// ===============================
// SELECCIÓN ALEATORIA A/B
// ===============================
function pickTeams() {
    let indexA = Math.floor(Math.random() * teams.length);
    let indexB;

    do {
        indexB = Math.floor(Math.random() * teams.length);
    } while (indexA === indexB);

    teamA = teams[indexA];
    teamB = teams[indexB];

    document.getElementById("teamA").textContent = teamA.name;
    document.getElementById("teamB").textContent = teamB.name;
}

// ===============================
// ACTUALIZAR RANKING
// ===============================
function updateRanking() {
    let sortedTeams = [...teams].sort((a, b) => b.score - a.score);
    let rankingList = document.getElementById("ranking");

    rankingList.innerHTML = "";

    sortedTeams.forEach(team => {
        let li = document.createElement("li");
        li.textContent = `${team.name} — ${team.score} puntos`;
        rankingList.appendChild(li);
    });
}

// ===============================
// DECISIONES HUMANAS
// ===============================
document.getElementById("teamA").addEventListener("click", () => {
    teamA.score++;
    pickTeams();
    updateRanking();
});

document.getElementById("teamB").addEventListener("click", () => {
    teamB.score++;
    pickTeams();
    updateRanking();
});

// ===============================
// INICIO DEL ALGORITMO
// ===============================
pickTeams();
updateRanking();

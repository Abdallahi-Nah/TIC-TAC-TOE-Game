// Fonction pour réinitialiser la grille de jeu
function reset() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(`response${i}`).innerHTML = "";
    }
    document.getElementById("turnLetter").innerHTML = "x"; // Réinitialiser le joueur au tour de "x"
}

// Fonction pour changer la valeur dans une case et changer le tour
function change(id) {
    var response = document.getElementById(`response${id}`);
    var turnLetter = document.getElementById("turnLetter").innerHTML;
    
    if(response.innerHTML === "") {
        response.innerHTML = turnLetter; 
        document.getElementById("turnLetter").innerHTML = turnLetter === "x" ? "o":"x";
        decision();
    }
}

// Fonction pour vérifier le gagnant
function decision() {

    var responses = [];
    for(var i=0; i < 9; i++) {
        responses[i] = document.getElementById(`response${i+1}`).innerHTML;
    }

    var cases = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

    for (const element of cases) {
        const [a, b, c] = element;

        if(responses[a] && responses[a] === responses[b] && responses[a] === responses[c]) {
            document.getElementById("res").innerHTML = `
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <h3>${responses[a]} winnnn, bravooooo</h3>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            `;
            // reset();
            return;
        }
    }

    if(responses.every(cell => cell !== "")) {
        document.getElementById("res").innerHTML = `
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <h3>Draw, No Winner</h3>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        // reset();
    }
}
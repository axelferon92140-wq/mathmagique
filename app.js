let STATE = JSON.parse(localStorage.getItem("state")) || {
xp:0,
difficulty:1,
lesson:"add"
};

function save(){
localStorage.setItem("state", JSON.stringify(STATE));
}

UI.show("home");

// === COURS DYNAMIQUES ===

function loadCours(){

const coursData = [
{
titre:"➕ Les additions",
contenu:`
On additionne pour réunir des quantités.

Exemple :
2 + 3 = 5 → 2 bonbons + 3 bonbons = 5 🍬

  23
+ 15
----
  38

👉 On commence par la droite.
`
},

{
titre:"🍰 Les fractions",
contenu:`
Une fraction = part d’un gâteau.

Exemple :
1/4 + 1/4 = 2/4 = 1/2

Multiplier :
1/2 × 2/3 = 1/3
`
},

{
titre:"❓ Les équations",
contenu:`
Une équation = balance ⚖️

Exemple :
x + 3 = 5

On enlève 3 :
x = 2
`
},

{
titre:"📐 Pythagore",
contenu:`
Dans un triangle rectangle :

a² + b² = c²

Exemple :
3² + 4² = 25
c = 5
`
}
];

const container = document.getElementById("cours");
container.innerHTML = "";

coursData.forEach(c => {
const div = document.createElement("div");
div.className = "card";

div.innerHTML = `
<h2>${c.titre}</h2>
<pre>${c.contenu}</pre>
`;

container.appendChild(div);
});

}
loadCours();
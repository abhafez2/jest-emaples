const superHeros = [
  { name: "🐲 Dragon", powers: ["disintegration ray", "fly"] },
  { name: "👻 Casper", powers: ["gravity control", "fly"] },
  { name: "🐯 Tiger", powers: ["control of fire", "pyrotechnic discharges"] },
  { name: "👹 Lion", powers: ["freeze water"] },
  { name: "👽 Alien", powers: ["physical strength"] },
  { name: "🕷 Spider", powers: ["physical stretch"] },
  { name: "🐙 Octo", powers: ["invisibility", "force fields"] },
  { name: "🐍 Python", powers: ["speed"] },
];

function getFlyingSuperHeros() {
  return superHeros.filter((hero) => {
    return hero.powers.includes("fly");
  });
}

module.exports = { getFlyingSuperHeros };

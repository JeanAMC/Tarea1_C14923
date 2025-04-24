
const btnAlternar = document.querySelector("#alternar");
const elementos = document.querySelectorAll(".esconder");

function alternar() {
  elementos.forEach(el => {
    el.classList.toggle("oculto");
  });
}

btnAlternar.addEventListener("click", alternar);


// Toggle para Work Experience
const btnAlternarExperience = document.querySelector("#btnAlternarExperience");
const elementosExperience = document.querySelectorAll(".esconderEx");  // usa .esconderEx en los divs de Experience

function alternarExperience() {
  elementosExperience.forEach(el => {
    el.classList.toggle("oculto");
  });
}

btnAlternarExperience.addEventListener("click", alternarExperience);
// Toggle para Projects
const btnAlternar = document.querySelector("#alternar");
const elementos = document.querySelectorAll(".esconder");

function alternar() {
  elementos.forEach(el => {
    el.classList.toggle("oculto");

    // Si ya está visible, quitamos también la clase "esconder"
    if (!el.classList.contains("oculto")) {
      el.classList.remove("esconder");
    }
  });
}

btnAlternar.addEventListener("click", alternar);


// Toggle para Work Experience
const btnAlternarExperience = document.querySelector("#btnAlternarExperience");
const elementosExperience = document.querySelectorAll(".esconderEx");

function alternarExperience() {
  elementosExperience.forEach(el => {
    el.classList.toggle("oculto");

    // Si ya está visible, quitamos también la clase "esconderEx"
    if (!el.classList.contains("oculto")) {
      el.classList.remove("esconderEx");
    }
  });
}

btnAlternarExperience.addEventListener("click", alternarExperience);

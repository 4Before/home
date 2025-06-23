const container = document.querySelector('.container') as HTMLElement | null;
let currentStep = 0;
let currentSubstep = 0;
let accumulatedScroll = 0;
let treshold = 90;

const stepConfig = [
  // aqui ficam os dados de cada passo
  {
    title: "Initial Text", // título, pra organizar
    substeps: 3, // quantidade de substeps
  },
  {
    title: "Rotating Text",
    substeps: 4,
  },
  {
    title: "Cards People",
    substeps: 2,
  },
  {
    title: "Cards Contact",
    substeps: 0,
  }
];

if (container !== null) {
  const config = stepConfig[currentStep]
  // fazer a lógica de subir e descer steps e substeps
  container.addEventListener('wheel', (e: WheelEvent) => {
    accumulatedScroll += e.deltaY;
    if (accumulatedScroll > treshold) {
      currentStep++;
    } else if (accumulatedScroll < -treshold) {
      currentStep--;
    }
  });
}
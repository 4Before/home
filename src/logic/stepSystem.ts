const container = document.querySelector('.container') as HTMLElement | null;
let currentStep = 0;
let currentSubstep = 0;
let accumulatedScroll = 0;
let treshold = 90;

const stepConfig = [
  // aqui ficam os dados de cada passo
  {
    title: "Initial Text",
  },
  {
    title: "Rotating Text"
  },
  {
    title: "Cards People"
  },
  {
    title: "Cards Contact"
  }
];

if (container !== null) {
  const config = stepConfig[currentStep]
  container.addEventListener('wheel', (e: WheelEvent) => {
    accumulatedScroll += e.deltaY;
    if (accumulatedScroll > treshold) {
      currentStep++;
    } else if (accumulatedScroll < -treshold) {
      currentStep--;
    }
  });
}
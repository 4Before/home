export function stepSystem() {
  if (typeof window !== 'undefined') {

    const container = document.querySelector('.container') as HTMLElement | null;

    // STEP = PASSO, ETAPA QUE A VISÃO GERAL ESTÁ VISUALIZANDO
    // SUBSTEP = SUBPASSO, ETAPA ESPECÍFICA DE CONTEÚDO SENDO MOSTRADO
    // TITLE = TÍTULO PRA FICAR MAIS FACIL DE ENTENDER
    // SUBSTEPS = QUANTIDADE DE SUBSTEPS

    // PARA CLASSES:
    // CONTAINER = CLASSE PAI (step)
    // CONTENT = CONTEÚDO DENTRO DA CLASSE (substep)

    // NOMENCLATURA:
    // .container step-0
    // .container step-1
    //
    // .content substep-0
    // .content substep-1


    interface StepConfig {
      title: string;
      substeps: number;
    }

    const stepConfig: StepConfig[] = [
      {
        title: "Fading",
        substeps: 3,
      },
      {
        title: "Rotating",
        substeps: 4,
      },
      {
        title: "Cards",
        substeps: 2,
      },
      {
        title: "GoTo",
        substeps: 0,
      }
    ];


    if (container !== null) {
      console.log('container found!');
      let currentStep = 0;
      const maxStep = stepConfig.length - 1;
      let currentSubstep = 0;
      const maxSubstep = stepConfig[currentStep].substeps - 1;
      let accumulatedScroll = 0;
      let treshold = 270;


      container.addEventListener('wheel', (e: WheelEvent) => {
        accumulatedScroll += e.deltaY;

        // Função para atualizar step e substep ao subir/descer
        function updateStep(direction: 1 | -1) {
          console.log('direction: ' + direction);
          console.log('step: ' + currentStep);
          console.log('substep: ' + currentSubstep);
            // Remove 'active' class from all step containers
            const stepContainers = document.querySelectorAll('.container');
            stepContainers.forEach((el, idx) => {
              if (idx === currentStep) {
                el.classList.add('active');
              } else {
                el.classList.remove('active');
              }
            });
          if (direction === 1) { // descendo
            if (currentSubstep < maxSubstep) {
            
              currentSubstep++;
            } else if (currentStep < maxStep) {
              currentStep++;
              currentSubstep = 0;
            }
          } else { // subindo
            if (currentSubstep > 0) {
              currentSubstep--;
            } else if (currentStep > 0) {
              currentStep--;
              currentSubstep = stepConfig[currentStep].substeps;
            }
          }
        }

        if (accumulatedScroll > treshold) {
          console.log('should reset scroll');
          updateStep(1);
          accumulatedScroll = 0;
          console.log(accumulatedScroll);
        } else if (accumulatedScroll < -treshold) {
          console.log('should reset scroll');
          updateStep(-1);
          accumulatedScroll = 0;
          console.log(accumulatedScroll);
        }
      });
    }
  }

}

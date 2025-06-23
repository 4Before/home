export function stepSystem() {

  console.log('connected');
  if (typeof window !== 'undefined') {
    console.log('window found!');

    const container = document.querySelector('.container') as HTMLElement | null;

    // STEP = PASSO, ETAPA QUE A VISÃO GERAL ESTÁ VISUALIZANDO
    // SUBSTEP = SUBPASSO, ETAPA ESPECÍFICA DE CONTEÚDO SENDO MOSTRADO
    // TITLE = TÍTULO PRA FICAR MAIS FACIL DE ENTENDER
    // CONTENT = NOME DA PÁGINA .SVELTE NA PASTA CONTENTS
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
      content: string;
      substeps: number;
    }

    const stepConfig: StepConfig[] = [
      {
        title: "Fading",
        content: 'Initial',
        substeps: 3,
      },
      {
        title: "Rotating",
        content: 'Competences',
        substeps: 4,
      },
      {
        title: "Cards",
        content: 'Participants',
        substeps: 2,
      },
      {
        title: "GoTo",
        content: 'About',
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
      let treshold = 90;


      container.addEventListener('wheel', (e: WheelEvent) => {
        accumulatedScroll += e.deltaY;
        console.log('scroll!')

        // Função para atualizar step e substep ao subir/descer
        function updateStep(direction: 1 | -1) {
          console.log('caught direction')
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
          updateStep(1);
          accumulatedScroll = 0;
        } else if (accumulatedScroll < -treshold) {
          updateStep(-1);
          accumulatedScroll = 0;
        }
      });
    }
  }

}

<script>
    export let text = '';
    const treshold = 270;
    let accumulatedScroll = 0;
    let slotElement;
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';

    onMount(() => {
        slotElement = document.querySelectorAll('.texto');
        window.addEventListener('wheel', (e) => {
            accumulatedScroll += e.deltaY;

            if (accumulatedScroll >= treshold) {
                gsap.to(slotElement, { duration: 0.8, opacity: 0, y: 100, ease: "back.in" });
            } else if (accumulatedScroll <= -treshold) {
                gsap.to(slotElement, { duration: 0.8, opacity: 10, y: 0, ease: "back.out" });
            }
        });
    });
</script>

    <h1 class="texto">{text}</h1>

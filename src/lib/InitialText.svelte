<h1><slot></slot></h1>

<script>
    let accumulatedScroll = 0;
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
    let visible = true;
    let slotElement;

    onMount(() => {
        window.addEventListener('wheel', (e) => {
            accumulatedScroll += e.deltaY;
            console.log(accumulatedScroll)

            if (accumulatedScroll >= 270) {
                gsap.to(slotElement, { duration: 0.8, opacity: 0, y: 100, ease: "back.in" });
            } else if (accumulatedScroll <= -90) {
                gsap.to(slotElement, { duration: 0.8, opacity: 10, y: 0, ease: "back.out" });
            }
        });
    });
</script>
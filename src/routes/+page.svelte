<script>
    import '../global.css';
    import { onMount } from 'svelte';
    import { stepSystem } from '$lib/logic/stepSystem.ts';
    import { Initial, Competences, Participants, About } from '$lib';

    onMount(() => {
        stepSystem();
    })
</script>
<div class="container step-0">
    <Initial></Initial>
</div>
<div class="container step-1">
    <Competences></Competences>
</div>
<div class="container step-2">
    <Participants></Participants>
</div>
<div class="container step-3">
    <About></About>
</div>



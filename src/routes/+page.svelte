<script>
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



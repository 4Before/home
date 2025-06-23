<div class="textogirando">
    <!-- Imagem Logo -->
    <img src="/logo-branca.png" />
    
    <svg viewBox="0 0 500 500">

        <path id="textocircular" fill="none" stroke="none"
            d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250">
        </path>

        
        <text dy="0">
            <!-- Texto -->
            <textPath xlink:href="#textocircular">Esse é o nosso papel, em qualquer circunstância trazendo segurança aos
                seus dados.</textPath>
        </text>

    </svg>
</div>

<style>
    img {
        width: 400px;
        height: 400px;
        margin-right: 10px;
        position: absolute;
    }
    text {
        fill: #ffffff;
        font-size: 30.5px;
        letter-spacing: 2.5px;
    }

    .textogirando {
        width: 500px;
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px auto;
        border-radius: 100%;
    }
</style>

<script>
    import { gsap } from "gsap";
    import { onMount } from "svelte";

    onMount(() => {
        gsap.to("text", { rotation: -360, transformOrigin: "50%", duration: 12, repeat: 999, ease: "linear" });
    });
</script>
<script>
	import rocket from '$lib/public/rocket.png';
    import dbicon from '$lib/public/db-icon.png';
</script>

<h1 class="texto">Esses somos nós: práticos e cautelosos.</h1>
<p class="texto">Agora dê um passo em frente e veja o que podemos fazer por você.</p>

<center>
<table>
    <thead>
        <tr>
            <th colspan="2">
                <h1>Quer conhecer?</h1>
                <p>Nós fazemos o sistema para melhor situar a sua empresa.</p>
                <button class="yellow-button">Quero conhecer</button>
            </th>
            <th>
                <div class="row">
                    <img src={rocket} style="width: 50%; margin-top: -25%;" alt="Foguete">
                    <h1>24h</h1>
                </div>
                <p>Atendimento 24h por dia</p>
            </th>
            <th rowspan="2" class="yellow-block"></th>
        </tr>
        <tr>
            <th class="yellow-one">
                <img src={dbicon} alt="" style="width: 50%; text-align: center;"/>
                <p>Levamos seus dados muito a sério, disponibilizamos seus dados a qualquer momento</p>
            </th>
            <th colspan="2">
                <h1>Quer tirar dúvidas?</h1>
                <p>Nossa empresa preza pelo seu conforto. Tire suas dúvidas pelos nossos principais canais abaixo:</p>
                <div class="row">
                    <button class="yellow-button">E-mail</button>
                    <button class="gray-button">Nosso Q&A</button>
                </div>
            </th>
        </tr>
    </thead>
</table>
</center>

<p class="texto">Entre em contato e conheça como transformar seu negócio em uma verdadeira ferramenta  | 4Before ©</p>

<style>
    table {
        width: 75%;
    }

    th {
        background-color: white;
        border-radius: 10px;
        margin: 10rem;
        width: 15%;
        font-weight: normal;
    }

    th * {
        margin: 5%;
        font-family: 'Merriweather';
    }

    tr:first-child th:first-child{
        text-align: left;
    }

    th:last-child{
        text-align: right;
    }

    .row{
        display: flex;
        align-items: center;
    }

    .yellow-block{
        width: 50%;
        background-color: #EBBB36;
        text-align: center;
    }

    .yellow-one {
        background-color: #EBBB36;
        color: white;
    }

    .texto {
        color: white;
        text-align: center;
        font-family: 'Merriweather';
    }

    button {
        border: none;
        border-radius: 30px;
        color: white;
        width: 50%;
        height: 2rem;
        font-weight: bold
    }

    .yellow-button {
        background-color: #EBBB36;
    }

    .gray-button {
        background-color: rgba(65, 63, 58, 1);
    }

</style>
<script>
    export let name = '';
    export let image = '';
    export let description = '';
</script>

<div class="card">
    <img src={image} alt="Foto do {name}" />
    <div class="info">
        <h4>{name}</h4>
        <p>{description}</p>
    </div>
</div>

<style>
.card {
    background: #fff;
    width: 300px;
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.10), 0 1.5px 4px rgba(0,0,0,0.10);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 24px;
    margin: 24px auto;
}

img {
    width: 92%;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
    margin-top: 12px;
    background: #e0e0e0;
    box-shadow: 0 1px 2px rgba(0,0,0,0.04);
    display: block;
}

.info {
    width: 92%;
    margin-top: 16px;
}

h4 {
    margin: 0 0 8px 0;
    font-size: 1.15rem;
    font-weight: 700;
    color: #222;
    font-family: 'Segoe UI', Arial, sans-serif;
}

p {
    margin: 0;
    font-size: 1rem;
    color: #444;
    font-family: 'Segoe UI', Arial, sans-serif;
}
</style>
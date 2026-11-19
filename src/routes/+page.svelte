<script>
import Sidebar from "../components/sidebar.svelte"
let canvas;
    let w = $state(0);
    let h = $state(0);

    $effect(() => {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#09090b";
    ctx.fillRect(0, 0, w, h);
    });
</script>

<svelte:window bind:innerWidth={w} bind:innerHeight={h} />
<canvas class="fixed" bind:this={canvas} width={w} height={h}></canvas>

<Sidebar />


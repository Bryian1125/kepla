<script>
    let canvas;
    let w = $state(0);
    let h = $state(0);

    $effect(() => {
        const gl = canvas.getContext("webgl");
        gl.viewport(0,0,w,h);
        gl.clearColor(0.05, 0.05, 0.05, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
    });

</script>

<svelte:window bind:innerWidth={w} bind:innerHeight={h} />

<canvas bind:this={canvas} width={w} height={h}></canvas>

<style>
    :global(body) { margin: 0; }
    canvas { display: block; }
</style>

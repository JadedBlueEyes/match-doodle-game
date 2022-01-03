<script>
	import { createEventDispatcher } from 'svelte';
    export let theme = [
    "/doodle/anchor.png", "/doodle/apple.png", "/doodle/bomb.png", "/doodle/cactus.png", "/doodle/candle.png", "/doodle/carrot.png", "/doodle/cheese.png", "/doodle/chess.png", "/doodle/clock.png", "/doodle/clown.png", "/doodle/flower.png", "/doodle/dino.png", "/doodle/dolphin.svg", "/doodle/dragon.png", "/doodle/exclamation.svg", "/doodle/eye.png", "/doodle/fire.png", "/doodle/clover.png", "/doodle/ghost.png", "/doodle/splat.png", "/doodle/hammer.png", "/doodle/heart.png", "/doodle/ice.svg", "/doodle/igloo.svg", "/doodle/key.png", "/doodle/ladybird.png", "/doodle/lightbulb.png", "/doodle/lightning.svg", "/doodle/lock.png", "/doodle/maple.png", "/doodle/milk.png", "/doodle/moon.svg", "/doodle/no.png", "/doodle/scarecrow.png", "/doodle/pencil.svg", "/doodle/bird.png", "/doodle/cat.png", "/doodle/butterfly.png", "/doodle/question.png", "/doodle/lips.png", "/doodle/scissors.png", "/doodle/skull.png", "/doodle/snow.png", "/doodle/snowman.png", "/doodle/spider.svg", "/doodle/web.png", "/doodle/sun.png", "/doodle/glasses.png", "/doodle/target.png", "/doodle/taxi.png", "/doodle/tortoise.png", "/doodle/treble.png", "/doodle/tree.png", "/doodle/wave.png", "/doodle/dog.png", "/doodle/sweet.png", "/doodle/crab.png"];
    export let card = [2, 1, 3, 4, 5, 6, 7, 8];
    export let position = [[1, 2, 3, 0.4], [1, 2, 3, 0.4], [1, 2, 3, 0.4], [1, 2, 3, 0.4], [1, 2, 3, 0.4], [1, 2, 3, 0.4], [1, 2, 3, 0.4], [1, 2, 3, 4]]
    export let iconSize = 256;
    export let width = 1280;
    export let scale = 1;


	const dispatch = createEventDispatcher();
    function createClickHandler(icon) {
        return function iconClickHandler(e) {
            dispatch('iconClicked', {
			    id: icon
		    });
        }
    }
</script>
<style>
    div {
        position: relative;
        padding: 1rem 2rem;
        border-radius: 100%;
        box-shadow: #0000 0px 0px 0px 0px, #0000 0px 0px 0px 0px, #0000001a 0px 1px 3px 0px, #0000000f 0px 1px 2px 0px;
        display: block;
        margin: 1rem;
        background-color: white;
        overflow: hidden;
    }
    img {
        position: absolute;
        top: 0px;
        left: 0px;
        width: auto;
        /* background-color: rgba(251, 0, 42, 0.246); */
    }
</style>
<div style="width: {width*scale}px; height: {width*scale}px">
    {#each card as icon, index (icon)}
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src="{theme[icon-1]}"
            role=button
            on:click={createClickHandler(icon)}
            style="height: {iconSize*scale}px;
                transform: translate({position[index][0]*scale - (iconSize*scale*0.5)}px, {position[index][1]*scale - (iconSize*scale*0.5)}px) rotate({position[index][2]}deg) scale({position[index][3]});">
    {/each}
</div>
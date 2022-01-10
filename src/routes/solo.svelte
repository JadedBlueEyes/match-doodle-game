<script>
	import { cards, symbolsPerCard } from '$lib/generate';
	import { positionIcons } from '$lib/position';
	import { random } from '$lib/utils';
	import DobbleDisplay from '$lib/DobbleDisplay.svelte';

	const iconSize = 164;
	const width = 1280;
	let scale = 0.5;

	let position;
	let card;
	let position2;
	let card2;
	let update = () => {
	    position2 = position
        card2 = card
        do {
            position = positionIcons(symbolsPerCard, iconSize, width / 2);
        } while (position === "placement failed")
		card = cards[random(0, cards.length - 1)];
	};
	update();
	update();
	// setInterval(update, 5000)
</script>
<style>
    main {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
    }
</style>

<button on:click={update}>update</button>

<main>
	<DobbleDisplay {position} {card} {iconSize} {width} {scale} />
	<DobbleDisplay position={position2} card={card2} {iconSize} {width} {scale} />
</main>

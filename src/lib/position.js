import { random, shuffle } from "$lib/utils";

// Distance between two 2d points.
// ([x, y], [x, y])
function distanceBetweenPoints(a, b) {
    return (Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]))
}

// Whether the given rectangular surfaces collide
function doesCollide([r1t, r1b], [r2t, r2b]) {
    return !(r2t[0] > r1b[0] || r2b[0] < r1t[0] || r2t[1] > r1b[1] || r2b[1] < r1t[1]);
}

function midpoint(p1, p2) {
    return [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2]
}

// Places the given number of icons on a card with the given radius
function positionIcons(n, s, r) {
    let placed = []
    for (let i = 0; i < n; i++) {
        let tries = 0;

        let rotation = random(0, 359)
        let upscale = i ? random(.50, 1.25) : ((i < n) ? random(1.50, 2) : random(.70, .35))
            
        let w = s*upscale;
        let h = w;

        let colliding = true;

		let corner_ul = [-1,-1]
		let corner_ur = corner_ul
		let corner_ll = corner_ul
		let corner_lr = corner_ul

        while (distanceBetweenPoints(corner_ul, [r, r]) >= r || distanceBetweenPoints(corner_ur, [r, r]) >= r || distanceBetweenPoints(corner_ll, [r, r]) >= r || distanceBetweenPoints(corner_lr, [r, r]) >= r || colliding == true) {
            // try to place the symbol on the card
            // then check for a collision
            // or out of bounds

            tries = tries + 1

			corner_ul = [random(0, (r*2)), random(0, (r*2))]
			corner_ur = [corner_ul[0]+w, corner_ul[1]]
			corner_ll = [corner_ul[0], corner_ul[1]+h]
			corner_lr = [corner_ul[0]+w, corner_ul[1]+h]

            colliding = false;
            for (let i = 0; i < placed.length; i++) {
                if (doesCollide([corner_ul, corner_lr], placed[i][0])) {
                    colliding = true;
                    break
                }
            }
            if ((tries % n) === 0)
                upscale = i ? random(.50, 1.25) : ((i < n) ? random(1.50, 2) : random(.70, .35))
                w = s*upscale;
                h = w;
            // If placement failed, tell the caller
            if (tries > Math.pow(n, 2))
				return "placement failed"
        }
        placed.push([[corner_ul, corner_lr], rotation, upscale])
    }

    return shuffle(placed.map((a) => {
        let [x, y] = midpoint(a[0][0], a[0][1])
        return [x, y, a[1], a[2]]
    }))
}

export { positionIcons }
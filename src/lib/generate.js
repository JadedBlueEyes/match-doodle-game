const symbolsPerCard = 8 // Must be prime + 1
const prime = symbolsPerCard - 1;
const numberOfCards = prime**2 + prime + 1

let sets = []
// Add first set of n+1 cards (e.g. 8 cards)
for (let i = 0; i < prime+1; i++) { 
    // Add new card with first symbol
    sets.push([1])
    // Add n+1 symbols on the card (e.g. 8 symbols)
    for (let j = 0; j < prime; j++) { 
        sets[i].push((j+1)+(i*prime)+1)
    }
}

// Add n sets of n cards 
for (let i = 0; i < prime; i++) { 
    for (let j = 0; j < prime; j++) { 
        // Append a new card with 1 symbol
        sets.push([i+2])
        // Add n symbols on the card (e.g. 7 symbols)
        for (let k = 0; k < prime; k++) { 
            let val  = (prime+1 + prime*k + (i*k+j)%prime)+1
            sets[sets.length-1].push(val)
        }
    }
}

const cards = sets;

export {
    symbolsPerCard,
    numberOfCards,
    cards
}
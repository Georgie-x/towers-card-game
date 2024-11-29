import { Card } from "./typeDefs"

function createDeck(): Card[] {
	const suits = ["hearts", "diamonds", "clubs", "spades"]
	const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"]
	const deck: Card[] = []

	for (const suit of suits) {
		for (const rank of ranks) {
			const id = `${rank}${suit.charAt(0).toUpperCase()}`
			const imgUrl = `/assets/cardFaces/${rank}_of_${suit}.png` 
			const points = parseInt(rank, 10) || (rank === "ace" ? 1 : 10)

			deck.push({ id, suit, rank, points, imgUrl })
		}
	}

	return deck
}

function shuffleDeck(deck: Card[]): Card[] {
	const shuffledDeck = [...deck] 
	for (let i = shuffledDeck.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]]
	}
	return shuffledDeck
}

export { createDeck, shuffleDeck }

type Card = {
	id: string
	suit: string
	rank: string
	imgUrl: string
	points: number
}

type GameState = {
	turn: number
}

type Piles = [Card[], Card[], Card[], Card[], Card[], Card[], Card[], Card[]]

export type { Card, GameState, Piles }

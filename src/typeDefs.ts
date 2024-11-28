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

type Piles = [string[], string[], string[], string[], string[], string[], string[], string[]]

export type { Card, GameState, Piles }

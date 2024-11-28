import { useState } from "react"
import { Piles } from "./typeDefs"
import { deck } from "./utils"

function App() {
	const [piles, setPiles] = useState<Piles>([[...deck.map(card => card.id)], [], [], [], [], [], [], []])

	return (
		<>
			<p>placeholder</p>
			<p>{piles[0]}</p>
		</>
	)
}

export default App

import { getPosts, type data } from "../features/getPosts"
import { useEffect, useState } from "react"
import CardInstagram from './CardInstagram'
import Title from "./Title"

const Gallery = () => {

    const [cards, setCards] = useState<Array<data> | null>(null)
    
    useEffect(() => {
        let ignore = false
        
        getPosts()
        .then((result) => {
            if (!ignore && Array.isArray(result)) {
                setCards(result)                
            }
        })

        return () => {
            ignore = true
        }
    }, [])

    const hasCards = Array.isArray(cards) && cards.length > 0

    if (!hasCards) return null

    return (
        <>
            <Title name="Наши последние работы"/>
            <section className="flex flex-col items-center relative">
                <div className="grid grid-cols-3 gap-[30px] w-full tablet:grid-cols-2 mobile:grid-cols-1">
                    {cards.map(card => <CardInstagram {...card} key={card.id}/>)}
                </div> 
            </section>
        </>
    )
}

export default Gallery
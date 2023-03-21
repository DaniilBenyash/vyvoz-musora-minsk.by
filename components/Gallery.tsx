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
            if(!ignore && result instanceof Array<data>){
                setCards(result)                
            }
        })

        return () => {
            ignore = true
        }
    }, [])

    return (
        <>
            {cards !== null
            ?
            <>
                <Title name="Наши последние работы"/>
                <section className="flex flex-col items-center relative">
                    <div className="grid grid-cols-3 gap-[30px] w-full tablet:grid-cols-2 mobile:grid-cols-1">
                        {cards.map(card => <CardInstagram {...card} key={card.id}/>)}
                    </div> 
                </section>
            </>
            
            :
            null
            }
        </>
        
    )
}

export default Gallery
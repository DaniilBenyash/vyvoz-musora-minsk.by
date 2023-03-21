import { useState, useRef } from "react"
import { flushSync } from "react-dom"
import Indicator from "./Indicator"

type CardAlbumProps = {
    data: Array<{
        id: string,
        media_url: string,
        permalink: string,
    }>,
}

const CardAlbum = ({ data }: CardAlbumProps) => {
    const selectedRef = useRef<any>(null)

    const [index, setIndex] = useState(0)  

    function slide(direction: string){
        
        if(direction === 'left'){
            flushSync(() => setIndex(index - 1)) 
            selectedRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        } else if('right') {
            flushSync(() => setIndex(index + 1)) 
            selectedRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
            
        }
    }

    return (
        <>
            <div className="relative m-[0 auto]">
                {index != 0 && <button className="absolute top-[calc(50%-30px)] bg-[url('../public/gallery-image/arrow_left.png')] h-[60px] w-[60px] rounded-[50%] border-none bg-neutral-100/60 cursor-pointer bg-no-reapet bg-center left-[15px]" onClick={() => slide('left')}></button>}
                <div className="flex overflow-hidden w-full h-[450px] rounded-[35px]">
                    {data.map((image, id) =>
                        <div className="min-w-full b-center-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${image.media_url})`}} key={image.id} ref={
                            index === id ?
                            selectedRef
                            :
                            null
                        }>

                        </div>
                    )}
                </div>
                {index != data.length - 1 
                && 
                <button className="absolute top-[calc(50%-30px)] bg-[url('../public/gallery-image/arrow_right.png')] h-[60px] w-[60px] rounded-[50%] border-none bg-neutral-100/60 cursor-pointer bg-no-reapet bg-center right-[15px]" onClick={() => slide('right')}></button>
                }
                <Indicator amount={data.length - 1} activeNumber={index}/>
            </div>
        </>   
    )
}

export default CardAlbum
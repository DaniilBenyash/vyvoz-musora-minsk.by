import Image from "next/image"

type CardProps = {
    text: string,
}

const Card = ({text}: CardProps) => {
    return (
        <div className="w-[300px]  flex flex-col items-center">
            <Image src='/ok.png' width={60} height={60} alt='ok'/>
            <p className="text-center text-xl font-medium leading-7">{text}</p>  
        </div>   
    )
}

export default Card
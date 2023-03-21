const CardVideo = ({url}: {url: string}) => {
    return (
        <div className="relative m-[0 auto]">
            <div className="flex overflow-hidden w-full h-[450px] rounded-[35px] bg-black">
                <video  className="object-cover w-full h-full" controls>
                    <source src={url}/>
                </video>
            </div>
        </div>   
    )
}

export default CardVideo
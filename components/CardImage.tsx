const CardImage = ({url}: {url: string}) => {

    return (
        <div className="relative m-[0 auto]">
            <div className="flex overflow-hidden w-full h-[450px] rounded-[35px]">
                <div className="min-w-full b-center-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${url})`}}></div>
            </div>
        </div>
  
    )
}

export default CardImage
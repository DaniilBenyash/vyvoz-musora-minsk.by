type indicatorPropsType = {
    amount: number,
    activeNumber: number,
}

const Indicator = ({amount, activeNumber}: indicatorPropsType) => {
    const array = []

    for(let i = 0; i <= amount; i++){
        array.push(i)
    }

    return (
        <div className="absolute flex bottom-[20px] right-[calc(50%-36px)]">
                {array.map((el, id) => {
                    return(
                        <div key={el} className={`${activeNumber === id ? 'bg-white' : 'bg-zinc-500'} w-[8px] h-[8px] rounded-[50%] mr-[8px]`}></div>    
                    )
                })}
        </div>    
    )
}

export default Indicator
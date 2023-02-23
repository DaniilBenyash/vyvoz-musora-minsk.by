type TitleProps = {
    name: string,
}

const Title = ({name}: TitleProps) => {
    return (
        <div>
            <h2 className="text-[45px] font-bold leading-none mobile:text-[35px]">{name}</h2>
            <div className="w-[100px] h-[5px] rounded-full bg-[#FFAB27] my-[30px]"></div>
        </div>    
    )
}

export default Title
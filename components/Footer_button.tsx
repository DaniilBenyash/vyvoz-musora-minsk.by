import Image from "next/image"

type FooterButtonProps = {
    url: string,
    href: string,
}

const Footer_button = ({url, href}: FooterButtonProps) => {
    return (
        <a href={href} className="flex items-center ml-[15px]">
            <div className='bg-[#FFAB27] p-[8px] rounded-full'>
                <Image src={url} width={30} height={30} alt={'icon'}/>
            </div>
        </a>    
    )
}

export default Footer_button
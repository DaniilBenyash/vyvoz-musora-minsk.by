import Title from "./Title"
import Image from "next/image"
import Footer_button from "./Footer_button"

type contacts = Array<{
    id: number,
    url: string,
    href: string,
}>

const contacts = [
    {
        id: 1,
        url: '/footer_image/telegram.png',
        href: "https://t.me/vyvozmusoraminskby",
    },
    {
        id: 2,
        url: '/footer_image/viber.png',
        href: "viber://chat?number=%2B375447751576",
    },
    {
        id: 3,
        url: '/footer_image/instagram.png',
        href: "https://www.instagram.com/vyvoz.musora.minsk/",
    },
]

const Footer = () => {
    return (
        <footer className="mt-[100px] pb-[50px]">
            <Title name='Наши контакты'/>
            <div className="flex justify-between items-center text-xl font-medium mobile:text-xl border-b-[2px] border-[#FFAB27] py-[20px] mb-[20px] tablet:flex-col">
                <a href="tel:+375447751576" className="flex items-center tablet: mb-[20px]">
                    <div className='bg-[#FFAB27] p-[8px] rounded-full'>
                        <Image src='/footer_image/phone.png' width={30} height={30} alt={'phone'}/>
                    </div>
                    <h2 className="ml-[10px]">+375 (44) 775-15-76</h2>
                </a>
                <div className="flex">
                    {contacts.map(el => {
                        return (
                            <Footer_button url={el.url} href={el.href} key={el.id}/>
                        )
                    })
                    }
                </div>
            </div>
        </footer>    
    )
}

export default Footer
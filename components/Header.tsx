import Image from "next/image"

const Header = () => {
    return (
        <header className="flex justify-between items-center h-[100px] text-2xl font-medium mobile:text-xl">
            <div className="flex items-center">
                <Image src='/logo.svg' width={80} height={80} alt='logo' className="hidden mr-[10px] tablet:block"/>
                <h2>VYVOZ-MUSORA-MINSK.BY</h2>
            </div>
            
            <a href="tel:+375447751576" className="flex items-center">
                <Image src='/phone.png' width={40} height={40} alt={'phone'}/>
                <h2 className="ml-[10px] tablet:hidden">+375 (44) 775-15-76</h2>
            </a>
        </header>        
    )
}

export default Header
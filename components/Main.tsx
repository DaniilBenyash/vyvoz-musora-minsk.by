import Image from "next/image"


const Main = () => {
    return (
     <div className="flex justify-between items-center h-[calc(100vh-100px)] tablet:h-auto tablet:pt-[100px]">
        <div>
            <h1 className="text-[55px] font-bold leading-[65px] mobile:text-[40px] mobile:leading-[45px]">Вывоз строительного<br/>мусора</h1>
            <div className="flex items-center  mt-8 mb-10 text-2xl mobile:text-xl">
                <div className="w-[50px] h-[3px] rounded-full bg-[#FFAB27] mr-[16px]"></div>
                в Минске и Минской обл.</div>
            <div className="flex mobile:flex-col">
                <div className="flex items-center mr-16">
                    <Image src='/main_image/worker.png' alt='worker' width={60} height={60} className='mr-4'/>
                    <p className="text-xl font-medium leading-6 mobile:text-lg mobile:leading-5">Опытные<br/>грузчики</p>
                </div>
                <div className="flex items-center">
                    <Image src='/main_image/car.png' alt='worker' width={60} height={60} className='mr-4'/>
                    <p className="text-xl font-medium leading-6 mobile:text-lg mobile:leading-5">Вывоз любой<br/>сложности</p>
                </div>
            </div>
            <button className="text-xl font-medium py-[18px] px-[54px] bg-[#FFAB27] rounded-full mt-10 tablet:hidden">Узнать стоимость</button>
        </div>
        <div>
            <Image src='/logo.svg' alt='logo' width={450} height={450} className='tablet:hidden'/>
        </div>
     </div>    
    )
}

export default Main
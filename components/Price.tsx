import Title from "./Title"

const Price = () => {
    return (
        <section className="price w-full tablet:mt-[100px]">
            <Title name='Стоимость вывоза'/>
            <div className="bg-white shadow-2xl p-[50px] rounded-[40px] mobile:px-[30px]">
                <table className="w-full text-center">
                    <tbody className="">
                        <tr className='text-[35px] text-left leading-none mobile:text-[25px]'>
                            <th colSpan={2} className='pb-[15px]'>Автомобиль (без грузчиков)</th>
                        </tr>
                        <tr>
                            <td colSpan={2} className='pb-[10px] text-lg font-medium text-[#FFAB27]'>ВАЖНО!!! Вес мешков 30 кг</td>
                        </tr>
                        <tr className="border-b-[2px] border-[#FFAB27] text-xl font-medium leading-6 mobile:text-lg mobile:leading-5">
                            <th className='pb-[10px]'>Объем</th>
                            <th className='pb-[10px]'>Цена</th>
                        </tr>
                        <tr className='border-b-[2px] border-[#FFAB27] text-2xl mobile:text-xl'>
                            <td className='py-[8px]'>до 1 т. (3 м<sup>3</sup>)<br/> (до 30 мешков)</td>
                            <td className='py-[8px]'>от 100 р.</td>
                        </tr>
                        <tr className='border-b-[2px] border-[#FFAB27] text-2xl mobile:text-xl'>
                            <td className='py-[8px]'>до 1.5 т. (5 м<sup>3</sup>)<br/> (до 50 мешков)</td>
                            <td className='py-[8px]'>от 150 р.</td>
                        </tr>
                        <tr className='border-b-[2px] border-[#FFAB27] text-2xl mobile:text-xl'>
                            <td className='py-[8px]'>до 2 т. (7 м<sup>3</sup>)<br/> (до 70 мешков)</td>
                            <td className='py-[8px]'>от 200 р.</td>
                        </tr>
                        <tr className='border-b-[2px] border-[#FFAB27] text-2xl mobile:text-xl'>
                            <td className='py-[8px]'>до 3 т. (10 м<sup>3</sup>)<br/> (до 100 мешков)</td>
                            <td className='py-[8px]'>от 250 р.</td>
                        </tr>
                        <tr className='border-b-[2px] border-[#FFAB27] text-2xl mobile:text-xl'>
                            <td className='py-[8px]'>до 4–5 т. (15–19 м<sup>3</sup>)<br/> (120–160 мешков)</td>
                            <td className='py-[8px]'>от 300–370 р.</td>
                        </tr>
                        <tr className='border-b-[2px] border-[#FFAB27] text-2xl mobile:text-xl'>
                            <td className='py-[8px]' colSpan={2}>Объёмный лёгкий мусор (картон, мебель, деревянные полы и др.) оценивается по занятому объёму, а не по мешкам</td>
                        </tr>

                        <tr className='text-[35px] text-left leading-none mobile:text-[25px]'>
                            <th colSpan={2} className='pb-[5px] pt-[40px]'>Грузчики</th>
                        </tr>
                      
                        <tr className="border-b-[2px] border-[#FFAB27] text-xl font-medium leading-6 mobile:text-lg mobile:leading-5">
                            <th className='pb-[10px]'>Услуга</th>
                            <th className='pb-[10px]'>Цена</th>
                        </tr>
                        <tr className='border-b-[2px] border-[#FFAB27] text-2xl mobile:text-xl'>
                            <td className='py-[8px]'>Выезд бригады</td>
                            <td className='py-[8px]'>35 р.</td>
                        </tr>
                        <tr className='border-b-[2px] border-[#FFAB27] text-2xl mobile:text-xl'>
                            <td className='py-[8px]'>Мешок пешком (хрущёвки)</td>
                            <td className='py-[8px]'>50 коп./этаж</td>
                        </tr>
                        <tr className='border-b-[2px] border-[#FFAB27] text-2xl mobile:text-xl'>
                            <td className='py-[8px]'>Мешок пешком (сталинки)</td>
                            <td className='py-[8px]'>60 коп./этаж</td>
                        </tr>
                        <tr className='border-b-[2px] border-[#FFAB27] text-2xl mobile:text-xl'>
                            <td className='py-[8px]'>Мешок на лифте</td>
                            <td className='py-[8px]'>1 р.</td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
            <p className="mt-[10px]">!!! Цена за вывоз мусора указана в пределах МКАД. Стоимость услуги за пределами МКАД уточняйте по телефону.</p>
        </section>    
    )
}

export default Price

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
                        <tr className="border-b-[2px] border-[#FFAB27] text-xl font-medium leading-6 mobile:text-lg mobile:leading-5">
                            <th className='pb-[10px]'>Объем</th>
                            <th className='pb-[10px]'>Цена</th>
                        </tr>
                        <tr className='border-b-[2px] border-[#FFAB27] text-2xl mobile:text-xl'>
                            <td className='py-[8px]'>до 500 кг / 1 - 2 м<sup>3</sup><br/> (до 15 мешков)</td>
                            <td className='py-[8px]'>60 р.</td>
                        </tr>
                        <tr className='border-b-[2px] border-[#FFAB27] text-2xl mobile:text-xl'>
                            <td className='py-[8px]'>до 1 т. / 3 - 4 м<sup>3</sup><br/> (до 30 мешков)</td>
                            <td className='py-[8px]'>75 р.</td>
                        </tr>
                        <tr className='border-b-[2px] border-[#FFAB27] text-2xl mobile:text-xl'>
                            <td className='py-[8px]'>до 2 т. / 6 - 7 м<sup>3</sup><br/> (до 60 мешков)</td>
                            <td className='py-[8px]'>110 р.</td>
                        </tr>
                        <tr className='border-b-[2px] border-[#FFAB27] text-2xl mobile:text-xl'>
                            <td className='py-[8px]'>до 3 т. / 10 м<sup>3</sup><br/> (до 90 мешков)</td>
                            <td className='py-[8px]'>170 р.</td>
                        </tr>
                        <tr className='border-b-[2px] border-[#FFAB27] text-2xl mobile:text-xl'>
                            <td className='py-[8px]'>до 4-6 т. / 12 - 20 м<sup>3</sup><br/> (120 - 180 мешков)</td>
                            <td className='py-[8px]'>200 - 300 р.</td>
                        </tr>

                        <tr className='text-[35px] text-left leading-none mobile:text-[25px]'>
                            <th colSpan={2} className='pb-[15px] pt-[40px]'>Грузчики</th>
                        </tr>
                        <tr className="border-b-[2px] border-[#FFAB27] text-xl font-medium leading-6 mobile:text-lg mobile:leading-5">
                            <th className='pb-[10px]'>Услуга</th>
                            <th className='pb-[10px]'>Цена</th>
                        </tr>
                        <tr className='border-b-[2px] border-[#FFAB27] text-2xl mobile:text-xl'>
                            <td className='py-[8px]'>Выезд</td>
                            <td className='py-[8px]'>от 30 р.</td>
                        </tr>
                        <tr className='border-b-[2px] border-[#FFAB27] text-2xl mobile:text-xl'>
                            <td className='py-[8px]'>Мешок (ходка) на лифте</td>
                            <td className='py-[8px]'>70 коп.</td>
                        </tr>
                        <tr className='border-b-[2px] border-[#FFAB27] text-2xl mobile:text-xl'>
                            <td className='py-[8px]'>Мешок (ходка) пешком - 1 этаж</td>
                            <td className='py-[8px]'>35 коп.</td>
                        </tr>
                        <tr className='border-b-[2px] border-[#FFAB27] text-2xl mobile:text-xl'>
                            <td className='py-[8px]'>Часовые работы</td>
                            <td className='py-[8px]'>от 15 р./ч.</td>
                        </tr>

                        <tr className='text-[35px] text-left leading-none mobile:text-[25px]'>
                            <th colSpan={2} className='pb-[15px] pt-[40px]'>Грузоперевозки</th>
                        </tr>
                        <tr className="border-b-[2px] border-[#FFAB27] text-xl font-medium leading-6 mobile:text-lg mobile:leading-5">
                            <th className='pb-[10px]'>Место</th>
                            <th className='pb-[10px]'>Цена</th>
                        </tr>
                        <tr className='border-b-[2px] border-[#FFAB27] text-2xl mobile:text-xl'>
                            <td className='py-[8px]'>В черте города</td>
                            <td className='py-[8px]'>30 р. / 2 часа</td>
                        </tr>
                        <tr className='border-b-[2px] border-[#FFAB27] text-2xl mobile:text-xl'>
                            <td className='py-[8px]'>За пределы МКАД</td>
                            <td className='py-[8px]'>от 2 р./км</td> 
                        </tr>
                    </tbody>
                </table>
                
            </div>
            <p className="mt-[10px]">!!! Цена за вывоз мусора указана в пределах МКАД. Стоимость услуги за пределами МКАД уточняйте по телефону.</p>
        </section>    
    )
}

export default Price

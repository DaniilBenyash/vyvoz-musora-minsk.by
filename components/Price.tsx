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
                            <td className='py-[8px]'>до 1 т. / 3 - 4 м<sup>3</sup><br/> (до 30 мешков)</td>
                            <td className='py-[8px]'>60 руб.</td>
                        </tr>
                        <tr className='border-b-[2px] border-[#FFAB27] text-2xl mobile:text-xl'>
                            <td className='py-[8px]'>до 2 т. / 6 - 7 м<sup>3</sup><br/> (до 60 мешков)</td>
                            <td className='py-[8px]'>100 руб.</td>
                        </tr>
                        <tr className='border-b-[2px] border-[#FFAB27] text-2xl mobile:text-xl'>
                            <td className='py-[8px]'>до 3-5 т. / 10 - 20 м<sup>3</sup><br/> (90 - 150 мешков)</td>
                            <td className='py-[8px]'>130 - 180 руб.</td>
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
                            <td className='py-[8px]'>от 25 руб.</td>
                        </tr>
                        <tr className='border-b-[2px] border-[#FFAB27] text-2xl mobile:text-xl'>
                            <td className='py-[8px]'>Мешок (ходка) на лифте</td>
                            <td className='py-[8px]'>0.6 руб.</td>
                        </tr>
                        <tr className='border-b-[2px] border-[#FFAB27] text-2xl mobile:text-xl'>
                            <td className='py-[8px]'>Мешок (ходка) пешком - 1 этаж</td>
                            <td className='py-[8px]'>0.3 руб.</td>
                        </tr>
                        <tr className='border-b-[2px] border-[#FFAB27] text-2xl mobile:text-xl'>
                            <td className='py-[8px]'>Часовые работы</td>
                            <td className='py-[8px]'>от 10 руб./ч.</td>
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
                            <td className='py-[8px]'>25 руб./2 часа</td>
                        </tr>
                        <tr className='border-b-[2px] border-[#FFAB27] text-2xl mobile:text-xl'>
                            <td className='py-[8px]'>За пределы МКАД</td>
                            <td className='py-[8px]'>от 1.5 руб./км.</td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
            <p className="mt-[10px]">!!! Цена за вывоз мусора указана в пределах МКАД. Стоимость услуги за пределами МКАД уточняйте по телефону.</p>
        </section>    
    )
}

export default Price
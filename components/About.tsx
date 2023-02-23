import Title from "./Title"
import Card from "./Card"

const About = () => {
    return (
        <section className="mt-[100px]">
            <Title name='О нас'/>
            <p className="max-w-full bg-white p-[30px] shadow-2xl rounded-[30px] text-2xl mobile:text-xl">Если у вас накопился строительный мусор или вещи, от которых вы хотите поскорее избавиться, и вы не знаете, куда его деть?</p>
            <div className="my-[50px] grid grid-cols-2 justify-items-center gap-[50px] mobile:grid-cols-1">
                <Card text='Мы предоставим вам нужный автомобиль и опытных грузчиков'/>
                <Card text='Готовы взяться за любой объем'/>
                <Card text='Вывезем хлам как из многоквартирного жилого дома в черте города, так и из сельской местности, либо дачного участка'/>
                <Card text='Наши главные качества: НАДЕЖНОСТЬ И ЧЕСТНОСТЬ'/>
            </div>
        </section>    
    )
}

export default About
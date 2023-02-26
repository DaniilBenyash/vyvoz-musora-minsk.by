import About from "../components/About"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Main from "../components/Main"
import Price from "../components/Price"

const Home = () =>  {
  return (
    <div className="bg-[#efefef] text-[#314252] flex flex-col items-center w-full">
      <div className="max-w-[1300px] px-[100px] mobile:px-[20px]">
        <Header/>
        <Main/>
        <Price/>
        <About/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
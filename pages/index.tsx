import Header from "../components/Header"
import Main from "../components/Main"
import Price from "../components/Price"

const Home = () =>  {
  return (
    <div className="bg-[#efefef] text-[#314252] flex flex-col items-center w-full">
      <div className="mw-[1100px] px-[100px] mobile:px-[20px]">
        <Header/>
        <Main/>
        <Price/>
      </div>
    </div>
  )
}

export default Home
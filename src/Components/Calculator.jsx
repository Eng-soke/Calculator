import { useState } from "react"
function Caculator (){

        const [number, setNumber]= useState("")

        const handleClick = (e)=>{
            setNumber(number.concat(e.target.value))
        }

        const handleClear = ()=>{
            setNumber("")
        }

        const handleSplice = ()=>{
            setNumber(number.slice(0, -1))
        }

        const handleResult = ()=>{
            try{
                setNumber(eval(number).toString())
            }catch(error){
                setNumber("Invalid")
            }
        }




    return <div className="bg-[#a98467]  w-[250px] h-[380px]  my-[100px] sm:ml-[500px] ml-[80px] py-3  border-2 border-gray-500 ">

        <div>

      
        <div className=" w-[238px] h-[80px] border-2 border-gray-500 ml-1">
            <input value={number} className="w-[234px] h-[76px] text-end text-4xl hover:bg-gray-500 " type="text" placeholder=""></input>
        </div>


        <div className="grid grid-cols-4 mx-1">
            <button  onClick={handleClear} className="bg-white w-[50px] h-[40px]  hover:bg-green-500 text-4xl rounded m-2">AC</button>
            <button  onClick={handleSplice} className="bg-white w-[50px] h-[40px]  hover:bg-green-500 text-4xl rounded m-2">C</button>
            <button value="/" onClick={handleClick} className="bg-white w-[50px]  hover:bg-green-500 h-[40px] text-4xl rounded m-2">/</button>
            <button value="+" onClick={handleClick} className="bg-white w-[50px]  hover:bg-green-500 h-[100px] text-4xl rounded row-span-2 m-2">+</button>


         
            <button value="1" onClick={handleClick} className="bg-blue-500 w-[50px]  hover:bg-green-500 h-[40px] text-4xl rounded m-2">1</button>
            <button value="2" onClick={handleClick} className="bg-blue-500 w-[50px]  hover:bg-green-500 h-[40px] text-4xl rounded m-2">2</button>
            <button value="3" onClick={handleClick} className="bg-blue-500 w-[50px]  hover:bg-green-500 h-[40px] text-4xl rounded m-2">3</button>


            <button value="4" onClick={handleClick} className="bg-blue-500 w-[50px]  hover:bg-green-500 h-[40px] text-4xl rounded m-2">4</button>
            <button value="5" onClick={handleClick} className="bg-blue-500 w-[50px]   hover:bg-green-500 h-[40px] text-4xl rounded m-2">5</button>
            <button value="6" onClick={handleClick} className="bg-blue-500 w-[50px]  hover:bg-green-500 h-[40px] text-4xl rounded m-2">6</button>
            <button value="-" onClick={handleClick} className="bg-white w-[50px]  hover:bg-green-500 h-[40px] text-4xl rounded m-2">-</button>


            <button value="7" onClick={handleClick} className="bg-blue-500 w-[50px]  hover:bg-green-500 h-[40px] text-4xl rounded m-2">7</button>
            <button value="8" onClick={handleClick} className="bg-blue-500 w-[50px]  hover:bg-green-500 h-[40px] text-4xl rounded m-2">8</button>
            <button value="9" onClick={handleClick} className="bg-blue-500 w-[50px]  hover:bg-green-500 h-[40px] text-4xl rounded m-2">9</button>
            <button value="*" onClick={handleClick} className="bg-white w-[50px]  hover:bg-green-500 h-[40px] text-4xl rounded m-2">*</button>

            <button value="." onClick={handleClick} className="bg-blue-500 w-[50px]  hover:bg-green-500 h-[40px] text-4xl rounded m-2">.</button>
            <button value="0" onClick={handleClick} className="bg-blue-500 w-[50px]  hover:bg-green-500 h-[40px] text-4xl rounded m-2">0</button>
            <button  onClick={handleResult} className="bg-white w-[110px] h-[40px] hover:bg-green-500 text-4xl rounded m-2 col-span-2">=</button>
            
            
        </div>
        </div>
    </div>
}
export default Caculator
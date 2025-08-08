function Login() {
  return (
   <>
   <div className="w-full h-[40vh] flex justify-center items-center my-[20px]">
        <div className="w-full bg-[#fde0e0] h-[90%] flex flex-col justify-around items-center p-[10px]">
            <div className="flex justify-center bg-[#f55f5f] p-[1rem] rounded-2xl">
                <h1 className="inter-500 text-white text-xl">Login or SignUp</h1>
            </div>
            <div>
                 <img src="./google.svg" alt=""  className="w-[50px] bg-white p-[0.5rem]"/>
            </div>
        </div>
    </div></>
  );
}

export default Login;
'use client'
import Link from "next/link";
import React,{ useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Loading from "@/components/loading/loader";

//richpanelbe-production.up.railway.app


export default function Home() {
  


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  // let duplicate = "Duplicate emails/usernames not allowed!";

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      console.log(name,email,password);
      setLoading(true);
      const response = await axios.post('https://ivykids.onrender.com/api/user/signUp', {
        name: name,
        email: email,
        password: password,

      });
      setLoading(false);

      console.log(response)
      if (response.status === 201) {
        localStorage.setItem("authorization", JSON.stringify(response.data.token));
        localStorage.setItem("userId", JSON.stringify(response.data.userId));
        router.push('/home');
        console.log("SignUp success");
      }} 
      catch (error) {
        console.error('Login error:', error.response.data);
        alert(error.response.data.message);
      }
  };


  return (
    <div className="bg-[#000000] flex min-h-screen justify-center items-center flex-col gap-10">
      <div className='jutify-center items-center flex mb-20 font-extrabold text-white text-4xl'>TWITTER<span className='font-normal ml-2'>IVY</span></div>
      <div className="flex bg-white rounded-2xl p-12 flex-col">    
      
        <div className="flex justify-center mb-6 text-xl">Create Account</div>
        <form onSubmit={handleSignUp}>


        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">User Name</label>
          <input 
            type="text" 
            className="w-[300px] px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Username"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            type="email" 
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@email.com"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input 
            type="password" 
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Minimum 9 Characters"
          />
        </div>

        {/* <div className="mb-10">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              value={rememberMe}
              onChange={(e) => setRememberMe(e.target.value)}
            />
            <span className="text-sm text-gray-700">Remember me</span>
          </label>
        </div> */}

        {/* <Link href="plans"> */}
          <button 
            className={`${loading?'bg-gray-500':'bg-[#000000]'} text-white px-4 py-2 w-full mt-4`} 
            type="submit"
          >
            {loading ? <Loading /> : 'Sign Up'}
          </button>
        {/* </Link> */}
        </form>


        <div className="flex justify-center mt-6 text-xs">Already have an account?<Link href="login" className="ml-[4px] text-[#2B4C8C]">Login</Link></div>

      </div>
    </div>

  )
}
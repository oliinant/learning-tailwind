import { Link } from "react-router-dom";
import "./Login.css"


const Login = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="p-[48px] border-[rgb(92, 88, 88)] border-[1px] rounded-[10px] bg-white">
                <h1 className="text-center text-[30px] font-bold mb-[15px]">Login</h1>

                <form className="flex flex-col">
                    <div className="relative">
                        <input
                            id="username-email"
                            name="username-email"
                            className="input-style"
                        />

                        <label htmlFor="username-email" className="input-label">
                            Username or Email
                        </label>
                    </div>

                    <div className="relative">
                        <input
                            id="password"
                            name="password"
                            className="input-style"
                        />

                        <label htmlFor="password" className="input-label">
                            Password
                        </label>
                    </div>

                    <div className="flex justify-between mb-[15px]">
                        <div className="flex items-center gap-[4px]">
                            <button
                                id="remember-me"
                                type="button"
                                className="cursor-pointer mt-[2.7px] w-[15px] h-[15px] border-[1px] border-[#d7d6d6] rounded-[2px]"
                            >
                                <div className="relative"></div>
                                <div className=""></div>
                                <div className=""></div>
                            </button>

                            <label htmlFor="remember-me" className="cursor-pointer">
                                Remember me
                            </label>
                        </div>

                        <Link to="/">Forgot password?</Link>
                    </div>

                    <button type="submit" className="w-[300px] h-[45px] bg-[#5c5858] rounded-[10px] mb-[15px] hover:bg-[#4A4A4A]">Login</button>

                </form>

                <Link to="/">Create an account</Link>
            </div>
        </div>
    )
}

export default Login;
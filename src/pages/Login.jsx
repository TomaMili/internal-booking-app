import { Link } from "react-router-dom";
import LoginSection from "../features/authentication/LoginSection";

function Login() {
  return (
    <div className="min-h-screen flex flex-col gap-20 items-center justify-center px-4 bg-[url(/blurry-gradient-haikei.svg)] bg-cover">
      <img src="/vite.svg" width={100} className="absolute top-10 right-10" />
      <div className="bg-zinc-600/50 bg-opacity-60 rounded-2xl p-10 max-w-md w-full shadow-xl">
        <h1 className="text-4xl text-white font-semibold text-center">
          Log in
        </h1>
        <LoginSection />
        <p className="mt-6 text-center text-gray-300">
          Don’t have an account?{" "}
          <Link
            to="/info"
            className="text-red-600 hover:text-red-500 transition-all duration-300"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

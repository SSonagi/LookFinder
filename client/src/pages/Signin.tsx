import { useNavigate } from "react-router-dom";

const Signin = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-start min-h-[calc(100vh-6rem)] w-screenbg-base-300 py-10">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm font-RobotoSlab">
                <h2 className="text-xl mb-6 text-center">Sign in</h2>
                <form className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="input"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="input"
                        required
                    />
                    <button
                        type="submit"
                        className="btn btn-info font-semibold"
                    >
                        Sign in
                    </button>
                </form>
                <div className="flex items-center my-4">
                  <div className="flex-grow h-px bg-gray-300" />
                  <span className="mx-2 text-gray-400 text-sm">Not a member?</span>
                  <div className="flex-grow h-px bg-gray-300" />
                </div>
                <button
                    className="btn btn-secondary w-full"
                    onClick={() => navigate('/register')}
                >
                    Register
                </button>
            </div>
        </div>
    );
}

export default Signin;
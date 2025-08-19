
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        setError("");
    };

    return (
        <div className="flex flex-col items-center justify-start min-h-[calc(100vh-6rem)] w-screenbg-base-300 py-10">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm font-RobotoSlab">
                <h2 className="text-xl mb-6 text-center">Register</h2>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        className="input"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="input"
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="input"
                        required
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                    />
                    {error && <div className="text-red-500 text-sm text-center">{error}</div>}
                    <button
                        type="submit"
                        className="btn btn-info font-semibold"
                    >
                        Register
                    </button>
                </form>
                <div className="flex items-center my-4">
                  <div className="flex-grow h-px bg-gray-300" />
                  <span className="mx-2 text-gray-400 text-sm">Already a member?</span>
                  <div className="flex-grow h-px bg-gray-300" />
                </div>
                <button
                    className="btn btn-secondary w-full"
                    onClick={() => navigate('/signin')}
                >
                    Sign in
                </button>
            </div>
        </div>
    );
}

export default Register;

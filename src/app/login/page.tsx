"use client";
import { login } from "@/store/authSlice";
import { emailSignIn, googleSignIn } from "@/utils/firebaseAuth";
import { useDispatch } from "react-redux";

const Login = () => {
    const dispatch = useDispatch();

    const handleGoogleSignIn = async () => {
        const result = await googleSignIn();
        dispatch(
            login({
                email: result.user.email,
                photoURL: result.user.photoURL,
                displayName: result.user.displayName,
            })
        );
    };

    const handleEmailSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        const email = (e.target as HTMLFormElement)["email"].value;
        const password = (e.target as HTMLFormElement)["password"].value;

        const result = await emailSignIn(email, password);
        dispatch(
            login({
                email: result.user.email,
                photoURL: result.user.photoURL,
                displayName: result.user.displayName,
            })
        );
    };

    return (
        <div className="p-4 max-w-md mx-auto">
            <h2 className="text-2xl mb-4 text-center font-bold">Login</h2>
            <button
                onClick={handleGoogleSignIn}
                className="mt-4 w-full border  p-2 rounded-full mb-3"
            >
                <img
                    src="/images.jpeg"
                    alt="Google"
                    className="w-6 h-6 inline mr-2"
                />
                Google bilan tizimga kirish
            </button>
            <form
                onSubmit={handleEmailSignIn}
                className="space-y-4 flex flex-col items-center "
            >
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full p-2 text-black border rounded-2xl"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full p-2 border text-black rounded-2xl"
                />
                <button
                    type="submit"
                    className="w-60 bg-blue-600 text-white p-2 rounded-full"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;

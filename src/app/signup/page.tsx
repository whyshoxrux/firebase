"use client";
import { useDispatch } from "react-redux";
import { emailSignUp, googleSignIn } from "@/utils/firebaseAuth";
import { login } from "@/store/authSlice";

const Signup = () => {
    const dispatch = useDispatch();

    const handleGoogleSignUp = async () => {
        const result = await googleSignIn();
        dispatch(
            login({
                email: result.user.email,
                photoURL: result.user.photoURL,
                displayName: result.user.displayName,
            })
        );
    };

    const handleEmailSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        const email = (e.target as HTMLFormElement)["email"].value;
        const password = (e.target as HTMLFormElement)["password"].value;
        console.log(email, password);
        const result = await emailSignUp(email, password);
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
            <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
            <button
                onClick={handleGoogleSignUp}
                className="mt-4 w-full border p-2 rounded-full mb-3"
            >
                <img
                    src="/images.jpeg"
                    alt="Google"
                    className="w-6 h-6 inline mr-2"
                />
                Google bilan tizimga kirish
            </button>
            <form
                onSubmit={handleEmailSignUp}
                className="space-y-4 flex flex-col items-center"
            >
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full text-black p-2 border rounded-2xl"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full text-black p-2 border rounded-2xl"
                />
                <button
                    type="submit"
                    className="w-60 bg-blue-600 text-white p-2 rounded-full"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Signup;

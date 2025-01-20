"use client";
import { useSelector, useDispatch } from "react-redux";
import { signOutUser } from "@/utils/firebaseAuth";
import { RootState } from "@/store/store";
import { logout } from "@/store/authSlice";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const user = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();
    const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

    const handleLogout = async () => {
        await signOutUser();
        dispatch(logout());
        setProfileMenuOpen(false);
    };

    const toggleProfileMenu = () => {
        setProfileMenuOpen(!isProfileMenuOpen);
    };

    return (
        <nav className="container p-4  h-16 flex justify-between items-center">
            <h1 className="text-xl font-bold">Hello</h1>
            {user.email ? (
                <div className="relative">
                    <img
                        src={user.photoURL || ""}
                        alt="Profile"
                        className="w-8 h-8 rounded-full cursor-pointer"
                        onClick={toggleProfileMenu}
                    />
                    {isProfileMenuOpen && (
                        <div className="absolute right-0 mt-1 w-48 bg-white rounded-md  border p-3">
                            <div className="text-sm mb-2">
                                <p className="font-bold">
                                    {user.displayName || user.email}
                                </p>
                                <p className="text-gray-500 line-clamp-1 ">
                                    {user.email}
                                </p>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="w-full px-4 py-2 bg-gray-600 rounded-md text-white"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="space-x-4 text-white">
                    <Link
                        href="/login"
                        className="px-4 py-2 bg-blue-600 rounded-md"
                    >
                        Login
                    </Link>
                    <Link
                        href="/signup"
                        className="px-4 py-2 bg-green-600 rounded-md"
                    >
                        Sign Up
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

"use client";
import MyContextProvider from "@/Provider/MyContextProvider";

export default function ClientProviders({ children }) {
    return (
        <MyContextProvider>
            {children}
        </MyContextProvider>
    );
}
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const SignInForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    function handleEnterButton() {
        router.replace("/home");
    }

    return (
        <>
            <input
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                placeholder="Digite sua senha"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleEnterButton}>Entrar</button>
        </>
    );
};

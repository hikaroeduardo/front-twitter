"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const SignInForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    function handleEnterButton() {
        router.replace("/home");
    }

    return (
        <>
            <Input
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(t) => setEmail(t)}
            />

            <Input
                placeholder="Digite sua senha"
                password
                value={password}
                onChange={(t) => setPassword(t)}
            />

            <Button size={1} label="Entrar" onClick={handleEnterButton} />
        </>
    );
};

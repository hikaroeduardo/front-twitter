import Link from "next/link";

import { Logo } from "@/components/ui/logo";
import { SignUpForm } from "@/components/auth/signup-form";

export default function SignUp() {
    return (
        <div className="max-w-lg mx-auto mt-12 px-6">
            <Logo size={56} />

            <h1 className="mt-10 text-2xl">Crie a sua conta</h1>

            <div className="mt-10 mb-14 flex flex-col gap-6">
                <SignUpForm />
            </div>

            <div className="flex flex-col justify-center items-center gap-1 md:flex-row">
                <div className="text-gray-500">Ja tem uma conta?</div>
                <Link href="/signin" className="hover:underline">
                    Entrar no Z
                </Link>
            </div>
        </div>
    );
}
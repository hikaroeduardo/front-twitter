import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Z",
    description: "Sua rede social!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body>{children}</body>
        </html>
    );
}

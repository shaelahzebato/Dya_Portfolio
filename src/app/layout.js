import { Poppins, Quicksand } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-poppins", // Variable CSS pour Tailwind
});

const quicksand = Quicksand({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-quicksand",
});

export const metadata = {
    title: "Mon CV en ligne",
    description: "Portfolio et CV en ligne avec Next.js",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body className={`${poppins.variable} ${quicksand.variable} font-poppins antialiased`}>
                {children}
            </body>
        </html>
    );
}

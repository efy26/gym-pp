import Body from "@/components/Body";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";
import I18nProviderWrapper from "@/components/I18nProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <I18nProviderWrapper>
                    <ClientProviders>
                        <Body>{children}</Body>
                    </ClientProviders>
                </I18nProviderWrapper>
            </body>
        </html>
    );
}
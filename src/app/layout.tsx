import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "../styles/globals.css";
import FloatingCTA from "@/components/FloatingCTA";

const font = GeistSans;

export const metadata: Metadata = {
	title: "Websitein",
	description: "Solusi Website Keren dan Modern",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<link rel="icon" href="/assets/logo.png" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<body className={font.className}>{children}
				<FloatingCTA />
			</body>
		</html>
	);
}

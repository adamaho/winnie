import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Button } from "winnie-react/button";

import { ThemeConfigurator } from "./theme-configurator";

import "./globals.css";
import "./layout.css";

import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Winnie",
	description: "Personal Design System",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} light`}
				w-theme=""
				w-accent-color="purple"
				w-radius-scale="medium"
				w-scale="100"
			>
				<div className="app">
					<header className="header">
						<ThemeConfigurator />
					</header>
					<main className="main">{children}</main>
				</div>
			</body>
		</html>
	);
}

import type { Metadata } from "next";

import { Inter } from "next/font/google";
import Link from "next/link";
import { Button } from "winnie-react/button";

import { ThemeConfigurator } from "./theme-configurator";

import "./globals.css";
import "./layout.css";

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
		<html lang="en" className="light">
			<body className={inter.className}>
				<div className="app" w-accent-color="purple">
					<header className="header">
						<nav className="nav">
							<Button displayAsChild color="grey" variant="ghost">
								<Link href="/primitives/button">Button</Link>
							</Button>
							<Button displayAsChild color="grey" variant="ghost">
								<Link href="/primitives/command">Command</Link>
							</Button>
							<Button displayAsChild color="grey" variant="ghost">
								<Link href="/primitives/popover">Popover</Link>
							</Button>
							<Button displayAsChild color="grey" variant="ghost">
								<Link href="/primitives/text">Text</Link>
							</Button>
						</nav>
						<ThemeConfigurator />
					</header>
					<main className="main">{children}</main>
				</div>
			</body>
		</html>
	);
}

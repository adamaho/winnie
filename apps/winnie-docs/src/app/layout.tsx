import type { Metadata } from "next";

import { Inter } from "next/font/google";
import Link from "next/link";
import { Button } from "winnie-react/button";

import { ThemeConfigurator } from "./theme-configurator";

import styles from "./layout.module.css";

import "./globals.css";

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
				<div className={styles.app} w-accent-color="purple">
					<header className={styles.header}>
						<nav className={styles.nav}>
							<Button displayAsChild color="grey" variant="ghost">
								<Link href="/primitives/button">Button</Link>
							</Button>
							<Button displayAsChild color="grey" variant="ghost">
								<Link href="/primitives/command">Command</Link>
							</Button>
							<Button displayAsChild color="grey" variant="ghost">
								<Link href="/primitives/popover">Popover</Link>
							</Button>
						</nav>
						<ThemeConfigurator />
					</header>
					<main className={styles.main}>{children}</main>
				</div>
			</body>
		</html>
	);
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Button } from "winnie-react/button";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Winnie",
	description: "Personal Design System",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="light">
			<body className={inter.className} w-accent-color="purple">
				<div className="demo">{children}</div>
				<Button displayAsChild variant="ghost">
					<Link href="/">Back</Link>
				</Button>
			</body>
		</html>
	);
}

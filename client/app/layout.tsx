import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black"}
      >
        {children}
      </body>
    </html>
  );
}

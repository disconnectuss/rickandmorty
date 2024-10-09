import "./styles/globals.css";
export const metadata = {
  title: "Rick and Morty Characters",
  description: "Filter and view Rick and Morty characters",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="p-5 mb-5 bg-gray-800 text-white text-center">
          <h1 className="text-5xl font-bold">Rick and Morty Character App</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

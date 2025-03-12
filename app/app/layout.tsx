export default function Layout({ children }) {
    return (
        <html>
            <head>
                <title>Next.js Tests</title>
            </head>
            <body>
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}
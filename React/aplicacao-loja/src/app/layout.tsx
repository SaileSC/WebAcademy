export const metadata = {
  title: 'Web Academy',
}
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}

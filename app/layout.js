import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Super Vibes Records',
  description: 'Your perfect record label',
}
import { NavBar } from './components/NavBar';
import { MyProvider } from './data/Provider';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar></NavBar>
        <MyProvider>
        {children}
        </MyProvider>
      </body>
    </html>
  )
}

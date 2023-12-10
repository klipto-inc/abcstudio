import { Inter } from 'next/font/google'
import Head from 'next/head'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="/assets/css/main.css"/>
       
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

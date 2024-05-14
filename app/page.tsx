'use client'

import Navbar from "@/components/Navbar/Navbar"
import HomePage from "@/components/HomePage/HomePage"
import About from "@/components/About/About"
import Work from "@/components/Work/Work"
import Contact from "@/components/Contact/Contact"
import Footer from "@/components/Footer/Footer"

export default function Home() {
  return (
    <main className="text-TXT h-[100%] flex flex-col bg-BG">
      <Navbar/>
      <HomePage/>
      <About/>
      <Work/>
      <Contact/>
      <Footer/>
    </main>
  )
}

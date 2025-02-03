import { Benefits } from "@/components/section/Benefit/Benefits";
import Hero from "@/components/section/Hero/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Hero id="top" />
      <Benefits id="benefits" />
    </div>
  )
}

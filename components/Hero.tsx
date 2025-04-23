import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-24 bg-gradient-to-b from-white to-gray-100">
      <h1 className="text-4xl md:text-6xl font-bold max-w-3xl">
        Hi, I'm Alex — Fullstack Developer & Problem Solver.
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-xl">
        I build accessible, scalable web applications with modern tech stacks.
      </p>
      <Button asChild className="mt-6">
        <Link href="/projects">View Projects</Link>
      </Button>
    </section>
  );
}

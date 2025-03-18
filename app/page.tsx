import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center max-w-3xl mx-auto px-4 my-16 font-serif">

        <TextGenerateEffect
            words="Welcome to KiSA, the Kenyans in STEM Association. Our mission is to empower Kenyans in STEM both locally and globally.
            Understanding the rapidly evolving technosphere and the need to leverage resources to succeed in STEM,
            KiSA aims to unite Kenyans in STEM and help them achieve professional and personal success in their careers"
            className="text-4xl"
        />
        <div className="mt-6">
            <img src="KiSA 2024 in Review.png"/>
            <p className="text-xl mt-3 font-semibold text-start">KiSA 2024 in Review</p>
        </div>
    </div>
  )
}

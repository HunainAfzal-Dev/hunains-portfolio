// import Main from "./(client)/home/page";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import iamge from "./public/assets/handsome-muscular-blond-male-white-t-shirt-holds-dumbbell-grey-artistic-backgroundk 1.png"

export default function Home() {
  return (
    <>
      {/* <div className="p-8 h-screen w-sc" >
      <Main />
    </div> */}
      <section className="bg-neutral-700 text-white py-20">
        <div className=" container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Achieve Your <span className="text-red-500">FITNESS GOALS</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-8">
              With FitMaker
            </h2>
            <p className="mb-8">
              Join the Fitmaker community and transform your fitness journey.
              Our expert coaches and personalized programs are designed to help
              you achieve your goals and exceed your expectations. Ready to make
              a change?
            </p>
            <div className="flex gap-4">
              <Link
                href="/programs"
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-md"
              >
                Start Your Journey
              </Link>
              <Link
                href="/programs"
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-md"
              >
                Explore Programs
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <Image
              src={iamge}
              alt="Hero image"
              width={500}
              height={500}
              className="rounded-full"
            />
            <div className="flex flex-col justify-center items-center mt-8">
              <div className="bg-red-500 text-white px-4 py-2 rounded-md mb-4">
                <span className="font-bold">+ 1300</span>
                <span className="text-sm"> Success Stories</span>
              </div>
              <div className="bg-gray-800 text-white px-4 py-2 rounded-md">
                <span className="font-bold">+ 500</span>
                <span className="text-sm">Expert Coaches</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

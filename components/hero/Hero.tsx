import Image from 'next/image'
import HeroActions from './HeroActions'

// Define delay function
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// Convert component to async (Server Component)
const Hero = async () => {
  // Force the program to wait 6 seconds
  await delay(2000)
  // Can be replaced with real data fetching later
  // const campData = await fetch('https://api.yourcamp.com/data').then(res => res.json())
  return (
    <section className="max-container padding-container flex flex-col gap-20 bg-green-500 py-10 pb-32 xs:bg-orange-500 sm:bg-yellow-500 md:gap-28 md:bg-green-500 lg:bg-blue-500 lg:py-20 xl:flex-row xl:bg-indigo-500 2xl:bg-purple-500 3xl:bg-pink-500 4xl:bg-black">
      <div className="hero-map" />
      <div className="relative z-20 flex flex-1 flex-col bg-green-200 xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] h-10 w-10 lg:h-[50px] lg:w-[50px]"
          unoptimized
        />
        <h1 className="bold-52 lg:bold-88">Putuk Truno Camp Area</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of seeing the
          incorruptible beauty of nature. We can help you on an adventure around the world in just
          one app.
        </p>
        <div className="my-11 flex flex-wrap items-center gap-5 bg-red-500">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  key={index}
                  src="/star.svg"
                  alt="star"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                  unoptimized
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>
        <HeroActions />
      </div>
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image
                src="/close.svg"
                alt="close"
                width={24}
                height={24}
                className="h-6 w-6"
                unoptimized
              />
            </div>
            <p className="bold-20 text-white">Aguas Calientes</p>
          </div>
          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

'use client'
import { PEOPLE_URL } from '@/constants'
import { motion } from 'framer-motion'

const Camp = () => {
  return (
    <section className="2xl:max-container flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20 2xl:bg-[#12377800]">
      {/* Wrap content with motion.div */}
      <div className="overflow-hidden">
        {' '}
        {/* Outer overflow hidden */}
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -2000 }} // Left constraint should be calculated based on content length or obtained dynamically
          className="flex h-[340px] w-full cursor-grab items-start justify-start gap-8 active:cursor-grabbing lg:h-[400px] xl:h-[640px]"
        >
          <CampSite
            backgroundImage="bg-bg-img-2"
            title="Putuk Truno Camp"
            subtitle="Prigen, Pasuruan"
            peopleJoined="50+ Joined"
          />
          <CampSite
            backgroundImage="bg-bg-img-1"
            title="Mountain View Camp"
            subtitle="Somewhere in the Wilderness"
            peopleJoined="50+ Joined"
          />
          <CampSite
            backgroundImage="bg-bg-img-2"
            title="Mountain View Camp"
            subtitle="Somewhere in the Wilderness"
            peopleJoined="50+ Joined"
          />
        </motion.div>
      </div>
      {/*
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
      </div>
      */}
      {/* Text content below the campsites */}
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="relative w-full overflow-hidden rounded-3xl bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new climbing location, the
            possibility of getting lost is very large. That's why we are here for those of you who
            want to start an adventure
          </p>
          <img
            draggable={false}
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  )
}

// interface CampProps {
//   backgroundImage: string
//   title: string
//   subtitle: string
//   peopleJoined: string
// }

type CampSiteProps = {
  backgroundImage: string
  title: string
  subtitle: string
  peopleJoined: string
}

/**
 * CampSite component — displays a styled campsite card with a background image, title area,
 * and a people/avatars section showing how many users have joined.
 *
 * @param backgroundImage - A string of Tailwind/CSS classes (typically a background image class)
 *   applied to the outer container to set the background visual.
 * @param title - Primary title text displayed in the image title area.
 * @param subtitle - Secondary subtitle text shown beneath the title.
 * @param peopleJoined - Number or string representing how many people have joined; rendered next to avatars.
 * @returns JSX.Element - The rendered campsite card element.
 */
const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampSiteProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        {/* Image title */}
        <div className="flexCenter gap-4 bg-[#45777800]">
          <div className="rounded-full bg-green-50 p-4">
            <img draggable={false} src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
        {/* People avatars and joined count */}
        <div className="flexCenter gap-6 bg-[#99777800]">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <img
                draggable={false}
                className="inline-block h-10 w-10 rounded-full object-cover"
                src={url}
                key={url}
                alt="person"
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  )
}

export default Camp

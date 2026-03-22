import { Button, BUTTON_VARIANTS } from '../ui'
import Image from 'next/image'

const GET_APP_BUTTONS = [
  {
    title: 'App Store',
    icon: '/apple.svg',
    variant: BUTTON_VARIANTS.WHITE,
  },
  {
    title: 'Play Store',
    icon: '/android.svg',
    variant: BUTTON_VARIANTS.DARK_GREEN_OUTLINE,
  },
] as const

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col bg-red-400 pb-[100px]">
      <div className="get-app bg-blue-300">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12 bg-yellow-200">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Get for free now!</h2>
          <p className="regular-16 text-gray-10">Available on iOS and Android</p>
          {/* Button group */}
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            {GET_APP_BUTTONS.map((btn) => (
              <Button
                key={btn.title}
                type="button"
                title={btn.title}
                icon={btn.icon}
                variant={btn.variant}
                full
              />
            ))}
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Image
            src="/phones.png"
            alt="phones"
            width={550}
            height={870}
            priority // If this image is on the first screen (Above the fold), adding this can improve LCP performance.
            className="h-auto w-full max-w-[550px] object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default GetApp

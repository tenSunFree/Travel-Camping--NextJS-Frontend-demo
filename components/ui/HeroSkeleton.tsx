const HeroSkeleton = () => {
  return (
    <section className="max-container padding-container flex animate-pulse flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      {/* Left section: Text content skeleton */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        {/* Camp Icon skeleton */}
        <div className="absolute left-[-5px] top-[-30px] h-10 w-10 rounded-full bg-slate-200 lg:h-[50px] lg:w-[50px]" />
        {/* Title skeleton (h1) */}
        <div className="mb-4 h-14 w-3/4 rounded-lg bg-slate-200 lg:h-24" />
        <div className="h-14 w-1/2 rounded-lg bg-slate-200 lg:h-24" />
        {/* Description text skeleton (p) */}
        <div className="mt-6 space-y-3">
          <div className="h-4 w-full rounded bg-slate-200 xl:max-w-[520px]" />
          <div className="h-4 w-full rounded bg-slate-200 xl:max-w-[480px]" />
          <div className="h-4 w-2/3 rounded bg-slate-200" />
        </div>
        {/* Rating and star skeleton */}
        <div className="my-11 flex flex-wrap items-center gap-5">
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-6 w-6 rounded-full bg-slate-200" />
            ))}
          </div>
          <div className="h-6 w-32 rounded bg-slate-200" />
        </div>
        {/* Button skeleton */}
        <div className="flex w-full flex-col gap-3 sm:flex-row">
          <div className="h-[52px] w-full rounded-full bg-slate-200 sm:w-[180px]" />
          <div className="h-[52px] w-full rounded-full bg-slate-200 sm:w-[180px]" />
        </div>
      </div>
      {/* Right section: Card skeleton */}
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-slate-200 px-7 py-8">
          <div className="flex flex-col gap-2">
            <div className="h-4 w-20 rounded bg-slate-300" />
            <div className="h-6 w-32 rounded bg-slate-300" />
          </div>
          <div className="flex justify-between">
            <div className="space-y-2">
              <div className="h-3 w-16 rounded bg-slate-300" />
              <div className="h-5 w-20 rounded bg-slate-300" />
            </div>
            <div className="space-y-2">
              <div className="h-3 w-16 rounded bg-slate-300" />
              <div className="h-5 w-20 rounded bg-slate-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSkeleton

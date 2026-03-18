import { Skeleton } from '@/components/ui/Skeleton'

const HeroSkeleton = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      {/* Left section: Text content skeleton */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        {/* Camp Icon skeleton */}
        <Skeleton className="absolute left-[-5px] top-[-30px] h-10 w-10 rounded-full lg:h-[50px] lg:w-[50px]" />
        {/* Title skeleton (h1) */}
        <Skeleton className="mb-4 h-14 w-3/4 lg:h-24" />
        <Skeleton className="h-14 w-1/2 lg:h-24" />
        {/* Description text skeleton (p) */}
        <div className="mt-6 space-y-3">
          <Skeleton className="h-4 w-full xl:max-w-[520px]" />
          <Skeleton className="h-4 w-full xl:max-w-[480px]" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        {/* Rating and star skeleton */}
        <div className="my-11 flex flex-wrap items-center gap-5">
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-6 w-6 rounded-full" />
            ))}
          </div>
          <Skeleton className="h-6 w-32" />
        </div>
        {/* Button skeleton */}
        <div className="flex w-full flex-col gap-3 sm:flex-row">
          <Skeleton className="h-[52px] w-full rounded-full sm:w-[180px]" />
          <Skeleton className="h-[52px] w-full rounded-full sm:w-[180px]" />
        </div>
      </div>
      {/* Right section: Card skeleton */}
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-slate-100 px-7 py-8">
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-6 w-32" />
          </div>
          <div className="flex justify-between">
            <div className="space-y-2">
              <Skeleton className="h-3 w-16" />
              <Skeleton className="h-5 w-20" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-3 w-16" />
              <Skeleton className="h-5 w-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSkeleton

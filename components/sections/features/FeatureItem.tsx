import Image from 'next/image'

type FeatureItemProps = {
  title: string
  icon: string
  description: string
}

const FeatureItem = ({ title, icon, description }: FeatureItemProps) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start bg-blue-300">
      <div className="rounded-full bg-green-50 p-4 lg:p-7">
        <Image
          src={icon}
          alt={title}
          width={28}
          height={28}
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  )
}

export default FeatureItem

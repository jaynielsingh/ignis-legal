import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Branding And Logo Design',
    description:
      'Create a custom logo and branding for your website.  This will help you stand out from the competition and make your website memorable.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Custom website design',
    description:
      'Create a custom website design that is tailored to your brand and meets your specific needs, including a responsive layout, easy navigation, and a modern and visually appealing design.',
    icon: LockClosedIcon,
  },
  {
    name: 'Domain & Hosting',
    description:
      'Host your website on a reliable and secure domain name provider.  This will ensure that your website is accessible and secure from the internet.',
    icon: ArrowPathIcon,
  },
  {
    name: ' Digital Marketing  ',
    description:
      'Leverage digital marketing strategies to promote your website and increase traffic.  This will help you reach a wider audience and drive more traffic to your website.',
    icon: FingerPrintIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-lightBlue py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-deepBlue">Why Ignis Legal?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight capitalize text-gray-900 sm:text-4xl">
            Elevate your digital footprint with next gen technology.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Say goodbye to outdated wordpress websites and say hello to Ignis Legal.  We leverage the latest web technologies to help you build your next project.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-warmGold">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

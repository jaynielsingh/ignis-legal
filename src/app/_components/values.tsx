import React from "react";
import {
  AcademicCapIcon,
  CheckCircleIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon,
  PuzzlePieceIcon,
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
  WrenchScrewdriverIcon,
  CodeBracketIcon,
  HashtagIcon
} from "@heroicons/react/20/solid";
import { CodeBracketSquareIcon } from "@heroicons/react/24/outline";

const values = [
  {
    name: "Tailored Design for Legal Professionals",
    description:
      "Unlike generic web design companies, Ignis Legal focuses exclusively on creating websites for law firms. We understand the nuances of legal services and build designs that emphasize trust, professionalism, and clarity—key elements for legal clients.",
    icon: CodeBracketSquareIcon,
  },
  {
    name: "SEO Optimization for Local Searches",
    description:
      "We optimize your site specifically for local search to attract clients in your area. By incorporating SEO strategies tailored to the legal industry, Ignis Legal ensures that potential clients can easily find your practice online.",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "Ongoing Support and Maintenance",
    description:
      "Ignis Legal doesn’t just build your site and walk away. We offer ongoing support and maintenance packages to ensure your website remains updated, secure, and optimized as your firm grows and your needs evolve.",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Social Media Integration and Marketing Support.",
    description:
      "We integrate your social media profiles into the website and offer guidance on social media strategies tailored for law firms. This cross-platform presence can help build brand awareness and credibility in your local community.",
    icon: HashtagIcon,
  },
  // {
  //   name: "Share everything you know.",
  //   description:
  //     "Laudantium tempora sint ut consectetur ratione. Ut illum ut rem numquam fuga delectus.",
  //   icon: SparklesIcon,
  // },
  // {
  //   name: "Enjoy downtime.",
  //   description:
  //     "Culpa dolorem voluptatem velit autem rerum qui et corrupti. Quibusdam quo placeat.",
  //   icon: SunIcon,
  // },
];

function Values() {
  return (
    <div className="relative isolate mx-auto py-10 px-6 lg:px-8 bg-offWhite font-serif">
      <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <img
          alt=""
          src="https://utfs.io/f/V1WyRDrhdbmHjDlKGA2wDaNz6K3PdbeyUnZVEF80BXQfIgtA"
          className="aspect-[9/4] w-full object-cover xl:rounded-3xl"
        />
      </div>

      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-coolGray sm:text-4xl">
            Our values
          </h2>
          <p className="mt-6 text-lg leading-8 text-coolGray">
          Our team understands that your time is valuable, so we focus on providing seamless, efficient solutions that let you concentrate on what matters most: serving your clients. Legal Web uses a sophisticated design approach with a refined color palette, ensuring your website not only stands out but also reflects the integrity and professionalism of your practice. Whether you’re looking to refresh your current site or build a new online presence, we are here to make it happen, hassle-free.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-coolGray sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
          {values.map((value) => (
            <div key={value.name} className="relative pl-9">
              <dt className="inline font-semibold text-coolGray">
                <value.icon
                  aria-hidden="true"
                  className="absolute left-1 top-1 h-5 w-5 text-warmGold"
                />
                {value.name}
              </dt>{" "}
              <dd className="inline">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default Values;

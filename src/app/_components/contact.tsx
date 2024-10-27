/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { type NextRequest, type NextResponse } from 'next/server'


export default async function Contact(req: NextRequest, res: NextResponse) {




  return (
    <div className="relative isolate bg-deepBlue px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-xl lg:max-w-4xl">
        <h2 className="text-4xl font-bold tracking-tight text-offWhite">Let’s talk about your project</h2>
        <p className="mt-2 text-lg leading-8 text-offWhite">
          We help companies and individuals build out their brand guidelines.
        </p>
        <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
          <form action="#" method="POST" className="lg:flex-auto">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-offWhite">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-offWhite shadow-sm ring-1 ring-inset ring-offWhite placeholder:text-offWhite focus:ring-2 focus:ring-inset focus:ring-warmGold sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-offWhite">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-offWhite shadow-sm ring-1 ring-inset ring-offWhite placeholder:text-offWhite focus:ring-2 focus:ring-inset focus:ring-warmGold sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-semibold leading-6 text-offWhite">
                  Budget
                </label>
                <div className="mt-2.5">
                  <input
                    id="budget"
                    name="budget"
                    type="text"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-offWhite shadow-sm ring-1 ring-inset ring-offWhite placeholder:text-offWhite focus:ring-2 focus:ring-inset focus:ring-warmGold sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="website" className="block text-sm font-semibold leading-6 text-offWhite">
                  Website
                </label>
                <div className="mt-2.5">
                  <input
                    id="website"
                    name="website"
                    type="url"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-offWhite shadow-sm ring-1 ring-inset ring-offWhite placeholder:text-offWhite focus:ring-2 focus:ring-inset focus:ring-warmGold sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-offWhite">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-offWhite shadow-sm ring-1 ring-inset ring-offWhite placeholder:text-offWhite focus:ring-2 focus:ring-inset focus:ring-warmGold sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-warmGold px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-warmGold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warmGold"
              >
                Let’s talk
              </button>
            </div>
            <p className="mt-4 text-sm leading-6 text-offWhite">
              By submitting this form, I agree to the{' '}
              <a href="/policy" className="font-semibold text-warmGold">
                privacy&nbsp;policy
              </a>
              .
            </p>
          </form>
          
        </div>
      </div>
    </div>
  )
}

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CookiePolicyPage() {
  return (
    <main className="flex-1 bg-gray-950">
      <section className="py-12 md:py-16 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
              Cookie <span className="text-gold-500">Policy</span>
            </h1>
            <p className="max-w-[700px] text-gray-400 md:text-lg">Last updated: May 16, 2025</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center text-gold-500 hover:text-gold-400 transition-colors mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>

            <div className="prose prose-invert prose-gold max-w-none">
              <h2>What Are Cookies</h2>
              <p>
                As is common practice with almost all professional websites, this site uses cookies, which are tiny
                files that are downloaded to your computer, to improve your experience. This page describes what
                information they gather, how we use it and why we sometimes need to store these cookies. We will also
                share how you can prevent these cookies from being stored however this may downgrade or 'break' certain
                elements of the site's functionality.
              </p>

              <h2>How We Use Cookies</h2>
              <p>
                We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no
                industry standard options for disabling cookies without completely disabling the functionality and
                features they add to this site. It is recommended that you leave on all cookies if you are not sure
                whether you need them or not in case they are used to provide a service that you use.
              </p>

              <h2>The Cookies We Set</h2>
              <h3>Account related cookies</h3>
              <p>
                If you create an account with us then we will use cookies for the management of the signup process and
                general administration. These cookies will usually be deleted when you log out however in some cases
                they may remain afterwards to remember your site preferences when logged out.
              </p>

              <h3>Login related cookies</h3>
              <p>
                We use cookies when you are logged in so that we can remember this fact. This prevents you from having
                to log in every single time you visit a new page. These cookies are typically removed or cleared when
                you log out to ensure that you can only access restricted features and areas when logged in.
              </p>

              <h3>Email newsletters related cookies</h3>
              <p>
                This site offers newsletter or email subscription services and cookies may be used to remember if you
                are already registered and whether to show certain notifications which might only be valid to
                subscribed/unsubscribed users.
              </p>

              <h3>Forms related cookies</h3>
              <p>
                When you submit data to through a form such as those found on contact pages or comment forms cookies may
                be set to remember your user details for future correspondence.
              </p>

              <h3>Site preferences cookies</h3>
              <p>
                In order to provide you with a great experience on this site we provide the functionality to set your
                preferences for how this site runs when you use it. In order to remember your preferences we need to set
                cookies so that this information can be called whenever you interact with a page is affected by your
                preferences.
              </p>

              <h2>Third Party Cookies</h2>
              <p>
                In some special cases we also use cookies provided by trusted third parties. The following section
                details which third party cookies you might encounter through this site.
              </p>
              <ul>
                <li>
                  This site uses Google Analytics which is one of the most widespread and trusted analytics solutions on
                  the web for helping us to understand how you use the site and ways that we can improve your
                  experience. These cookies may track things such as how long you spend on the site and the pages that
                  you visit so we can continue to produce engaging content.
                </li>
                <li>
                  From time to time we test new features and make subtle changes to the way that the site is delivered.
                  When we are still testing new features these cookies may be used to ensure that you receive a
                  consistent experience whilst on the site whilst ensuring we understand which optimizations our users
                  appreciate the most.
                </li>
                <li>
                  We also use social media buttons and/or plugins on this site that allow you to connect with your
                  social network in various ways. For these to work, social media sites including Facebook, Twitter, and
                  LinkedIn, will set cookies through our site which may be used to enhance your profile on their site or
                  contribute to the data they hold for various purposes outlined in their respective privacy policies.
                </li>
              </ul>

              <h2>More Information</h2>
              <p>
                Hopefully that has clarified things for you and as was previously mentioned if there is something that
                you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does
                interact with one of the features you use on our site.
              </p>
              <p>
                However if you are still looking for more information then you can contact us through one of our
                preferred contact methods:
              </p>
              <p>
                Email: <a href="mailto:cookies@developerslog.com">cookies@developerslog.com</a>
                <br />
                Address: 123 Developer Street, San Francisco, CA 94103, USA
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1 bg-gray-950">
      <section className="py-12 md:py-16 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
              Privacy <span className="text-gold-500">Policy</span>
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
              <h2>Introduction</h2>
              <p>
                Welcome to Developer's Log. We respect your privacy and are committed to protecting your personal data.
                This privacy policy will inform you about how we look after your personal data when you visit our
                website and tell you about your privacy rights and how the law protects you.
              </p>

              <h2>The Data We Collect About You</h2>
              <p>
                Personal data, or personal information, means any information about an individual from which that person
                can be identified. We may collect, use, store and transfer different kinds of personal data about you
                which we have grouped together as follows:
              </p>
              <ul>
                <li>
                  <strong>Identity Data</strong> includes first name, last name, username or similar identifier.
                </li>
                <li>
                  <strong>Contact Data</strong> includes email address and telephone numbers.
                </li>
                <li>
                  <strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type
                  and version, time zone setting and location, browser plug-in types and versions, operating system and
                  platform, and other technology on the devices you use to access this website.
                </li>
                <li>
                  <strong>Usage Data</strong> includes information about how you use our website and services.
                </li>
              </ul>

              <h2>How We Use Your Personal Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal
                data in the following circumstances:
              </p>
              <ul>
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>
                  Where it is necessary for our legitimate interests (or those of a third party) and your interests and
                  fundamental rights do not override those interests.
                </li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally
                lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to
                your personal data to those employees, agents, contractors and other third parties who have a business
                need to know.
              </p>

              <h2>Data Retention</h2>
              <p>
                We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we
                collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or
                reporting requirements.
              </p>

              <h2>Your Legal Rights</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal
                data, including:
              </p>
              <ul>
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Right to withdraw consent.</li>
              </ul>

              <h2>Third-Party Links</h2>
              <p>
                This website may include links to third-party websites, plug-ins and applications. Clicking on those
                links or enabling those connections may allow third parties to collect or share data about you. We do
                not control these third-party websites and are not responsible for their privacy statements.
              </p>

              <h2>Changes to the Privacy Policy</h2>
              <p>
                We may update our privacy policy from time to time. We will notify you of any changes by posting the new
                privacy policy on this page and updating the "Last updated" date at the top of this privacy policy.
              </p>

              <h2>Contact Us</h2>
              <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
              <p>
                Email: <a href="mailto:privacy@developerslog.com">privacy@developerslog.com</a>
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

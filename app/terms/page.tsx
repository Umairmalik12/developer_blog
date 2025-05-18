import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsOfServicePage() {
  return (
    <main className="flex-1 bg-gray-950">
      <section className="py-12 md:py-16 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
              Terms of <span className="text-gold-500">Service</span>
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
                Welcome to Developer's Log. These terms and conditions outline the rules and regulations for the use of
                our website.
              </p>
              <p>
                By accessing this website, we assume you accept these terms and conditions in full. Do not continue to
                use Developer's Log if you do not accept all of the terms and conditions stated on this page.
              </p>

              <h2>License</h2>
              <p>
                Unless otherwise stated, Developer's Log and/or its licensors own the intellectual property rights for
                all material on Developer's Log. All intellectual property rights are reserved.
              </p>
              <p>
                You may view and/or print pages from the website for your own personal use subject to restrictions set
                in these terms and conditions.
              </p>
              <p>You must not:</p>
              <ul>
                <li>Republish material from this website</li>
                <li>Sell, rent or sub-license material from this website</li>
                <li>Reproduce, duplicate or copy material from this website</li>
                <li>
                  Redistribute content from Developer's Log (unless content is specifically made for redistribution)
                </li>
              </ul>

              <h2>User Comments</h2>
              <p>
                Certain parts of this website offer the opportunity for users to post and exchange opinions,
                information, material and data. Developer's Log does not screen, edit, publish or review Comments prior
                to their appearance on the website and Comments do not reflect the views or opinions of Developer's Log,
                its agents or affiliates.
              </p>
              <p>
                Developer's Log reserves the right to monitor all Comments and to remove any Comments which it considers
                in its absolute discretion to be inappropriate, offensive or otherwise in breach of these Terms and
                Conditions.
              </p>
              <p>You warrant and represent that:</p>
              <ul>
                <li>
                  You are entitled to post the Comments on our website and have all necessary licenses and consents to
                  do so;
                </li>
                <li>
                  The Comments do not infringe any intellectual property right, including without limitation copyright,
                  patent or trademark, or other proprietary right of any third party;
                </li>
                <li>
                  The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful
                  material or material which is an invasion of privacy;
                </li>
                <li>
                  The Comments will not be used to solicit or promote business or custom or present commercial
                  activities or unlawful activity.
                </li>
              </ul>

              <h2>Hyperlinking to our Content</h2>
              <p>The following organizations may link to our website without prior written approval:</p>
              <ul>
                <li>Government agencies;</li>
                <li>Search engines;</li>
                <li>News organizations;</li>
                <li>
                  Online directory distributors when they list us in the directory may link to our website in the same
                  manner as they hyperlink to the websites of other listed businesses;
                </li>
                <li>
                  Systemwide Accredited Businesses except soliciting non-profit organizations, charity shopping malls,
                  and charity fundraising groups which may not hyperlink to our website.
                </li>
              </ul>

              <h2>Reservation of Rights</h2>
              <p>
                We reserve the right at any time and in its sole discretion to request that you remove all links or any
                particular link to our website. You agree to immediately remove all links to our website upon such
                request.
              </p>

              <h2>Disclaimer</h2>
              <p>
                To the maximum extent permitted by applicable law, we exclude all representations, warranties and
                conditions relating to our website and the use of this website (including, without limitation, any
                warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of
                reasonable care and skill).
              </p>
              <p>Nothing in this disclaimer will:</p>
              <ul>
                <li>limit or exclude our or your liability for death or personal injury resulting from negligence;</li>
                <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
              </ul>

              <h2>Contact Information</h2>
              <p>If you have any questions about these Terms of Service, please contact us:</p>
              <p>
                Email: <a href="mailto:terms@developerslog.com">terms@developerslog.com</a>
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

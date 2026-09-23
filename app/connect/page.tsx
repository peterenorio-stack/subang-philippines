import Link from "next/link";
import { ArrowUpRight, Mail, Phone, Facebook, Instagram } from "lucide-react";
import { Header, Footer } from "../components";

export default function Connect() {
  return (
    <>
      <Header />

      <main className="bg-white">
        {/* Hero */}
        <section className="bg-maroon text-white">
          <div className="container-wide py-20 md:py-28">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-gold">
                Connect With Us
              </p>

              <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
                Let’s Create Change Together
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
                Subang Philippines welcomes young people, volunteers,
                communities, schools, local governments, organizations, and
                institutions who want to contribute to meaningful community
                action.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
                Whether you want to volunteer, explore a partnership, invite
                Subang Philippines to an activity, or simply learn more about
                our work, we would be glad to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="section-pad">
          <div className="container-wide">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-maroon">
                Get Involved
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
                There is a place for you in the movement.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="border border-black/10 bg-sand p-8">
                <h3 className="text-xl font-extrabold text-ink">
                  Become a Volunteer
                </h3>

                <p className="mt-4 leading-7 text-ink/70">
                  Interested in becoming part of Subang Philippines? Our Human
                  Resource team handles membership inquiries and the process for
                  those who want to join the organization.
                </p>

                <a
                  href="mailto:subangph.humanresource@gmail.com"
                  className="mt-6 inline-flex items-center gap-2 font-bold text-maroon"
                >
                  Contact Human Resource
                  <ArrowUpRight size={17} />
                </a>
              </div>

              <div className="border border-black/10 bg-sand p-8">
                <h3 className="text-xl font-extrabold text-ink">
                  Partner With Us
                </h3>

                <p className="mt-4 leading-7 text-ink/70">
                  We welcome partnerships with schools, communities, government
                  offices, civil society organizations, and other institutions
                  working toward sustainable and resilient communities.
                </p>

                <a
                  href="mailto:subangphilippines@gmail.com"
                  className="mt-6 inline-flex items-center gap-2 font-bold text-maroon"
                >
                  Explore a Partnership
                  <ArrowUpRight size={17} />
                </a>
              </div>

              <div className="border border-black/10 bg-sand p-8">
                <h3 className="text-xl font-extrabold text-ink">
                  Invite Subang Philippines
                </h3>

                <p className="mt-4 leading-7 text-ink/70">
                  Have an upcoming program, training, community initiative, or
                  youth activity where our team can contribute? Get in touch
                  with us and tell us how we can collaborate.
                </p>

                <a
                  href="mailto:subangphilippines@gmail.com"
                  className="mt-6 inline-flex items-center gap-2 font-bold text-maroon"
                >
                  Send an Invitation
                  <ArrowUpRight size={17} />
                </a>
              </div>

              <div className="border border-black/10 bg-sand p-8">
                <h3 className="text-xl font-extrabold text-ink">
                  Support Community Action
                </h3>

                <p className="mt-4 leading-7 text-ink/70">
                  Contribute through expertise, resources, networks,
                  collaboration, or other forms of support that help strengthen
                  community-driven initiatives.
                </p>

                <a
                  href="mailto:subangphilippines@gmail.com"
                  className="mt-6 inline-flex items-center gap-2 font-bold text-maroon"
                >
                  Start a Conversation
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-sand section-pad">
          <div className="container-wide">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-maroon">
                  Contact Us
                </p>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
                  Let’s start a conversation.
                </h2>

                <p className="mt-5 max-w-xl leading-7 text-ink/70">
                  For partnerships, general inquiries, invitations, and other
                  organizational concerns, you can reach Subang Philippines
                  through the channels below.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:subangphilippines@gmail.com"
                  className="group flex items-start gap-5 border border-black/10 bg-white p-6 transition hover:border-maroon"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-maroon text-white">
                    <Mail size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-ink/50">
                      General Inquiries & Partnerships
                    </p>

                    <p className="mt-1 break-all font-bold text-maroon">
                      subangphilippines@gmail.com
                    </p>
                  </div>

                  <ArrowUpRight
                    className="ml-auto mt-1 shrink-0 text-ink/30 transition group-hover:text-maroon"
                    size={18}
                  />
                </a>

                <a
                  href="mailto:subangph.humanresource@gmail.com"
                  className="group flex items-start gap-5 border border-black/10 bg-white p-6 transition hover:border-maroon"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-maroon text-white">
                    <Mail size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-ink/50">
                      Membership & Human Resource
                    </p>

                    <p className="mt-1 break-all font-bold text-maroon">
                      subangph.humanresource@gmail.com
                    </p>

                    <p className="mt-2 text-sm leading-6 text-ink/60">
                      For membership applications, inquiries, and expressions
                      of interest in becoming part of Subang Philippines.
                    </p>
                  </div>

                  <ArrowUpRight
                    className="ml-auto mt-1 shrink-0 text-ink/30 transition group-hover:text-maroon"
                    size={18}
                  />
                </a>

                <a
                  href="tel:+639205487676"
                  className="group flex items-start gap-5 border border-black/10 bg-white p-6 transition hover:border-maroon"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-maroon text-white">
                    <Phone size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-ink/50">
                      Contact Number
                    </p>

                    <p className="mt-1 font-bold text-maroon">
                      +63 920 548 7676
                    </p>
                  </div>

                  <ArrowUpRight
                    className="ml-auto mt-1 shrink-0 text-ink/30 transition group-hover:text-maroon"
                    size={18}
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="section-pad">
          <div className="container-wide">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-maroon">
                Follow Our Work
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
                Stay connected with Subang Philippines.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-ink/70">
                Follow our social media channels for community stories,
                volunteer opportunities, program updates, and announcements.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
              <a
                href="https://www.facebook.com/subangphilippines"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border border-black/10 p-6 transition hover:border-maroon hover:bg-sand"
              >
                <div className="flex h-12 w-12 items-center justify-center bg-maroon text-white">
                  <Facebook size={22} />
                </div>

                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-ink/50">
                    Facebook
                  </p>

                  <p className="mt-1 font-extrabold text-ink">
                    Subang Philippines
                  </p>
                </div>

                <ArrowUpRight
                  className="ml-auto text-ink/30 transition group-hover:text-maroon"
                  size={19}
                />
              </a>

              <a
                href="https://www.instagram.com/subangphilippines/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border border-black/10 p-6 transition hover:border-maroon hover:bg-sand"
              >
                <div className="flex h-12 w-12 items-center justify-center bg-maroon text-white">
                  <Instagram size={22} />
                </div>

                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-ink/50">
                    Instagram
                  </p>

                  <p className="mt-1 font-extrabold text-ink">
                    @subangphilippines
                  </p>
                </div>

                <ArrowUpRight
                  className="ml-auto text-ink/30 transition group-hover:text-maroon"
                  size={19}
                />
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-maroon text-white section-pad">
          <div className="container-wide">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">
                  Start a Conversation
                </p>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                  Have an idea, question, or opportunity?
                </h2>

                <p className="mt-5 leading-7 text-white/70">
                  Tell us what you have in mind. Whether it is a partnership,
                  community initiative, volunteer opportunity, or simply a
                  question about Subang Philippines, we are ready to listen.
                </p>
              </div>

              <form className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-bold"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="w-full border border-white/20 bg-white px-4 py-3 text-ink outline-none placeholder:text-ink/40 focus:border-gold"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-bold"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full border border-white/20 bg-white px-4 py-3 text-ink outline-none placeholder:text-ink/40 focus:border-gold"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="organization"
                    className="mb-2 block text-sm font-bold"
                  >
                    Organization / Institution
                  </label>

                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    className="w-full border border-white/20 bg-white px-4 py-3 text-ink outline-none placeholder:text-ink/40 focus:border-gold"
                    placeholder="Optional"
                  />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="mb-2 block text-sm font-bold"
                  >
                    I want to...
                  </label>

                  <select
                    id="interest"
                    name="interest"
                    defaultValue=""
                    className="w-full border border-white/20 bg-white px-4 py-3 text-ink outline-none focus:border-gold"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="volunteer">Become a volunteer</option>
                    <option value="partnership">
                      Explore a partnership
                    </option>
                    <option value="invite">
                      Invite Subang Philippines
                    </option>
                    <option value="support">Support an initiative</option>
                    <option value="general">Make a general inquiry</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full resize-none border border-white/20 bg-white px-4 py-3 text-ink outline-none placeholder:text-ink/40 focus:border-gold"
                    placeholder="Tell us how we can work together..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-gold px-6 py-3 font-extrabold text-ink transition hover:opacity-90"
                >
                  Send Message
                  <ArrowUpRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-white section-pad">
          <div className="container-wide text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-maroon md:text-5xl">
              Live. Create. Inspire.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-ink/65">
              Every contribution matters. Every community has a story. And
              every young person has the capacity to create change.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 border border-maroon px-6 py-3 font-bold text-maroon transition hover:bg-maroon hover:text-white"
            >
              Learn More About Subang Philippines
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

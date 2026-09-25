import { Header } from "./Header";
import { Footer } from "./Footer";
import ScrollAnimation from "./ScrollAnimation";

export default function Home() {
  return (
    <div className="min-h-screen theme-bg-primary">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 theme-bg-tertiary relative overflow-hidden">
      {/* Content */}
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold theme-text-primary mb-6">
            Young Agers
          </h1>
          <p className="text-xl md:text-2xl theme-text-secondary mb-8 max-w-3xl mx-auto">
            A community of early-career researchers working on the Maillard reaction
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <ScrollAnimation animationType="fade-up">
        <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 theme-bg-secondary">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimation animationType="fade-up" delay="delay-200">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold theme-text-primary mb-4">
                  About YoungAGErs
                </h2>
                <p className="text-lg theme-text-secondary max-w-3xl mx-auto">
                  The Young AGErs are a community of early-career researchers. Our topics are all 
                  connected to the Maillard reaction in some way and cover a wide range of areas, 
                  from biochemistry to food processing and (pre-)clinical research. Young AGErs 
                  are spread across many universities.
                </p>
              </div>
            </ScrollAnimation>
            <div className="grid md:grid-cols-3 gap-8">
              <ScrollAnimation animationType="fade-up" delay="delay-300">
                <div className="text-center">
                  <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold theme-text-primary mb-2">Biochemistry</h3>
                  <p className="theme-text-secondary">
                    Understanding the molecular mechanisms of the Maillard reaction.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animationType="fade-up" delay="delay-400">
                <div className="text-center">
                  <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold theme-text-primary mb-2">Food Processing</h3>
                  <p className="theme-text-secondary">
                    Applying Maillard reaction insights to improve food quality and safety.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animationType="fade-up" delay="delay-500">
                <div className="text-center">
                  <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold theme-text-primary mb-2">Clinical Research</h3>
                  <p className="theme-text-secondary">
                    Exploring the health implications and therapeutic potential.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Mission Section */}
      <ScrollAnimation animationType="fade-up">
        <section id="mission" className="py-16 px-4 sm:px-6 lg:px-8 theme-bg-tertiary">
          <div className="max-w-7xl mx-auto">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <ScrollAnimation animationType="fade-left">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold theme-text-primary mb-6">
                    Our Mission
                  </h2>
                  <p className="text-lg theme-text-secondary mb-6">
                    We believe that young people have the power to change the world. 
                    Our mission is to develop innovative technologies and sustainable solutions 
                    that have positive impacts on society and the environment.
                  </p>
                  <ul className="space-y-3 theme-text-secondary">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Promoting young talent in technology and innovation
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Developing sustainable and ethical technology solutions
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Building a community for knowledge sharing and mentoring
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animationType="fade-right" delay="delay-300">
                <div className="mt-8 lg:mt-0">
                  <div className="theme-card-bg rounded-lg shadow-lg p-8">
                    <h3 className="text-xl font-semibold theme-text-primary mb-4">Our Values</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium theme-text-primary">Transparency</h4>
                        <p className="text-sm theme-text-secondary">Open communication and honest collaboration</p>
                      </div>
                      <div>
                        <h4 className="font-medium theme-text-primary">Sustainability</h4>
                        <p className="text-sm theme-text-secondary">Responsible development for the future</p>
                      </div>
                      <div>
                        <h4 className="font-medium theme-text-primary">Inclusion</h4>
                        <p className="text-sm theme-text-secondary">Diversity and equality in all areas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Symposium Section */}
      <ScrollAnimation animationType="fade-up">
        <section id="symposium" className="py-16 px-4 sm:px-6 lg:px-8 theme-bg-secondary">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimation animationType="fade-up" delay="delay-200">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold theme-text-primary mb-4">
                  Young AGErs Symposium
                </h2>
                <p className="text-lg theme-text-secondary max-w-3xl mx-auto mb-8">
                  Every year, the Young AGErs Symposium takes place, providing an easily accessible platform 
                  for early career researchers to share their latest research or research plans. There is also 
                  plenty of opportunity to socialise, network and discuss our work with other Young AGErs in 
                  an informal setting.
                </p>
                <p className="text-lg theme-text-secondary max-w-3xl mx-auto mb-8">
                  This year marks the 10 year anniversary of Young AGErs. For this, we would like to invite you to the place where it all started.
                  We are happy to share with you the program of the 10th Young AGErs Symposium 2026, which will be held on October 1st and 2nd in Dresden.
                  Download the <a href="/symposiumprogrammes/2026 10th Young AGErs Symposium - Agenda.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline font-semibold">program of the 10th Young AGErs Symposium 2026 (PDF)</a>.
                </p>
                <p className="text-lg theme-text-secondary max-w-3xl mx-auto mb-8">
                  Browse our <a href="/gallery" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline font-semibold">photo gallery</a> to see impressions and highlights from past symposia, or explore the detailed programs and abstracts below to learn more about the content and structure of each event.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animationType="fade-up" delay="delay-500">
              <div className="text-center">
                <a
                  href="/symposium"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  View Symposium Programs & Abstracts
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </ScrollAnimation>

      {/* Contact Section */}
      <ScrollAnimation animationType="fade-up">
        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 theme-bg-tertiary">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimation animationType="fade-up" delay="delay-200">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold theme-text-primary mb-4">Contact</h2>
                <p className="text-lg theme-text-secondary max-w-3xl mx-auto">Questions or comments? We&apos;d love to hear from you!</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animationType="fade-up" delay="delay-300">
              <div className="max-w-lg mx-auto">
                <h3 className="text-xl font-semibold theme-text-primary mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium theme-text-primary text-lg">Email</p>
                      <p className="theme-text-secondary">young-agers@outlook.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-medium theme-text-primary text-lg">Location</p>
                      <p className="theme-text-secondary">Berlin, Germany</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </ScrollAnimation>

    <Footer />
  </div>
);
}

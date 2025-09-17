import Navigation from "@/components/navigation"
import InteractiveCursor from "@/components/interactive-cursor"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ErrorBoundary from "@/components/error-boundary"

export default function Home() {
  return (
    <ErrorBoundary>
      <InteractiveCursor />
      <Navigation />
      <main className="min-h-screen bg-base-100">
        <section id="home">
          <ErrorBoundary>
            <HeroSection />
          </ErrorBoundary>
        </section>
        <section id="about">
          <ErrorBoundary>
            <AboutSection />
          </ErrorBoundary>
        </section>
        <section id="services">
          <ErrorBoundary>
            <ServicesSection />
          </ErrorBoundary>
        </section>
        <section id="skills">
          <ErrorBoundary>
            <SkillsSection />
          </ErrorBoundary>
        </section>
        <section id="projects">
          <ErrorBoundary>
            <ProjectsSection />
          </ErrorBoundary>
        </section>
        <section id="contact">
          <ErrorBoundary>
            <ContactSection />
          </ErrorBoundary>
        </section>
      </main>
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </ErrorBoundary>
  )
}

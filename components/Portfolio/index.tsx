import React from 'react'
import Projects from './Projects'
import './Portfolio.css'

export default function Portfolio() {
  return (
    <section className="portfolio section" id="projects">
      <h2 className="section__title text-4xl text-green-500">// Projects</h2>
      <span className="section__subtitle">
        Some stuff built 🛠️ in my free time 😁
      </span>

      <Projects />
    </section>
  );
}

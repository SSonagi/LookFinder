import React from 'react';

const About = () => {
  return (
    <div className="bg-neutral text-neutral-content">
      <section className="bg-primary text-primary-content py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90">
          Redefining fashion, one look at a time.
        </p>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg leading-relaxed">
          At <strong>Looks Reimagined</strong>, our mission is to empower individuals to express
          their unique style through technology-driven, sustainable fashion. We believe that
          everyone deserves access to personalized style, and we're here to make that simple,
          affordable, and exciting.
        </p>
      </section>

      {/* Our Goal */}
      <section className="py-16 px-6 bg-accent text-accent-content">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Our Goal</h2>
          <p className="text-lg leading-relaxed">
            We aim to bridge the gap between high-end style and everyday wear. Whether you're
            looking for smart recommendations, size-accurate fits, or ethical fashion choices — our
            AI-powered platform delivers personalized style curated just for you.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
        <p className="text-lg leading-relaxed">
          We're a passionate team of creatives, technologists, and fashion lovers. With a blend of
          design, data, and cultural insight, we’re building something bigger than clothes — we’re
          building confidence.
        </p>
      </section>

      {/* What We Value */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Inclusivity</h3>
            <p>Style is for everyone — all shapes, sizes, identities, and budgets.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Sustainability</h3>
            <p>We prioritize ethical brands and conscious consumer choices.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Innovation</h3>
            <p>Cutting-edge AI and design thinking power everything we build.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Transparency</h3>
            <p>Clear sourcing, honest communication, and a commitment to our community.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center bg-secondary text-secondary-content">
        <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
        <p className="text-lg mb-6">
          Be part of a new era of fashion. Discover your look, reimagined.
        </p>
        <button className="btn bg-primary text-primary-content hover:bg-primary-focus">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default About;

import React from "react";
import Logo from "../presentational/Logo";

function About() {
  return (
    <>
      <div className=" flex justify-center">
        <div className=" max-w-5xl w-screen px-4 ">
          <section id="about-us" className="container mx-auto px-12 py-12">
            <h2 className="text-3xl font-bold text-center mb-8">
              Your News, Your Voice
            </h2>
            <p className="text-lg text-gray-700 text-center mb-8">
              We're a platform built on the belief that everyone has a story to
              tell. Our mission is to empower individuals to share their news,
              perspectives, and experiences with the world. We're not just a
              news website; we're a community where voices matter.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">What We Do</h3>
                <ul className="list-disc pl-6">
                  <li>
                    A Platform for Everyone: We provide a space for anyone to
                    share their news, whether it's a local event, a personal
                    story, or a breaking news update.
                  </li>
                  <li>
                    Community-Driven Journalism: Our platform is fueled by you.
                    Your contributions shape the news agenda and create a more
                    informed and engaged community.
                  </li>
                  <li>
                    Unfiltered News: We believe in transparency and
                    authenticity. Our platform is free from bias, allowing
                    diverse voices to be heard.
                  </li>
                  <li>
                    Connecting People: We foster a sense of community by
                    enabling users to interact with each other through comments,
                    shares, and discussions.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
                <ul className="list-disc pl-6">
                  <li>
                    Inclusivity: We celebrate diversity and welcome
                    contributions from all walks of life.
                  </li>
                  <li>
                    Transparency: We are committed to open communication and
                    building trust with our users.
                  </li>
                  <li>
                    Independence: We operate independently, free from external
                    influence.
                  </li>
                  <li>
                    Accuracy: We prioritize factual reporting and strive for
                    accuracy in all content.
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8">
              <h3 className="text-2xl font-semibold mb-4">
                Join Our Community
              </h3>
              <p>
                We invite you to become a part of our growing community. Share
                your news, engage in discussions, and connect with like-minded
                individuals. Together, we can create a more informed and engaged
                world.
              </p>
              <br />
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Become a Contributor
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
                Follow Us on Social Media
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
                Contact Us
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default About;

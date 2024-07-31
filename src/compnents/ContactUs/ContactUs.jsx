import React from "react";
import Logo from "../presentational/Logo";

function ContactUs() {
  return (
    <>
      <div className=" flex justify-center">
        <div className=" max-w-5xl w-screen px-10 ">
          <section id="contact-us" className="container mx-auto py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                <p className="text-lg text-gray-700">
                  We'd love to hear from you! Feel free to contact us with any
                  questions, comments, or suggestions.
                </p>

                <address>
                  <p>News Alert HQ</p>
                  <p>Santi Road, Salt Lake</p>
                  <p>Kolkata, West Bengal, 736133</p>
                </address>

                <p>
                  <a
                    href="mailto:contact_us@newsalert.com"
                    className="text-blue-500 hover:underline"
                  >
                    contact_us@newsalert.com
                  </a>
                  <br />
                  <a
                    href="tel:+916294923475"
                    className="text-blue-500 hover:underline"
                  >
                    +91 6294923475
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Send Us a Message
                </h3>
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                    ></textarea>
                  </div>
                  <button
                    disabled
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default ContactUs;

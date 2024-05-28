const ContactForm = () => {
  return (
    <form className="bg-white p-6 px-8 rounded-xl shadow-md w-1/3 space-y-6">
      <h2 className="text-3xl font-bold text-grey-900">Contact Us</h2>
      <section className="space-y-3">
        <div className="flex gap-3 my-3">
          <div className="space-y-2 w-1/2">
            <label
              htmlFor="firstName"
              className="block font-medium text-gray-900"
            >
              First Name{" "}
              <span className="text-green-700 font-bold ml-1">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              required
              className="w-full px-4 p-2 rounded-md border border-grey-500 focus:border-green-700 focus:outline-none"
            />
          </div>
          <div className="space-y-2 w-1/2">
            <label
              htmlFor="lastName"
              className="block font-medium text-gray-900"
            >
              Last Name <span className="text-green-700 font-bold ml-1">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              required
              className="px-4 p-2 w-full rounded-md border border-grey-500 focus:border-green-700 focus:outline-none"
            />
          </div>
        </div>
        <div>
          <div className="space-y-2 w-full">
            <label htmlFor="email" className="block font-medium text-gray-900">
              Email Address{" "}
              <span className="text-green-700 font-bold ml-1">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              className="px-4 p-2 w-full rounded-md border border-grey-500 focus:border-green-700 focus:outline-none"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block font-medium text-gray-900">
            Message <span className="text-green-700 font-bold ml-1">*</span>
          </label>
          <textarea
            id="message"
            required
            className="px-4 p-2 w-full rounded-md border border-grey-500 focus:border-green-700 focus:outline-none"
            rows={3}
          />
        </div>

        <div className="flex items-center gap-x-3">
          <input id="consent" type="checkbox" required />
          <label htmlFor="consent" className="text-grey-900 text-sm">
            I consent to being contacted by the team
            <span className="text-green-700 ml-1 font-bold">*</span>
          </label>
        </div>

        <div className="mt-3">
          <button className="bg-green-600 text-white w-full px-2 py-3 rounded-md transition-opacity hover:bg-green-600/70">
            Submit
          </button>
        </div>
      </section>
    </form>
  );
};

export default ContactForm;

const ContactForm = () => {
  return (
    <form className="bg-white p-6 px-8 rounded-xl shadow-md w-1/3">
      <h2 className="text-3xl font-bold text-grey-900">Contact Us</h2>
      <div className="flex gap-3 my-3">
        <div className="space-y-2 w-1/2">
          <label
            htmlFor="firstName"
            className="block font-medium text-gray-700"
          >
            First Name <span className="text-green-700">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full p-2 rounded-md border border-green-700 focus:border-green-700 focus:outline-none"
          />
        </div>
        <div className="space-y-2 w-1/2">
          <label htmlFor="lastName" className="block font-medium text-gray-700">
            Last Name <span className="text-green-700">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            className="p-2 w-full rounded-md border border-green-700 focus:border-green-700 focus:outline-none"
          />
        </div>
      </div>
      <div className="">
        <div className="space-y-2 w-full">
          <label htmlFor="email" className="block font-medium text-gray-700">
            Email Address <span className="text-green-700">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="p-2 w-full rounded-md border border-green-700 focus:border-green-700 focus:outline-none"
          />
        </div>
      </div>
      <div className="mt-3">
        <button className="bg-green-600 text-white w-full px-2 py-3 rounded-md transition-opacity hover:bg-green-600/70">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

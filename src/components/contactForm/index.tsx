import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "First name must be at least 3 characters" }),
  lastName: z
    .string()
    .min(3, { message: "Last name must be at least 3 characters" }),
  email: z.string().email({ message: "Invalid email" }),
  supportType: z.enum(["generalEnquiry", "supportRequest"]),
  message: z
    .string()
    .min(30, { message: "Message must be at least 30 characters" }),
  consent: z.boolean(),
});

type ContactFormType = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = useCallback((data: any) => {
    console.log("data :>> ", data);
    console.log(`Submitted..`);
    reset();
  }, []);

  return (
    <form
      className="bg-white p-6 px-8 rounded-xl shadow-md w-1/3 space-y-6"
      onSubmit={handleSubmit(onSubmit)}
    >
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
              {...register("firstName", { required: true })}
              type="text"
              id="firstName"
              required
              className={`w-full px-4 p-2 rounded-md border border-grey-500 focus:border-green-700 focus:outline-none ${
                errors.firstName && "border-red focus:border-red"
              }`}
            />
            {errors.firstName && (
              <p className="text-sm text-red">{errors.firstName.message}</p>
            )}
          </div>
          <div className="space-y-2 w-1/2">
            <label
              htmlFor="lastName"
              className="block font-medium text-gray-900"
            >
              Last Name <span className="text-green-700 font-bold ml-1">*</span>
            </label>
            <input
              {...register("lastName", { required: true })}
              type="text"
              id="lastName"
              required
              className={`px-4 p-2 w-full rounded-md border border-grey-500 focus:border-green-700 focus:outline-none ${
                errors.lastName && "border-red focus:border-red"
              }`}
            />
            {errors.lastName && (
              <p className="text-sm text-red">{errors.lastName.message}</p>
            )}
          </div>
        </div>
        <div>
          <div className="space-y-2 w-full">
            <label htmlFor="email" className="block font-medium text-gray-900">
              Email Address{" "}
              <span className="text-green-700 font-bold ml-1">*</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              required
              className={`px-4 p-2 w-full rounded-md border border-grey-500 focus:border-green-700 focus:outline-none ${
                errors.email && "border-red focus:border-red"
              }`}
            />
            {errors.email && (
              <p className="text-sm text-red">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block font-medium text-gray-900">
            Query Type <span className="text-green-700 font-bold ml-1">*</span>
          </label>
          <div className="flex gap-3 my-3">
            <div className="space-y-2 w-1/2">
              <div className="flex items-center border border-grey-500 rounded-md p-3 pl-4 gap-x-3">
                <input
                  {...register("supportType", { required: true })}
                  type="radio"
                  id="generalEnquiry"
                  required
                  className={`px-4 p-2 size-4 rounded-md border border-grey-500 focus:border-green-700 focus:outline-none ${
                    errors.firstName && "border-red focus:border-red"
                  }`}
                />
                <label htmlFor="generalEnquiry">General Enquiry</label>
              </div>
              {errors.firstName && (
                <p className="text-sm text-red">{errors.firstName.message}</p>
              )}
            </div>
            <div className="space-y-2 w-1/2">
              <div className="flex items-center border border-grey-500 rounded-md p-3 pl-4 gap-x-3">
                <input
                  {...register("supportType", { required: true })}
                  type="radio"
                  id="supportRequest"
                  required
                  className={`px-4 p-2 size-4 rounded-md border border-grey-500 focus:border-green-700 focus:outline-none ${
                    errors.lastName && "border-red focus:border-red"
                  }`}
                />
                <label htmlFor="supportRequest">Support Request</label>
              </div>

              {errors.lastName && (
                <p className="text-sm text-red">{errors.lastName.message}</p>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block font-medium text-gray-900">
            Message <span className="text-green-700 font-bold ml-1">*</span>
          </label>
          <textarea
            id="message"
            {...register("message", { required: true })}
            required
            className={`px-4 p-2 w-full rounded-md border border-grey-500 focus:border-green-700 focus:outline-none ${
              errors.message && "border-red focus:border-red"
            }`}
            rows={3}
          />
          {errors.message && (
            <p className="text-sm text-red">{errors.message.message}</p>
          )}
        </div>

        <div className="flex items-center gap-x-3">
          <input
            id="consent"
            type="checkbox"
            required
            {...register("consent", { required: true })}
          />
          <label htmlFor="consent" className="text-grey-900 text-sm">
            I consent to being contacted by the team
            <span className="text-green-700 ml-1 font-bold">*</span>
          </label>
        </div>

        <div className="mt-3">
          <button
            disabled={isSubmitting}
            className="bg-green-600 text-white w-full px-2 py-3 rounded-md transition-opacity hover:bg-green-600/70"
          >
            Submit
          </button>
        </div>
      </section>
    </form>
  );
};

export default ContactForm;

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoCallOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineMail } from "react-icons/md";
import { motion } from "motion/react";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .matches(/^[A-Za-z\s]+$/, "Only alphabets are allowed"),
  email: yup.string().email("Invalid email").required("Email is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
});

const ContactForm = () => {
  const service_id = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const template_id = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const public_key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await emailjs.send(service_id, template_id, data, public_key);
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.log(`${error}`);

      toast.error(`${error.message}. Please try again.`);
    }
  };

  return (
    <div
      id="contact"
      className="flex flex-col bg-gray-100 dark:bg-slate-800 items-center max-w-full mx-auto py-12 px-4 md:px-0"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl text-gray-900 dark:text-white font-bold mb-2 text-center"
      >
        Get In Touch !
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="text-center text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto"
      >
        Whether you have an idea, a project, or just wish to connect — I’d be
        glad to hear from you. Let’s build something impactful together.
      </motion.p>

      {/* Form + Contact Info */}
      <div className="flex items-center flex-wrap lg:flex-nowarp lg:space-x-20 md:w-3/4">
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-full lg:flex-2"
        >
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Name :</label>
            <input {...register("name")} className="border p-2 rounded" />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Email :</label>
            <input {...register("email")} className="border p-2 rounded" />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="md:col-span-2 flex flex-col">
            <label className="text-sm font-medium mb-1">Subject :</label>
            <input {...register("subject")} className="border p-2 rounded" />
            {errors.subject && (
              <span className="text-red-500 text-sm">
                {errors.subject.message}
              </span>
            )}
          </div>

          <div className="md:col-span-2 flex flex-col">
            <label className="text-sm font-medium mb-1">Message :</label>
            <textarea
              {...register("message")}
              className="border p-2 rounded max-h-100"
              rows="5"
            />
            {errors.message && (
              <span className="text-red-500 text-sm">
                {errors.message.message}
              </span>
            )}
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className=" text-white bg-gradient-to-r from-orange-400 to-orange-500 py-2.5 px-4 rounded-sm font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/30 hover:scale-105 active:scale-95"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col justify-center space-y-6 text-gray-700 dark:text-white lg:flex-1 py-10"
        >
          <div className="flex space-x-5">
            <div className="text-2xl text-orange-400">
              <IoCallOutline />
            </div>
            <div className="flex flex-col space-y-3">
              <h4 className="font-medium">Phone</h4>
              <a
                href="phone:+916359021290"
                className="text-sm text-gray-500 dark:text-gray-400"
              >
                +91 6359021290
              </a>
            </div>
          </div>
          <div className="flex space-x-5">
            <div className="text-2xl mb-4 text-orange-400">
              <MdOutlineMail />
            </div>
            <div className="flex flex-col space-y-3">
              <h4 className="font-medium">Email</h4>
              <a
                href="mailto:hemanshup2002@gmail.com"
                className="text-sm text-gray-500 dark:text-gray-400"
              >
                hemanshup2002@gmail.com
              </a>
            </div>
          </div>
          <div className="flex space-x-5">
            <div className="text-2xl mb-4 text-orange-400">
              <SlLocationPin />
            </div>
            <div className="flex flex-col space-y-3">
              <h4 className="font-medium">Location</h4>
              <a
                href="https://www.google.co.in/maps/place/16,+behind+Jalaram+Mandir,+Jalaram+Nagar,+Meghpar+Borichi,+Gujarat+370110/@23.0870883,70.0703095,19z/data=!3m1!4b1!4m6!3m5!1s0x3950b9e792580ff5:0xb59e71d26eff9ebb!8m2!3d23.0870883!4d70.0709532!16s%2Fg%2F11vtb4rf6h?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
                className="text-sm text-gray-500 dark:text-gray-400"
              >
                Gandhidham, Kutch, Gujarat, India
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
    </div>
  );
};

export default ContactForm;

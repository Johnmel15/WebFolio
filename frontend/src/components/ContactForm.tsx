import { useState } from "react";
import { useEmailMutation } from "../hooks/useEmailMutation";
import { motion } from "framer-motion";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    body: "",
  });

  const {
    mutate: sendEmail,
    isPending,
    isSuccess,
    isError,
  } = useEmailMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendEmail(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="mt-8 max-w-xl mx-auto"
    >
      <div className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-200"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block p-2 w-full text-black bg-white h-8 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-200"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block p-2 w-full text-black bg-white h-8 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-200"
          >
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="mt-1 block p-2 w-full text-black bg-white h-8 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="body"
            className="block text-sm font-medium text-gray-200"
          >
            Message
          </label>
          <textarea
            name="body"
            id="body"
            required
            rows={4}
            value={formData.body}
            onChange={handleChange}
            className="mt-1 block p-2 w-full text-black bg-white h-28 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          />
        </div>

        <div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isPending}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
          >
            {isPending ? "Sending..." : "Send Message"}
          </motion.button>
        </div>

        {isSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-600 text-center"
          >
            Message sent successfully!
          </motion.div>
        )}

        {isError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-600 text-center"
          >
            Failed to send message. Please try again.
          </motion.div>
        )}
      </div>
    </motion.form>
  );
};

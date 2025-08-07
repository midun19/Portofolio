import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useToast } from "../hooks/use-toast";
import { Description } from "@radix-ui/react-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message",
      });
      setIsSubmitting(false);
      // Submit form ke FormSubmit (data masih ada)
      e.target.submit();
      // Reset form setelah submit (beri delay agar data terkirim)
      setTimeout(() => {
        if (formRef.current) formRef.current.reset();
      }, 500);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 flex flex-col items-center justify-center">
              {/* Email */}
              <div className="flex items-start space-x-4 w-full max-w-xs">
                <div className="p-3 rounded-full bg-primary/10 w-12 h-12 flex-shrink-0 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:zhillanhamidan19@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    zhillanhamidan19@gmail.com
                  </a>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-start space-x-4 w-full max-w-xs">
                <div className="p-3 rounded-full bg-primary/10 w-12 h-12 flex-shrink-0 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+83148364546"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +6283148364546
                  </a>
                </div>
              </div>
              {/* Location */}
              <div className="flex items-start space-x-4 w-full max-w-xs">
                <div className="p-3 rounded-full bg-primary/10 w-12 h-12 flex-shrink-0 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground">Bandung</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="#" target="_blank">
                  <Linkedin />
                </a>
                <a href="#" target="_blank">
                  <Instagram />
                </a>
                <a href="#" target="_blank">
                  <Twitter />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form
              ref={formRef}
              action="https://formsubmit.co/zhillanhamidan19@gmail.com"
              method="POST"
              className="space-y-6 "
              target="_blank"
              onSubmit={handleSubmit}
            >
              <div className="">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary "
                  placeholder="Enter your name"
                />
              </div>
              <div className="">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary "
                  placeholder="Enter your email"
                />
              </div>
              <div className="">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Enter your message"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {" "}
                {isSubmitting ? "Sending...." : "Message Sent"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

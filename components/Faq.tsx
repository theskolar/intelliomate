"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is GPS tracking software?",
    answer:
      " GPS monitoring systems let companies monitor the real-time position of people, assets, or vehicles. It tracks history, and offers route optimization and real-time updates.",
  },
  {
    question: "What industries benefit from GPS tracking software?",
    answer:
      " GPS monitoring software improves productivity, security, and operational transparency in logistics, agriculture, transportation, and healthcare, benefiting these businesses.",
  },
  {
    question: "How much does GPS tracking software cost?",
    answer:
      " The features and complexity of the GPS tracking software affect its cost. While more robust systems might cost $50,000, basic applications begin at $10,000.",
  },
  {
    question: "Can I integrate GPS tracking with IoT?",
    answer:
      "Integrating GPS tracking with IoT enables remote monitoring, real-time alerts, and enhanced automation, making it ideal for fleet management and asset tracking.",
  },
  {
    question: "How long does GPS tracking app development take?",
    answer:
      " GPS tracking app development time varies on complexity and features. Advanced applications with AI, IoT, and real-time analytics may take 6 months to a year to create, whereas a simple app with necessary functions may take 3 to 6 months.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-background min-h-screen flex justify-center items-center px-4
dark:bg-background-dark
    ">
      <div className="max-w-2xl w-full">
        <h2 className="mb-6 text-center text-[2rem] font-bold font-Poppins text-boxfont
dark:text-boxfont-dark
          font-[400] font-poppins">
          Frequently Asked <span style={{color:'#50c878'}}> Questions</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-3">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between w-full text-left items-center py-3 text-lg font-medium text-boxfont 
dark:text-boxfont-dark
                  font-[400] font-poppins transition-all duration-300 focus:outline-none"
              >
                {faq.question}
                <ChevronDown
                  className={`h-5 w-5 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                  openIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="text-font  font-[400] font-poppins mt-2 px-2">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ShieldCheck, CreditCard, LayoutDashboard, Handshake } from "lucide-react";
// import { useState } from "react";
// import { FaPlus, FaMinus } from "react-icons/fa";

// const faqs = [
//   { q: "How do I verify a tutor's background?", a: "All our tutors go through a mandatory NID and academic document verification process before they can apply for jobs." },
//   { q: "Is there any charge for students to post a job?", a: "No, posting a tuition requirement is completely free for students and parents." },
//   { q: "Can I get a trial class before hiring?", a: "Yes, we encourage tutors to provide a one-day free demo session so you can check their teaching style." }
// ];
// const features = [
//   {
//     title: "Verified Tutors",
//     desc: "All tutors undergo a rigorous background check and admin verification.",
//     icon: <ShieldCheck className="w-8 h-8 text-primary" />,
//     color: "bg-blue-500/10",
//   },
//   {
//     title: "Secure Payments",
//     desc: "Your transactions are protected with industry-leading encryption.",
//     icon: <CreditCard className="w-8 h-8 text-secondary" />,
//     color: "bg-purple-500/10",
//   },
//   {
//     title: "Easy Dashboard",
//     desc: "A seamless experience to manage lessons, schedules, and payments.",
//     icon: <LayoutDashboard className="w-8 h-8 text-accent" />,
//     color: "bg-green-500/10",
//   },
//   {
//     title: "Trusted Platform",
//     desc: "Connecting thousands of students with expert tutors daily.",
//     icon: <Handshake className="w-8 h-8 text-info" />,
//     color: "bg-orange-500/10",
//   },
// ];

// const WhyChooseUs = () => {
//   const [openIndex, setOpenIndex] = useState(null);
//   return (
//     <>
// <section className="py-20 bg-base-200/30">
//         <div className="container mx-auto px-6 max-w-3xl">
//           <h2 className="text-3xl font-bold text-center mb-10 text-base-content tracking-tight">
//             Common <span className="text-secondary underline decoration-wavy decoration-1 underline-offset-8">Questions</span>
//           </h2>

//           <div className="space-y-4">
//             {faqs.map((faq, index) => (
//               <div key={index} className="border border-base-300 rounded-2xl overflow-hidden shadow-sm bg-base-100">
//                 <button 
//                   onClick={() => setOpenIndex(openIndex === index ? null : index)}
//                   className="w-full p-5 text-left flex justify-between items-center hover:bg-base-200 transition-colors duration-300"
//                 >
//                   <span className="font-bold text-base-content text-lg leading-snug">{faq.q}</span>
//                   <div className={`p-2 rounded-full ${openIndex === index ? 'bg-secondary/10' : 'bg-primary/10'}`}>
//                     {openIndex === index ? <FaMinus className="text-secondary" /> : <FaPlus className="text-primary" />}
//                   </div>
//                 </button>

//                 <AnimatePresence>
//                   {openIndex === index && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.3, ease: "easeInOut" }}
//                     >
//                       <div className="p-5 text-base-content/70 leading-relaxed border-t border-base-300 bg-base-100/50">
//                         {faq.a}
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>


//     <section className="relative py-20 overflow-hidden">
//       {/* Background Decorative Elements */}
//       <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
//       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

//       <div className="container mx-auto px-6">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent  tracking-wide bg-gradient-to-r from-primary via-indigo-500 to-primary bg-clip-text text-transparent text-xl md:text-2xl font-bold tracking-wide">
//             Why Choose eTuitionBd?
//           </h2>
//           <p className="max-w-2xl mx-auto text-base-content/70">
//             We provide a secure and efficient ecosystem for both students and tutors to excel.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1, duration: 0.5 }}
//               whileHover={{ y: -10 }}
//               className="group p-8 rounded-3xl bg-base-200/50 border border-base-300 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
//             >
//               <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
//                 {item.icon}
//               </div>
//               <h3 className="text-xl font-bold mb-3">{item.title}</h3>
//               <p className="text-base-content/60 leading-relaxed">
//                 {item.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//     </>
//   );
// };

// export default WhyChooseUs;


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck, CreditCard, LayoutDashboard, Handshake,
  BookOpen, Calculator, Beaker, Globe, Star, Quote
} from "lucide-react";
import { FaPlus, FaMinus } from "react-icons/fa";

// --- Data ---
const subjects = [
  { name: "Mathematics", tutors: "1.2k+ Tutors", icon: <Calculator />, color: "bg-blue-500" },
  { name: "English", tutors: "900+ Tutors", icon: <Globe />, color: "bg-purple-500" },
  { name: "Science", tutors: "800+ Tutors", icon: <Beaker />, color: "bg-emerald-500" },
  { name: "General Arts", tutors: "600+ Tutors", icon: <BookOpen />, color: "bg-orange-500" },
];

const testimonials = [
  { id: 1, name: "Ariful Islam", role: "HSC Student", text: "eTuitionBd found me the perfect physics tutor within 2 days! Highly recommended.", rating: 5 },
  { id: 2, name: "Sadiya Rahman", role: "Parent", text: "The verification process gives us peace of mind. Excellent platform for quality education.", rating: 5 },
  { id: 3, name: "Tanvir Ahmed", role: "Admission Seeker", text: "User-friendly dashboard and very supportive customer service.", rating: 4 },
];

const faqs = [
  { q: "How do I verify a tutor's background?", a: "All our tutors go through a mandatory NID and academic document verification process before they can apply for jobs." },
  { q: "Is there any charge for students to post a job?", a: "No, posting a tuition requirement is completely free for students and parents." },
  { q: "Can I get a trial class before hiring?", a: "Yes, we encourage tutors to provide a one-day free demo session to check their teaching style." }
];

const features = [
  { title: "Verified Tutors", desc: "Rigorous background check and admin verification for every tutor.", icon: <ShieldCheck className="w-8 h-8 text-primary" />, color: "bg-blue-500/10" },
  { title: "Secure Payments", desc: "Safe transaction system with industry-leading encryption.", icon: <CreditCard className="w-8 h-8 text-secondary" />, color: "bg-purple-500/10" },
  { title: "Easy Dashboard", desc: "Manage lessons, schedules, and payments in one click.", icon: <LayoutDashboard className="w-8 h-8 text-accent" />, color: "bg-green-500/10" },
  { title: "Trusted Platform", desc: "Thousands of successful matches made every month.", icon: <Handshake className="w-8 h-8 text-info" />, color: "bg-orange-500/10" },
];

// --- Variants for Animations ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const WhyChooseUs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="overflow-hidden font-sans">

      {/* 1. WHY CHOOSE US SECTION */}
      <section className="relative py-24">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] -z-10 animate-pulse" />
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-primary via-indigo-600 to-secondary bg-clip-text text-transparent">
              Why Choose eTuitionBd?
            </h2>
            <p className="text-lg opacity-70 max-w-2xl mx-auto">We bridge the gap between excellence and accessibility in education.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -12, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-[2.5rem] bg-base-200/50 border border-base-300 backdrop-blur-md shadow-sm hover:shadow-2xl hover:shadow-primary/20 transition-all"
              >
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-inner`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="opacity-60 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-5xl font-black leading-tight">
                We are Changing the Way You <span className="text-secondary">Find Tutors</span>
              </h2>
              <p className="text-lg opacity-70">
                No more posting on random Facebook groups. Get verified, professional, and nearby tutors at your fingertips.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-primary/5 rounded-2xl border-l-4 border-primary">
                  <h4 className="font-bold text-2xl">10k+</h4>
                  <p className="text-xs uppercase opacity-50">Verified Tutors</p>
                </div>
                <div className="p-4 bg-secondary/5 rounded-2xl border-l-4 border-secondary">
                  <h4 className="font-bold text-2xl">98%</h4>
                  <p className="text-xs uppercase opacity-50">Success Rate</p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div className="p-8 rounded-[2rem] bg-base-200 border border-base-300 hover:bg-primary hover:text-white transition-all duration-300 cursor-default">
                <ShieldCheck className="w-12 h-12 mb-4" />
                <h3 className="font-bold text-xl mb-2">Safe & Secure</h3>
                <p className="text-sm opacity-70">Complete NID verification for every member.</p>
              </div>
              <div className="p-8 mt-6 rounded-[2rem] bg-base-200 border border-base-300 hover:bg-secondary hover:text-white transition-all duration-300 cursor-default">
                <Star className="w-12 h-12 mb-4" />
                <h3 className="font-bold text-xl mb-2">Quality First</h3>
                <p className="text-sm opacity-70">Top rated tutors from best universities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 2. NEW: TOP SUBJECTS GRID */}
      <section className="py-24 bg-base-200/50 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">Find Tutors by <span className="text-primary">Subject</span></h2>
              <p className="opacity-60">Master any subject with the help of our experts.</p>
            </div>
            <button className="btn btn-primary btn-outline rounded-full px-8">View All Subjects</button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((sub, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-base-100 p-6 rounded-3xl flex items-center gap-5 shadow-lg shadow-base-300/50 cursor-pointer group"
              >
                <div className={`w-14 h-14 ${sub.color} text-white rounded-2xl flex items-center justify-center text-2xl group-hover:rotate-12 transition-transform`}>
                  {sub.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg">{sub.name}</h4>
                  <p className="text-xs opacity-50 font-medium uppercase tracking-wider">{sub.tutors}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NEW: TESTIMONIALS SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-[120px] -z-10" />
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 underline decoration-primary decoration-4 underline-offset-8">What Our Students Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-base-100 p-8 rounded-[2rem] border border-base-300 relative shadow-xl"
              >
                <Quote className="absolute top-6 right-8 text-primary/10 w-12 h-12" />
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="italic opacity-80 mb-6">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {t.name[0]}
                  </div>
                  <div>
                    <h5 className="font-bold">{t.name}</h5>
                    <p className="text-xs opacity-50 uppercase tracking-tighter">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION (Enhanced Design) */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <span className="bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest">Support</span>
            <h2 className="text-4xl font-black mt-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-base-100 rounded-3xl border border-base-300 overflow-hidden transition-all duration-300 hover:border-primary/30">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center group"
                >
                  <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-primary' : 'text-base-content'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === index ? 'bg-primary text-white rotate-180' : 'bg-base-200 text-primary'}`}>
                    {openIndex === index ? <FaMinus size={12} /> : <FaPlus size={12} />}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-base-200/30"
                    >
                      <div className="p-6 pt-0 text-base-content/70 leading-relaxed border-t border-base-300/50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
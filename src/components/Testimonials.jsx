const testimonials = [
  {
    name: "Manish",
    score: "8.5",
    text: "The AI-powered speaking practice helped me improve my fluency dramatically. I achieved my target band score on the first attempt!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Srihitha",
    score: "8.0",
    text: "The mock tests were incredibly realistic and the personalized feedback from my mentor made all the difference in my preparation.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Snehith",
    score: "9.0",
    text: "I never thought I could score a 9.0! The comprehensive study materials and expert guidance exceeded all my expectations.",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          What Our Students Say
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Join thousands of students who have achieved their dream band scores
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-[rgb(11,66,142)] bg-white p-6 shadow-sm flex flex-col justify-between hover:shadow-lg transition"
            >
              <div>
                <div className="flex gap-1 mb-4 text-[rgb(255,215,0)]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <polygon points="10,1 12.59,7.36 19.51,7.36 13.96,11.64 16.55,18 10,13.72 3.45,18 6.04,11.64 0.49,7.36 7.41,7.36" />
                    </svg>
                  ))}
                </div>
                <p className="italic text-gray-800 mb-6">"{t.text}"</p>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full border border-gray-300 object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <span className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded">
                    Band Score: {t.score}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

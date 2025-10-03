import ieltsImg from './ielts.png';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-12 md:py-16 max-w-6xl mx-auto">
      <div className="md:w-1/2 space-y-6 w-full">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
          Achieve Your Dream <span style={{ color: 'rgb(11,66,142)' }}>IELTS Score</span>
        </h2>
        <p className="text-gray-600 text-lg">
          Personalized coaching, AI-based band prediction, and proven practice modules designed for your success.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button className="bg-[rgb(11,66,142)] text-white px-6 py-3 rounded-lg shadow-md hover:brightness-90 font-semibold transition">
            Start Free Trial &rarr;
          </button>
          <button className="bg-white border border-[rgb(11,66,142)] text-[rgb(11,66,142)] px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-gray-50 transition">
            View Success Stories
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-4">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[rgb(11,66,142)]">5000+</div>
            <div className="text-gray-600 mt-1">Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[rgb(11,66,142)]">8.5</div>
            <div className="text-gray-600 mt-1">Avg Band</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[rgb(11,66,142)]">95%</div>
            <div className="text-gray-600 mt-1">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[rgb(11,66,142)]">24/7</div>
            <div className="text-gray-600 mt-1">Support</div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0 w-full flex justify-center">
        <img src={ieltsImg} alt="IELTS Preparation" className="rounded-xl shadow-lg w-full max-w-md object-cover" />
      </div>
    </section>
  );
}

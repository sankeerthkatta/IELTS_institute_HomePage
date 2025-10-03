import { FiMic } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { TbChartBar } from "react-icons/tb";
import { MdEventAvailable } from "react-icons/md";

const features = [
	{
		title: "Speaking Practice",
		desc: "One-on-one speaking sessions with expert trainers.",
		icon: <FiMic className="w-7 h-7 text-[rgb(11,66,142)]" />,
		bg: "bg-blue-50",
	},
	{
		title: "Mock Tests",
		desc: "Full-length tests with real exam patterns.",
		icon: <HiOutlineDocumentText className="w-7 h-7 text-green-500" />,
		bg: "bg-green-50",
	},
	{
		title: "AI Band Score",
		desc: "Instant feedback with AI-based scoring.",
		icon: <TbChartBar className="w-7 h-7 text-yellow-500" />,
		bg: "bg-yellow-50",
	},
	{
		title: "Flexible Batches",
		desc: "Weekend and weekday classes available.",
		icon: <MdEventAvailable className="w-7 h-7 text-[rgb(11,66,142)]" />,
		bg: "bg-blue-100",
	},
];

export default function Features() {
	return (
		<section className="px-4 md:px-8 py-12 md:py-16 max-w-6xl mx-auto">
			<h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
				Our Features
			</h3>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
				{features.map((f, i) => (
					<div
						key={i}
						className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-200 border border-transparent hover:border-[rgb(11,66,142)] flex flex-col items-center text-center"
					>
						<span
							className={`inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 ${f.bg}`}
						>
							{f.icon}
						</span>
						<h4 className="text-xl font-semibold text-gray-900 mb-2">
							{f.title}
						</h4>
						<p className="text-gray-600">{f.desc}</p>
					</div>
				))}
			</div>
		</section>
	);
}

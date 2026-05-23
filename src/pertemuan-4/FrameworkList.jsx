import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            {frameworkData.map((item) => (
                <div 
                    key={item.id} 
                    className="bg-white border rounded-lg p-4 mb-4 shadow-sm"
                >
                    {/* Title */}
                    <h2 className="text-lg font-bold text-gray-800">
                        {item.name}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mt-1">
                        {item.description}
                    </p>

                    {/* Details */}
                    <p className="text-xs text-gray-500 mt-2">
                        Developed by:{" "}
                        <span className="font-semibold">
                            {item.details.developer}
                        </span>{" "}
                        ({item.details.releaseYear})
                    </p>

                    {/* Website */}
                    <a 
                        href={item.details.officialWebsite}
                        target="_blank"
                        className="text-blue-600 text-sm hover:underline block mt-1"
                    >
                        Visit Website
                    </a>

                    {/* Tags */}
                    <div className="mt-3 flex flex-wrap gap-2">
                        {item.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
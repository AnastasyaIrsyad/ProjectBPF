// src/components/PageHeader.jsx
export default function PageHeader({ title, breadcrumb, children }) {
  return (
    <div
      id="pageheader-container"
      className="flex items-center justify-between p-6 bg-white/50 backdrop-blur-md border-b border-pink-50 shadow-sm sticky top-0 z-10"
    >
      {/* Bagian Kiri: Title & Breadcrumb */}
      <div id="pageheader-left" className="flex flex-col">
        <h1 id="page-title" className="text-3xl font-black text-gray-800 tracking-tight">
          {title}
        </h1>

        <div
          id="breadcrumb-links"
          className="flex items-center text-xs font-bold uppercase tracking-widest mt-2"
        >
          <span className="text-pink-300 hover:text-pink-500 cursor-pointer transition-colors">
            Home
          </span>
          <span className="mx-2 text-gray-300 text-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
          <span className="text-gray-400">{breadcrumb}</span>
        </div>
      </div>

      {/* Bagian Kanan: Children (Tempat Button/Konten Dinamis) */}
      <div id="action-area">
        {children}
      </div>
    </div>
  );
}
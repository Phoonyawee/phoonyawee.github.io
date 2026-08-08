// @flow strict
import Link from 'next/link';

function Blog() {
  const products = [
    {
      id: 1,
      name: "VS ♡ MODE — ปะทะหัวใจ",
      description: "Crossover dating sim แฟนเมด เลือกนักสู้แล้วออกไปพิชิตหัวใจสาวๆ ทุกเส้นทางมีตอนจบของตัวเอง",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://phoonyawee.github.io/vs-heart-mode/",
    },
  ];

  return (
    <div id="products" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Products
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-8 px-4">
        {products.map((product) => (
          <Link
            key={product.id}
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl border border-[#2d2d6b] bg-[#0d1224] p-6 shadow-lg hover:border-violet-500 hover:shadow-violet-500/20 transition-all duration-300 hover:-translate-y-1"
          >
            <h3 className="text-[#16f2b3] font-semibold text-lg mb-2 group-hover:text-white transition-colors">
              {product.name}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {product.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-violet-900/40 text-violet-300 border border-violet-700/40"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 text-xs text-violet-400 group-hover:text-violet-300 transition-colors">
              เล่นเกม →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blog;

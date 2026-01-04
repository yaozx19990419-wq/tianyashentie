/**
 * Friendly Links Section
 * 
 * Design Philosophy: Digital Archaeology Aesthetic
 * - Stamp-like link cards
 * - 3-4 columns grid layout
 * - Light cream background (#FFFEF0)
 * - Subtle hover effects
 */

import { ExternalLink } from "lucide-react";

interface Link {
  name: string;
  description: string;
  url: string;
  icon: string;
  color: string;
}

const links: Link[] = [
  {
    name: "天涯神贴合集",
    description: "原汁原味的天涯神贴",
    url: "https://www.zhuiyou8.com",
    icon: "🌐",
    color: "from-[#007BFF] to-[#0056CC]"
  }
];

export default function FriendlyLinks() {
  return (
    <section className="bg-[#FFFEF0] py-16 md:py-20 px-4 md:px-8">
      <div className="container max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-3"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            友情链接
          </h2>
          <p className="text-[#2D2D2D]/60 text-lg">
            与天涯文化相关的优质资源和社区
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-lg border-2 border-[#8B7355]/20 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon and Color Accent */}
              <div className={`inline-block bg-gradient-to-br ${link.color} text-white rounded-lg p-3 mb-4 text-2xl`}>
                {link.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#2D2D2D] mb-2 group-hover:text-[#007BFF] transition-colors">
                {link.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#2D2D2D]/60 mb-4 line-clamp-2">
                {link.description}
              </p>

              {/* Link Arrow */}
              <div className="flex items-center gap-2 text-[#007BFF] opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium">访问</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 p-6 bg-white/50 border border-[#8B7355]/20 rounded-lg text-center">
          <p className="text-[#2D2D2D]/70 text-sm">
            如果您有优质的天涯文化相关资源或社区,欢迎
            <a href="mailto:contact@tianyaarchive.com" className="text-[#007BFF] hover:underline font-medium">
              联系我们
            </a>
            添加友情链接
          </p>
        </div>
      </div>
    </section>
  );
}

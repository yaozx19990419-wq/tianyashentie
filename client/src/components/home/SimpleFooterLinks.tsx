/**
 * Simple Footer Links Component
 * 
 * Design Philosophy: Digital Archaeology Aesthetic
 * - Minimal text links in footer
 * - Clean, uncluttered design
 */

interface FooterLink {
  name: string;
  url: string;
}

const links: FooterLink[] = [
  { name: '天涯神贴合集', url: 'https://www.zhuiyou8.com' },
];

export default function SimpleFooterLinks() {
  return (
    <div className="text-xs opacity-70 mt-4 flex flex-wrap justify-center gap-4">
      {links.map((link, index) => (
        <div key={link.url} className="flex items-center gap-4">
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition-opacity"
          >
            {link.name}
          </a>
          {index < links.length - 1 && <span>|</span>}
        </div>
      ))}
    </div>
  );
}

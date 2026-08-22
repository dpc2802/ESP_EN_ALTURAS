const fs = require('fs');

let file = 'src/app/components/Header.jsx';
let text = fs.readFileSync(file, 'utf8');

// 1. Add usePathname import
if (!text.includes('usePathname')) {
  text = text.replace(/import Link from "next\/link";/, 'import Link from "next/link";\nimport { usePathname } from "next/navigation";');
}

// 2. Add pathname hook
if (!text.includes('const pathname = usePathname()')) {
  text = text.replace(/const \[scrolled, setScrolled\] = useState\(false\);/, 'const pathname = usePathname();\n  const isPortfolio = pathname === "/portafolio";\n  const [scrolled, setScrolled] = useState(false);');
}

// 3. Update className logic
text = text.replace(/className=\{\`header \$\{scrolled \? "scrolled" : ""\} \$\{hidden \? "hidden" : ""\}\`\}/, 'className={`header ${scrolled || isPortfolio ? "scrolled" : ""} ${hidden ? "hidden" : ""}`}');

fs.writeFileSync(file, text);

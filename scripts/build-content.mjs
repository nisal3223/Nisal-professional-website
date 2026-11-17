import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dir = path.join(root, "content", "blog");
const escape = (s) => s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const inline = (s) => escape(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
function markdown(input) {
  const lines = input.trim().split(/\r?\n/); let html = "", list = false;
  const close = () => { if (list) { html += "</ul>"; list = false; } };
  for (const line of lines) {
    if (!line.trim()) { close(); continue; }
    if (line.startsWith("## ")) { close(); html += `<h2>${inline(line.slice(3))}</h2>`; }
    else if (line.startsWith("### ")) { close(); html += `<h3>${inline(line.slice(4))}</h3>`; }
    else if (line.startsWith("- ")) { if (!list) { html += "<ul>"; list = true; } html += `<li>${inline(line.slice(2))}</li>`; }
    else { close(); html += `<p>${inline(line)}</p>`; }
  } close(); return html;
}
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
const posts = files.map((file) => {
  const raw = fs.readFileSync(path.join(dir, file), "utf8");
  const [, fm = "", body = raw] = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/) || [];
  const meta = Object.fromEntries(fm.split(/\r?\n/).filter(Boolean).map((line) => { const i = line.indexOf(":"); return [line.slice(0, i).trim(), line.slice(i + 1).trim().replace(/^['"]|['"]$/g, "")]; }));
  const words = body.trim().split(/\s+/).length;
  return { slug: file.replace(/\.md$/, ""), title: meta.title, summary: meta.summary, category: meta.category, date: meta.date, readingTime: `${Math.max(1, Math.ceil(words / 210))} min read`, html: markdown(body) };
});
fs.writeFileSync(path.join(root, "lib", "generated-posts.ts"), `// Generated from content/blog/*.md.\nexport const generatedPosts = ${JSON.stringify(posts, null, 2)} as const;\n`);
console.log(`Generated ${posts.length} articles.`);

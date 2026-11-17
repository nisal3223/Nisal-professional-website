"use client";
import { Search, X } from "lucide-react"; import { useMemo, useState } from "react";
import type { Post } from "@/lib/posts";
export function BlogFilter({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState(""); const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(posts.map((p) => p.category))];
  const shown = useMemo(() => posts.filter((p) => (category === "All" || p.category === category) && `${p.title} ${p.summary}`.toLowerCase().includes(query.toLowerCase())), [posts, query, category]);
  const reset = () => { setQuery(""); setCategory("All"); };
  return <div><div className="filters"><label className="search-field"><span className="sr-only">Search articles</span><Search size={19}/><input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search articles"/></label><div className="category-filters" aria-label="Filter by category">{categories.map((c) => <button key={c} className={category === c ? "active" : ""} onClick={() => setCategory(c)}>{c}</button>)}</div></div>
    {shown.length ? <div className="article-grid">{shown.map((post) => <article className="article-card" key={post.slug}><div className="article-meta"><span>{post.category}</span><time dateTime={post.date}>{new Date(`${post.date}T00:00:00`).toLocaleDateString("en", { month: "long", day: "numeric", year: "numeric" })}</time><span>{post.readingTime}</span></div><h2><a href={`/blog/${post.slug}`}>{post.title}</a></h2><p>{post.summary}</p><a className="text-link" href={`/blog/${post.slug}`}>Read article <span>→</span></a></article>)}</div> : <div className="empty-state"><Search/><h2>No matching articles</h2><p>Try a different search or reset the filters to see every article.</p><button className="button" onClick={reset}><X size={17}/> Reset filters</button></div>}
  </div>;
}

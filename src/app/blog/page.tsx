import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/ui/icons";
import { blogPosts } from "@/content/blog-posts";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "Blog",
  description: "Guides to designing, choosing, and ordering custom patches.",
};

export default function BlogPage() {
  return (
    <section className="section-space page-container" aria-labelledby="blog-heading">
      <header className={styles.intro}>
        <h1 id="blog-heading">PatchesHub Blog</h1>
        <p>Guides to designing, choosing, and ordering custom patches.</p>
      </header>
      <div className={styles.grid}>
        {blogPosts.map((post) => (
          <article key={post.slug}>
            <Link href={`/blog/${post.slug}`} className={styles.card}>
              <div className={styles.image}>
                <Image src={post.image} alt="" fill sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" />
              </div>
              <div className={styles.cardBody}>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <span className={styles.read}>Read guide <ArrowIcon /></span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

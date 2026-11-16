import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon } from "@/components/ui/icons";
import { blogPosts } from "@/content/blog-posts";
import styles from "../blog.module.css";

type PostPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

async function getPost(params: PostPageProps["params"]) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);
  if (!post) notFound();
  return post;
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPost(params);
  return { title: post.title, description: post.description };
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const post = await getPost(params);
  const relatedPosts = blogPosts.filter((entry) => entry.slug !== post.slug);

  return (
    <div className={`section-space page-container ${styles.articleLayout}`}>
      <article className={styles.article}>
        <Link href="/blog" className="text-link">← All guides</Link>
        <header className={styles.intro}>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </header>
        <div className={styles.sections}>
          {post.sections.map(({ title, body }) => (
            <section key={title}>
              <h2>{title}</h2>
              <p>{body}</p>
            </section>
          ))}
        </div>
        <Link href="/quote" className="button button-navy">Get a quote <ArrowIcon /></Link>
      </article>
      <aside className={styles.related} aria-labelledby="related-guides-heading">
        <h2 id="related-guides-heading">Related articles</h2>
        <ul>
          {relatedPosts.map((entry) => (
            <li key={entry.slug}>
              <Link href={`/blog/${entry.slug}`} className={styles.relatedLink}>
                <div className={styles.relatedImage}>
                  <Image src={entry.image} alt="" fill sizes="72px" />
                </div>
                <span>{entry.title}</span>
                <ArrowIcon />
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

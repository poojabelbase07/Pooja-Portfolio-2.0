import React from 'react';
import Section from '../Common/Section';
import BlogCard from './BlogCard';
import { blogPosts } from '@/app/data/portfolioData';
import styles from './Blog.module.css';

export default function Blog() {
  return (
    <Section 
      id="blog" 
      title="Blog Posts"
      subtitle="Thoughts on technology, problem-solving, and building communities."
    >
      <div className={styles.list}>
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </Section>
  );
}
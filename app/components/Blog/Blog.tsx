import React from 'react';
import { BookOpen } from 'lucide-react';
import Section from '../Common/Section';
import BlogCard from './BlogCard';
import { blogPosts } from '../../data/portfolioData';
import styles from './Blog.module.css';
import { BlogPost } from '@/app/types'
const Blog = () => {
  return (
    <Section 
      id="blog" 
      icon={<BookOpen size={24} />} 
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
};

export default Blog;
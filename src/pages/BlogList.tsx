import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { blogPosts, blogCategories } from '../data/blogPosts';
import { Search, Clock, ArrowRight, Tag, BookOpen, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

export default function BlogList() {
  useSEO({
    title: 'YouTube Thumbnail Design Insights & CTR Strategies — Aditya Aryal',
    description: 'Learn the visual psychology, design systems, and YouTube algorithm strategies behind high-converting thumbnails. Insights by Aditya Aryal.',
    canonicalUrl: 'https://adityaaryal.com.np/blog',
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter posts based on search query and category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Featured post (first one matching criteria, or first overall if none/many)
  const featuredPost = useMemo(() => {
    return filteredPosts[0] || null;
  }, [filteredPosts]);

  const regularPosts = useMemo(() => {
    return filteredPosts.slice(1);
  }, [filteredPosts]);

  return (
    <div className="min-h-screen bg-primary text-white pt-32 pb-24 relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-40 right-1/4 w-[350px] h-[350px] bg-white/3 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="w-5 h-5 rounded-full bg-accent text-black flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-black stroke-[3]" />
            </div>
            <span className="text-accent text-[15px] font-medium tracking-wider uppercase">Insights & Strategy</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[40px] md:text-[64px] font-semibold tracking-tight leading-none mb-6 bg-gradient-to-b from-white via-[#e8e8e8] to-[#888] bg-clip-text text-transparent"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Aditya's Blog
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#888] text-[16px] md:text-[20px] max-w-2xl mx-auto font-light"
          >
            Unlocking high-converting visual psychology, design systems, and YouTube algorithm strategies.
          </motion.p>
        </div>

        {/* Smart Filter & Search bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16 p-4 bg-[#141414] border border-[#222] rounded-2xl md:rounded-full">
          {/* Categories list */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-3 md:pb-0 scrollbar-none">
            {blogCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-[14px] font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-accent text-black font-semibold'
                    : 'text-white/60 hover:text-white bg-white/5 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-[350px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder="Search articles, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white/5 hover:bg-white/10 focus:bg-[#1c1c1c] border border-white/10 focus:border-accent/40 rounded-full text-[14px] text-white placeholder-white/30 focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Blog Posts Grid/Featured Area */}
        {filteredPosts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-[#141414] border border-[#222] rounded-3xl"
          >
            <BookOpen className="w-12 h-12 text-white/20 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-[#e4e4e7] mb-2">No articles found</h3>
            <p className="text-[#666]">Try adjusting your search query or category filter</p>
          </motion.div>
        ) : (
          <div className="space-y-12">
            {/* Featured Post Card */}
            {featuredPost && selectedCategory === 'All' && !searchQuery && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="group relative bg-[#141414] border border-[#222] rounded-[32px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8 hover:border-[#333] transition-all duration-500"
              >
                {/* Image panel */}
                <div className="relative aspect-[16/10] lg:aspect-auto lg:h-[420px] rounded-2xl overflow-hidden bg-primary">
                  <img
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Category tag */}
                  <span className="absolute top-4 left-4 bg-accent text-black text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    Featured • {featuredPost.category}
                  </span>
                </div>

                {/* Text content panel */}
                <div className="flex flex-col justify-between py-2 lg:py-6">
                  <div>
                    {/* Meta stats */}
                    <div className="flex items-center gap-4 text-[13px] text-white/50 mb-4">
                      <span>{new Date(featuredPost.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{featuredPost.readingTime} min read</span>
                      </div>
                    </div>

                    <h2 className="text-[28px] md:text-[40px] font-semibold text-[#e4e4e7] group-hover:text-accent transition-colors leading-tight mb-4 tracking-tight">
                      <Link to={`/blog/${featuredPost.id}`}>
                        {featuredPost.title}
                      </Link>
                    </h2>

                    <p className="text-[#888] text-[15px] md:text-[16px] leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Tags list */}
                    <div className="flex flex-wrap gap-2">
                      {featuredPost.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="flex items-center gap-1 text-[12px] text-white/60 bg-[#1c1c1c] border border-white/5 px-3 py-1 rounded-md">
                          <Tag className="w-3 h-3 opacity-60" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                      {/* Author */}
                      <div className="flex items-center gap-3">
                        <img
                          src={featuredPost.author.avatar}
                          alt={featuredPost.author.name}
                          className="w-8 h-8 rounded-full border border-white/10"
                        />
                        <span className="text-[14px] font-medium text-white/80">{featuredPost.author.name}</span>
                      </div>

                      <Link
                        to={`/blog/${featuredPost.id}`}
                        className="inline-flex items-center gap-2 text-accent font-medium text-[14px] group/btn"
                      >
                        Read Article 
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Standard Grid of Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {(selectedCategory === 'All' && !searchQuery ? regularPosts : filteredPosts).map((post, idx) => (
                  <motion.article
                    layout
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="group flex flex-col bg-[#141414] border border-[#222] rounded-[24px] overflow-hidden hover:border-[#333] transition-all duration-300"
                  >
                    {/* Post cover container */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-primary">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent opacity-60" />
                      <span className="absolute top-4 left-4 bg-[#1c1c1c] border border-[#2d2d2d] text-white/80 text-[11px] font-medium px-3 py-1 rounded-full uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-grow flex flex-col justify-between p-6">
                      <div>
                        {/* Meta metadata info */}
                        <div className="flex items-center gap-3 text-[12px] text-white/40 mb-3">
                          <span>{new Date(post.publishedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}</span>
                          <span className="w-1 h-1 rounded-full bg-white/20" />
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readingTime} min read</span>
                          </div>
                        </div>

                        <h3 className="text-[20px] font-semibold text-[#e4e4e7] group-hover:text-accent transition-colors leading-snug mb-3 tracking-tight">
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </h3>

                        <p className="text-[#888] text-[14px] leading-relaxed mb-6 line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                        {/* Author info */}
                        <div className="flex items-center gap-2">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-6 h-6 rounded-full"
                          />
                          <span className="text-[13px] text-white/70">{post.author.name}</span>
                        </div>

                        <Link
                          to={`/blog/${post.id}`}
                          className="inline-flex items-center gap-1.5 text-accent text-[13px] font-semibold"
                        >
                          Read
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';
import { ArrowLeft, Clock, Calendar, Heart, Share2, MessageSquare, ChevronRight, BookOpen, User, Check, Send } from 'lucide-react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function BlogPostDetail() {
  const { id } = useParams<{ id: string }>();
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);
  const [commentInput, setCommentInput] = useState('');
  const [comments, setComments] = useState<{ name: string; text: string; date: string }[]>([]);

  // Find the post
  const post = useMemo(() => {
    return blogPosts.find((p) => p.id === id) || null;
  }, [id]);

  // Framer Motion page scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Extract table of contents dynamically from the content markdown
  const toc = useMemo<TocItem[]>(() => {
    if (!post) return [];
    const headings: TocItem[] = [];
    const lines = post.content.split('\n');

    lines.forEach((line) => {
      const match = line.match(/^(##|###)\s+(.+)$/);
      if (match) {
        const level = match[1].length;
        const text = match[2].trim();
        // slugify
        const headingId = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-');
        headings.push({ id: headingId, text, level });
      }
    });

    return headings;
  }, [post]);

  // Load and store likes / comments in localStorage
  useEffect(() => {
    if (!id) return;
    window.scrollTo(0, 0);

    const storedLike = localStorage.getItem(`blog_like_${id}`);
    setIsLiked(!!storedLike);

    // Initial base likes
    const baseLikes = (id.length * 7) % 45 + 12;
    setLikeCount(baseLikes + (storedLike ? 1 : 0));

    // Stored comments
    const storedComments = localStorage.getItem(`blog_comments_${id}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    } else {
      setComments([
        {
          name: 'Alex Rivera',
          text: 'This is gold! The tip on complementary colors in thumbnail design is extremely helpful.',
          date: '1 day ago',
        },
        {
          name: 'Sarah Chen',
          text: "Honestly, the 3-second rule is so true. I audited my analytics and found a clear drop where my visual hook wasn't strong.",
          date: '2 days ago',
        },
      ]);
    }
  }, [id]);

  const handleLike = () => {
    if (!id) return;
    if (isLiked) {
      localStorage.removeItem(`blog_like_${id}`);
      setIsLiked(false);
      setLikeCount((prev) => prev - 1);
    } else {
      localStorage.setItem(`blog_like_${id}`, 'true');
      setIsLiked(true);
      setLikeCount((prev) => prev + 1);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentInput.trim() || !id) return;

    const newComment = {
      name: 'You (Anonymous)',
      text: commentInput.trim(),
      date: 'Just now',
    };

    const updated = [newComment, ...comments];
    setComments(updated);
    localStorage.setItem(`blog_comments_${id}`, JSON.stringify(updated));
    setCommentInput('');
  };

  // Get related posts
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return blogPosts
      .filter((p) => p.category === post.category && p.id !== post.id)
      .slice(0, 2);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Post not found</h2>
          <Link to="/blog" className="text-accent underline">
            Go back to blogs
          </Link>
        </div>
      </div>
    );
  }

  // Render markdown styled content dynamically
  const renderContent = (contentString: string) => {
    const lines = contentString.split('\n');
    return lines.map((line, index) => {
      if (line.startsWith('## ')) {
        const text = line.replace('## ', '');
        const headingId = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-');
        return (
          <h2 key={index} id={headingId} className="text-2xl md:text-3xl font-semibold mt-10 mb-4 text-white scroll-mt-28">
            {text}
          </h2>
        );
      }
      if (line.startsWith('### ')) {
        const text = line.replace('### ', '');
        const headingId = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-');
        return (
          <h3 key={index} id={headingId} className="text-xl md:text-2xl font-semibold mt-8 mb-3 text-white/90 scroll-mt-28">
            {text}
          </h3>
        );
      }
      if (line.startsWith('- ')) {
        return (
          <li key={index} className="list-disc ml-6 mb-2 text-[#b4b4b8] leading-relaxed">
            {line.replace('- ', '')}
          </li>
        );
      }
      if (line.startsWith('|')) {
        // Table line - let's parse tables loosely
        if (line.includes('---')) return null;
        const cells = line.split('|').map(c => c.trim()).filter(Boolean);
        return (
          <div key={index} className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-white/10 text-sm">
              <tbody>
                <tr className="bg-white/5 border border-white/10">
                  {cells.map((cell, i) => (
                    <td key={i} className="px-4 py-3 border border-white/10 text-[#b4b4b8]">{cell}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        );
      }
      if (line.match(/^\d+\.\s+/)) {
        return (
          <li key={index} className="list-decimal ml-6 mb-2 text-[#b4b4b8] leading-relaxed">
            {line.replace(/^\d+\.\s+/, '')}
          </li>
        );
      }
      if (line.trim() === '') {
        return <div key={index} className="h-4" />;
      }
      
      // Regular paragraph or bolded inline parsing
      let parsedLine: React.ReactNode = line;
      if (line.includes('**')) {
        const parts = line.split('**');
        parsedLine = parts.map((part, i) => i % 2 === 1 ? <strong key={i} className="text-white font-bold">{part}</strong> : part);
      }

      return (
        <p key={index} className="text-[#b4b4b8] text-[16px] md:text-[18px] leading-relaxed mb-6">
          {parsedLine}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-primary text-white pb-24 relative">
      {/* Sticky top reading progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Hero Cover section */}
      <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-black/40" />

        {/* Back navigation button */}
        <div className="absolute top-28 left-6 md:left-12 z-10">
          <Link
            to="/blog"
            className="flex items-center gap-2 px-4 py-2 bg-black/60 hover:bg-black border border-white/10 hover:border-white/20 text-[14px] rounded-full transition-all text-white/90 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>
        </div>

        {/* Post Heading overlay */}
        <div className="absolute bottom-0 left-0 right-0 max-w-[900px] mx-auto px-6 pb-8 md:pb-12 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4 text-[13px] tracking-wider uppercase">
            <span className="bg-accent text-black text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
            <div className="flex items-center gap-1.5 text-white/60">
              <Calendar className="w-3.5 h-3.5" />
              <span>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-white/60">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>

          <h1
            className="text-[32px] md:text-[52px] font-semibold tracking-tight leading-tight text-white mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {post.title}
          </h1>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full border border-white/10"
            />
            <div>
              <div className="text-[14px] font-semibold text-white/90">{post.author.name}</div>
              <div className="text-[12px] text-white/50">Thumbnail Design Specialist</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main post layout grid */}
      <div className="max-w-[1200px] mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        
        {/* Left Side: Sticky table of contents (Desktop only) */}
        <aside className="hidden lg:block lg:col-span-3 h-fit sticky top-28">
          <div className="p-6 bg-[#141414] border border-[#222] rounded-2xl">
            <h4 className="text-sm font-semibold tracking-wider text-white/50 uppercase mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-accent" />
              Table of Contents
            </h4>
            
            <ul className="space-y-3.5">
              {toc.map((item) => (
                <li
                  key={item.id}
                  style={{ paddingLeft: `${(item.level - 2) * 12}px` }}
                >
                  <a
                    href={`#${item.id}`}
                    className="text-[14px] text-white/60 hover:text-accent hover:underline transition-colors block leading-snug cursor-pointer"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>

            {/* Quick stats / feedback pill inside TOC */}
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              <button
                onClick={handleLike}
                className={`flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${
                  isLiked
                    ? 'bg-accent/15 border-accent text-accent'
                    : 'bg-white/5 border-white/10 hover:border-white/20 text-white/70 hover:text-white'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-accent' : ''}`} />
                <span>{likeCount} Likes</span>
              </button>

              <button
                onClick={handleShare}
                className="flex items-center justify-center p-2 rounded-full bg-white/5 border border-white/10 hover:border-white/20 hover:text-accent transition-colors"
                title="Copy Article URL"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-accent" /> : <Share2 className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </aside>

        {/* Center: Post content panel */}
        <main className="lg:col-span-9 space-y-6">
          <div className="prose prose-invert max-w-none prose-p:text-[#b4b4b8] prose-headings:text-white prose-strong:text-white">
            {renderContent(post.content)}
          </div>

          {/* Social reactions toolbar (Mobile) */}
          <div className="lg:hidden flex items-center justify-between p-4 bg-[#141414] border border-[#222] rounded-xl my-8">
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border transition-all ${
                isLiked
                  ? 'bg-accent/15 border-accent text-accent'
                  : 'bg-white/5 border-white/10 text-white/70'
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-accent' : ''}`} />
              <span>{likeCount} Likes</span>
            </button>

            <button
              onClick={handleShare}
              className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-accent"
            >
              {copiedLink ? (
                <>
                  <Check className="w-4 h-4 text-accent" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" />
                  <span>Share URL</span>
                </>
              )}
            </button>
          </div>

          {/* Newsletter Panel inside the post details */}
          <div className="p-8 bg-gradient-to-br from-[#141414] to-[#1c1c1c] border border-[#222] rounded-3xl my-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-xl pointer-events-none" />
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Want to level up your YouTube thumbnail strategy?</h3>
            <p className="text-[#888] text-[14px] md:text-[15px] mb-6">
              Subscribe to my monthly newsletter. Get exclusive visual CTR blueprints, design tips, and psychological visual hacks.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="flex-grow px-5 py-3.5 bg-white/5 border border-white/10 focus:border-accent/40 rounded-xl text-[14px] text-white focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-accent text-black font-semibold text-[14px] rounded-xl flex items-center justify-center gap-2 hover:bg-[#bce600] transition-colors"
              >
                <span>Subscribe</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Related Articles row */}
          {relatedPosts.length > 0 && (
            <div className="pt-12 border-t border-white/5">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-accent" />
                Related Articles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((rPost) => (
                  <Link
                    key={rPost.id}
                    to={`/blog/${rPost.id}`}
                    className="group block p-5 bg-[#141414] border border-[#222] rounded-2xl hover:border-[#333] transition-colors"
                  >
                    <span className="text-[11px] font-bold text-accent uppercase tracking-wider block mb-2">
                      {rPost.category}
                    </span>
                    <h4 className="text-[17px] font-semibold text-white group-hover:text-accent transition-colors leading-snug line-clamp-2 mb-3">
                      {rPost.title}
                    </h4>
                    <p className="text-[#888] text-[13px] leading-relaxed line-clamp-2 mb-4">
                      {rPost.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[13px] text-white/50 group-hover:text-white transition-colors">
                      Read Article
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Comments section */}
          <div className="pt-12 border-t border-white/5 space-y-8">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-accent" />
              Comments ({comments.length})
            </h3>

            {/* Comment form */}
            <form onSubmit={handleAddComment} className="space-y-4">
              <textarea
                rows={4}
                required
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                placeholder="Join the discussion... Share your thoughts or ask a question."
                className="w-full p-4 bg-white/5 border border-white/10 focus:border-accent/40 rounded-xl text-[14px] text-white focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-medium text-[14px] rounded-lg transition-colors cursor-pointer"
              >
                Post Comment
              </button>
            </form>

            {/* Comments list */}
            <div className="space-y-6">
              {comments.map((comment, index) => (
                <div key={index} className="p-5 bg-white/5 border border-white/5 rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                        <User className="w-4 h-4" />
                      </div>
                      <span className="text-[14px] font-semibold text-white">{comment.name}</span>
                    </div>
                    <span className="text-[12px] text-white/40">{comment.date}</span>
                  </div>
                  <p className="text-[14px] text-[#b4b4b8] leading-relaxed pl-10">
                    {comment.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

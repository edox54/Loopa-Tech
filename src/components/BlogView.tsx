import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Share2, Clock, Calendar, ArrowRight, CheckCircle, Search, Linkedin } from 'lucide-react';
import { BLOG_POSTS_DATA } from '../data';
import { pickLang, useLang } from '../lib/i18nData';
import { Seo } from './Seo';
import { Reveal } from './Reveal';
import { MediaPlaceholder } from './MediaPlaceholder';
import { BlogSidebar } from './BlogSidebar';
import { InnerCTA } from './InnerCTA';

// Splits HTML content roughly at the midpoint, on the nearest paragraph boundary,
// so an InnerCTA can be dropped in the middle of the article body.
function splitContentForCTA(html: string) {
  if (!html) return { before: '', after: '' };
  const mid = Math.floor(html.length / 2);
  const idx = html.indexOf('</p>', mid);
  if (idx === -1) return { before: html, after: '' };
  const splitAt = idx + 4;
  return { before: html.slice(0, splitAt), after: html.slice(splitAt) };
}

export function BlogView() {
  const navigate = useNavigate();
  const { id: selectedPostId } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const lang = useLang(i18n.language);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const handleBackToBlog = () => {
    navigate('/blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPost = (id: string) => {
    navigate(`/blog/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(window.location.href);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const categories = ['Todos', 'Data Science', 'Inteligencia Artificial', 'Comercial'];
  const featuredPost = BLOG_POSTS_DATA.find((p) => p.id === 'llm-privados-latam');

  const filteredPosts = BLOG_POSTS_DATA.filter((post) => {
    if (selectedCategory !== 'Todos' && post.category !== selectedCategory) return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.trim().toLowerCase();
    return (
      pickLang(post.title, lang).toLowerCase().includes(q) ||
      pickLang(post.excerpt, lang).toLowerCase().includes(q) ||
      post.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  });

  // Blog Index View
  if (!selectedPostId) {
    return (
      <div id="blog-index" className="bg-white dark:bg-brand-navy text-brand-navy/75 dark:text-white/75 min-h-screen pt-32 pb-24 font-sans relative">
        <Seo
          title={t('blog.seoTitle')}
          description={t('blog.seoDescription')}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none radial-glow z-0" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.25] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <Reveal className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="text-brand-coral font-mono text-xs font-bold uppercase tracking-widest bg-brand-light-gray dark:bg-brand-carbon border border-brand-coral/30 px-3 py-1 rounded-full">
              Loopa Insights
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy dark:text-white tracking-tight">
              {t('blog.heading')}
            </h1>
            <p className="text-brand-navy/75 dark:text-white/75 text-base">
              {t('blog.subheading')}
            </p>
          </Reveal>

          {/* Search */}
          <div className="max-w-md mx-auto mb-8 relative">
            <Search className="w-4 h-4 text-brand-navy/55 dark:text-white/55 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              id="blog-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('blog.searchPlaceholder')}
              className="w-full bg-brand-light-gray dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 focus:border-brand-coral rounded-xl pl-11 pr-4 py-3 text-sm text-brand-navy dark:text-white focus:outline-none placeholder-brand-lavender/40 transition-colors"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-brand-navy/10 dark:border-white/10 pb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`blog-filter-${cat.toLowerCase().replace(' ', '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer border ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-brand-coral to-brand-cyan text-brand-navy border-transparent font-extrabold shadow-md shadow-brand-coral/10'
                    : 'bg-brand-light-gray dark:bg-brand-carbon text-brand-navy/85 dark:text-white/85 border-brand-navy/10 dark:border-white/10 hover:text-brand-navy dark:hover:text-white hover:border-brand-coral/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post Hero Card (Only shown in 'Todos' or 'Inteligencia Artificial') */}
          {!searchQuery.trim() && (selectedCategory === 'Todos' || selectedCategory === 'Inteligencia Artificial') && featuredPost && (
            <div
              id="blog-featured-hero"
              className="bg-brand-light-gray dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 hover:border-brand-coral/40 rounded-3xl p-8 mb-12 md:p-12 cursor-pointer transition-all duration-300 group relative overflow-hidden"
              onClick={() => handleSelectPost('llm-privados-latam')}
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-coral/5 rounded-full blur-3xl pointer-events-none" />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center space-x-3 text-xs font-mono">
                    <span className="text-brand-coral bg-brand-light-gray dark:bg-brand-navy border border-brand-coral/25 px-2.5 py-1 rounded-full font-bold uppercase">
                      {t('blog.featuredBadge')}
                    </span>
                    <span className="text-brand-navy/55 dark:text-white/55">•</span>
                    <span className="text-brand-navy/85 dark:text-white/85">{pickLang(featuredPost.readTime, lang)}</span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy dark:text-white group-hover:text-brand-coral transition-colors leading-tight">
                    {pickLang(featuredPost.title, lang)}
                  </h2>
                  <p className="text-brand-navy/75 dark:text-white/75 text-sm leading-relaxed max-w-2xl">
                    {pickLang(featuredPost.excerpt, lang)}
                  </p>

                  <div className="flex items-center space-x-3 pt-4">
                    <div className="w-9 h-9 rounded-full bg-white dark:bg-brand-navy border border-brand-navy/10 dark:border-white/10 flex items-center justify-center text-xs font-bold text-brand-coral">
                      {featuredPost.author.avatar}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-brand-navy dark:text-white block">{featuredPost.author.name}</span>
                      <span className="text-[10px] text-brand-navy/65 dark:text-white/65 block font-semibold">{pickLang(featuredPost.author.role, lang)}</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <MediaPlaceholder ratio="4/3" label={t('blog.featuredImageLabel')} className="w-full" />
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-2xl bg-white dark:bg-brand-navy border border-brand-navy/10 dark:border-white/10 flex items-center justify-center text-brand-cyan group-hover:bg-gradient-to-r group-hover:from-brand-coral group-hover:to-brand-cyan group-hover:text-brand-navy transition-all duration-300 shadow-md">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Posts Grid */}
          {filteredPosts.length === 0 ? (
            <p className="text-center text-brand-navy/75 dark:text-white/75 text-sm py-12">
              {t('blog.noResults', { query: searchQuery })}
            </p>
          ) : (
          <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts
              .filter((p) => p.id !== 'llm-privados-latam' || searchQuery.trim() || selectedCategory !== 'Todos')
              .map((post) => (
                <article
                  key={post.id}
                  id={`blog-index-card-${post.id}`}
                  className="bg-white dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 hover:border-brand-coral/40 rounded-2xl overflow-hidden flex flex-col justify-between hover:bg-brand-light-gray dark:hover:bg-brand-navy transition-all duration-300 group cursor-pointer animate-fade-in"
                  onClick={() => handleSelectPost(post.id)}
                >
                  <MediaPlaceholder ratio="16/9" className="rounded-none border-x-0 border-t-0" />
                  <div className="p-6 space-y-4 flex flex-col justify-between flex-grow">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-brand-coral font-bold uppercase tracking-wider">{post.category}</span>
                        <span className="text-brand-navy/65 dark:text-white/65">{pickLang(post.readTime, lang)}</span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-brand-navy dark:text-white group-hover:text-brand-cyan transition-colors leading-snug">
                        {pickLang(post.title, lang)}
                      </h3>
                      <p className="text-brand-navy/90 dark:text-white/90 text-xs leading-relaxed line-clamp-3">
                        {pickLang(post.excerpt, lang)}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-brand-navy/10 dark:border-white/10 flex items-center justify-between">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-7 h-7 rounded-full bg-white dark:bg-brand-navy border border-brand-navy/10 dark:border-white/10 flex items-center justify-center text-[10px] font-bold text-brand-coral">
                          {post.author.avatar}
                        </div>
                        <div>
                          <span className="text-[11px] font-bold text-brand-navy dark:text-white block leading-tight">
                            {post.author.name}
                          </span>
                          <span className="text-[9px] text-brand-navy/55 dark:text-white/55 block font-semibold">
                            {pickLang(post.author.role, lang)}
                          </span>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-brand-navy/65 dark:text-white/65">{post.date}</span>
                    </div>
                  </div>
                </article>
              ))}
          </Reveal>
          )}
        </div>
      </div>
    );
  }

  // Article Detail View
  const post = BLOG_POSTS_DATA.find((p) => p.id === selectedPostId) || BLOG_POSTS_DATA[0];
  const { before, after } = splitContentForCTA(pickLang(post.content, lang));

  return (
      <div id="blog-detail-page" className="bg-white dark:bg-brand-navy text-brand-navy/75 dark:text-white/75 min-h-screen pt-32 pb-24 font-sans relative">
        <Seo title={pickLang(post.title, lang)} description={pickLang(post.excerpt, lang)} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none radial-glow z-0" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.25] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back to index button */}
          <button
            onClick={handleBackToBlog}
            className="inline-flex items-center space-x-2 text-brand-navy/85 dark:text-white/85 hover:text-brand-cyan text-sm font-bold transition-colors cursor-pointer mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t('blog.backToAll')}</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main article column */}
            <div className="lg:col-span-8 space-y-8">
              {/* Article Header Metadata */}
              <div className="space-y-6 pb-8 border-b border-brand-navy/10 dark:border-white/10">
                <div className="flex items-center space-x-3 text-xs font-mono">
                  <span className="text-brand-coral bg-brand-light-gray dark:bg-brand-carbon border border-brand-coral/30 px-3 py-1 rounded-full font-bold uppercase">
                    {post.category}
                  </span>
                  <span className="text-brand-navy/45 dark:text-white/45">•</span>
                  <span className="text-brand-navy/85 dark:text-white/85 flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{pickLang(post.readTime, lang)}</span>
                  </span>
                  <span className="text-brand-navy/45 dark:text-white/45">•</span>
                  <span className="text-brand-navy/85 dark:text-white/85 flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </span>
                </div>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy dark:text-white tracking-tight leading-tight">
                  {pickLang(post.title, lang)}
                </h1>

                {/* Author Profile Card */}
                <div className="flex items-center justify-between flex-wrap gap-4 pt-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-brand-light-gray dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 flex items-center justify-center font-bold text-brand-coral">
                      {post.author.avatar}
                    </div>
                    <div>
                      <span className="text-sm font-bold text-brand-navy dark:text-white block">{post.author.name}</span>
                      <span className="text-xs text-brand-navy/65 dark:text-white/65 block font-semibold">{pickLang(post.author.role, lang)}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handleShare}
                      className="inline-flex items-center space-x-2 bg-brand-light-gray dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 hover:border-brand-coral/40 text-brand-navy/90 dark:text-white/90 hover:text-brand-navy dark:hover:text-white px-4 py-2 rounded-xl text-xs transition-colors cursor-pointer"
                    >
                      {isCopied ? (
                        <>
                          <CheckCircle className="w-4 h-4 text-emerald-400" />
                          <span className="text-emerald-400 font-bold">{t('blog.linkCopied')}</span>
                        </>
                      ) : (
                        <>
                          <Share2 className="w-4 h-4" />
                          <span>{t('blog.shareArticle')}</span>
                        </>
                      )}
                    </button>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center w-9 h-9 bg-brand-light-gray dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 hover:border-brand-coral/40 text-brand-navy/90 dark:text-white/90 hover:text-brand-navy dark:hover:text-white rounded-xl transition-colors"
                      aria-label={t('blog.shareOnLinkedin')}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <MediaPlaceholder ratio="16/9" label={t('blog.articleImageLabel')} className="w-full" />

              {/* Article Body Content */}
              <div className="prose dark:prose-invert max-w-none text-brand-navy/75 dark:text-white/75 leading-relaxed space-y-6 text-base">
                {pickLang(post.content, lang) ? (
                  <>
                    <div className="space-y-6" dangerouslySetInnerHTML={{ __html: before }} />
                    <InnerCTA />
                    {after && <div className="space-y-6" dangerouslySetInnerHTML={{ __html: after }} />}
                  </>
                ) : (
                  <div className="space-y-6">
                    <p>
                      <em>{t('blog.placeholderTag')}</em>
                    </p>
                    <p>{t('blog.placeholderText1')}</p>
                    <InnerCTA />
                    <p>{t('blog.placeholderText2', { category: post.category })}</p>
                    <p>{t('blog.placeholderText3')}</p>
                  </div>
                )}
              </div>

              {/* Article Tags */}
              <div className="flex flex-wrap gap-2 pt-8 border-t border-brand-navy/10 dark:border-white/10">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-brand-light-gray dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 text-brand-coral font-mono text-xs font-bold px-3 py-1 rounded-lg"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Related CTA Card */}
              <div className="bg-brand-light-gray dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 rounded-2xl p-8 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 rounded-full blur-2xl" />
                <h3 className="font-display text-lg font-bold text-brand-navy dark:text-white">{t('blog.relatedCtaHeading')}</h3>
                <p className="text-brand-navy/75 dark:text-white/75 text-sm">
                  {t('blog.relatedCtaText')}
                </p>
                <button
                  onClick={() => {
                    navigate('/contacto');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-5 py-3 bg-gradient-to-r from-brand-coral to-brand-cyan hover:brightness-110 text-brand-navy font-bold rounded-xl text-xs transition-all cursor-pointer inline-flex items-center space-x-2 shadow-lg shadow-brand-coral/15"
                >
                  <span>{t('blog.scheduleTechnicalMeeting')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
  );
}

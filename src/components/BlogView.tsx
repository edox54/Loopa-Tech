import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Share2, Clock, Calendar, ArrowRight, CheckCircle, Search, Linkedin } from 'lucide-react';
import { BLOG_POSTS_DATA } from '../data';
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

  const filteredPosts = BLOG_POSTS_DATA.filter((post) => {
    if (selectedCategory !== 'Todos' && post.category !== selectedCategory) return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.trim().toLowerCase();
    return (
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  });

  // Blog Index View
  if (!selectedPostId) {
    return (
      <div id="blog-index" className="bg-brand-navy text-brand-lavender min-h-screen pt-32 pb-24 font-sans relative">
        <Seo
          title="Blog"
          description="Loopa Insights: análisis y perspectivas técnicas sobre datos, IA generativa, gobernanza y social listening para líderes en LatAm."
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none radial-glow z-0" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.25] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <Reveal className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="text-brand-coral font-mono text-xs font-bold uppercase tracking-widest bg-brand-carbon border border-brand-coral/30 px-3 py-1 rounded-full">
              Loopa Insights
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Pensamiento Estratégico en Datos e IA
            </h1>
            <p className="text-brand-lavender text-base">
              Análisis, guías y perspectivas técnicas exclusivas para directores de tecnología, fundadores y CIOs en Latinoamérica.
            </p>
          </Reveal>

          {/* Search */}
          <div className="max-w-md mx-auto mb-8 relative">
            <Search className="w-4 h-4 text-brand-lavender/40 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              id="blog-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar artículos, temas, tags..."
              className="w-full bg-brand-carbon border border-brand-navy/60 focus:border-brand-coral rounded-xl pl-11 pr-4 py-3 text-sm text-white focus:outline-none placeholder-brand-lavender/40 transition-colors"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-brand-navy/40 pb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`blog-filter-${cat.toLowerCase().replace(' ', '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer border ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-brand-coral to-brand-cyan text-brand-navy border-transparent font-extrabold shadow-md shadow-brand-coral/10'
                    : 'bg-brand-carbon text-brand-lavender/70 border-brand-navy/60 hover:text-white hover:border-brand-coral/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post Hero Card (Only shown in 'Todos' or 'Inteligencia Artificial') */}
          {!searchQuery.trim() && (selectedCategory === 'Todos' || selectedCategory === 'Inteligencia Artificial') && (
            <div
              id="blog-featured-hero"
              className="bg-brand-carbon border border-brand-navy/60 hover:border-brand-coral/40 rounded-3xl p-8 mb-12 md:p-12 cursor-pointer transition-all duration-300 group relative overflow-hidden"
              onClick={() => handleSelectPost('llm-privados-latam')}
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-coral/5 rounded-full blur-3xl pointer-events-none" />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center space-x-3 text-xs font-mono">
                    <span className="text-brand-coral bg-brand-navy/80 border border-brand-coral/25 px-2.5 py-1 rounded-full font-bold uppercase">
                      Destacado · IA
                    </span>
                    <span className="text-brand-lavender/40">•</span>
                    <span className="text-brand-lavender/70">6 min de lectura</span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white group-hover:text-brand-coral transition-colors leading-tight">
                    Cómo los Modelos LLM Privados están Transformando la Consulta de Datos Corporativos en LatAm
                  </h2>
                  <p className="text-brand-lavender text-sm leading-relaxed max-w-2xl">
                    ¿Por qué enviar los datos de tus clientes a APIs públicas es un riesgo reputacional letal? Analizamos el surgimiento de las arquitecturas de RAG privadas y seguras para corporativos tradicionales y fintechs.
                  </p>

                  <div className="flex items-center space-x-3 pt-4">
                    <div className="w-9 h-9 rounded-full bg-brand-navy border border-brand-navy/60 flex items-center justify-center text-xs font-bold text-brand-coral">
                      AS
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">Anita Sancho</span>
                      <span className="text-[10px] text-brand-lavender/50 block font-semibold">Content Lead en Loopa Technology</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <MediaPlaceholder ratio="4/3" label="Imagen destacada" className="w-full" />
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-2xl bg-brand-navy border border-brand-navy/40 flex items-center justify-center text-brand-cyan group-hover:bg-gradient-to-r group-hover:from-brand-coral group-hover:to-brand-cyan group-hover:text-brand-navy transition-all duration-300 shadow-md">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Posts Grid */}
          {filteredPosts.length === 0 ? (
            <p className="text-center text-brand-lavender/60 text-sm py-12">
              Sin resultados para "{searchQuery}". Probá con otro término.
            </p>
          ) : (
          <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts
              .filter((p) => p.id !== 'llm-privados-latam' || searchQuery.trim() || selectedCategory !== 'Todos')
              .map((post) => (
                <article
                  key={post.id}
                  id={`blog-index-card-${post.id}`}
                  className="bg-brand-carbon/60 border border-brand-navy/60 hover:border-brand-coral/40 rounded-2xl overflow-hidden flex flex-col justify-between hover:bg-brand-carbon transition-all duration-300 group cursor-pointer animate-fade-in"
                  onClick={() => handleSelectPost(post.id)}
                >
                  <MediaPlaceholder ratio="16/9" className="rounded-none border-x-0 border-t-0" />
                  <div className="p-6 space-y-4 flex flex-col justify-between flex-grow">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-brand-coral font-bold uppercase tracking-wider">{post.category}</span>
                        <span className="text-brand-lavender/50">{post.readTime}</span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-white group-hover:text-brand-cyan transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-brand-lavender/80 text-xs leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-brand-navy/40 flex items-center justify-between">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-7 h-7 rounded-full bg-brand-navy border border-brand-navy/60 flex items-center justify-center text-[10px] font-bold text-brand-coral">
                          {post.author.avatar}
                        </div>
                        <div>
                          <span className="text-[11px] font-bold text-slate-300 block leading-tight">
                            {post.author.name}
                          </span>
                          <span className="text-[9px] text-brand-lavender/40 block font-semibold">
                            {post.author.role}
                          </span>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-brand-lavender/50">{post.date}</span>
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
  const { before, after } = splitContentForCTA(post.content);

  return (
      <div id="blog-detail-page" className="bg-brand-navy text-brand-lavender min-h-screen pt-32 pb-24 font-sans relative">
        <Seo title={post.title} description={post.excerpt} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none radial-glow z-0" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.25] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back to index button */}
          <button
            onClick={handleBackToBlog}
            className="inline-flex items-center space-x-2 text-brand-lavender/70 hover:text-brand-cyan text-sm font-bold transition-colors cursor-pointer mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a todos los artículos</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main article column */}
            <div className="lg:col-span-8 space-y-8">
              {/* Article Header Metadata */}
              <div className="space-y-6 pb-8 border-b border-brand-navy/40">
                <div className="flex items-center space-x-3 text-xs font-mono">
                  <span className="text-brand-coral bg-brand-carbon border border-brand-coral/30 px-3 py-1 rounded-full font-bold uppercase">
                    {post.category}
                  </span>
                  <span className="text-brand-lavender/30">•</span>
                  <span className="text-brand-lavender/70 flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </span>
                  <span className="text-brand-lavender/30">•</span>
                  <span className="text-brand-lavender/70 flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </span>
                </div>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  {post.title}
                </h1>

                {/* Author Profile Card */}
                <div className="flex items-center justify-between flex-wrap gap-4 pt-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-brand-carbon border border-brand-navy/60 flex items-center justify-center font-bold text-brand-coral">
                      {post.author.avatar}
                    </div>
                    <div>
                      <span className="text-sm font-bold text-white block">{post.author.name}</span>
                      <span className="text-xs text-brand-lavender/50 block font-semibold">{post.author.role}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handleShare}
                      className="inline-flex items-center space-x-2 bg-brand-carbon border border-brand-navy/60 hover:border-brand-coral/40 text-brand-lavender/80 hover:text-white px-4 py-2 rounded-xl text-xs transition-colors cursor-pointer"
                    >
                      {isCopied ? (
                        <>
                          <CheckCircle className="w-4 h-4 text-emerald-400" />
                          <span className="text-emerald-400 font-bold">¡Enlace Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Share2 className="w-4 h-4" />
                          <span>Compartir Artículo</span>
                        </>
                      )}
                    </button>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center w-9 h-9 bg-brand-carbon border border-brand-navy/60 hover:border-brand-coral/40 text-brand-lavender/80 hover:text-white rounded-xl transition-colors"
                      aria-label="Compartir en LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <MediaPlaceholder ratio="16/9" label="Imagen destacada del artículo" className="w-full" />

              {/* Article Body Content */}
              <div className="prose prose-invert max-w-none text-brand-lavender leading-relaxed space-y-6 text-base">
                {post.content ? (
                  <>
                    <div className="space-y-6" dangerouslySetInnerHTML={{ __html: before }} />
                    <InnerCTA />
                    {after && <div className="space-y-6" dangerouslySetInnerHTML={{ __html: after }} />}
                  </>
                ) : (
                  <div className="space-y-6">
                    <p>
                      <em>[Contenido de demostración de alta fidelidad]</em>
                    </p>
                    <p>
                      Este artículo está actualmente configurado como plantilla de demostración visual para la propuesta de Loopa Technology. En el sitio de producción definitivo, este espacio contendrá el desarrollo editorial extendido, gráficos explicativos, flujos lógicos de bases de datos y fragmentos de código de referencia.
                    </p>
                    <InnerCTA />
                    <p>
                      Nuestra línea de publicaciones en <strong>{post.category}</strong> busca deconstruir problemas analíticos complejos para directores de TI y gerentes generales en Latinoamérica. Abordamos temas que van desde diccionarios de gobernanza de datos hasta la optimización de servidores locales de inferencia para procesar redes sociales en tiempo real.
                    </p>
                    <p>
                      Si desea conocer a profundidad nuestras investigaciones o colaborar con nuestro equipo de ingeniería en un reporte sectorial para LatAm, no dude en contactarnos de forma directa.
                    </p>
                  </div>
                )}
              </div>

              {/* Article Tags */}
              <div className="flex flex-wrap gap-2 pt-8 border-t border-brand-navy/40">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-brand-carbon border border-brand-navy/60 text-brand-coral font-mono text-xs font-bold px-3 py-1 rounded-lg"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Related CTA Card */}
              <div className="bg-brand-carbon border border-brand-navy/60 rounded-2xl p-8 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 rounded-full blur-2xl" />
                <h3 className="font-display text-lg font-bold text-white">¿Quieres implementar estas prácticas en tu organización?</h3>
                <p className="text-brand-lavender text-sm">
                  En Loopa Technology ayudamos a corporativos de LatAm a diseñar arquitecturas de RAG y LLMs con total privacidad y soberanía de datos, alineadas con sus políticas internas.
                </p>
                <button
                  onClick={() => {
                    navigate('/contacto');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-5 py-3 bg-gradient-to-r from-brand-coral to-brand-cyan hover:brightness-110 text-brand-navy font-bold rounded-xl text-xs transition-all cursor-pointer inline-flex items-center space-x-2 shadow-lg shadow-brand-coral/15"
                >
                  <span>Agendar Reunión Técnica</span>
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

import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
}

export function SEO({ title, description, canonical, noindex = false }: SEOProps) {
  const siteUrl = window.location.origin;
  const currentUrl = window.location.href;

  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={title} />
      {description && <meta property="twitter:description" content={description} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical || currentUrl} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex" />}
      
      {/* Google indexing */}
      <meta name="googlebot" content={noindex ? "noindex" : "index,follow"} />
    </Helmet>
  );
}

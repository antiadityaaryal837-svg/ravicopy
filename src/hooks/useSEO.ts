import { useEffect } from 'react';

interface UseSEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  ogTitle?: string;
  ogDescription?: string;
  articleMeta?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  jsonLd?: Record<string, any> | Record<string, any>[];
}

export default function useSEO({
  title,
  description,
  canonicalUrl,
  ogImage = 'https://adityaaryal.com.np/og-image.jpg',
  ogType = 'website',
  ogTitle,
  ogDescription,
  articleMeta,
  jsonLd,
}: UseSEOProps) {
  useEffect(() => {
    // 1. Update document title
    document.title = title;

    // Helper to get or create a meta tag
    const setMetaTag = (attr: string, value: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${value}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, value);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
      return element;
    };

    // Helper to get or create a link tag
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
      return element;
    };

    // 2. Set standard SEO meta tags
    setMetaTag('name', 'description', description);

    // 3. Set Canonical Link
    const currentCanonical = canonicalUrl || window.location.href;
    setLinkTag('canonical', currentCanonical);

    // 4. Set Open Graph tags
    setMetaTag('property', 'og:title', ogTitle || title);
    setMetaTag('property', 'og:description', ogDescription || description);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:url', currentCanonical);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:site_name', 'Aditya Aryal');

    // 5. Set Twitter tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', ogTitle || title);
    setMetaTag('name', 'twitter:description', ogDescription || description);
    setMetaTag('name', 'twitter:image', ogImage);

    // 6. Handle Article-specific meta tags
    const addedArticleTags: Element[] = [];
    if (ogType === 'article' && articleMeta) {
      if (articleMeta.publishedTime) {
        addedArticleTags.push(setMetaTag('property', 'article:published_time', articleMeta.publishedTime));
      }
      if (articleMeta.modifiedTime) {
        addedArticleTags.push(setMetaTag('property', 'article:modified_time', articleMeta.modifiedTime));
      }
      if (articleMeta.author) {
        addedArticleTags.push(setMetaTag('property', 'article:author', articleMeta.author));
      }
      if (articleMeta.section) {
        addedArticleTags.push(setMetaTag('property', 'article:section', articleMeta.section));
      }
      if (articleMeta.tags) {
        articleMeta.tags.forEach((tag) => {
          const el = document.createElement('meta');
          el.setAttribute('property', 'article:tag');
          el.setAttribute('content', tag);
          document.head.appendChild(el);
          addedArticleTags.push(el);
        });
      }
    }

    // 7. Inject JSON-LD Schema
    let jsonLdScript = document.getElementById('seo-json-ld') as HTMLScriptElement;
    if (jsonLd) {
      if (!jsonLdScript) {
        jsonLdScript = document.createElement('script');
        jsonLdScript.id = 'seo-json-ld';
        jsonLdScript.type = 'application/ld+json';
        document.head.appendChild(jsonLdScript);
      }
      jsonLdScript.text = JSON.stringify(jsonLd);
    } else if (jsonLdScript) {
      jsonLdScript.remove();
    }

    // Clean up dynamic meta tags when components change / unmount
    return () => {
      // Remove any tags added specifically for this article run
      addedArticleTags.forEach((tag) => tag.remove());
    };
  }, [title, description, canonicalUrl, ogImage, ogType, ogTitle, ogDescription, articleMeta, jsonLd]);
}

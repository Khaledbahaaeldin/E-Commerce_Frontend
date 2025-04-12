"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./page.module.css";
import Link from "next/link";

// Animation hook
function useIntersectionObserver(options = {}) {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isIntersecting];
}

export default function Home() {
  const [heroRef, heroVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [featuredRef, featuredVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [categoriesRef, categoriesVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [testimonialsRef, testimonialsVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  // Featured products data
  const featuredProducts = [
    {
      id: 1,
      name: "Eco-Friendly Water Bottle",
      price: 24.99,
      category: "Lifestyle",
    },
    {
      id: 2,
      name: "Minimalist Analog Watch",
      price: 89.99,
      category: "Accessories",
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      price: 129.99,
      category: "Electronics",
    },
    {
      id: 4,
      name: "Organic Cotton T-Shirt",
      price: 34.99,
      category: "Clothing",
    },
  ];

  // Categories data
  const categories = [
    { name: "Electronics" },
    { name: "Fashion" },
    { name: "Home & Living" },
    { name: "Beauty" },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      text: "The quality of products exceeded my expectations. Fast shipping and excellent customer service!",
      author: "Sarah Johnson",
      rating: 5,
    },
    {
      id: 2,
      text: "I've been shopping here for years and have always had a great experience. Highly recommended!",
      author: "Michael Chen",
      rating: 5,
    },
    {
      id: 3,
      text: "Great selection of products and competitive prices. Will definitely shop here again.",
      author: "Emma Rodriguez",
      rating: 4,
    },
  ];

  return (
    <div className={styles.homePage}>
      {/* Header/Navigation */}
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <h1 className={styles.logo}>LUXE</h1>
        </div>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className={styles.navIcons}>
          <button aria-label="Search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <button aria-label="Cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span className={styles.cartCount}>3</span>
          </button>
          <button aria-label="User Account">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`${styles.heroSection} ${heroVisible ? styles.visible : ""}`}
      >
        <div className={styles.heroContent}>
          <h1>Discover Your Style</h1>
          <p>Quality products curated for your lifestyle</p>
          <div className={styles.heroCtas}>
            <Link href="/shop" className={styles.primaryBtn}>
              Shop Now
            </Link>
            <Link href="/collections" className={styles.secondaryBtn}>
              Explore Collections
            </Link>
          </div>
        </div>
        <div className={styles.heroImageContainer}>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "#f0f0f0",
              backgroundImage:
                "linear-gradient(45deg, #f3f3f3 25%, transparent 25%, transparent 75%, #f3f3f3 75%, #f3f3f3), linear-gradient(45deg, #f3f3f3 25%, transparent 25%, transparent 75%, #f3f3f3 75%, #f3f3f3)",
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0, 10px 10px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                padding: "1rem",
                backgroundColor: "rgba(255,255,255,0.8)",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <p>Fashion Image</p>
            </div>
          </div>
        </div>
        <div className={styles.scrollIndicator}>
          <div className={styles.mouse}>
            <div className={styles.wheel}></div>
          </div>
          <p>Scroll to explore</p>
        </div>
      </section>

      {/* Featured Products */}
      <section
        ref={featuredRef}
        className={`${styles.featuredSection} ${
          featuredVisible ? styles.visible : ""
        }`}
      >
        <div className={styles.sectionHeader}>
          <h2>Featured Products</h2>
          <Link href="/shop" className={styles.viewAll}>
            View All
          </Link>
        </div>
        <div className={styles.productGrid}>
          {featuredProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.productImageContainer}>
                <div
                  style={{
                    width: "100%",
                    height: "300px",
                    backgroundColor: "#f0f0f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#666",
                  }}
                >
                  <p>{product.name}</p>
                </div>
                <div className={styles.productOverlay}>
                  <button className={styles.quickView}>Quick View</button>
                  <button className={styles.addToCart}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className={styles.productInfo}>
                <span className={styles.productCategory}>
                  {product.category}
                </span>
                <h3>{product.name}</h3>
                <span className={styles.productPrice}>
                  ${product.price.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section
        ref={categoriesRef}
        className={`${styles.categoriesSection} ${
          categoriesVisible ? styles.visible : ""
        }`}
      >
        <h2>Shop by Category</h2>
        <div className={styles.categoriesGrid}>
          {categories.map((category, index) => (
            <div key={index} className={styles.categoryCard}>
              <div className={styles.categoryImageContainer}>
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: `hsl(${index * 60}, 70%, 80%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></div>
              </div>
              <div className={styles.categoryOverlay}>
                <h3>{category.name}</h3>
                <Link
                  href={`/categories/${category.name.toLowerCase()}`}
                  className={styles.categoryLink}
                >
                  Browse Products
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Collection Banner */}
      <section
        className={styles.collectionBanner}
        style={{
          backgroundColor: "#333",
          backgroundImage:
            "linear-gradient(45deg, #333 25%, #444 25%, #444 50%, #333 50%, #333 75%, #444 75%, #444 100%)",
          backgroundSize: "20px 20px",
        }}
      >
        <div className={styles.collectionContent}>
          <span className={styles.collectionLabel}>New Collection</span>
          <h2>Summer 2025</h2>
          <p>
            Discover our latest collection featuring fresh styles for the season
          </p>
          <Link href="/collections/summer" className={styles.collectionBtn}>
            Explore Now
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section
        ref={testimonialsRef}
        className={`${styles.testimonialsSection} ${
          testimonialsVisible ? styles.visible : ""
        }`}
      >
        <h2>What Our Customers Say</h2>
        <div className={styles.testimonialCards}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.testimonialRating}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <svg
                    key={i + testimonial.rating}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
              <p className={styles.testimonialText}>{testimonial.text}</p>
              <span className={styles.testimonialAuthor}>
                — {testimonial.author}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className={styles.newsletterSection}>
        <div className={styles.newsletterContent}>
          <h2>Join Our Newsletter</h2>
          <p>
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <form className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Enter your email address"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerColumn}>
            <h3>LUXE</h3>
            <p>Curating quality products for your lifestyle since 2010.</p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h4>Shop</h4>
            <Link href="/shop">All Products</Link>
            <Link href="/new-arrivals">New Arrivals</Link>
            <Link href="/best-sellers">Best Sellers</Link>
            <Link href="/sale">Sale</Link>
          </div>

          <div className={styles.footerColumn}>
            <h4>Company</h4>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/press">Press</Link>
          </div>

          <div className={styles.footerColumn}>
            <h4>Help</h4>
            <Link href="/shipping">Shipping & Returns</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© 2025 LUXE. All rights reserved.</p>
          <div className={styles.paymentIcons}>
            <svg
              width="36"
              height="24"
              viewBox="0 0 36 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="36" height="24" rx="4" fill="#252525" />
              <path d="M14 15H22V17H14V15Z" fill="white" />
            </svg>
            <svg
              width="36"
              height="24"
              viewBox="0 0 36 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="36" height="24" rx="4" fill="#252525" />
              <circle cx="14" cy="12" r="4" fill="#FF5F00" />
              <circle cx="22" cy="12" r="4" fill="#EB001B" />
            </svg>
            <svg
              width="36"
              height="24"
              viewBox="0 0 36 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="36" height="24" rx="4" fill="#252525" />
              <path
                d="M13.5 8H22.5C23.33 8 24 8.67 24 9.5V14.5C24 15.33 23.33 16 22.5 16H13.5C12.67 16 12 15.33 12 14.5V9.5C12 8.67 12.67 8 13.5 8Z"
                fill="#2196F3"
              />
            </svg>
            <svg
              width="36"
              height="24"
              viewBox="0 0 36 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="36" height="24" rx="4" fill="#252525" />
              <path d="M15 10L13 14H15L16 12H18L15 10Z" fill="#FFC107" />
              <path d="M21 10L19 14H21L22 12H24L21 10Z" fill="#FFC107" />
            </svg>
          </div>
        </div>
      </footer>
    </div>
  );
}

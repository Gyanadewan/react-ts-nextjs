import BlogPost from "../components/post";


function Blogs() {
 const blogs  = [
  {
    id: 1,
    title: "How JavaScript Works",
    author: "Gyana Dewan",
    category: "JavaScript",
    description:
      "Learn the basics of JavaScript and how it makes websites interactive.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
  },
  {
    id: 2,
    title: "Getting Started with React",
    author: "Rahim Ahmed",
    category: "React",
    description:
      "A beginner-friendly introduction to React components, props, and state.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
  },
  {
    id: 3,
    title: "Why Learn TypeScript?",
    author: "Karim Hasan",
    category: "TypeScript",
    description:
      "Discover how TypeScript helps developers write safer and more maintainable code.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
  },
  {
    id: 4,
    title: "Building Websites with Tailwind CSS",
    author: "Sakib Khan",
    category: "CSS",
    description:
      "Learn how Tailwind CSS can help you build modern and responsive websites quickly.",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2",
  },
  {
    id: 5,
    title: "Introduction to Next.js",
    author: "Nayeem Islam",
    category: "Next.js",
    description:
      "Understand the basics of Next.js and why it is popular for modern web development.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },
];

  return (
    <div>
        <h2>Our blogs</h2>
        {
          blogs.map(post => <BlogPost key={post.id} post={post}></BlogPost>) 
        }
    </div>
  )
}

export default Blogs

// src/pages/Post.jsx (inspired by Gillion-style layout)
import React from "react";
import { useParams } from "react-router-dom";
import heroImg from "../assets/1/hero.png";
import authorImg from "../assets/1/author.png";

const Post = () => {
  // eslint-disable-next-line no-unused-vars
  const { id } = useParams();

  return (
    <div className="w-full">

      {/* Post Wrapper */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10">
        {/* Left: Main Content */}
        <div className="md:col-span-2">
          <div className="text-sm text-blue-500 uppercase mb-2">Technology</div>
          <h1 className="text-4xl font-bold mb-4">
            Which MacBook Should You Buy in 2025?
          </h1>

          <div className="flex items-center space-x-2 text-gray-500 text-sm mb-6">
            <img
              src= {authorImg}
              alt="Author"
              className="w-8 h-8 rounded-full"
            />
            <span>Lotanna Ezeuko, June 2025</span>
            <span>•</span>
            <span>2 comments</span>
            <span>•</span>
            <span>1 min read</span>
            <span>•</span>
            <span>3549 views</span>
          </div>

          <img
            src={heroImg}
            alt="MacBooks in 2025"
            className="w-full h-80 object-cover rounded mb-6"
          />

          <p className="text-gray-800 text-lg leading-relaxed mb-6">
            <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded mr-2 inline-block font-bold">
              N
            </span>
            ulla vel euismod eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia finibus ipsum vitae tempus...
          </p>

          <p className="text-gray-700 text-base mb-4">
            Pellentesque eget metus et velit maximus placerat ut in quam. Morbi vehicula neque ex, non ultricies arcu ullamcorper sit amet. Morbi rutrum sem non tortor eleifend...
          </p>

        {/* INSERT ADDITIONAL INFORMATION AND PICTURES HERE */}


          <div className="flex flex-wrap gap-2 mt-6">
            <span className="text-sm bg-gray-200 rounded px-3 py-1">#laptop</span>
            <span className="text-sm bg-gray-200 rounded px-3 py-1">#macbook</span>
            <span className="text-sm bg-gray-200 rounded px-3 py-1">#m4</span>
            <span className="text-sm bg-gray-200 rounded px-3 py-1">#tech</span>
            <span className="text-sm bg-gray-200 rounded px-3 py-1">#review</span>
          </div>
        </div>

        {/* Right: Sidebar */}
        <aside className="space-y-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Hot Topics</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex justify-between items-center">
                <span>Best Tech in 2025</span>
                <span className="text-xs">📖</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Which phone should I get in 2025</span>
                <span className="text-xs">👀</span>
              </li>
              <li className="flex justify-between items-center">
                <span>The Beats Pill?</span>
                <span className="text-xs">💬</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">X</h3>
            <div className="w-full h-24 bg-gray-100 flex items-center justify-center text-gray-400">
              Embed coming soon
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Tiktok</h3>
            <div className="w-full h-24 bg-gray-100 flex items-center justify-center text-gray-400">
              Embed coming soon
            </div>
          </div>
        </aside>
      </div>

      {/* Related Posts */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">Related Posts</h2>

        {/* Define related posts manually for full control */}
        <div className="grid md:grid-cols-3 gap-6">
            {[
            {
                title: "Best Wireless Earbuds Under £100 (2025)",
                image: "/assets/related/earbuds.jpg",
                tags: "Tech, Review",
            },
            {
                title: "iPhone 16: Hype or Real Upgrade?",
                image: "/assets/related/iphone16.jpg",
                tags: "Phones, Reviews",
            },
            {
                title: "This Budget Laptop Surprised Me – Full Review",
                image: "/assets/related/laptop.jpg",
                tags: "Laptops, Reviews",
            },
            ].map((post, index) => (
            <div
                key={index}
                className="bg-white rounded shadow hover:shadow-md transition overflow-hidden"
            >
                <img
                src={post.image}
                alt={post.title}
                className="w-full h-36 object-cover"
                />
                <div className="p-4">
                <p className="text-xs text-blue-500 uppercase">{post.tags}</p>
                <h3 className="font-semibold text-lg">{post.title}</h3>
                </div>
            </div>
            ))}
        </div>
        </div>
            </div>
        );
};

export default Post;
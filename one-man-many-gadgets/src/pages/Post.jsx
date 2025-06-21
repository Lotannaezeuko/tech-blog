// src/pages/Post.jsx (inspired by Gillion-style layout)
import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();

  return (
    <div className="w-full">

      {/* Post Wrapper */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10">
        {/* Left: Main Content */}
        <div className="md:col-span-2">
          <div className="text-sm text-blue-500 uppercase mb-2">Business, News</div>
          <h1 className="text-4xl font-bold mb-4">
            GoPro Action Cameras Are Getting A Serious Upgrade
          </h1>

          <div className="flex items-center space-x-2 text-gray-500 text-sm mb-6">
            <img
              src="/assets/profile.jpg"
              alt="Author"
              className="w-8 h-8 rounded-full"
            />
            <span>Lotanna, 2025</span>
            <span>•</span>
            <span>2 comments</span>
            <span>•</span>
            <span>1 min read</span>
            <span>•</span>
            <span>3549 views</span>
          </div>

          <img
            src="/assets/gopro.jpg"
            alt="GoPro"
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
            <span className="text-sm bg-gray-200 rounded px-3 py-1">#gopro</span>
            <span className="text-sm bg-gray-200 rounded px-3 py-1">#news</span>
            <span className="text-sm bg-gray-200 rounded px-3 py-1">#upgrade</span>
            <span className="text-sm bg-gray-200 rounded px-3 py-1">#tech</span>
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
                <span>Is Vinyl Back?</span>
                <span className="text-xs">👀</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Web Designers: Do Brands Matter?</span>
                <span className="text-xs">💬</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Twitter</h3>
            <div className="w-full h-24 bg-gray-100 flex items-center justify-center text-gray-400">
              Embed coming soon
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Facebook</h3>
            <div className="w-full h-24 bg-gray-100 flex items-center justify-center text-gray-400">
              Embed coming soon
            </div>
          </div>
        </aside>
      </div>

      {/* Related Posts */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white rounded shadow hover:shadow-md transition overflow-hidden"
            >
              <img
                src="/assets/related.jpg"
                alt="Related Post"
                className="w-full h-36 object-cover"
              />
              <div className="p-4">
                <p className="text-xs text-blue-500 uppercase">Tech, Review</p>
                <h3 className="font-semibold text-lg">
                  Why I Switched to Professional Camera
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
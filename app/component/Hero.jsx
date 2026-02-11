import React from 'react';
import {
    Search,
    Video,
    Film,
    PlaySquare,
    MonitorPlay,
    Play,
    Phone,
    Image,
    Star,
    Hash,
    User
} from "lucide-react"

const tools = [
    { icon: <Video className="text-orange-500 w-6 h-6" />, label: "Video downloader" },
    { icon: <Film className="text-orange-500 w-6 h-6" />, label: "Insta Reels downloader" },
    { icon: <PlaySquare className="text-orange-500 w-6 h-6" />, label: "Facebook Reels Downloader" },
    { icon: <MonitorPlay className="text-orange-500 w-6 h-6" />, label: "Insta Story Saver" },
    { icon: <Play className="text-orange-500 w-6 h-6" />, label: "YouTube Shorts Downloader" },
    { icon: <Phone className="text-orange-500 w-6 h-6" />, label: "Profile Pic downloader" },
    { icon: <Image className="text-orange-500 w-6 h-6" />, label: "Thumbnail downloader" },
    { icon: <Star className="text-orange-500 w-6 h-6" />, label: "Highlights downloader" },
    { icon: <Hash className="text-orange-500 w-6 h-6" />, label: "Wedding Tags generator" },
    { icon: <User className="text-orange-500 w-6 h-6" />, label: "User Info" },
]


const Home = () => {

    return (
        <div className="w-full min-h-[calc(100vh-60px)] flex flex-col items-center px-4 sm:px-6 lg:px-0 bg-[#F9FAFB]">

            {/* HERO */}
            <div className="w-full max-w-5xl flex flex-col items-center text-center mt-8 lg:mt-14">

                {/* Title */}
                <h1 className="font-thin md:font-bold text-2xl sm:text-3xl lg:text-4xl leading-snug flex flex-col lg:flex-row items-center justify-center text-center">
                    <span className="text-[#043042]">Trending Hashtag:</span>{" "}
                    <span className="text-[#eb5d13]">Best Hashtags Generator</span>
                </h1>

                {/* Search */}
                <div className="w-full mt-6 flex justify-center">
                    <div className="w-full sm:w-[90%] lg:w-[650px]
                      flex items-center
                      border border-[#f9a629]
                      bg-white rounded-full overflow-hidden">

                        <input
                            type="text"
                            placeholder="Explore hashtags, trends, and more..."
                            className="flex-1 px-4 py-3 text-sm sm:text-base outline-none"
                        />

                        <button className="w-12 h-12 bg-[#F9A629] flex items-center justify-center hover:bg-[#eb5d13]">
                            <Search className="text-white" />
                        </button>
                    </div>
                </div>

                {/* Description */}
                <p className="hidden md:block mt-6 max-w-3xl text-sm sm:text-base lg:text-lg leading-relaxed px-2">
                    Welcome to{" "}
                    <a className="text-[#eb5d13]" href="#">trendinghashtag.in</a>{" "}
                    the best hashtag generator for your social media posts like Instagram, X (Twitter),
                    YouTube and Facebook. Our AI-powered hashtag generator provides the best
                    trending hashtags across all platforms.
                </p>
                
                {/* Free Download */}
                <h2 className="mt-8 text-lg sm:text-xl lg:text-2xl font-semibold text-[#043042]">
                    Free Download
                </h2>

                {/* Links */}
                <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-2
                    text-sm sm:text-base text-[#eb5d13]">
                    <span>Insta Reels</span>
                    <span>Facebook Videos</span>
                    <span>Youtube Videos</span>
                    <span>Insta Stories</span>
                    <span>Pinterest Videos</span>
                    <span>Reddit Videos</span>
                </div>

                {/* CTA */}
                <button className="mt-6 bg-[#eb5d13] text-white px-6 py-2 rounded-md
                       text-sm sm:text-base hover:bg-amber-500">
                    Free Download Now &gt;&gt;
                </button>
            </div>


            {/* TOOLS GRID */}
            <div className="w-full bg-[#FBF9F4] mt-12 py-10">
                <div className="max-w-6xl mx-auto grid
                    grid-cols-2
                    sm:grid-cols-3
                    lg:grid-cols-5
                    gap-4 sm:gap-6 px-4">

                    {tools.map((tool, index) => (
                        <div
                            key={index}
                            className="bg-[#FFFDF0] rounded-xl
                     flex flex-col items-center justify-center
                     py-6 sm:py-8
                     gap-2 cursor-pointer
                     hover:shadow-md transition">

                            <div className="text-[#eb5d13] text-xl sm:text-2xl">
                                {tool.icon}
                            </div>

                            <p className="text-xs sm:text-sm text-center font-medium text-[#043042]">
                                {tool.label}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </div>

    )
}

export default Home
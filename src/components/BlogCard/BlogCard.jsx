import React from 'react'
import Button from '../Button/Button'
import { RiQuillPenLine } from "react-icons/ri";
import { BsCalendar2Date } from "react-icons/bs";

const BlogCard = ({ article }) => {
    const writeIcon = {
        color: "#FB2E86"
    }
    const dateIcon = {
        color: "#FFA454"
    }

    return (
        <div className='w-full h-[550px]'> {/* Fixed height untuk card */}
            <div className='shadow rounded-lg group hover:shadow-lg transition-all duration-300 h-full flex flex-col'>
                {/* Image container dengan fixed height */}
                <div className='h-[250px] overflow-hidden'>
                    <img 
                        src={article.image} 
                        className='w-full h-full object-cover rounded-t-lg' 
                        alt={article.title} 
                    />
                </div>

                {/* Content container dengan fixed height dan proper spacing */}
                <div className='flex-1 py-6 px-4 flex flex-col'>
                    {/* Author and Date */}
                    <div className='flex items-center gap-8 mb-4'>
                        <span className='flex items-center gap-2 text-sm'>
                            <RiQuillPenLine style={writeIcon} />
                            {article.author}
                        </span>
                        <span className='flex items-center gap-2 text-sm'>
                            <BsCalendar2Date style={dateIcon} />
                            {article.date}
                        </span>
                    </div>

                    {/* Title dengan fixed height dan line clamp */}
                    <h2 className='text-textBlue fnt font-bold text-lg min-h-[56px] line-clamp-2 group-hover:text-my-pink'>
                        {article.title}
                    </h2>

                    {/* Excerpt dengan fixed height dan line clamp */}
                    <p className='text-[#72718F] font-[400] min-h-[80px] line-clamp-3 mb-4'>
                        {article.excerpt}
                    </p>

                    {/* Button di bagian bawah */}
                    <div className='mt-auto'>
                        <Button
                            className="bg-transparent font-bold text-base group-hover:text-my-pink border-b border-textBlue group-hover:border-my-pink"
                            title="Read More" 
                            link={article.link}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
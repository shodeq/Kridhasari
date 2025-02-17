import React from 'react'
import BlogCard from '../../../components/BlogCard/BlogCard'

const LeatestBlog = () => {
    const blogArticles = [
        {
            title: "Mengenal Enting-Enting Geti: Warisan Kuliner Tradisional",
            author: "Kuliner Nusantara",
            date: "15 Feb 2025",
            image: "/images/blog/enting-geti-traditional.jpg",
            excerpt: "Eksplorasi sejarah dan proses pembuatan enting-enting geti, camilan khas yang telah menjadi warisan kuliner Indonesia.",
            link: "/blog/warisan-kuliner-enting-geti"
        },
        {
            title: "Inovasi Modern Enting-Enting Geti Premium",
            author: "Food Innovation",
            date: "12 Feb 2025",
            image: "/images/blog/enting-geti-premium.jpg",
            excerpt: "Temukan bagaimana enting-enting geti bertransformasi menjadi camilan premium dengan sentuhan modern namun tetap mempertahankan cita rasa asli.",
            link: "/blog/inovasi-enting-geti"
        },
        {
            title: "Tips Memilih Enting-Enting Geti Berkualitas",
            author: "Quality Control",
            date: "10 Feb 2025",
            image: "/images/blog/enting-geti-quality.jpg",
            excerpt: "Panduan lengkap memilih enting-enting geti berkualitas, dari tekstur hingga kemasan yang tepat untuk menjaga keawetan produk.",
            link: "/blog/tips-memilih-enting-geti"
        }
    ]

    return (
        <div className='py-2'>
            <div className='container mx-auto'>
                <h2 className='text-sectionTitle fnt text-4xl font-bold text-center py-12'>
                    Latest Blog
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
                    {blogArticles.map((article, index) => (
                        <BlogCard key={index} article={article} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LeatestBlog
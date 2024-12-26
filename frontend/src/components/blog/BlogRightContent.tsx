import blog_data from "@/data/blog-data";
import SearchIcon from "@/svg/SearchIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogRightContent = () => {
    return (
        <>
            <div className='col-xl-4 col-lg-8 col-md-8'>
                <div className='sidebar-widget-wrapper'>
                    <div className='sidebar__search p-relative mb-30'>
                        <form action='#'>
                            <input
                                type='text'
                                placeholder='Bloglarda arayın...'
                            />
                            <button type='submit'>
                                <SearchIcon />
                            </button>
                        </form>
                    </div>
                    <div className='sidebar__widget mb-30'>
                        <div className='sidebar__widget-head mb-35'>
                            <h4 className='sidebar__widget-title'>
                                Son Yazılar
                            </h4>
                        </div>
                        <div className='sidebar__widget-content'>
                            <div className='rc__post-wrapper'>
                                {blog_data?.slice(0, 3)?.map((item) => (
                                    <div
                                        key={item?.id}
                                        className='rc__post d-flex align-items-center'
                                    >
                                        <div className='rc__thumb mr-20'>
                                            <Link
                                                href={`/blog-details/${item?.id}`}
                                            >
                                                <Image
                                                    src={item?.blogImg}
                                                    alt='img'
                                                />
                                            </Link>
                                        </div>
                                        <div className='rc__content'>
                                            <div className='rc__meta'>
                                                <span> {item?.date} </span>
                                            </div>
                                            <h6 className='rc__title'>
                                                <Link
                                                    href={`/blog-details/${item?.id}`}
                                                >
                                                    {item?.title}
                                                </Link>
                                            </h6>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='sidebar__widget mb-30'>
                        <div className='sidebar__widget-head mb-35'>
                            <h4 className='sidebar__widget-title'>Kategori</h4>
                        </div>
                        <div className='sidebar__widget-content'>
                            <div className='sidebar__category'>
                                <ul>
                                    <li>
                                        <Link href='/blog'>Gömlekler (2)</Link>
                                    </li>
                                    <li>
                                        <Link href='/blog'>Ceketler (4)</Link>
                                    </li>
                                    <li>
                                        <Link href='/blog'>
                                            Plaj Giyimi (8)
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/blog'>İç Giyim (5)</Link>
                                    </li>
                                    <li>
                                        <Link href='/blog'>Çanta (3)</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='sidebar__widget mb-30'>
                        <div className='sidebar__widget-head mb-35'>
                            <h4 className='sidebar__widget-title'>Etiketler</h4>
                        </div>
                        <div className='sidebar__widget-content'>
                            <div className='sidebar__tag '>
                                <Link href='/blog'>Moda</Link>
                                <Link href='/blog'>Şapkalar</Link>
                                <Link href='/blog'>Çantalar</Link>
                                <Link href='/blog'>Spor Ayakkabı</Link>
                                <Link href='/blog'>Kot</Link>
                                <Link href='/blog'>Güneş Gözlükleri</Link>
                                <Link href='/blog'>Vagabond</Link>
                                <Link href='/blog'>İpuçları</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogRightContent;

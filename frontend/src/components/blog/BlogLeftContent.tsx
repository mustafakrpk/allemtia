"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchBlogs, Blog } from "@/api/blogApi";

const BlogLeftContent = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const data = await fetchBlogs();
        setBlogs(data);
      } catch (err: any) {
        setError("Bloglar yüklenirken bir hata oluştu.");
      } finally {
        setLoading(false);
      }
    };

    getBlogs();
  }, []);

  if (loading) {
    return <p>Bloglar yükleniyor...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <div className="col-xl-8 col-lg-12">
        <div className="blog-main-wrapper mb-30">
          <div className="row">
            {blogs.map((item) => (
              <div key={item.id} className="col-xl-12 col-lg-6 col-md-12">
                <div className="blog-wrapper position-relative mb-30">
                  <div className="blog-thumb">
                    <Link href={`/blog-details/${item.id}`}>
                      <Image
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                        src={item.blogImg}
                        alt="blog-img"
                        width={600}
                        height={400}
                      />
                    </Link>
                  </div>
                  <div className="blog-content-wrapper">
                    <div className="blog-meta">
                      <div className="blog-date">
                        <i className="flaticon-calendar"></i>
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                      </div>
                      <div className="blog-user">
                        <i className="flaticon-avatar"></i>
                        <span>{item.author || "Admin"}</span>
                      </div>
                    </div>
                    <div className="blog-content">
                      <Link href={`/blog-details/${item.id}`}>
                        <h3>{item.title}</h3>
                      </Link>
                      <p>{item.content.substring(0, 100)}...</p>
                      <Link className="blog-btn" href={`/blog-details/${item.id}`}>
                        Daha fazla oku
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="common-pagination mt-30 mb-20">
            <ul>
              <li>
                <Link href="#">
                  <i className="fal fa-angle-left"></i>
                </Link>
              </li>
              <li className="active">
                <Link href="#">
                  <span>01</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span>02</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fal fa-angle-right"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogLeftContent;

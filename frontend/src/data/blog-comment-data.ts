import courseStudentImg from "../../public/assets/img/testimonial/course-reviews-1.png";
import commentOne from "../../public/assets/img/testimonial/course-reviews-2.png";
import { CommentType } from "@/interFace/interFace";

export const commentData: CommentType[] = [
    {
        id: "blog-comment-id-1",
        date: "15 Ocak 05:52 pm",
        comment:
            "Tüm varlıklar zorlu ve zaman alıcı teknik işlerdir. Ve tabii ki, sonucun kusursuz ve keyifli olması gerekir — hatta geliştirmek ve sürdürmek eğlenceli bile olabilir. İster yeni bir satıcı için vitrin açıyor olun, fark etmez.",
        email: "admin@gmail.com",
        name: "Rosalina Kelian",
        postId: "blog-id-1",
        img: courseStudentImg,
        title: "Başladığımda Angular Hakkında Keşke Bilseydim Dediklerim",
    },
    {
        id: "blog-comment-id-2",
        date: "10 Ocak 07:40 pm",
        comment:
            "Tüm varlıklar zorlu ve zaman alıcı teknik işlerdir. Ve tabii ki, sonucun kusursuz ve keyifli olması gerekir — hatta geliştirmek ve sürdürmek eğlenceli bile olabilir. İster yeni bir satıcı için vitrin açıyor olun, fark etmez.",
        email: "admin@gmail.com",
        name: "Rosalina Kelian",
        postId: "blog-id-2",
        img: commentOne,
        title: "Henüz Duymadığınız Sağlıklı Yemekler İçin Eşsiz Fikirler",
    },
    {
        id: "blog-comment-id-3",
        date: "05 Ocak 09:42 pm",
        comment:
            "Tüm varlıklar zorlu ve zaman alıcı teknik işlerdir. Ve tabii ki, sonucun kusursuz ve keyifli olması gerekir — hatta geliştirmek ve sürdürmek eğlenceli bile olabilir. İster yeni bir satıcı için vitrin açıyor olun, fark etmez.",
        email: "admin@gmail.com",
        name: "Arista Williamson",
        postId: "blog-id-4",
        img: courseStudentImg,
        title: "Kapsayıcı Tasarımın Önündeki Bilinçsiz Engeller",
    },
];

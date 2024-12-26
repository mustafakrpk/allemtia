import { BlogType } from "@/interFace/interFace";
import blog1 from "../../public/assets/img/blog/b-1.jpg";
import blog2 from "../../public/assets/img/blog/b-2.jpg";
import blog3 from "../../public/assets/img/blog/b-3.jpg";

const blog_data: BlogType[] = [
    {
        id: 1,
        blogImg: blog1,
        category: "İNŞAAT MALZEMELERİ",
        date: "31 MAR 2021",
        title: "Allemtia’tan Değerli Cyber Monday İnşaat Ürünleri",
    },
    {
        id: 2,
        blogImg: blog2,
        category: "İNŞAAT MALZEMELERİ",
        date: "31 MAR 2021",
        title: "Son Zamanlarda Sipariş Verdiğim Tatil Evi Dekorasyonu",
    },
    {
        id: 3,
        blogImg: blog3,
        category: "İNŞAAT MALZEMELERİ",
        date: "31 MAR 2021",
        title: "Henüz Duymadığınız İnşaat İçin Eşsiz Fikirler",
    },
];

export default blog_data;

import { View, Text, Image } from "react-native";
import React from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import KulinerCard from "../../components/kulinercard";

const kulinersehat = [
  {
    id: "1",
    nama: "VEGETABLE SALAD",
    gambar: "https://yummyindiankitchen.com/wp-content/uploads/2021/11/vegetable-salad-recipe-for-weight-loss-recipe-500x500.jpg",
    deskripsi: "VEGETABLE SALAD adalah hidangan yang terdiri dari berbagai jenis sayuran segar ",
  },
  {
    id: "2",
    nama: "GADO GADO",
    gambar: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/10/25025300/WhatsApp-Image-2023-10-25-at-09.51.47.jpeg.webp",
    deskripsi: "Gado gado adalah makanan yang terdiri atas sayur-sayuran, kentang, tempe, tahu, telur rebus, dan lain-lain diberi bumbu sambal kacang dan sebagainya.",
  },
  {
    id: "3",
    nama: "SUP AYAM",
    gambar: "https://nnc-media.netralnews.com/IMG-Netral-News-User -47-W3PNHVZJT8.jpg",
    deskripsi: "Sup ayam klasik terdiri dari kaldu yang dimasukkan potongan ayam dan sayuran",
  },
  {
    id: "4",
    nama: "RUJAK BULUNG",
    gambar: "https://cdn.idntimes.com/content-images/community/2020/12/image-8b6a0795c0d9bfffb97fdc32f4b37156.jpg",
    deskripsi: "Rujak bulung adalah sebuah jenis rujak khas Bali yang terbuat dari rumput laut atau bulung, yaitu bulung boni. disajikan dengan kuah pindang.",
  },
  {
    id: "5",
    nama: "GARANG ASAM",
    gambar: "https://image.popmama.com/content-images/community/20221109/community-7874e7528cf22de2b8579e4ef4e6a6b3.jpg",
    deskripsi: "Garang asem adalah makanan tradisional khas Jawa Tengah. yang dibuat dari olahan ayam yang dimasak menggunakan daun pisang dan didominasi oleh rasa asam dan pedas.",
  },
  {
    id: "6",
    nama: "NASI LIWET",
    gambar: "https://img.kurio.network/YaNIwftaRiHsAD1FpRtzEHFPZ4g=/1200x900/filters:quality(80)/https://kurio-img.kurioapps.com/22/07/22/eb2b3286-a897-4a46-a6de-bcd6de63c8df.jpg",
    deskripsi: "Nasi liwet adalah hidangan nasi khas Indonesia yang dimasak dengan santan, kaldu ayam, dan rempah-rempah.",
  },
  {
    id: "7",
    nama: "PECEL",
    gambar: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/indizone/2022/05/25/N4sN0po/cara-membuat-nasi-pecel-khas-madiun-yang-enak-gampang-banget46.jpg",
    deskripsi: "adalah makanan yang terdiri atas sayuran rebus, seperti kacang panjang, bayam, taoge yang disiram dengan kuah sambal kacang dan sebagainya.",
  },
  {
    id: "8",
    nama: "KAREDOK",
    gambar: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/esensi/2023/11/karedok.jpg",
    deskripsi: "Karedok dibuat dengan bahan-bahan sayuran mentah antara lain; mentimun, taoge, kol, kacang panjang, ubi, labu siam daun kemangi, dan terong atau leunca.",
  },
  {
    id: "9",
    nama: "NASI UDUK",
    gambar: "https://www.blibli.com/friends-backend/wp-content/uploads/2023/04/B300028-Cover-resep-nasi-uduk-scaled.jpg",
    deskripsi : "Nasi uduk adalah hidangan yang dibuat dari nasi putih yang diaron dan dikukus dengan santan, serta dibumbui dengan pala, kayu manis, jahe, daun serai, dan merica.",
  },
  {
    id: "10",
    nama: "BAKSO",
    gambar: "https://assets.unileversolutions.com/recipes-v2/245281.jpg",
    deskripsi: "Bakso umumnya dibuat dari campuran daging sapi giling dan tepung tapioka, tetapi ada juga bakso yang terbuat dari daging ayam, babi, ikan, udang, kambing, bahkan daging kerbau.",
  },
  {
    id: "11",
    nama: "SANDWICH",
    gambar: "https://storage.googleapis.com/bakingworld-web-production/uploads/media/content/3de8ca6781ce9d5d9f55fa362f37ddf7_resize_w1000-1667380895160.jpg",
    deskripsi: "Sandwich adalah hidangan yang biasanya terdiri dari daging, keju atau sayuran yang digunakan sebagai isian di antara irisan roti.",
  },
  {
    id: "12",
    nama: "BURGER",
    gambar: "https://www.sugacoffee.id/wp-content/uploads/2024/07/23.-Burger-Sejarah-Pengertian-Jenis-Bahan-dan-Cara-Membuatnya-Suga-Coffee-1.jpg",
    deskripsi: "hidangan yang terdiri dari isian biasanya patty atau daging giling, yang ditempatkan didalam irisan roti atau roti gulung. Roti sering disajikan dengan keju, selada, tomat, bawang bombay, acar.",
  },
  {
    id: "13",
    nama: "KEBAB",
    gambar: "https://cdn0-production-images-kly.akamaized.net/2tQIY0BY4Xl-WykyI48PW9Xmu98=/0x67:999x630/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4055729/original/080272000_1655437167-shutterstock_2127663698.jpg",
    deskripsi: "Kebab terdiri dari potongan daging giling, terkadang dengan sayuran dan berbagai pelengkap lainnya sesuai dengan resep tertentu. kebab biasanya dimasak di tusuk sate di atas api atau diatas panggangan.",
  },
  {
    id: "14",
    nama: "VEGAN STEAK",
    gambar: "https://www.theedgyveg.com/wp-content/uploads/2021/03/Vegan-Mushroom-Steak-1.jpeg",
    deskripsi: "produk makanan yang terbuat dari bahan vegetarian atau vegan, dimakan sebagai pengganti daging. Alternatif daging biasanya mendekati kualitas jenis daging tertentu, seperti rasa di mulut, rasa, penampilan, atau karakteristik kimia.",
  },
  {
    id: "15",
    nama: "NASI GORENG JAWA",
    gambar: "https://blog.tokowahab.com/wp-content/uploads/2020/02/Resep-Nasi-Goreng-Jawa.jpg",
    deskripsi: "Nasi goreng Jawa biasanya dibumbui dengan sambal ulek, bawang, terasi, dan dimasak dengan kayu atau anglo. Selain itu, sering juga ditambahkan telur goreng, kerupuk, kubis dan timun.",
  },
  {
    id: "16",
    nama: "SAYUR ASEM",
    gambar: "https://assets.unileversolutions.com/v1/130816325.jpg",
    deskripsi: "sayur asem adalah masakan sejenis sayur yang khas Indonesia. Ada banyak variasi lokal sayur asam seperti sayur asam Jakarta (variasi dari orang Betawi di Jakarta), sayur asam kangkung (variasi yang menggunakan kangkung), dan sayur asam ikan asin.",
  },
  {
    id: "17",
    nama: "FISH & CHIPS",
    gambar: "https://marleyspoon.com/media/recipes/74642/main_photos/large/baked_fish_oven_chips_with_minty_peas-bcbe47b2f4a1fbeb11bfca935ea684c2.jpeg",
    deskripsi: "yang terdiri dari ikan goreng dalam adonan, disajikan dengan keripik. Sering dianggap sebagai hidangan nasional Britania Raya, FISH & CHIPS berasal dari Inggris pada abad ke-19.",
  },
  {
    id: "18", 
    nama:"PLECING KANGKUNG",
    gambar:"https://www.masakapahariini.com/wp-content/uploads/2020/11/plecing-kangkung.jpg",
    deskripsi: "Plecing kangkung terdiri dari kangkung yang direbus dan disajikan dalam keadaan dingin dan segar dengan sambal tomat, yang dibuat dari Cabai rawit, garam, terasi dan tomat, dan kadang kala diberi tetesan jeruk limau.",
  },
  {
    id: "19",
    nama: "TUMIS KANGKUNG",
    gambar: "https://www.finnafood.com/blog/wp-content/uploads/2023/06/22.-Tumis-Kangkung-Sambal-Terasi-Nikmat-Sederhana.jpg",
    deskripsi: "Tumis kangkung adalah salah satu hidangan sayuran yang paling sederhana, mudah, dan juga paling murah di Asia.",
  },
  {
    id: "20",
    nama: "LODEH",
    gambar: "https://nnc-media.netralnews.com/IMG-Netral-News-User -31-NFPE74XZU0.jpg",
    deskripsi: "adalah masakan sayur yang berkuah santan khas Indonesia, terutama di daerah Jawa Tengah dan DI Yogyakarta.",
  },
  {
    id: "21",
    nama: "GREEN SALAD",
    gambar: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chopped-green-salad-with-herby-chilli-dressing-0bc8e57.jpg",
    deskripsi: "GREEN SALAD menggunakan sayuran berdaun hijau seperti selada, arugula atau rocket, kangkung atau bayam.",
  },
];
const KulinerDetail = () => {
  const { kuliner } = useLocalSearchParams();
  const  makanan = kulinersehat.filter(function (item) {
    return item.id === kuliner;
  });

  console.log(makanan);



  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <KulinerCard item={makanan[0]} />
    </SafeAreaView>

  );
};

export default KulinerDetail; 
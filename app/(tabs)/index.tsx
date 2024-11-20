import { Link } from "expo-router";
import { FlatList,Pressable, Image, StyleSheet, Text, View,} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Kulinercard from "../../components/kulinercard";
import { useState } from "react";
const CATEGORIES = [
  {
    id: "s",
    name: "snack",
  },
  {
    id: "d",
    name: "desserts",
  },
  {
    id: "f",
    name: "foods",
  },
  {
    id: "b",
    name: "breakfast",
  },
  {
    id: "l",
    name: "Lunch",
  },
  {
    id: "D",
    name: "Dinner",
  },
];

const Kulinersehat = [
  {
    id :"1",
    nama:"VEGETABLE SALAD",
    gambar:"https://yummyindiankitchen.com/wp-content/uploads/2021/11/vegetable-salad-recipe-for-weight-loss-recipe-500x500.jpg",
    deskirpsi:"VEGETABLE SALAD adalah hidangan yang terdiri dari berbagai jenis sayuran segar ",
    category_id:"b",
  },
  {
    id :"2",
    nama:"GADO GADO",
    gambar:"https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/10/25025300/WhatsApp-Image-2023-10-25-at-09.51.47.jpeg.webp",
    deskirpsi:"Gado gado adalah makanan yang terdiri atas sayur-sayuran, kentang, tempe, tahu, telur rebus, dan lain-lain diberi bumbu sambal kacang dan sebagainya.",
    category_id:"b",
  },
  {
    id :"3",
    nama:"SUP AYAM",
    gambar:"https://nnc-media.netralnews.com/IMG-Netral-News-User-47-W3PNHVZJT8.jpg",
    deskirpsi:"Sup ayam klasik terdiri dari kaldu yang dimasukkan potongan ayam dan sayuran",
    category_id:"D",
  },
  {
    id :"4",
    nama:"RUJAK BULUNG",
    gambar:"https://cdn.idntimes.com/content-images/community/2020/12/image-8b6a0795c0d9bfffb97fdc32f4b37156.jpg",
    deskirpsi:"Rujak bulung adalah sebuah jenis rujak khas Bali yang terbuat dari rumput laut atau bulung, yaitu bulung boni. disajikan dengan kuah pindang.",
    category_id:"l",
  },
  {
    id :"5",
    nama:"GARANG ASAM",
    gambar:"https://image.popmama.com/content-images/community/20221109/community-7874e7528cf22de2b8579e4ef4e6a6b3.jpg",
    deskirpsi:"Garang asem adalah makanan tradisional khas Jawa Tengah. yang dibuat dari olahan ayam yang dimasak menggunakan daun pisang dan didominasi oleh rasa asam dan pedas.",
    category_id:"f",
  },
  {
    id :"6",
    nama:"NASI LIWET",
    gambar:"https://img.kurio.network/YaNIwftaRiHsAD1FpRtzEHFPZ4g=/1200x900/filters:quality(80)/https://kurio-img.kurioapps.com/22/07/22/eb2b3286-a897-4a46-a6de-bcd6de63c8df.jpg",
    deskirpsi:"Nasi liwet adalah hidangan nasi khas Indonesia yang dimasak dengan santan, kaldu ayam, dan rempah-rempah.",
    category_id:"l",
  },
  {
    id :"7",
    nama:"PECEL",
    gambar:"https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/indizone/2022/05/25/N4sN0po/cara-membuat-nasi-pecel-khas-madiun-yang-enak-gampang-banget46.jpg",
    deskirpsi:"adalah makanan yang terdiri atas sayuran rebus, seperti kacang panjang, bayam, taoge yang disiram dengan kuah sambal kacang dan sebagainya.",
    category_id:"b",
  },
  {
    id :"8",
    nama:"KAREDOK",
    gambar:"https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/esensi/2023/11/karedok.jpg",
    deskirpsi:"Karedok dibuat dengan bahan-bahan sayuran mentah antara lain; mentimun, taoge, kol, kacang panjang, ubi, labu siam daun kemangi, dan terong atau leunca.",
    category_id:"f",
  },
  {
    id :"9",
    nama:"NASI UDUK",
    gambar:"https://www.blibli.com/friends-backend/wp-content/uploads/2023/04/B300028-Cover-resep-nasi-uduk-scaled.jpg",
    deskirpsi:"Nasi uduk adalah hidangan yang dibuat dari nasi putih yang diaron dan dikukus dengan santan, serta dibumbui dengan pala, kayu manis, jahe, daun serai, dan merica.",
    category_id:"f",
  },
  {
    id :"10",
    nama:"BAKSO",
    gambar:"https://assets.unileversolutions.com/recipes-v2/245281.jpg",
    deskirpsi:"Bakso umumnya dibuat dari campuran daging sapi giling dan tepung tapioka, tetapi ada juga bakso yang terbuat dari daging ayam, babi, ikan, udang, kambing, bahkan daging kerbau.",
    category_id:"f",
  },
  {
    id :"11",
    nama:"SANDWICH",
    gambar:"https://storage.googleapis.com/bakingworld-web-production/uploads/media/content/3de8ca6781ce9d5d9f55fa362f37ddf7_resize_w1000-1667380895160.jpg",
    deskirpsi:"Sandwich adalah hidangan yang biasanya terdiri dari daging, keju atau sayuran yang digunakan sebagai isian di antara irisan roti .",
    category_id:"s",
  },
  {
    id :"12",
    nama:"BURGER",
    gambar:"https://www.sugacoffee.id/wp-content/uploads/2024/07/23.-Burger-Sejarah-Pengertian-Jenis-Bahan-dan-Cara-Membuatnya-Suga-Coffee-1.jpg",
    deskirpsi:"hidangan yang terdiri dari isian biasanya patty atau daging giling, yang ditempatkan didalam irisan roti atau roti gulung. Roti sering disajikan dengan keju, selada, tomat, bawang bombay, acar.",
    category_id:"s",
  },
  {
    id :"13",
    nama:"KEBAB",
    gambar:"https://cdn0-production-images-kly.akamaized.net/2tQIY0BY4Xl-WykyI48PW9Xmu98=/0x67:999x630/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4055729/original/080272000_1655437167-shutterstock_2127663698.jpg",
    deskirpsi:"Kebab terdiri dari potongan daging giling , terkadang dengan sayuran dan berbagai pelengkap lainnya sesuai dengan resep tertentu. kebab biasanya dimasak di tusuk sate di atas api atau diatas panggangan",
    category_id:"s",
  },
  {
    id :"14",
    nama:"VEGAN STEAK",
    gambar:"https://www.theedgyveg.com/wp-content/uploads/2021/03/Vegan-Mushroom-Steak-1.jpeg",
    deskirpsi:" produk makanan yang terbuat dari bahan vegetarian atau vegan , dimakan sebagai pengganti daging. Alternatif daging biasanya mendekati kualitas jenis daging tertentu, seperti rasa di mulut , rasa, penampilan, atau karakteristik kimia.",
    category_id:"D",
  },
  {
    id :"15",
    nama:"NASI GORENG JAWA",
    gambar:"https://blog.tokowahab.com/wp-content/uploads/2020/02/Resep-Nasi-Goreng-Jawa.jpg",
    deskirpsi:" Nasi goreng Jawa biasanya dibumbui dengan sambal ulek, bawang, terasi, dan dan dimasak dengan kayu atau anglo. Selain itu, sering juga ditambahkan telur goreng, kerupuk, kubis dan timun.",
    category_id:"f",
  },
  {
    id :"16",
    nama:"SAYUR ASEM",
    gambar:"https://assets.unileversolutions.com/v1/130816325.jpg",
    deskirpsi:"sayur asem adalah masakan sejenis sayur yang khas Indonesia. Ada banyak variasi lokal sayur asam seperti sayur asam Jakarta (variasi dari orang Betawi di Jakarta), sayur asam kangkung (variasi yang menggunakan kangkung), dan sayur asam ikan asin.",
    category_id:"f",
  },
  {
    id :"17",
    nama:"FISH & CHIPS",
    gambar:"https://marleyspoon.com/media/recipes/74642/main_photos/large/baked_fish_oven_chips_with_minty_peas-bcbe47b2f4a1fbeb11bfca935ea684c2.jpeg",
    deskirpsi:"yang terdiri dari ikan goreng dalam adonan , disajikan dengan keripik . Sering dianggap sebagai hidangan nasional Britania Raya , FISH & CHIPS berasal dari Inggris pada abad ke-19.",
    category_id:"s",
  },
  {
    id :"18",
    nama:"PLECING KANGKUNG",
    gambar:"https://www.masakapahariini.com/wp-content/uploads/2020/11/plecing-kangkung.jpg",
    deskirpsi:" Plecing kangkung terdiri dari kangkung yang direbus dan disajikan dalam keadaan dingin dan segar dengan sambal tomat, yang dibuat dari Cabai rawit, garam, terasi dan tomat, dan kadang kala diberi tetesan jeruk limau.",
    category_id:"f",
  },
  {
    id :"19",
    nama:"TUMIS KANGKUNG",
    gambar:"https://www.finnafood.com/blog/wp-content/uploads/2023/06/22.-Tumis-Kangkung-Sambal-Terasi-Nikmat-Sederhana.jpg",
    deskirpsi:"Tumis kangkung adalah salah satu hidangan sayuran yang paling sederhana, mudah, dan juga paling murah di Asia.",
    category_id:"f",
  },
  {
    id :"20",
    nama:"LODEH",
    gambar:"https://nnc-media.netralnews.com/IMG-Netral-News-User-31-NFPE74XZU0.jpg",
    deskirpsi:"adalah masakan sayur yang berkuah santan khas Indonesia, terutama di daerah Jawa Tengah dan DI Yogyakarta.",
    category_id:"f",
  },
  {
    id :"21",
    nama:"GREEN SALAD",
    gambar:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chopped-green-salad-with-herby-chilli-dressing-0bc8e57.jpg",
    deskirpsi:"GREEN SALAD menggunakan sayuran berdaun hijau seperti selada , arugula atau rocket , kangkung atau bayam .",
    category_id:"b",
  },

]
export default function HomeScreen() {
  const [kuliner, setkuliner] = useState(Kulinersehat);
  const filterkuliner = (categoryid) => {
    const filteredkuliner = Kulinersehat.filter(function
      (item) {
      return item.category_id === categoryId;
    });
    setkuliner(filteredkuliner);
  }

  return (
    <SafeAreaView>
      <FlatList
        data={CATEGORIES}
        horizontal
        renderItem={({ item }) => (
          <Pressable onPress={() => filterkuliner(item.id)}>
            <Text style={styles.categoryText}>{item.name}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={true}
        style={styles.categoryList}
      />

     
      <FlatList
        data={kuliner}
        numColumns={2}
        renderItem={({ item }) => <Kulinercard item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.kulinerList}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    padding: 20,
    margin:5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#093F6A",
    marginBottom: 30,
    borderRadius:20,
    backgroundColor:"#26C6DA",
  },
  categoryList: {
    marginBottom: 16,
  },
  categoryText: {
    backgroundColor: "#00e600",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 5,
    fontSize: 14,
    fontWeight: "500",
    color: "#1D4ED8",
  },
  kulinerList: {
    paddingBottom: 16,
    marginBottom:50,
  },
});
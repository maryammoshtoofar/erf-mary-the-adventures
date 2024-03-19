"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { allCookbookImages } from "@/app/images";
function CookBook() {
  return (
    <Swiper
      navigation={true}
      pagination={true}
      modules={[Navigation, Pagination]}
      className={styles.swiper}
    >
      {allCookbookImages.map((image) => (
        <SwiperSlide className={styles.slide} key={image.id}>
          <Image src={image.src} alt="" width={500} height={500} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CookBook;

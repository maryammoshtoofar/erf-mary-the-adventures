"use client";
import Link from "next/link";
import Item from "../_components/dashboard-item/dashboard-item";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.css";
// Import Swiper styles

import "swiper/css/effect-cards";
import "swiper/css";

// import required modules
import { EffectCards } from "swiper/modules";
import { cookbookImages } from "../images";
import Image from "next/image";
type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="min-h-screen flex flex-col gap-8 bg-[#E5C8C0] justify-center items-center">
      <div className="flex flex-col items-baseline justify-center">
        <Link href={"/sections/cookbook"}>
          <Item
            component={
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className={styles.swiper}
              >
                {cookbookImages.map((image) => (
                  <SwiperSlide className={styles.slide} key={image.id}>
                    <Image src={image.src} alt="" width={240} height={320} />
                  </SwiperSlide>
                ))}
              </Swiper>
            }
            title="Erf's CookBook"
          />
        </Link>
      </div>

      <h2 className="text-red-400 text-3xl">More Coming Soon...</h2>
    </div>
  );
};

export default Dashboard;

import styles from "../styles/Home.module.css";
import CarPanel from "components/car-panel";
import { getPlaiceholder } from "plaiceholder";
import { aws_api_baseurl, aws_cloudfront_baseurl } from "libs/constants";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home(props) {
  const tomicars = props.tomicars;
  return (
    <>
      <div className={styles.container}>
        <p className={styles.text}>タップしてね</p>
        <div className={styles.gridContainer}>
          {tomicars.map((tomica) => (
            <CarPanel key={tomica.image_path} tomica={tomica} />
          ))}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  // fetchはNode.js 18 だとだめ？　とりあえずVercelではだめ。Localはおけ
  // const response = await fetch(aws_api_baseurl + "tomicars");

  const response = await axios.get(aws_api_baseurl + "tomicars");
  const objectData = await response.data;
  // const objectData = JSON.parse(JSON.stringify(data));
  const tomicars = await Promise.all(
    Object.keys(objectData).map(async (index) => {
      const tomica = objectData[index];
      const { base64 } = await getPlaiceholder(
        aws_cloudfront_baseurl + tomica.image_path
      );
      return {
        no: tomica.no,
        name: tomica.name_jp,
        image_path: aws_cloudfront_baseurl + tomica.image_path,
        sound_path: aws_cloudfront_baseurl + tomica.sound_path,
        blurDataURL: base64,
      };
    })
    // objectData.map(async (tomica) => {
    //   const { base64 } = await getPlaiceholder(
    //     aws_cloudfront_baseurl + tomica.image_path
    //   );
    //   return {
    //     no: tomica.no,
    //     name: tomica.name_jp,
    //     image_path: aws_cloudfront_baseurl + tomica.image_path,
    //     sound_path: aws_cloudfront_baseurl + tomica.sound_path,
    //     blurDataURL: base64,
    //   };
    // })
  );

  tomicars.sort(function (a, b) {
    if (a.no > b.no) {
      return 1;
    } else {
      return -1;
    }
  });
  const tomicaObj = {
    tomicars: tomicars,
  };

  return {
    props: tomicaObj,
  };
};

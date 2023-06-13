<script lang="ts">
  import image1 from "../../images/1.jpg";
  import image2 from "../../images/2.jpg";
  import image3 from "../../images/3.jpg";
  import image4 from "../../images/4.jpg";
  import image5 from "../../images/5.jpg";
  import image6 from "../../images/6.jpg";
  import image7 from "../../images/7.jpg";
  import image8 from "../../images/8.jpg";
  import image9 from "../../images/9.jpg";
  import image10 from "../../images/10.jpg";
  import image11 from "../../images/11.jpg";
  import image12 from "../../images/12.jpg";
  import image13 from "../../images/13.jpg";
  import image14 from "../../images/14.jpg";
  import image15 from "../../images/15.jpg";
  import image16 from "../../images/16.jpg";
  import image17 from "../../images/17.jpg";
  import image18 from "../../images/18.jpg";
  import image19 from "../../images/19.jpg";
  import image20 from "../../images/20.jpg";
  import image1_x718 from "../../images/1_718.jpg";
  import image2_x718 from "../../images/2_718.jpg";
  import image3_x718 from "../../images/3_718.jpg";
  import image4_x718 from "../../images/4_718.jpg";
  import image5_x718 from "../../images/5_718.jpg";
  import image6_x718 from "../../images/6_718.jpg";
  import image7_x718 from "../../images/7_718.jpg";
  import image8_x718 from "../../images/8_718.jpg";
  import image9_x718 from "../../images/9_718.jpg";
  import image10_x718 from "../../images/10_718.jpg";
  import image11_x718 from "../../images/11_718.jpg";
  import image12_x718 from "../../images/12_718.jpg";
  import image13_x718 from "../../images/13_718.jpg";
  import image14_x718 from "../../images/14_718.jpg";
  import image15_x718 from "../../images/15_718.jpg";
  import image16_x718 from "../../images/16_718.jpg";
  import image17_x718 from "../../images/17_718.jpg";
  import image18_x718 from "../../images/18_718.jpg";
  import image19_x718 from "../../images/19_718.jpg";
  import image20_x718 from "../../images/20_718.jpg";
  import image1_webp from "../../images/1_718.webp";
  import image2_webp from "../../images/2_718.webp";
  import image3_webp from "../../images/3_718.webp";
  import image4_webp from "../../images/4_718.webp";
  import image5_webp from "../../images/5_718.webp";
  import image6_webp from "../../images/6_718.webp";
  import image7_webp from "../../images/7_718.webp";
  import image8_webp from "../../images/8_718.webp";
  import image9_webp from "../../images/9_718.webp";
  import image10_webp from "../../images/10_718.webp";
  import image11_webp from "../../images/11_718.webp";
  import image12_webp from "../../images/12_718.webp";
  import image13_webp from "../../images/13_718.webp";
  import image14_webp from "../../images/14_718.webp";
  import image15_webp from "../../images/15_718.webp";
  import image16_webp from "../../images/16_718.webp";
  import image17_webp from "../../images/17_718.webp";
  import image18_webp from "../../images/18_718.webp";
  import image19_webp from "../../images/19_718.webp";
  import image20_webp from "../../images/20_718.webp";

  const images = [
    { source: image1, x718: image1_x718, webp: image1_webp },
    { source: image2, x718: image2_x718, webp: image2_webp },
    { source: image3, x718: image3_x718, webp: image3_webp },
    { source: image4, x718: image4_x718, webp: image4_webp },
    { source: image5, x718: image5_x718, webp: image5_webp },
    { source: image6, x718: image6_x718, webp: image6_webp },
    { source: image7, x718: image7_x718, webp: image7_webp },
    { source: image8, x718: image8_x718, webp: image8_webp },
    { source: image9, x718: image9_x718, webp: image9_webp },
    { source: image10, x718: image10_x718, webp: image10_webp },
    { source: image11, x718: image11_x718, webp: image11_webp },
    { source: image12, x718: image12_x718, webp: image12_webp },
    { source: image13, x718: image13_x718, webp: image13_webp },
    { source: image14, x718: image14_x718, webp: image14_webp },
    { source: image15, x718: image15_x718, webp: image15_webp },
    { source: image16, x718: image16_x718, webp: image16_webp },
    { source: image17, x718: image17_x718, webp: image17_webp },
    { source: image18, x718: image18_x718, webp: image18_webp },
    { source: image19, x718: image19_x718, webp: image19_webp },
    { source: image20, x718: image20_x718, webp: image20_webp },
  ];
</script>

<svelte:head>
  <title>Mikhail Shatikhin Portfolio</title>
</svelte:head>

<section>
  <div class="gallery-container">
    {#each images as image, index}
      <picture>
        <source srcset={image.webp} type="image/webp" />
        <img
          srcset={`${image.x718} 718w`}
          sizes="(mix-width: 1080px) 718px"
          src={image.source}
          alt={`Изображение ${index}`}
          width="718"
          height="461"
          loading="lazy"
        />
      </picture>
    {/each}
  </div>
</section>

<style>
  .gallery-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4px;
  }

  section {
    max-width: 1440px;
    min-height: 100%;
    margin: 0 auto;
    padding-bottom: 100px;
  }

  img {
    display: block;
    margin: auto;
    height: auto;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media screen and (max-width: 950px) {
    .gallery-container {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 1rem;
    }
  }
</style>

<script lang="ts">
  import me from "../../images/me.jpg";
  import vk from "../../images/vk.png";
  import tg from "../../images/tg.png";
  import inst from "../../images/inst.png";
</script>

<section class="about">
  <div class="card">
    <div class="avatarWrapper">
      <img src={me} width="300" height="300" alt="Mikhail Shatikhin" />
    </div>
    <article>
      <p>Привет, меня зовут Михаил.</p>
      <p>
        В свободное время от работы я занимаюсь фотографией, которая заняла в моей жизни основополагающее место.
        Фотография – моё хобби. Я считаю, что фотография позволяет многим раскрыться изнутри, показать человеку таким,
        каким он себя ощущает. Фотография – это прекрасное средство самовыражения, позитивное и познавательное занятие.
      </p>
      <p>
        Меня вдохновляет создание портретов, воплощение художественных, творческих образов. Особенно мне нравятся
        пленэрные съёмки: скалы, реки и леса, а также мистическое и интригующее.
      </p>
      <p>Буду рад увидеть вас через объектив моей фотокамеры!</p>
    </article>
    <div class="contacts">
      Пишите мне если желаете со мной поработать как модель, визажист или дизайнер:
      <p>
        <a class="contactListLink" href="https://t.me/mshtkhn" target="_blank">
          <img src={tg} alt="Tg Mikhail Shatikhin" />
          <span class="contactListText">Канал в Telegram</span>
        </a>&nbsp;
        <a class="contactListLink" href="https://vk.com/mshatikhin_photo" target="_blank">
          <img src={vk} alt="Vk Mikhail Shatikhin" />
          <span class="contactListText">Группа в VK</span>
        </a>
        <a class="contactListLink" href="https://www.instagram.com/mshatikhin_photo" target="_blank">
          <img src={inst} alt="Instagram Mikhail Shatikhin" />
          <span class="contactListText">Профиль в Instagram</span>
        </a>
      </p>
    </div>
  </div>
</section>

<style>
  article {
    color: var(--text);
  }

  .about {
    display: block;
    margin: auto;
    max-width: 100%;
    width: 960px;
  }

  .contactListLink {
    display: inline-flex;
    align-items: baseline;
    margin-right: 10px;
  }

  .contactListLink:hover img {
    opacity: 1;
  }

  .contactListLink img {
    position: relative;
    display: inline-block;
    height: 16px;
    top: 2px;
    margin-right: 5px;
    opacity: 0.8;
    transition: 0.3s all ease;
    vertical-align: middle;
    width: 16px;
  }

  .avatarWrapper {
    text-align: center;
    margin-bottom: 32px;
  }

  .avatarWrapper img {
    border-radius: 16px;
    overflow: hidden;
  }

  .card {
    box-sizing: border-box;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4333;
    margin-top: 48px;
    margin-bottom: 48px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  }

  a {
    color: #7795fc;
  }

  @media screen and (max-width: 1024px) {
    .card {
      padding: 0 30px;
      font-size: 16px;
    }
  }

  @media screen and (max-width: 768px) {
    .card {
      padding: 0 15px;
    }
  }
</style>

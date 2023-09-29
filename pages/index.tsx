import Image from "next/image";
import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ['latin'] })
const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function Home() {
  return (
    <main
      className={`flex min-h-screen text-red-500 flex-col items-center justify-between ${inter.className}`}
    >
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam nihil
        ea facilis possimus, minima iste corporis optio necessitatibus, labore
        sit quos, iure porro eaque sunt qui voluptate provident saepe
        perspiciatis. Nemo accusamus officia aliquam maxime at illum ut
        reiciendis hic ratione! Ducimus praesentium est porro sint fugiat?
        Consequatur, magnam. Quos, doloremque autem tempore hic reiciendis non
        fuga ab nisi nam unde iusto, et dolores natus libero, iste illum dolor
        totam esse veniam sapiente laborum. Cupiditate fugiat neque, earum id
        odit repellendus sunt iusto quam maxime tempore similique dolorem
        eveniet, quia eius expedita culpa? Iusto, quod architecto nemo autem,
        sed molestias culpa nobis magni accusantium facere voluptatem nostrum.
        Repellendus dolores illum nam rerum maiores consequatur corrupti culpa
        soluta. Explicabo libero autem est reprehenderit. Voluptatibus incidunt,
        dolores quae ea enim mollitia quisquam reprehenderit est? Architecto
        porro commodi inventore quasi exercitationem aut laboriosam. Quas
        praesentium, atque ducimus dolor accusantium laudantium? Iusto doloribus
        fugiat nostrum ratione officiis animi, dolores quod assumenda dolorem,
        laboriosam cupiditate ipsa quo. Repellat nam id quos sint saepe, ea,
        sapiente quaerat vel quibusdam esse obcaecati? Iure officia laborum,
        asperiores obcaecati inventore labore! Voluptates corrupti voluptas aut
        maiores sequi, esse ullam officia consequuntur iusto perferendis, minima
        pariatur. Illo amet dolorum quos.
      </p>
    </main>
  );
}

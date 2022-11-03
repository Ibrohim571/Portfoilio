import React from "react";
import Navbar from "./Components/Navbar";
import RightBar from "./Components/RightBar";
// reducer
import { useSelector } from "react-redux";

function Messenger() {
  const user = useSelector((state) => state.user);
  return (
    <div className="grid grid-cols-4 gap-x-0 bg-gray-50">
      <div className="fixed">
        <RightBar />
      </div>

      <div className="col-start-2 col-span-3 z-20">
        <div>
          <Navbar />
        </div>
        <div className="p-3 mr-5 pl-0 border-t-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          officia voluptas ipsam eos similique, quis numquam delectus odio, et
          amet sed earum dolorem maiores consequuntur repellendus quaerat
          necessitatibus eligendi. Sunt? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Consectetur officia voluptas ipsam eos similique,
          quis numquam delectus odio, et amet sed earum dolorem maiores
          consequuntur repellendus quaerat necessitatibus eligendi. Sunt? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Cum repellat,
          perferendis quidem natus minus aliquid ad corporis quisquam voluptates
          quae facilis aliquam beatae molestias ipsum rerum omnis a similique
          qui accusantium nisi quibusdam ab necessitatibus eligendi inventore!
          Voluptatum quod itaque modi adipisci in perspiciatis? Similique
          debitis nulla sint suscipit ipsum. Ipsa non commodi similique omnis
          vel! Nostrum quis ut consectetur tenetur perspiciatis id dicta velit
          eum voluptates aperiam, impedit error maiores sint odio dignissimos
          voluptatibus voluptatum. Nesciunt assumenda ipsum blanditiis vero eius
          officiis et, odio, explicabo numquam placeat voluptate. Numquam aut
          quae at veniam earum quo omnis aliquam id autem. Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Eius explicabo aliquid iusto
          iure ipsum ducimus doloremque rem esse maiores ab perferendis expedita
          obcaecati, odit, quos nemo sunt, fuga quasi exercitationem commodi
          accusamus quibusdam voluptates nam. Ad, maxime! Consequuntur nisi,
          doloribus id aspernatur nam porro. Neque laudantium accusamus quod
          aperiam hic iusto eos tempore expedita molestiae amet voluptates earum
          sequi vel quas accusantium, repudiandae iste nisi nihil. Illo, ipsam
          culpa. Ipsam commodi error minima quibusdam, molestiae veniam dolorum
          mollitia? Repellendus reprehenderit eligendi illo enim eveniet
          tempore, est, sapiente porro atque molestiae suscipit quo illum optio
          esse aut magni. Blanditiis cum atque eaque alias, modi recusandae ex
          eum consectetur accusamus. Ea illo corrupti autem, nobis quam, sunt
          accusamus nulla dicta eligendi dolorum obcaecati quas commodi impedit
          in unde cupiditate placeat suscipit nihil doloribus animi, consectetur
          voluptatem! Nobis aspernatur dolor repudiandae atque dolore nihil
          porro praesentium et quisquam? Impedit magni nemo fugit voluptatum,
          voluptatibus, ab sed reprehenderit ducimus mollitia vel voluptas
          adipisci laudantium? Corrupti ad suscipit unde sunt labore. Labore
          modi iure sint soluta totam eos assumenda corrupti vero dicta
          blanditiis nihil, deleniti eaque officiis consectetur eveniet rem,
          laudantium doloremque qui quibusdam, repellat accusantium dignissimos
          dolor? Quisquam aut voluptatum repellat veniam ipsa incidunt pariatur
          sed impedit cumque, dolores tempora illo debitis? Consectetur optio
          reprehenderit quibusdam ipsam magni, quae esse incidunt quo animi
          nihil asperiores vitae velit tenetur similique. Ratione commodi
          exercitationem provident, eaque corporis ad porro fugit iste sequi!
          Delectus illo omnis molestiae amet. Commodi laboriosam vero illum,
          tenetur voluptates eaque, quas dolore expedita iusto earum molestias
          fugit magni numquam, et exercitationem deleniti temporibus minima quos
          iure at? Tenetur, ipsam in beatae quae alias id omnis rem molestiae!
          Dolorem dolor culpa eaque? Ipsam sapiente eaque vitae hic maiores
          officiis rem veniam recusandae eius numquam? Corrupti consequuntur
          pariatur est tenetur aliquam hic rem dignissimos? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. At reprehenderit cum
          accusantium praesentium. Animi in molestiae deleniti porro voluptatum
          veritatis aliquid assumenda illo! Numquam rerum iste sit assumenda a
          mollitia nisi fugiat, aliquid officia deleniti ad omnis necessitatibus
          soluta, suscipit doloribus repudiandae quasi. Soluta labore fuga modi
          odit aut ipsa excepturi quos blanditiis inventore accusantium dolore a
          nemo rem, facilis quam voluptatibus iure adipisci consequuntur,
          dignissimos iste nihil. Vitae ad ea pariatur sapiente ipsum dolore
          autem nihil nulla porro odio nisi placeat tempore voluptatibus ducimus
          numquam quas cupiditate, inventore harum exercitationem? Pariatur
          temporibus molestiae laudantium reprehenderit maiores tempora ab
          voluptatibus!
        </div>
      </div>
    </div>
  );
}

export default Messenger;

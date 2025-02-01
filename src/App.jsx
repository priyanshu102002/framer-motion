import React from "react";
import { motion, useScroll } from "motion/react";

const App = () => {
  const {scrollYProgress} = useScroll();
  return (
    // <motion.div
    //   // initial={{
    //   //   y:100
    //   // }}

    //   // animate={{
    //   //   x: [0, 500, 500, 0, 0],
    //   //   y: [0, 0, 400, 400, 0]
    //   // }}

    //   // transition={{
    //   //   delay: 1,
    //   //   duration: 2,
    //   // }}

    //   // whileHover={{
    //   //   backgroundColor: "green",
    //   // }}

    //   drag
    //   whileDrag={{
    //     backgroundColor: "red",
    //   }}
    //   dragConstraints={{
    //     left: 0,
    //     top: 0,
    //     bottom: 400,
    //     right: 400,
    //   }}
    //   // dragDirectionLock="true"

    //   // whileTap={{
    //   //   backgroundColor: "blue"
    //   // }}
    //   className="box"
    // ></motion.div>
    <>
      <motion.div style={{
       scaleX:scrollYProgress
      }} className="strip">

      </motion.div>
      <div className="h">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
          nesciunt modi blanditiis sapiente illo deserunt, ratione ea sequi
          optio natus consequatur sunt eum inventore magni eveniet ipsam fugiat
          deleniti facilis ullam quisquam fuga quis quasi ipsum. Numquam
          delectus maxime laudantium doloribus! Alias perspiciatis asperiores
          exercitationem veritatis magni facilis enim unde dolore repellat
          consectetur quos voluptas iure quaerat eaque corrupti consequuntur qui
          accusantium, ratione, excepturi magnam voluptatum velit! Corrupti,
          maiores laudantium. Voluptates asperiores voluptas eligendi sit esse
          nihil labore quisquam fuga adipisci quidem, at officia dolore amet
          explicabo magni necessitatibus quaerat accusamus optio architecto
          deleniti iste? Iste maxime, provident inventore vero alias ipsam
          laboriosam quia veritatis asperiores odio? Molestias ratione, quia,
          tempore atque saepe dolorum dolore neque rerum quisquam officia amet
          aut dolorem voluptate cum repudiandae doloremque quas minus nulla enim
          vel sed blanditiis deleniti. Tempora possimus explicabo in adipisci
          eius? Laborum, laudantium quos. Accusamus, doloribus. Dicta error,
          facilis culpa recusandae qui mollitia tenetur ab nam vero nulla ut
          amet beatae voluptatibus, repellat nesciunt tempora dolorem fugit
          excepturi porro dolorum enim, eum officiis totam non. Numquam voluptas
          aliquam illum a est animi alias reprehenderit odit nobis, explicabo
          veniam natus suscipit temporibus unde neque quis quaerat impedit
          dolorum dignissimos fugit quia dolorem ipsa? Earum iusto repellendus
          quibusdam veniam pariatur? Labore id reprehenderit pariatur molestias
          debitis architecto perferendis ipsum impedit in aut obcaecati
          reiciendis, veritatis soluta vel amet facere magnam ex odit quas
          repellat ipsa, consequatur eum quos est? Facilis exercitationem nihil
          atque ipsam voluptatem reiciendis ex magni suscipit repellat fuga,
          fugiat provident. Temporibus amet tempora, totam corrupti, deleniti
          officia laudantium repellendus fugit suscipit fugiat alias illo
          repudiandae quos dignissimos. Corporis qui laboriosam alias et quaerat
          similique dolorem aperiam vero voluptates iste hic, neque
          exercitationem cupiditate ex dolorum voluptas natus pariatur dolore
          possimus sunt ipsa. Harum, fugit incidunt iure eius nisi rerum! Fuga
          adipisci error quod praesentium autem natus laudantium dolor, eum ab
          quaerat expedita sit porro? Corporis maxime obcaecati reiciendis
          dolorum voluptatem! Commodi quis assumenda, optio enim unde veritatis
          velit ad nesciunt, ea reiciendis ipsam! Sit ipsam consequuntur
          assumenda libero eius officia eum consectetur amet laboriosam
          voluptatibus quisquam voluptatem tenetur, repudiandae inventore sint
          nulla, ullam magnam expedita veniam similique ipsa. Deserunt, deleniti
          non! Sed officiis commodi sapiente corporis at numquam, tempora
          facilis explicabo necessitatibus laudantium est voluptas aspernatur ad
          adipisci obcaecati voluptatem ex debitis ratione cumque saepe ea illum
          quam repudiandae! Tempore a nulla eius quas quidem repellat,
          consectetur itaque iste dignissimos.
        </p>
      </div>
    </>
  );
};

export default App;

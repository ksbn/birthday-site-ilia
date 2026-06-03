"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";

export default function Home() {
const [size, setSize] = useState({
width: 0,
height: 0,
});

useEffect(() => {
const updateSize = () => {
setSize({
width: window.innerWidth,
height: window.innerHeight,
});
};

updateSize();

window.addEventListener("resize", updateSize);

return () => {
  window.removeEventListener("resize", updateSize);
};

}, []);

return ( <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500 via-cyan-500 to-indigo-700">
<Confetti
width={size.width}
height={size.height}
recycle
style={{ pointerEvents: "none" }}
/>

```
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 30 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="mx-4 max-w-2xl rounded-3xl border border-white/20 bg-white/10 p-10 text-center shadow-2xl backdrop-blur-lg"
  >
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Image
        src="/I.jpg"
        alt="Илья"
        width={250}
        height={250}
        priority
        className="mx-auto rounded-full border-4 border-white shadow-2xl"
      />
    </motion.div>

    <motion.h1
      className="mt-8 text-5xl font-bold text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      🎉 С Днём Рождения, Илья! 🎉
    </motion.h1>

    <motion.p
      className="mt-6 text-xl leading-relaxed text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      Пусть этот год будет полон ярких моментов, невероятных путешествий и новых возможностей ✨
      <br />
      Пусть сбывается всё, о чём ты мечтаешь! 🎯
    </motion.p>

    <motion.div
      className="mt-8 text-6xl"
      animate={{ rotate: [-5, 5, -5] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      🍾✨🎁
    </motion.div>
  </motion.div>
</main>

);
}
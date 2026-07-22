"use client";
import { AnimatedText } from "@/components/AnimatedText";
import GalleryIntro from "@/components/galleryIntro";
import GalleryOutro from "@/components/galleryOutro";
import OneArtSection, { OneArtSectionProps } from "@/components/oneArtSection";
import Section from "@/components/section";
import { FirstFiveArt } from "@/config/firstFiveArt";
import { LayoutGallery } from "@/config/layoutGallery";
import { cn } from "@/utils/cn";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Home() {
  const { scrollYProgress: bar } = useScroll();

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const leftOneValue = useTransform(scrollYProgress, [0, 1], ["-100%", "20%"]);

  const RightOneValue = useTransform(scrollYProgress, [0, 1], ["100%", "-20%"]);

  const [selectedId, setSelectedId] = useState<any>(null);

  const text = "Gallery";

  const defaultAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <main>
      <motion.div
        className={`!fixed top-0 w-screen h-1 bg-fall z-50`}
        style={{
          scaleX: bar,
          transformOrigin: "left",
        }}
      ></motion.div>
      <GalleryIntro />
      {FirstFiveArt.map((art: OneArtSectionProps, index: number) => (
        <OneArtSection props={art} index={index} key={index} />
      ))}
      <Section
        className="hidden md:flex flex-col gap-10 mb-10 justify-center items-center shadow-3xl"
        ref={containerRef}
      >
        <motion.h1
          className="absolute top-10 text-[140px] tracking-wide text-potato text-center"
          initial={{ opacity: 0, scale: 0.2, rotate: 90 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          transition={{ ease: "easeOut", duration: 1.2 }}
        >
          {">"}
        </motion.h1>
        <motion.h1
          className="absolute bottom-20 text-[140px] tracking-wide text-potato text-center"
          initial={{ opacity: 0, scale: 0.2 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          transition={{ ease: "easeOut", duration: 1.2 }}
        >
          Just Keep Scrolling
        </motion.h1>
        <motion.p
          style={{ translateX: leftOneValue }}
          className="text-slate-100 font-thin text-4xl w-1/2 mx-auto drop-shadow-[0px_0px_5px_rgba(189,161,108)]"
        >
          Do you like these paintings?
        </motion.p>
        <motion.p
          style={{ translateX: RightOneValue }}
          className="text-slate-100 font-thin text-4xl w-1/2 mx-auto drop-shadow-[0px_0px_5px_rgba(189,161,108)]"
        >
          So lets keep exploring, even Mona Lisa wants to see the next painting!
        </motion.p>
      </Section>
      <Section className="sticky top-0 flex flex-col-reverse md:flex-row shadow-3xl after:content[''] after:absolute after:w-full after:h-full after:bg-[url('/pattern.png')] after:-z-0">
        <div className="relative flex flex-col items-center z-10 w-full md:w-[50%] h-full">
          <div className="flex flex-col justify-center items-center h-1/5 md:h-1/3">
            <motion.h1
              className={`text-2xl md:text-4xl !font-extrabold mb-2 text-fall`}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ ease: "easeOut", duration: 0.4 }}
            >
              The Fall of the Damned
            </motion.h1>
            <motion.h1
              className={`text-2xl md:text-4xl !font-extrabold mb-0 md:mb-2 text-rubens`}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ ease: "easeOut", duration: 0.4 }}
            >
              Peter Paul Rubens
            </motion.h1>
          </div>

          <AnimatedText
            text={
              "The Fall of the Damned, alternately known as The Fall of the Rebel Angels, is a monumental religious painting by Peter Paul Rubens dated around 1620. It depicts a jumble of the bodies of the damned, hurled into the abyss by archangel Michael and accompanying angels. The sketch of The Fall of the Damned was made in black and red chalks, with a grey wash and is kept in the British Museum. It is assumed to be the work of a studio assistant, which Rubens then went over with a brush and oil colour. The dramatic chiaroscuro of the human forms and clouds emphasizes the darkness into which these figures fall, far from the heavenly light above."
            }
          />
        </div>
        <div className="relative flex justify-center items-center z-10 w-full md:w-[50%] h-[30%] md:h-full after:content-[''] after:bg-black after:w-full after:h-screen after:md:opacity-40 after:opacity-0">
          <Image
            loading="lazy"
            src={
              "https://res.cloudinary.com/ddfqedsqq/image/upload/v1718312521/fall.jpg"
            }
            alt="fall"
            fill
            className="object-contain"
          />
        </div>
      </Section>
      <Section className="hidden sticky top-0 md:flex flex-col md:flex-row shadow-3xl after:cotent[''] after:absolute after:w-full after:h-full after:bg-[url('/pattern.png')] after:-z-0 mb-[72px]">
        <div className="relative flex justify-center items-center z-10 w-full md:w-[65%] h-full after:content-[''] after:bg-black after:w-full after:h-screen after:opacity-40">
          <Image
            loading="lazy"
            src={
              "https://res.cloudinary.com/ddfqedsqq/image/upload/v1718312521/bellegin.jpg"
            }
            alt="fall"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative flex flex-col items-center z-10 w-full md:w-[35%] h-full">
          <div className="flex flex-col justify-center items-center h-1/5 md:h-1/3 ">
            <motion.h1
              className={`text-2xl md:text-4xl !font-extrabold mb-2 text-persistence`}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ ease: "easeOut", duration: 0.4 }}
            >
              Persistence <span className="text-daliof">of</span> Memory
            </motion.h1>
            <motion.h1
              className={`text-2xl md:text-4xl !font-extrabold mb-2 text-rubens`}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ ease: "easeOut", duration: 0.4 }}
            >
              Peter Paul Rubens
            </motion.h1>
          </div>

          <AnimatedText
            text={
              "The Persistence of Memory (Spanish: La persistencia de la memoria) is a 1931 painting by artist Salvador Dalí and one of the most recognizable works of Surrealism. First shown at the Julien Levy Gallery in 1932, since 1934 the painting has been in the collection of the Museum of Modern Art (MoMA) in New York City, which received it from an anonymous donor. It is widely recognized and frequently referred to in popular culture, and sometimes referred to by more descriptive titles, such as 'Melting Clocks', 'The Soft Watches' or 'The Melting Watches'."
            }
          />
        </div>
      </Section>

      <Section className="flex justify-center items-center !h-[200vh]">
        <div className="absolute h-[72px] w-full top-[-72px] bg-black flex justify-center items-center pt-8">
          <motion.span
            initial="hidden"
            whileInView="visible"
            transition={{
              staggerChildren: 0.2,
            }}
            aria-hidden
          >
            {text.split("").map((letter, index) => (
              <motion.span
                variants={defaultAnimation}
                key={index}
                className="text-6xl text-white"
              >
                {letter}
              </motion.span>
            ))}
          </motion.span>
        </div>
        <div className="grid md:grid-flow-row-dense grid-cols-1 md:grid-cols-3 md:grid-rows-4 gap-10 md:gap-20 h-full w-full p-10 md:p-24">
          {LayoutGallery.map((art, index) => (
            <motion.div
              key={index}
              layoutId={index.toString()}
              onClick={() => setSelectedId(index)}
              className={`relative h-[300px] rounded-lg overflow-hidden cursor-zoom-in ${
                index === 0 || index === 3 || index === 4 || index === 7
                  ? "md:col-span-2"
                  : ""
              }`}
            >
              <Image
                loading="lazy"
                src={art.image}
                alt={art.name}
                fill
                className={cn(
                  "brightness-[0.65] object-cover",
                  index === 0 || index === 5 ? "object-top" : "object-center"
                )}
              />
            </motion.div>
          ))}

          <AnimatePresence>
            {selectedId !== null && (
              <motion.div
                layoutId={selectedId.toString()}
                className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 cursor-zoom-out"
              >
                <motion.div
                  className="relative h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.40)] backdrop-blur-lg overflow-hidden"
                  onClick={() => setSelectedId(null)}
                >
                  <Image
                    loading="lazy"
                    src={LayoutGallery[selectedId].image}
                    alt={LayoutGallery[selectedId].name}
                    fill
                    className={cn(
                      "brightness-75 object-contain",
                      selectedId === 5 || selectedId === 6
                        ? "object-top"
                        : "object-center"
                    )}
                  />
                  <motion.h4 className="text-black absolute top-10 left-20 text-base md:text-2xl bg-potato p-4 rounded-md">
                    {LayoutGallery[selectedId].name} by{" "}
                    {LayoutGallery[selectedId].artist}
                  </motion.h4>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Section>
      <GalleryOutro />
    </main>
  );
}

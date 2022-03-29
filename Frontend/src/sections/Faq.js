import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
const accordianData = [
  {
    question: "Who are the TYTAN Team?",
    answer:
      "When you own a GoosePunk this is your own character in the metaverse, a cyberpunk/steampunk themed character. Owner ship of a GoosePunk is your exclusive invitation into the Gaggle, a place where other Geese meetup, hangout, relax, exchange art and talk about strategies moving forward inside the dystopian world of Ayame. ",
  },
  {
    question: "Have you had a full team KYC?",
    answer:
      "When you own a GoosePunk this is your own character in the metaverse, a cyberpunk/steampunk themed character. Owner ship of a GoosePunk is your exclusive invitation into the Gaggle, a place where other Geese meetup, hangout, relax, exchange art and talk about strategies moving forward inside the dystopian world of Ayame. ",
  },
  {
    question: "How do I know this isn't a Rug-Pull?",
    answer:
      "When you own a GoosePunk this is your own character in the metaverse, a cyberpunk/steampunk themed character. Owner ship of a GoosePunk is your exclusive invitation into the Gaggle, a place where other Geese meetup, hangout, relax, exchange art and talk about strategies moving forward inside the dystopian world of Ayame. ",
  },
  {
    question:
      " Can you explain the process of buying at Pre-Launch on PinkSale?",
    answer:
      "When you own a GoosePunk this is your own character in the metaverse, a cyberpunk/steampunk themed character. Owner ship of a GoosePunk is your exclusive invitation into the Gaggle, a place where other Geese meetup, hangout, relax, exchange art and talk about strategies moving forward inside the dystopian world of Ayame. ",
  },
  {
    question: "Is there a Whitelist process?",
    answer:
      "When you own a GoosePunk this is your own character in the metaverse, a cyberpunk/steampunk themed character. Owner ship of a GoosePunk is your exclusive invitation into the Gaggle, a place where other Geese meetup, hangout, relax, exchange art and talk about strategies moving forward inside the dystopian world of Ayame. ",
  },
  {
    question:
      "Will I start receiving my APY interest yield immediately on Day 1 after I purchase at Pre-Launch?",
    answer:
      "When you own a GoosePunk this is your own character in the metaverse, a cyberpunk/steampunk themed character. Owner ship of a GoosePunk is your exclusive invitation into the Gaggle, a place where other Geese meetup, hangout, relax, exchange art and talk about strategies moving forward inside the dystopian world of Ayame. ",
  },
  {
    question: "Is TYTAN just another Titano Fork?",
    answer:
      "When you own a GoosePunk this is your own character in the metaverse, a cyberpunk/steampunk themed character. Owner ship of a GoosePunk is your exclusive invitation into the Gaggle, a place where other Geese meetup, hangout, relax, exchange art and talk about strategies moving forward inside the dystopian world of Ayame. ",
  },
  {
    question: "How can you sustain such a big APY?",
    answer:
      "When you own a GoosePunk this is your own character in the metaverse, a cyberpunk/steampunk themed character. Owner ship of a GoosePunk is your exclusive invitation into the Gaggle, a place where other Geese meetup, hangout, relax, exchange art and talk about strategies moving forward inside the dystopian world of Ayame. ",
  },
];

const Faq = () => {
  const [clicked, setClicked] = useState();

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <section className="py-16 " id="faq">
      <div className="px-8 sm:container">
        <div className="custom-container ">
          <h2
            className="text-3xl md:text-5xl font-bold text-center "
            data-aos="fade-up"
          >
            FAQ's
          </h2>
          <div className="" style={{ position: "absolute" }}>
            {accordianData.map((v, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={`${i * 200}`}
                className=" border-b-2 border-primary border-sloid pt-4 pb-0.5  transition ease-out duration-500 "
              >
                <div
                  className="flex  justify-between cursor-pointer py-4"
                  onClick={() => toggle(i)}
                >
                  <h6
                    className="md:text-2xl mr-20 font-bold md:mr-0 "
                    style={{ userSelect: "none" }}
                  >
                    {v.question}
                  </h6>
                  <span className="transition ease-out duration-500 text-primary">
                    {clicked !== i ? <FaPlus /> : <FaMinus />}
                  </span>
                </div>
                <div
                  className={` transition ease-in-out duration-500 ${clicked === i
                      ? "h-auto max-h-72 py-4"
                      : "overflow-hidden max-h-0 h-0"
                    }`}
                >
                  <p className="max-w-4xl w-full ">{v.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;

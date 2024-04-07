"use client";
import Image from "next/image";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import ShareIcon from "@mui/icons-material/Share";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import { ReactNode, useEffect, useRef, useState } from "react";

const appFeatures = [
  {
    title: "40x faster workflow",
    description:
      "Yarn uses AI to deliver videos hours faster than Descript and Adobe. Go from idea to asset in minutes.",
    icon: <ElectricBoltIcon />,
    color: "bg-indigo-700",
  },
  {
    title: "Reuse, personalize, and tweak",
    description:
      "You edit Yarn videos like a doc, so you can reuse your Twitter feature launch as a personalized piece of sales collateral.",
    icon: <ModeEditIcon />,
    color: "bg-green-900",
  },
  {
    title: "Simple and easy",
    description:
      "Yarn's beginner friendly – founders, salespeople, and PMMs with no video experience are using Yarn today.",
    icon: <InsertEmoticonIcon />,
    color: "bg-slate-700",
  },
  {
    title: "Your brand, not cookie-cutter",
    description:
      "Think Notion, Linear, or Stripe-quality but branded for your startup. Your colors, typography, motion styles, and assets.",
    icon: <DocumentScannerIcon />,
    color: "bg-blue-600",
  },
  {
    title: "Share instantly with analytics",
    description:
      "Use the share link to embed into emails or landing pages with global and per-viewer view counts and engagement metrics.",
    icon: <ShareIcon />,
    color: "bg-rose-900",
  },
  {
    title: "Edit as a team",
    description:
      "Everything's shared seamlessly across your team. Your engineer can record the workflow – your marketer can script it.",
    icon: <Diversity3Icon />,
    color: "bg-gray-900",
  },
];

export default function Home() {
  return (
    <div>
      <HomeIntro />
      <RevealOnScroll>
        <div className={`grid grid-cols-3 gap-2 mx-80 my-14 `}>
          {appFeatures.map((features) => {
            return (
              <div>
                <AppFeature
                  title={features.title}
                  description={features.description}
                  icon={features.icon}
                  color={features.color}
                />
              </div>
            );
          })}
        </div>
      </RevealOnScroll>
    </div>
  );
}

const RevealOnScroll = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        scrollObserver.unobserve(entry.target);
      }
    });

    scrollObserver.observe(ref.current);

    return () => {
      if (ref.current) {
        scrollObserver.unobserve(ref.current);
      }
    };
  }, []);

  const classes = `transition-opacity duration-1000 
      ${isVisible ? "opacity-100" : "opacity-0"}`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

export const openInNewTab = (url: string) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

function HomeIntro() {
  return (
    <div className="mx-96 pt-24 pb-2">
      <div className=" h-fitt text-5xl font-bold font-sans flex justify-center">
        Make vidoes like the best
      </div>
      <div className="flex justify-center items-center mt-2">
        <div className=" text-slate-500 mr-1">Backed By</div>
        <div className="mx-2">
          <Image
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Y_Combinator_logo.svg/1200px-Y_Combinator_logo.svg.png"
            }
            width={40}
            height={40}
            alt="Picture of Y Combinator Logo"
          />
        </div>
        <div className="text-ycombinator text-xl">Combinator</div>
      </div>
      <div className="flex justify-center mt-4 text-xl font-sans">
        Create agency-quality product videos, sales demos, and help guides – in
        minutes.
      </div>
      <div className="flex justify-center mt-4">
        <button
          type="button"
          className="text-slate-900 bg-slate-300 shadow-xl flex shadow-blue-500/50 focus:ring-4 rounded-lg text-lg font-bold px-5 py-2.5 me-2 mb-2 "
          onClick={() => openInNewTab("https://form.typeform.com/to/gZowgb1M")}
        >
          join the waitlist
        </button>
        <button
          type="button"
          className="text-white bg-blue-600 shadow-xl flex shadow-blue-500/50 focus:ring-4 rounded-lg text-lg font-bold px-5 py-2.5 me-2 mb-2 "
          onClick={() =>
            openInNewTab("https://calendly.com/jasper-yarn/yarn-demo")
          }
        >
          Book a 15 minute demo
        </button>
      </div>
    </div>
  );
}

function AppFeature({
  title,
  description,
  icon,
  color,
}: {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
}) {
  return (
    <div>
      <div className={` ${color} w-fit p-3 rounded-lg`}>{icon}</div>
      <div className="font-bold text-xl my-2"> {title}</div>
      <div>{description}</div>
    </div>
  );
}

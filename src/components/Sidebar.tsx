//
// {
//   menuList.map(({ title, icon }, index) => {
//     return (
//       <>
//         <li
//           key={index}
//           className="flex-start gap-9 pl-2.5 pr-7 py-3 rounded-xl hover:bg-[#272727] w-full text-2xl"
//         >
//           {icon}
//           <span className="text-base">{title}</span>
//         </li>
//         {index === 2 && <hr className="border w-full border-red-500" />}
//       </>
//     );
//   });
// }

import React from "react";
import {
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineSmartDisplay,
  MdOutlineWatchLater,
  MdThumbUpOffAlt,
  MdSettings,
  MdOutlinedFlag,
  MdOutlineHelpOutline,
  MdOutlineFeedback,
  MdOutlineSportsVolleyball
} from "react-icons/md";
import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";
import { FaRegCompass } from "react-icons/fa";
import { GiFilmStrip } from "react-icons/gi";

export default function Sidebar() {
  const mainLinks = [
    {
      icon: <MdHomeFilled className="text-xl" />,
      name: "Home"
    },
    {
      icon: <FaRegCompass className="text-xl" />,
      name: "Explore"
    },
    {
      icon: <MdOutlineSlowMotionVideo className="text-xl" />,
      name: "Shorts"
    },
    {
      icon: <MdSubscriptions className="text-xl" />,
      name: "Subscriptions"
    }
  ];

  const secondaryLinks = [
    {
      icon: <MdOutlineVideoLibrary className="text-xl" />,
      name: "Library"
    },
    {
      icon: <MdHistory className="text-xl" />,
      name: "History"
    },
    {
      icon: <MdOutlineSmartDisplay className="text-xl" />,
      name: "Your Videos"
    },
    {
      icon: <MdOutlineWatchLater className="text-xl" />,
      name: "Watch Later"
    },
    {
      icon: <MdThumbUpOffAlt className="text-xl" />,
      name: "Liked Videos"
    }
  ];

  const subscriptionLinks = [
    {
      icon: <TbMusic className="text-xl" />,
      name: "Music"
    },
    {
      icon: <MdOutlineSportsVolleyball className="text-xl" />,
      name: "Sport"
    },
    {
      icon: <TbDeviceGamepad2 className="text-xl" />,
      name: "Gaming"
    },
    {
      icon: <GiFilmStrip className="text-xl" />,
      name: "Films"
    }
  ];

  const helpLinks = [
    {
      icon: <MdSettings className="text-xl" />,
      name: "Settings"
    },
    {
      icon: <MdOutlinedFlag className="text-xl" />,
      name: "Report history"
    },
    {
      icon: <MdOutlineHelpOutline className="text-xl" />,
      name: "Help"
    },
    {
      icon: <MdOutlineFeedback className="text-xl" />,
      name: "Send feedback"
    }
  ];

  const textLinks = [
    [
      "About",
      "Press",
      "Copyright",
      "Contact us",
      "Creator",
      "Advertise",
      "Developers"
    ],
    [
      "Terms",
      "Privacy",
      "Policy & Safety",
      "How YouTube works",
      "Test new features"
    ]
  ];

  return (
    <div className="w-[280px] h-screen bg-[#0F0F0F] pr-5 overflow-auto pb-24 sidebar">
      <ul className="flex flex-col border-b border-[#272727]">
        {mainLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`pl-6 py-3 hover:bg-[#272727] rounded-xl`}
            >
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b border-[#272727]">
        {secondaryLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`pl-6 py-3 hover:bg-[#272727] rounded-xl`}
            >
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b border-[#272727]">
        {subscriptionLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`pl-6 py-3 hover:bg-[#272727] rounded-xl`}
            >
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b border-[#272727]">
        {helpLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`pl-6 py-3 hover:bg-[#272727] rounded-xl`}
            >
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex gap-2 flex-wrap text-sm pl-6 p-4 text-zinc-400">
        {textLinks[0].map((name) => {
          return (
            <li key={name}>
              <a href="#">{name}</a>
            </li>
          );
        })}
      </ul>
      <ul className="flex gap-2 flex-wrap text-sm pl-6 p-4 text-zinc-400">
        {textLinks[1].map((name) => {
          return (
            <li key={name}>
              <a href="#">{name}</a>
            </li>
          );
        })}
      </ul>
      <span className="pl-6 text-sm text-zinc-400">&copy; 2022 Google</span>
    </div>
  );
}

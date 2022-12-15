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
import { GiFilmStrip, GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import Logo from "components/Logo";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { toggleSidebar } from "store";

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

export default function Sidebar() {
  const dispatch = useAppDispatch();
  const handleToggleSidebar = () => dispatch(toggleSidebar());
  const isSidebarOpen = useAppSelector((state) => state.ytApp.isSidebarOpen);

  return (
    isSidebarOpen && (
      <div>
        <div className="flex flex-col absolute z-50 w-[280px] h-screen bg-[#0F0F0F]  sidebar">
          <div className="flex-start gap-2 pl-4 py-2.5">
            <button
              className="flex-center p-2 rounded-full hover:bg-zinc-700 text-2xl"
              onClick={handleToggleSidebar}
            >
              <GiHamburgerMenu />
            </button>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="overflow-auto pr-5 pb-10">
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
            <span className="pl-6 text-sm text-zinc-400">
              &copy; 2022 Google
            </span>
          </div>
        </div>
        <div
          className="absolute w-full h-screen z-40 bg-black bg-opacity-20 overflow-hidden"
          onClick={handleToggleSidebar}
        ></div>
      </div>
    )
  );
}

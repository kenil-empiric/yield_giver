import { BsDroplet } from "react-icons/bs";
import { PiStackLight } from "react-icons/pi";
import { IoMdSwap } from "react-icons/io";
import { IoMdBook } from "react-icons/io";
import { GiPayMoney } from "react-icons/gi";
import { FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { IoBook } from "react-icons/io5";

import logo from "../../assets/logo.svg";
import eth from "../../assets/Eth.png";
import money from "../../assets/Money.png";

import coreOne from "../../assets/coreOne.png";
import coreTwo from "../../assets/coreTwo.png";
import coreThree from "../../assets/coreThree.webp";

import innovate from "../../assets/innovate.png";
import centric from "../../assets/centric.png";
import accountability from "../../assets/Accountability.png";
import Adaptability from "../../assets/Adaptabilityp.png";
import Performance from "../../assets/Performance.png";
import Strategy from "../../assets/Strategy.png";

import metamask from "../../assets/metamask.svg";
import coinbase from "../../assets/coinbase.svg";
import wallletConnect from "../../assets/walletConnect.svg";
import { GrUserAdmin } from "react-icons/gr";

export const Data = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555,
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234,
  },
];
export const SideNav = [
  {
    title: "Home",
    icon: <FaHome className="text-2xl md:text-3xl" />,
    path: "/",
  },
  {
    title: "Pools",
    icon: <BsDroplet className="text-2xl md:text-3xl" />,
    path: "/pool",
  },
  {
    title: "Stake",
    icon: <PiStackLight className="text-2xl md:text-3xl" />,
    path: "#",
  },
  {
    title: "Swap",
    icon: <IoMdSwap className="text-2xl md:text-3xl" />,
    path: "#",
  },
  {
    title: "Earn",
    icon: <GiPayMoney className="text-2xl md:text-3xl" />,
    path: "#",
  },
  {
    title: "Docs",
    icon: <IoMdBook className="text-2xl md:text-3xl" />,
    path: "#",
  },
  {
    title: "Admin Dashboard",
    icon: <GrUserAdmin className="text-2xl md:text-4xl" />,
    path: "/admin/form",
  },
];

export const Wallet = [
  { logo: metamask, title: "MetaMask" },
  { logo: coinbase, title: "Coinbase Wallet" },
  { logo: wallletConnect, title: "WalletConnect" },
];

export const SocialIcon = [
  {
    icon: <FaTelegramPlane />,
    path: "/",
  },
  {
    icon: <MdEmail />,
    path: "/",
  },
  {
    icon: <IoBook />,
    path: "/",
  },
  {
    icon: <FaTwitter />,
    path: "/",
  },
  {
    icon: <FaMedium />,
    path: "/",
  },
];

export const FooterLink = [
  {
    title: "Navigation",
    path: "#",
  },
  {
    title: "Open App",
    path: "#",
  },
  {
    title: "Get Approved",
    path: "#",
  },
  {
    title: "Choose Pool",
    path: "#",
  },
  {
    title: "Learn More",
    path: "#",
  },
];

export const arr = [
  "Pool Name",
  "Assest Under Management",
  "Changes in 24 hour",
  "Changes in 7 Days",
  "Total Returns",
  "Days since pool active",
];

export const data = [
  {
    aum: 1,
    name: "Callisto Capital",
    day: 30,
    week: "5",
    total: "nt",
    active: "8500",
  },
  {
    aum: 2,
    name: "Erics High Risk Degen Fund",
    day: 25,
    week: "3",
    total: "nt",
    active: "500",
  },
  {
    aum: 3,
    name: "Emilian (THE SECT)",
    day: 40,
    week: "6",
    total: "nt",
    active: "500",
  },
  {
    aum: 1,
    name: "BotCompiler",
    day: 30,
    week: "5",
    total: "nt",
    active: "8500",
  },
  {
    aum: 2,
    name: "QuamfyWhale's Low Cap Gems",
    day: 25,
    week: "3",
    total: "nt",
    active: "500",
  },
  {
    aum: 3,
    name: "Bob Johnson",
    day: 40,
    week: "6",
    total: "nt",
    active: "500",
  },
  {
    aum: 1,
    name: "BotCompiler",
    day: 30,
    week: "5",
    total: "nt",
    active: "8500",
  },
  {
    aum: 2,
    name: "QuamfyWhale's Low Cap Gems",
    day: 25,
    week: "3",
    total: "nt",
    active: "500",
  },
  {
    aum: 3,
    name: "Bob Johnson",
    day: 40,
    week: "6",
    total: "nt",
    active: "500",
  },
  {
    aum: 1,
    name: "BotCompiler",
    day: 30,
    week: "5",
    total: "nt",
    active: "8500",
  },
  {
    aum: 2,
    name: "QuamfyWhale's Low Cap Gems",
    day: 25,
    week: "3",
    total: "nt",
    active: "500",
  },
  {
    aum: 3,
    name: "Bob Johnson",
    day: 40,
    week: "6",
    total: "nt",
    active: "500",
  },
];

export const cardData = [
  {
    title: "Pick a Plan",
    img: logo,
    desc: "Evaluate a Plan’s Past Performance, Investment Strategy and Risk Rating to grow your wealth quickly with opportunities you understand and support",
  },
  {
    title: "Deposit Crypto",
    img: eth,
    desc: "After staking your Crypto of choice, you’ll earn a proportionate share of high-yield dividends that’ll surprise you every minute! ",
  },
  {
    title: "Count Your DPY",
    img: money,
    desc: `We focus on delivering a Daily Percentage Yield of at least 0.15%. That’s over 50% APY which gets many investors doubling their wealth fast!`,
  },
];

export const coreData = [
  {
    title: "Client-Centric Ethical Integrity",
    img: coreOne,
    desc: "At Yield Givers, Ethics is the baseline for measuring, calculating, and upgrading our daily actions. Client-Heros are at the forefront of every decision with your interests always paramount. Ourstead fast adherence to the highest moral standards is prioritized for long-term relationships, with trust earned through consistent, ethical, and relentless conduct.",
  },
  {
    title: "Compliant and Honest Transparency",
    img: coreTwo,
    desc: "We believe in full transparency every day. We love to keep investors and stakeholders updated with clear and open communication. We love emerging blockchain technology because it helps us see and show you the small and big picture easily. We work hard to help you make informed and confident investment decisions.",
  },
  {
    title: "Risk Management & Capital Preservation",
    img: coreThree,
    desc: "Rigorous, strategic, and analytic risk management is central to our Sunnah. We meticulously evaluate various factors for each financial position to mitigate risks, protect capital, and grow investments. Our rigorous research and analysis practices are the backbone and driving force of our success",
  },
];

export const InnovateData = [
  {
    title: "Innovation",
    img: Strategy,
    desc: "Dive into a financial realm where innovation lights the way. Yield Givers leads with cutting-edge strategies in tune with market shifts, ensuring your financial path isn't just reactive but pioneering. Here, you're always ahead in the dynamic financial landscape, with each move securing and amplifying your prosperity.",
  },
  {
    title: "Client-Centric",
    img: Adaptability,
    desc: "We carefully customize services that go above and above your expectations, paying close attention to your particular needs at every turn. Our dedication guarantees that your journey is not only fruitful but also profoundly illuminating, forming a customized route to prosperity and enduring satisfaction.",
  },
  {
    title: "Accountability",
    img: innovate,
    desc: "We value responsibility and transparency in our relationship with you. We embrace each commitment as a sacred pledge, a tribute to our unwavering support for your journey. Your trust is our most cherished emblem, guiding us to diligently nurture your path to prosperity and happiness, ensuring every step is taken with integrity and dedication. ",
  },
  {
    title: "Adaptability",
    img: Performance,
    desc: "In the ever-shifting finance landscape, your goals are our focus. Yield Givers offers flexible, innovative strategies that evolve with you, bringing steadiness to a volatile market. Feel the assurance of a dedicated ally, skillfully guiding you through changes to enhance and secure your financial prosperity. We turn today's unpredictability into tomorrow's affluent certainties.",
  },
  {
    title: "High Performance",
    img: centric,
    desc: "Yield Givers defines good performance as turning your goals into reality. Our relentless pursuit of excellence and commitment to your financial aspirations shape every strategy, guiding each step on your journey. Together, we soar toward extraordinary success, crafting a legacy of prosperity and triumph.",
  },
  {
    title: "Strategic Diversification",
    img: accountability,
    desc: "An all-weather fund requires a vast diversity of asset allocation, multiple strategies for each asset class, and constant portfolio management. Our professional Investment managers and trading bot operators oversee more diversity than most fund-of-fund managers see in a year. Our deep research and development are ongoing to find the forefront of financial excellence, keeping your funds soaring.",
  },
];

export const Stakedata = [
  {
    title: "Annual Percentage Yield",
    value: "",
  },
  {
    title: "Investors",
    value: "25",
  },
  {
    title: "Investment Options",
    value: "",
  },
  {
    title: "Amount Invested",
    value: "$910,00.00",
  },
];

export const details = [
  {
    title: "Empowering Change Through DeFi",
    desc: "In a world where innovation meets compassion, decentralized finance (DeFi) stands as a pillar of empowerment and progress. DeFi transforms the traditional financial system, creating a space where transactions, lending, and investments thrive under the guidance of transparency and equity. By leveraging ‘smart contract’ decentralized blockchain applications knows as Dapps, DeFi offers a secure, transparent, and accessible ecosystem, fostering trust and community through ‘trustless’ automations that give you massively more financial control. ",
  },
  {
    title: "The Heart of DeFi: DeFi Wallets Explained",
    desc: "At the core of DeFi's transformative power are DeFi wallets - your personalized gateway to a decentralized future. DeFi wallets grant you complete ownership of your assets, safeguarding your financial independence with unparalleled privacy and security. These aren't just places to store your assets; they're tools that connect you directly to a world of Dapps (DeFi applications) where you can trade tokens, play games, donate to chairties, or join liquidity pools, empowering you with autonomy, clarity and flexibility.",
  },
  {
    title: "Strengthening Our Bonds: Liquid Staking",
    desc: "Liquid staking represents a key innovation within DeFi, enabling you to stake your cryptocurrency and earn rewards, while maintaining access to your assets. This dual benefit not only enhances the security and functionality of blockchain networks but also opens up avenues for earning potential without sacrificing liquidity. It's a testament to how DeFi allows us to support the underlying technology of our investments while nurturing our own financial growth.",
  },
  {
    title: "A Vision of Global Healing Through Our Investments",
    desc: "Our approach reimagines investing with a heart, intertwining the advanced mechanisms of DeFi with the timeless values of empathy and charity. We commit a portion of our investment returns to healing the world, supporting humanitarian efforts and charities globally. Your investment thus becomes a beacon of hope, paving the way for a better tomorrow for communities far and wide.",
  },
  {
    title: "Embark on This Journey With Yield Givers",
    desc: "We warmly invite you to join us in the Yield Givers journey of financial empowerment and nurturing humanitarian philanthropy. Investing with Yield Givers means more than growing your wealth; it's about becoming part of a movement that extends beyond ourselves, aiming to uplift, heal, and inspire people across the globe through the innovative potential of DeFi. Let's come together to leverage decentralized finance as a force for good, embodying the values of compassion, generosity, and determination in our shared mission for a brighter future. Seize this moment to invest in both your future and in the betterment of the world. Become part of our mission to spread healing, one investment at a time.",
  },
];

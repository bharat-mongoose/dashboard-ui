import { BsBagXFill, BsClipboardCheck, BsHandbag } from "react-icons/bs";
import { IoBagAdd } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { FaArrowDownUpLock } from "react-icons/fa6";
import { CiCreditCard2 } from "react-icons/ci";
import { RiBarChartBoxLine } from "react-icons/ri";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import image1 from "../assets/images/image1.webp";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.webp";
import image4 from "../assets/images/images4.jpeg";

export const menus = [
  {
    label: <MdHome size={30} />,
    url: "/",
  },
  {
    label: <RiBarChartBoxLine size={30} />,
    url: "/",
  },
  {
    label: <BsClipboardCheck size={30} />,
    url: "/",
  },
  {
    label: <CiCreditCard2 size={30} />,
    url: "/",
  },
  {
    label: <BsHandbag size={30} />,
  },
];

export const feedbackData = [
  {
    image: image1,
    name: "Jenny Wilson",
    rating: 4,
    description:
      "The food was excellent and so was the service. I had the mashroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about giuten allergies.",
  },
  {
    image: image2,
    name: "Dianne Russell",
    rating: 5,
    description:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service",
  },
  {
    image: image3,
    name: "Devon Lane",
    rating: 3,
    description:
      "The food was excellent and so was the service. I had the mashroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about giuten allergies.",
  },
  {
    image: image1,
    name: "Guy Hawkins",
    rating: 2,
    description:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
  },
  {
    image: image4,
    name: "Cody Fisher",
    rating: 1,
    description:
      "The food was excellent and so was the service. I had the mashroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about giuten allergies.",
  },
];

export const tableData = [
  {
    profile: image1,
    name: "Wade Warren",
    orderNo: 15478256,
    amount: "$124.00",
    status: 1,
  },
  {
    profile: image2,
    name: "Jane Cooper",
    orderNo: 48965786,
    amount: "$365.02",
    status: 0,
  },
  {
    profile: image3,
    name: "Guy Hawkins",
    orderNo: 78958215,
    amount: "$45.88",
    status: 2,
  },
  {
    profile: image4,
    name: "kristin Watson",
    orderNo: 20965732,
    amount: "$65.00",
    status: 1,
  },
  {
    profile: image1,
    name: "Cody Fisher",
    orderNo: 95715620,
    amount: "$545.00",
    status: 1,
  },
  {
    profile: image2,
    name: "Savannah Nguyen",
    orderNo: 78514568,
    amount: "$128.20",
    status: 1,
  },
];

export const boxData = [
  {
    icon: <FaCartPlus size={25} />,
    title: "Total Orders",
    value: "75",
    percent: "3",
    percentIcon: <IoMdArrowDropup size={20} />,
  },
  {
    icon: <IoBagAdd size={25} />,
    title: "Total Delivered",
    value: "70",
    percent: "3",
    percentIcon: <IoMdArrowDropdown size={20} />,
  },
  {
    icon: <BsBagXFill size={25} />,
    title: "Total Cancelled",
    value: "05",
    percent: "3",
    percentIcon: <IoMdArrowDropup size={20} />,
  },
  {
    icon: <FaArrowDownUpLock size={25} />,
    title: "Total Revenue",
    value: "$12K",
    percent: "3",
    percentIcon: <IoMdArrowDropdown size={20} />,
  },
];

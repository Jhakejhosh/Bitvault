import { IconType } from "react-icons";
import { SlCalculator } from "react-icons/sl";
import { IoBookOutline } from "react-icons/io5";
import { PiPresentationChart } from "react-icons/pi";

interface BenefitType {
    id: number;
    icon: IconType;
    heading: string;
    text: string;
    color: string;
    bg: string
}

export const benefits: BenefitType[] = [
    {
        id: 1,
        icon: SlCalculator,
        heading: "Precision Risk Modeling",
        text: "Determine the optimal position size and set clear stop-loss targets for every trade.",
        color: "text-customPurple",
        bg: "bg-customBgPurple"
    },
     {
        id: 2,
        icon: IoBookOutline,
        heading: "Learn to Trade Like a Fund Manager",
        text: "Learn the core principles of portfolio risk, capital allocation, and loss mitigation directly within the app.",
        color: "text-customPink",
        bg: "bg-customBgPink"
    },
     {
        id: 3,
        icon: PiPresentationChart,
        heading: "Unified Crypto Portfolio Tracking",
        text: "Monitor all your preferred cryptocurrencies and market metrics in one unified dashboard.",
        color: "text-customGreen",
        bg: "bg-customBgGreen"
    }
]
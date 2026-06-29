"use client";
import CityEventSection from "@/components/CityEventSection";
import CtaPhone from "@/components/CtaPhone";
import DownloadAppButton from "@/components/DownloadAppButton";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import React, { useRef, useState } from "react";

export const features = [
  {
    title: "Discover Lagos Like Never Before",
    description:
      "Real-time traffic information, route optimization, and congestion alerts to help you navigate Lagos efficiently.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
      >
        <path
          d="M0.75 12.75L26.0833 0.75L14.0833 26.0833L11.4167 15.4167L0.75 12.75Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    imageUrl: "/img/1.png",
  },
  {
    title: "Find & Navigate with Ease",
    description:
      "Book rides, find public transport schedules, and access various transportation options across Lagos.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M25.3337 22.6666H28.0003C28.8003 22.6666 29.3337 22.1333 29.3337 21.3333V17.3333C29.3337 16.1333 28.4003 15.0666 27.3337 14.7999C24.9337 14.1333 21.3337 13.3333 21.3337 13.3333C21.3337 13.3333 19.6003 11.4666 18.4003 10.2666C17.7337 9.73325 16.9337 9.33325 16.0003 9.33325H6.66699C5.86699 9.33325 5.20033 9.86659 4.80033 10.5333L2.93366 14.3999C2.7571 14.9149 2.66699 15.4555 2.66699 15.9999V21.3333C2.66699 22.1333 3.20033 22.6666 4.00033 22.6666H6.66699"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.33366 25.3333C10.8064 25.3333 12.0003 24.1394 12.0003 22.6667C12.0003 21.1939 10.8064 20 9.33366 20C7.8609 20 6.66699 21.1939 6.66699 22.6667C6.66699 24.1394 7.8609 25.3333 9.33366 25.3333Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 22.6667H20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.6667 25.3333C24.1394 25.3333 25.3333 24.1394 25.3333 22.6667C25.3333 21.1939 24.1394 20 22.6667 20C21.1939 20 20 21.1939 20 22.6667C20 24.1394 21.1939 25.3333 22.6667 25.3333Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    imageUrl: "/img/2.png",
  },
  {
    title: "Grow Your Business",
    description:
      "Discover local businesses, read reviews, get directions, and connect with Lagos entrepreneurs and services.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M8 29.3334V5.33341C8 4.62617 8.28095 3.94789 8.78105 3.4478C9.28115 2.9477 9.95942 2.66675 10.6667 2.66675H21.3333C22.0406 2.66675 22.7189 2.9477 23.219 3.4478C23.719 3.94789 24 4.62617 24 5.33341V29.3334H8Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.00033 16H5.33366C4.62641 16 3.94814 16.281 3.44804 16.781C2.94794 17.2811 2.66699 17.9594 2.66699 18.6667V26.6667C2.66699 27.3739 2.94794 28.0522 3.44804 28.5523C3.94814 29.0524 4.62641 29.3333 5.33366 29.3333H8.00033"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 12H26.6667C27.3739 12 28.0522 12.281 28.5523 12.781C29.0524 13.2811 29.3333 13.9594 29.3333 14.6667V26.6667C29.3333 27.3739 29.0524 28.0522 28.5523 28.5523C28.0522 29.0524 27.3739 29.3333 26.6667 29.3333H24"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.333 8H18.6663"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.333 13.3333H18.6663"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.333 18.6667H18.6663"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.333 24H18.6663"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    imageUrl: "/img/3.png",
  },
  {
    title: "Access Essential Services",
    description:
      "Instant emergency notifications, safety alerts, and direct access to emergency services when you need them most.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M28.9732 24L18.3066 5.33331C18.074 4.92291 17.7367 4.58156 17.3291 4.34407C16.9216 4.10657 16.4583 3.98145 15.9866 3.98145C15.5149 3.98145 15.0516 4.10657 14.644 4.34407C14.2364 4.58156 13.8992 4.92291 13.6666 5.33331L2.99991 24C2.76482 24.4071 2.64154 24.8692 2.64258 25.3393C2.64363 25.8095 2.76894 26.271 3.00583 26.6771C3.24273 27.0832 3.58277 27.4194 3.9915 27.6517C4.40023 27.8841 4.86312 28.0042 5.33324 28H26.6666C27.1344 27.9995 27.5939 27.8759 27.9989 27.6417C28.404 27.4074 28.7402 27.0708 28.9739 26.6655C29.2076 26.2602 29.3306 25.8005 29.3305 25.3326C29.3304 24.8648 29.2072 24.4052 28.9732 24Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 12V17.3333"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 22.6667H16.0133"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    imageUrl: "/img/4.png",
  },
  {
    title: "Utility Payments",
    description:
      "Pay your bills, manage subscriptions, and handle all utility payments securely from one convenient place.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M26.667 6.66675H5.33366C3.8609 6.66675 2.66699 7.86066 2.66699 9.33341V22.6667C2.66699 24.1395 3.8609 25.3334 5.33366 25.3334H26.667C28.1398 25.3334 29.3337 24.1395 29.3337 22.6667V9.33341C29.3337 7.86066 28.1398 6.66675 26.667 6.66675Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.66699 13.3333H29.3337"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    imageUrl: "/img/5.png",
  },
];

const LagosPage = () => {
  const [active, setActive] = useState(1);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // // Start auto increment
  // useEffect(() => {
  //   intervalRef.current = setInterval(() => {
  //     setActive((prev) => (prev >= features.length ? 1 : prev + 1));
  //   }, 3000);

  //   return () => {
  //     if (intervalRef.current) clearInterval(intervalRef.current);
  //   };
  // }, []);

  const startIncrement = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setActive((prev) => (prev >= features.length ? 1 : prev + 1));
      }, 3000);
    }
  };

  // Function to stop interval from outside
  const stopIncrement = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div>
      {" "}
      <section className="h-[70dvh] md:h-[80dvh] relative overflow-hidden">
        <article className="bg-[#01221D99] relative z-20 h-full w-full flex gap-4 flex-col justify-center items-center text-center">
          <div className=" rounded-full bg-[#F5F5F5] pr-3 flex gap-2 py-0.5 items-center">
            <article className="h-6 aspect-4/1 relative">
              <Image
                src="/img/city-lagos-avatar-group.png"
                className="object-contain"
                alt=""
                fill
              />
            </article>
            <p className="md:text-lg text-sm font-medium">
              + 1436 people and maybe you 🤞
            </p>
          </div>
          <h5 className="text-4xl md:text-[5rem] text-[#F5F5F5] tracking-normal font-inter mt-2 mb-1 font-bold">
            The app that knows <br /> Lagos
          </h5>
          <DownloadAppButton />
        </article>

        <video
          className="absolute inset-0 w-full h-full object-cover scale-[1.3]"
          // src="/video/lagos.webm"
          src="https://cdn-mycityapp.mtn.ng/mycityapp.micro.discovery/Discoveries/website/website/20260121120240-7d21b578.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </section>
      <section className="w-full py-32 px-5 relative">
        <div className="text-center flex flex-col h-full justify-center gap-4 items-center relative z-10">
          <h4 className="text-currentColor text-4xl md:text-5xl font-semibold mb-4 md:mt-5 -mt-8 inter ">
            Experience Lagos like a native <span className="text-[#FFDF55]">…….</span>
          </h4>
          <p className="text-[#657171] md:text-2xl text-base md:max-w-4xl">
            MyLagosApp is the ultimate lifestyle companion for navigating and
            experiencing Lagos. Powered by the Lagos State Government, the app
            puts the city in the palm of your hand from Navigation to top
            attractions and events to restaurants, shopping, hotels/airbnbs, and
            essential services.
          </p>
        </div>
        <Image
          src="/img/knows-lagos-bg.png"
          className="object-cover"
          alt=""
          fill
        />
      </section>
      <CityEventSection state="LAGOS" />
      <MaxWidthWrapper className="my-24">
        <header className="text-center">
          <h4 className="font-semibold text-4xl">
            What You Can Do On MyLagosApp
          </h4>
          <p className="text-[#4B5563] mt-4 max-w-[650px] mx-auto">
            MyLagosApp has quickly become the go-to city guide for young
            professionals, creatives, Tourists/business travelers, and
            Lagos-loving locals who want to live the city fully
          </p>
        </header>

        <article className="grid md:grid-cols-[45%_1fr] mt-4">
          <div className="relative h-[95dvh] md:h-auto">
            {features.map((item, idx) => (
              <Image
                key={idx}
                src={item.imageUrl}
                fill
                className={`${
                  idx + 1 === active ? "opacity-100" : "opacity-0"
                } ease-in object-contain duration-150`}
                alt="features image"
              />
            ))}
          </div>

          <div className="flex flex-col gap-6 py-10">
            {features.map((item, idx) => (
              <button
                key={idx}
                onMouseEnter={() => {
                  stopIncrement();
                  setActive(idx + 1);
                }}
                onMouseLeave={startIncrement}
                className={`p-5 flex flex-col md:flex-row items-start gap-4 rounded-xl cursor-pointer ${
                  idx + 1 === active ? "bg-[#FFEFAA]" : "bg-[#F7F7F8]"
                } `}
              >
                <span
                  className={` p-2.5 rounded-lg  ${
                    idx + 1 === active
                      ? "bg-[#56827B] text-white"
                      : "bg-white text-black"
                  } `}
                >
                  {item.icon}
                </span>

                <article>
                  <h5 className="text-lg font-semibold text-black inter">
                    {item.title}
                  </h5>
                  <p className="text-[#657171]">{item.description}</p>
                </article>
              </button>
            ))}
          </div>
        </article>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <header className="text-center">
          <h4 className="font-semibold text-4xl">
            Why Lagosians Love MyLagosApp
          </h4>
        </header>

        <section className="grid md:grid-cols-[25%_1fr_25%] gap-5 min-h-[60dvh] mt-8 mb-24">
          <div className="grid grid-rows-2 gap-5">
            <article className="bg-[#F7F7F8] p-6 rounded-xl gap-2 flex flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M32.5481 21.5151C36.1655 21.5151 39.0981 18.5825 39.0981 14.9651C39.0981 11.3476 36.1655 8.41504 32.5481 8.41504C28.9306 8.41504 25.998 11.3476 25.998 14.9651C25.998 18.5825 28.9306 21.5151 32.5481 21.5151Z"
                  stroke="black"
                  strokeWidth="1.8"
                />
                <path
                  d="M13.7835 24.2702C17.4199 24.2702 20.3678 21.3223 20.3678 17.6859C20.3678 14.0495 17.4199 11.1016 13.7835 11.1016C10.1471 11.1016 7.19922 14.0495 7.19922 17.6859C7.19922 21.3223 10.1471 24.2702 13.7835 24.2702Z"
                  stroke="black"
                  strokeWidth="1.8"
                />
                <path
                  d="M45.6752 39.3761C44.2145 33.1752 39.2787 28.1484 32.5481 28.1484C25.8174 28.1484 20.8816 33.1752 19.4209 39.3761"
                  stroke="black"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.8233 32.3641C20.5675 29.9646 17.4645 28.416 13.7834 28.416C7.24299 28.416 2.52769 33.3044 1.14625 39.1688C1.03228 39.6527 1.3321 40.1373 1.81592 40.2512C2.29973 40.3652 2.78433 40.0654 2.8983 39.5816C4.13421 34.3349 8.26323 30.216 13.7834 30.216C17.0085 30.216 19.7587 31.622 21.7346 33.8373C22.0661 33.3202 22.43 32.8281 22.8233 32.3641Z"
                  fill="black"
                />
              </svg>

              <h5 className="text-lg font-medium inter mt-12 md:mt-auto">
                Over 300,000+ users and counting
              </h5>
              <p className="text-[#666867]">
                Join 300,000+ users exploring curated city experiences.
              </p>
            </article>

            <article className="bg-[#F7F7F8] p-6 rounded-xl gap-2 flex flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M23 1L45 8L40.296 39L23 47L6.296 39L1 8L23 1Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31 21H25V9L14 23H21V36L31 21Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <h5 className="text-lg font-medium inter mt-12 md:mt-auto">
                Safe and current
              </h5>
              <p className="text-[#666867]">
                Designed to keep you safe, connected, and in the know.
              </p>
            </article>
          </div>

          <article className="pb-4 order-first md:order-0 flex flex-col">
            <div className="bg-[#FFEFAA] px-6 md:pr-10 pt-6 flex flex-col rounded-xl h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
              >
                <rect width="50" height="50" rx="8" fill="#014339" />
                <path
                  d="M11.0236 21.3641C11.4625 11.4895 22.0635 5.30712 31.0121 9.42935C38.794 13.0141 41.6389 23.7141 36.1223 30.4784C36.0672 30.5456 35.7524 30.9372 35.7042 30.9289C34.0116 29.0053 31.8306 27.4784 29.3889 26.6724C29.5176 26.4872 29.6843 26.3372 29.825 26.1608C32.5334 22.7682 31.2468 17.5006 26.9986 16.1868C23.9926 15.2571 20.9561 16.4085 19.4917 19.2048C18.2098 21.6525 18.6899 24.571 20.5848 26.5414C18.4611 27.5192 16.426 28.6747 14.7834 30.3618C14.7084 30.4386 14.2996 30.9409 14.2482 30.9298C12.7903 29.277 11.8292 27.221 11.3588 25.0687C11.1885 24.2886 11.0588 23.4377 11.0241 22.6474C11.0065 22.246 11.0061 21.7655 11.0241 21.3641H11.0236Z"
                  fill="white"
                />
                <path
                  d="M22.1236 28.6339C22.5296 28.582 22.7458 28.7399 23.0481 28.9774C23.7597 29.5367 24.2657 30.364 24.9773 30.9283L27.2504 28.6885C27.5546 28.5293 28.2939 28.7751 28.6175 28.8885C30.1449 29.4251 32.712 30.8464 33.5703 32.2459C33.743 32.5274 33.9162 32.901 33.6902 33.207L24.9986 41.8672L16.0963 32.8987C16.0555 32.6478 16.5231 32.0848 16.6939 31.8936C17.7606 30.6996 18.9898 29.9445 20.43 29.2733C20.8625 29.0714 21.6717 28.6927 22.124 28.6348L22.1236 28.6339Z"
                  fill="white"
                />
                <path
                  d="M25.0047 25.9739C27.1468 25.9739 28.8834 24.2364 28.8834 22.0929C28.8834 19.9495 27.1468 18.2119 25.0047 18.2119C22.8625 18.2119 21.126 19.9495 21.126 22.0929C21.126 24.2364 22.8625 25.9739 25.0047 25.9739Z"
                  fill="white"
                />
              </svg>

              <header className="md:max-w-xl">
                <h6 className="mt-3 inter text-lg">
                  One app for everything Lagos
                </h6>
                <p className="text-[#756B59]">
                  All the features of the desktop app in your pocket
                </p>
              </header>

              <div className="h-[250px] md:h-full w-full mt-4 md:mt-7 relative">
                <Image
                  src={"/img/lagos-one-app.png"}
                  fill
                  alt=""
                  className="object-left md:object-right object-contain"
                />
              </div>
            </div>
          </article>

          <div className="grid grid-rows-2 gap-5">
            <article className="bg-[#F7F7F8] p-6 rounded-xl gap-2 flex flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M6 20H5C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21V20ZM6 28V27C5.73478 27 5.48043 27.1054 5.29289 27.2929C5.10536 27.4804 5 27.7348 5 28H6ZM42 20V21C42.2652 21 42.5196 20.8946 42.7071 20.7071C42.8946 20.5196 43 20.2652 43 20H42ZM42 28H43C43 27.7348 42.8946 27.4804 42.7071 27.2929C42.5196 27.1054 42.2652 27 42 27V28ZM10 11H20V9H10V11ZM20 11H38V9H20V11ZM38 37H20V39H38V37ZM20 37H10V39H20V37ZM19 10V38H21V10H19ZM8.12 21.88C8.6818 22.4425 8.99736 23.205 8.99736 24C8.99736 24.795 8.6818 25.5575 8.12 26.12L9.536 27.536C10.0004 27.0717 10.3688 26.5204 10.6202 25.9137C10.8716 25.307 11.0009 24.6567 11.0009 24C11.0009 23.3433 10.8716 22.693 10.6202 22.0863C10.3688 21.4796 10.0004 20.9283 9.536 20.464L8.12 21.88ZM39.88 26.12C39.3182 25.5575 39.0026 24.795 39.0026 24C39.0026 23.205 39.3182 22.4425 39.88 21.88L38.464 20.464C37.9996 20.9283 37.6311 21.4796 37.3798 22.0863C37.1284 22.693 36.9991 23.3433 36.9991 24C36.9991 24.6567 37.1284 25.307 37.3798 25.9137C37.6311 26.5204 37.9996 27.0717 38.464 27.536L39.88 26.12ZM6 21C6.77 21 7.536 21.292 8.12 21.88L9.536 20.464C9.07161 19.9997 8.52032 19.6315 7.91361 19.3803C7.3069 19.1291 6.65666 18.9999 6 19V21ZM7 20V14H5V20H7ZM7 34V28H5V34H7ZM8.12 26.12C7.536 26.708 6.77 27 6 27V29C7.278 29 8.56 28.512 9.536 27.536L8.12 26.12ZM39.88 21.88C40.464 21.292 41.23 21 42 21V19C40.722 19 39.44 19.488 38.464 20.464L39.88 21.88ZM41 14V20H43V14H41ZM41 28V34H43V28H41ZM42 27C41.23 27 40.464 26.708 39.88 26.12L38.464 27.536C38.9284 28.0003 39.4797 28.3685 40.0864 28.6197C40.6931 28.8709 41.3433 29.0001 42 29V27ZM10 37C9.20435 37 8.44129 36.6839 7.87868 36.1213C7.31607 35.5587 7 34.7956 7 34H5C5 35.3261 5.52678 36.5979 6.46447 37.5355C7.40215 38.4732 8.67392 39 10 39V37ZM38 39C39.3261 39 40.5979 38.4732 41.5355 37.5355C42.4732 36.5979 43 35.3261 43 34H41C41 34.7956 40.6839 35.5587 40.1213 36.1213C39.5587 36.6839 38.7957 37 38 37V39ZM38 11C38.7957 11 39.5587 11.3161 40.1213 11.8787C40.6839 12.4413 41 13.2044 41 14H43C43 12.6739 42.4732 11.4021 41.5355 10.4645C40.5979 9.52678 39.3261 9 38 9V11ZM10 9C8.67392 9 7.40215 9.52678 6.46447 10.4645C5.52678 11.4021 5 12.6739 5 14H7C7 13.2044 7.31607 12.4413 7.87868 11.8787C8.44129 11.3161 9.20435 11 10 11V9Z"
                  fill="black"
                />
              </svg>
              <h5 className="text-lg font-medium inter mt-12 md:mt-auto">
                Events and experiences
              </h5>
              <p className="text-[#666867]">
                The best of the city, all at your fingertips.
              </p>
            </article>

            <article className="bg-[#F7F7F8] p-6 rounded-xl gap-2 flex flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M42.0788 19.5375C41.3475 18.7744 40.5919 17.9869 40.2881 17.2537C40.0069 16.5731 39.9919 15.5662 39.975 14.5012C39.9487 12.7425 39.9188 10.7513 38.5837 9.41625C37.2487 8.08125 35.25 8.05125 33.4988 8.025C32.4338 8.00812 31.4362 7.99312 30.7463 7.71187C30.0131 7.40813 29.2256 6.6525 28.4625 5.92125C27.2175 4.72875 25.8075 3.375 24 3.375C22.1925 3.375 20.7825 4.72875 19.5375 5.92125C18.7744 6.6525 17.9869 7.40813 17.2537 7.71187C16.5731 7.99312 15.5662 8.00812 14.5012 8.025C12.7425 8.05125 10.7513 8.08125 9.41625 9.41625C8.08125 10.7513 8.05125 12.75 8.025 14.5012C8.00812 15.5662 7.99312 16.5637 7.71187 17.2537C7.40813 17.9869 6.6525 18.7744 5.92125 19.5375C4.72875 20.7825 3.375 22.1925 3.375 24C3.375 25.8075 4.72875 27.2175 5.92125 28.4625C6.6525 29.2256 7.40813 30.0131 7.71187 30.7463C7.99312 31.4269 8.00812 32.4338 8.025 33.4988C8.05125 35.2575 8.08125 37.2487 9.41625 38.5837C10.7513 39.9188 12.75 39.9487 14.5012 39.975C15.5662 39.9919 16.5637 40.0069 17.2537 40.2881C17.9869 40.5919 18.7744 41.3475 19.5375 42.0788C20.7825 43.2712 22.1925 44.625 24 44.625C25.8075 44.625 27.2175 43.2712 28.4625 42.0788C29.2256 41.3475 30.0131 40.5919 30.7463 40.2881C31.4269 40.0069 32.4338 39.9919 33.4988 39.975C35.2575 39.9487 37.2487 39.9188 38.5837 38.5837C39.9188 37.2487 39.9487 35.2575 39.975 33.4988C39.9919 32.4338 40.0069 31.4362 40.2881 30.7463C40.5919 30.0131 41.3475 29.2256 42.0788 28.4625C43.2712 27.2175 44.625 25.8075 44.625 24C44.625 22.1925 43.2712 20.7825 42.0788 19.5375ZM40.455 26.9062C39.5794 27.8175 38.6737 28.7625 38.205 29.8875C37.7587 30.9637 37.74 32.235 37.7212 33.465C37.7006 34.86 37.6781 36.3037 36.99 36.9938C36.3019 37.6838 34.8563 37.7044 33.4613 37.725C32.2313 37.7437 30.96 37.7625 29.8838 38.2087C28.7588 38.6737 27.8213 39.5794 26.9006 40.4587C25.9163 41.3962 24.8981 42.3787 23.9963 42.3787C23.0944 42.3787 22.0763 41.4019 21.09 40.4587C20.1788 39.5831 19.2338 38.6775 18.1088 38.2087C17.0325 37.7625 15.7612 37.7437 14.5312 37.725C13.1362 37.7044 11.6925 37.6819 11.0025 36.9938C10.3125 36.3056 10.2919 34.86 10.2712 33.465C10.2525 32.235 10.2338 30.9637 9.7875 29.8875C9.3225 28.7625 8.41688 27.825 7.5375 26.9044C6.60188 25.92 5.625 24.9019 5.625 24C5.625 23.0981 6.60188 22.08 7.545 21.0938C8.42063 20.1825 9.32625 19.2375 9.795 18.1125C10.2413 17.0363 10.26 15.765 10.2787 14.535C10.2994 13.14 10.3219 11.6962 11.01 11.0063C11.6981 10.3163 13.1438 10.2956 14.5387 10.275C15.7688 10.2562 17.04 10.2375 18.1163 9.79125C19.2413 9.32625 20.1787 8.42063 21.0994 7.54125C22.08 6.60188 23.0981 5.625 24 5.625C24.9019 5.625 25.92 6.60188 26.9062 7.545C27.8175 8.42063 28.7625 9.32625 29.8875 9.795C30.9637 10.2413 32.235 10.26 33.465 10.2787C34.86 10.2994 36.3037 10.3219 36.9938 11.01C37.6838 11.6981 37.7044 13.1438 37.725 14.5387C37.7437 15.7688 37.7625 17.04 38.2087 18.1163C38.6737 19.2413 39.5794 20.1787 40.4587 21.0994C41.3962 22.0837 42.3787 23.1019 42.3787 24.0037C42.3787 24.9056 41.3981 25.92 40.455 26.9062ZM32.295 18.705C32.5057 18.9159 32.624 19.2019 32.624 19.5C32.624 19.7981 32.5057 20.0841 32.295 20.295L21.795 30.795C21.5841 31.0057 21.2981 31.124 21 31.124C20.7019 31.124 20.4159 31.0057 20.205 30.795L15.705 26.295C15.5063 26.0817 15.3981 25.7997 15.4032 25.5082C15.4084 25.2168 15.5264 24.9387 15.7326 24.7326C15.9387 24.5264 16.2168 24.4084 16.5082 24.4032C16.7997 24.3981 17.0817 24.5063 17.295 24.705L21 28.4081L30.705 18.705C30.9159 18.4943 31.2019 18.376 31.5 18.376C31.7981 18.376 32.0841 18.4943 32.295 18.705Z"
                  fill="black"
                />
              </svg>

              <h5 className="text-lg font-medium inter mt-12 md:mt-auto">
                Trusted by Lagos State
              </h5>
              <p className="text-[#666867]">
                The product is officially trusted by Lagos State.
              </p>
            </article>
          </div>
        </section>
      </MaxWidthWrapper>
      <CtaPhone />
    </div>
  );
};

export default LagosPage;

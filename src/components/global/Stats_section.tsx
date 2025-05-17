"use client";

import React from "react";
import Image from "next/image";
import CountUp from "react-countup";
import ImageOne from "../../../../public/statSection/state-1.png";
import LottieWave from "./LottieWave";
const StatsData = [
  {
    title: "-99%",
    description: "on-hold time for patients",
  },
  {
    title: "-60%",
    description: "call center operational costs",
  },
  {
    title: "85%",
    description: "call automation rate",
  },
  {
    title: "375%",
    description: "Return on Investment",
  },
  {
    title: "24/7",
    description: "phone self-service access",
  },
  {
    title: "87%",
    description: "CSAT score",
  },
];

const StatsSection = () => {
  return (
    <section className="bg-[#F2F2F2] py-16 lg:py-[96px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center">
            <Image
              src={ImageOne.src}
              alt="Hero"
              width={419}
              height={376}
              className="aspect-[419/376] w-full min-w-[300px] md:min-w-[500px] lg:min-w-[419px] h-auto"
            />
            <div className="relative w-[180px] md:w-[230px] h-12 md:h-16 rounded-[8px] bg-white border border-[#5F46CF] overflow-hidden ml-[-100px]">
              {/* Light Wave */}
              {/* <div className="absolute top-[30%] md:top-[20%] left-0 flex w-[200%] animate-waveLight z-0">
                <svg viewBox="0 0 230 50" className="w-[230px] h-[52px]">
                  <path
                    d="M229.297 19.4291C229.192 19.4235 229.092 19.4068 228.987 19.4068C219.471 19.4068 219.471 42.3381 209.956 42.3381C200.44 42.3381 200.44 21.4813 190.93 21.4813C181.42 21.4813 181.415 49.1751 171.905 49.1751C162.395 49.1751 162.395 12.3021 152.885 12.3021C143.375 12.3021 143.369 42.3381 133.859 42.3381C124.35 42.3381 124.344 0.708191 114.834 0.708191C105.324 0.708191 105.324 42.3326 95.8086 42.3326C86.2931 42.3326 86.2987 14.9455 76.7887 14.9455C67.2788 14.9455 67.2788 49.1751 57.7633 49.1751C48.2478 49.1751 48.2533 7.47828 38.7434 7.47828C29.2334 7.47828 29.2334 42.3381 19.7235 42.3381C10.2136 42.3381 10.2136 13.3115 0.703613 13.3115"
                    stroke="#BFB5EC"
                    strokeWidth="1.36693"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
                <svg viewBox="0 0 230 50" className="w-[230px] h-[52px]">
                  <path
                    d="M229.297 19.4291C229.192 19.4235 229.092 19.4068 228.987 19.4068C219.471 19.4068 219.471 42.3381 209.956 42.3381C200.44 42.3381 200.44 21.4813 190.93 21.4813C181.42 21.4813 181.415 49.1751 171.905 49.1751C162.395 49.1751 162.395 12.3021 152.885 12.3021C143.375 12.3021 143.369 42.3381 133.859 42.3381C124.35 42.3381 124.344 0.708191 114.834 0.708191C105.324 0.708191 105.324 42.3326 95.8086 42.3326C86.2931 42.3326 86.2987 14.9455 76.7887 14.9455C67.2788 14.9455 67.2788 49.1751 57.7633 49.1751C48.2478 49.1751 48.2533 7.47828 38.7434 7.47828C29.2334 7.47828 29.2334 42.3381 19.7235 42.3381C10.2136 42.3381 10.2136 13.3115 0.703613 13.3115"
                    stroke="#BFB5EC"
                    strokeWidth="1.36693"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div> */}

              {/* Deep Wave */}
              {/* <div className="absolute top-[20%] left-0 flex w-[200%] animate-waveDeep z-10">
                <svg viewBox="0 0 230 52" className="w-[230px] h-[52px]">
                  <path
                    d="M0.703613 5.36174C0.808849 5.35617 0.908545 5.33944 1.01378 5.33944C10.5293 5.33944 10.5293 28.2708 20.0447 28.2708C29.5602 28.2708 29.5602 12.182 39.0702 12.182C48.5801 12.182 48.5857 35.1133 58.0956 35.1133C67.6056 35.1133 67.6055 12.182 77.1155 12.182C86.6254 12.182 86.631 50.5886 96.1409 50.5886C105.651 50.5886 105.656 0.77771 115.166 0.77771C124.676 0.77771 124.676 28.2652 134.192 28.2652C143.707 28.2652 143.702 12.1765 153.212 12.1765C162.722 12.1765 162.722 35.1078 172.237 35.1078C181.753 35.1078 181.747 7.6203 191.257 7.6203C200.767 7.6203 200.767 28.2708 210.277 28.2708C219.787 28.2708 219.787 11.3846 229.297 11.3846"
                    stroke="#5F46CF"
                    strokeWidth="1.36693"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
                <svg viewBox="0 0 230 52" className="w-[230px] h-[52px]">
                  <path
                    d="M0.703613 5.36174C0.808849 5.35617 0.908545 5.33944 1.01378 5.33944C10.5293 5.33944 10.5293 28.2708 20.0447 28.2708C29.5602 28.2708 29.5602 12.182 39.0702 12.182C48.5801 12.182 48.5857 35.1133 58.0956 35.1133C67.6056 35.1133 67.6055 12.182 77.1155 12.182C86.6254 12.182 86.631 50.5886 96.1409 50.5886C105.651 50.5886 105.656 0.77771 115.166 0.77771C124.676 0.77771 124.676 28.2652 134.192 28.2652C143.707 28.2652 143.702 12.1765 153.212 12.1765C162.722 12.1765 162.722 35.1078 172.237 35.1078C181.753 35.1078 181.747 7.6203 191.257 7.6203C200.767 7.6203 200.767 28.2708 210.277 28.2708C219.787 28.2708 219.787 11.3846 229.297 11.3846"
                    stroke="#5F46CF"
                    strokeWidth="1.36693"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div> */}
              <LottieWave />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 md:gap-7 gap-4">
            {StatsData.map((item, index) => {
              const onlyNumbers = item.title.replace(/[^0-9.]/g, "");
              const hasPercent = item.title.includes("%");
              const hasNegative = item.title.includes("-");
              const isCountable = /^\-?\d+%?$/.test(item.title);

              return (
                <div
                  key={index}
                  className="bg-[#FFFFFF] border border-[#CCCCCC] p-4 md:p-6 rounded-[8px] flex flex-col items-start md:gap-4 gap-2"
                >
                  <h3 className="text-[32px] md:text-[48px] text-[#261C53] font-Inter font-semibold md:leading-[56px] leading-[40px] tracking-[-1px]">
                    {isCountable ? (
                      <CountUp
                        end={parseFloat(onlyNumbers)}
                        duration={2}
                        prefix={hasNegative ? "-" : ""}
                        suffix={hasPercent ? "%" : ""}
                        enableScrollSpy
                        scrollSpyOnce={false}
                        scrollSpyDelay={200}
                      />
                    ) : (
                      item.title
                    )}
                  </h3>
                  <p className="text-base text-[#666666] font-Inter leading-6 max-w-[172px]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

import React, { useState, useEffect } from "react";
import Card from "../components/cards/home/Card";
import Plan from "../components/cards/pool/Plan";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card1 from "../components/cards/pool/Card1";
import Card2 from "../components/cards/pool/Card2";
import axios from "axios";
import { motion } from "framer-motion";
import KYCForm from "../components/forms/KYCForm";
import { useDispatch, useSelector } from "react-redux";
import { setPlanRate } from "../Redux/Reducer/planRateSlice";
import CardComponent from "../utils/CardDetails";
import { setDailyPoolYield } from "../Redux/Reducer/planSlice";

const settings = {
  speed: 500,
  autoplay: false,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
  customPaging: function (i) {
    return (
      <div className="w-full flex flex-row items-center justify-center">
        <div className="custom-dot border border-black dark:border-white"></div>
      </div>
    );
  },
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 1014,
      settings: {
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 770,
      settings: {
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 550,
      settings: {
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 488,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
};

function Pool() {
  const [planOneMultiplier, setPlanOneMultiplier] = useState(null);
  const [planTwoMultiplier, setPlanTwoMultiplier] = useState(null);
  const [planThreeMultiplier, setPlanThreeMultiplier] = useState(null);

  const [PlanOneDays, setPlanOneDays] = useState(null);
  const [PlanTwoDays, setPlanTwoDays] = useState(null);
  const [PlanThreeDays, setPlanThreeDays] = useState(null);
  const dispatch = useDispatch();

  const { KYC } = useSelector((state) => state.isKYCDetail);
  const card = CardComponent();
  const { REACT_APP_API_BASE_URL } = process.env;

  useEffect(() => {
    const fetchPlanOneMultiplier = async () => {
      try {
        const apiUrlOneMul = `${REACT_APP_API_BASE_URL}/planOneMultiplier`;
        const apiUrlTwoMul = `${REACT_APP_API_BASE_URL}/planTwoMultiplier`;
        const apiUrlThreeMul = `${REACT_APP_API_BASE_URL}/planThreeMultiplier`;

        // Days Url
        const apiUrlOneDays = `${REACT_APP_API_BASE_URL}/planOneDays`;
        const apiUrlTwoDays = `${REACT_APP_API_BASE_URL}/planTwoDays`;
        const apiUrlThreeDays = `${REACT_APP_API_BASE_URL}/planThreeDays`;

        // Rate
        const response_one = await axios.get(apiUrlOneMul);
        const response_Two = await axios.get(apiUrlTwoMul);
        const response_Three = await axios.get(apiUrlThreeMul);

        const Days_One_response = await axios.get(apiUrlOneDays);
        const Days_Two_response = await axios.get(apiUrlTwoDays);
        const Days_Three_response = await axios.get(apiUrlThreeDays);
        // console.log(Days_Two_response, Days_Three_response);

        const PlannOneDaysNumber = Days_One_response.data.planOneDay;
        const PlannTwoDaysNumber = Days_Two_response.data.planTwoDay;
        const PlannThreeDaysNumber = Days_Three_response.data.planThreeDay;

        const planOneMulNumber = response_one.data.planOneMul;
        const planTwoMulNumber = response_Two.data.planTwoMul;
        const planThreeMulNumber = response_Three.data.planThreeMul;

        setPlanOneMultiplier(planOneMulNumber);
        setPlanTwoMultiplier(planTwoMulNumber);
        setPlanThreeMultiplier(planThreeMulNumber);
        dispatch(
          setPlanRate({
            planOneMulNumber,
            planTwoMulNumber,
            planThreeMulNumber,
          })
        );
        dispatch(setDailyPoolYield(planOneMulNumber));

        setPlanOneDays(PlannOneDaysNumber);
        setPlanTwoDays(PlannTwoDaysNumber);
        setPlanThreeDays(PlannThreeDaysNumber);
      } catch (error) {
        console.error("Error fetching planOneMultiplier:", error);
      }
    };

    fetchPlanOneMultiplier();
  }, [REACT_APP_API_BASE_URL]);

  return (
    <>
      <div className="container mx-auto lg:py-28">
        <p className="m-auto w-[95%] md:w-full pl-2.5 md:pl-5 text-2xl md:text-3xl lg:text-5xl font-gilroy font-bold pt-24 md:pt-28 lg:pt-5 2xl:pt-16">
          Diversified Fund Pools
        </p>
        <div className="w-full mt-8 md:mt-10 lg:mt-14 xl:mt-16">
          <Slider {...settings} className="pool-slider">
            {card && card?.map((el, i) => <Card key={i} el={el} />)}
          </Slider>
        </div>

        {KYC ? (
          <div className="flex flex-col lg:flex-row py-20 2xl:py-28 ">
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full p-4 "
            >
              <Card1 />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 2 * 0.2 }}
              viewport={{ once: true }}
              className="w-full p-4 "
            >
              <Card2
                Percentage={{
                  planOneMultiplier,
                  planTwoMultiplier,
                  planThreeMultiplier,
                }}
              />
            </motion.div>
          </div>
        ) : (
          <KYCForm />
        )}

        <Plan
          Percentage={{
            planOneMultiplier,
            planTwoMultiplier,
            planThreeMultiplier,
          }}
          Days={{ PlanOneDays, PlanTwoDays, PlanThreeDays }}
        />
      </div>
    </>
  );
}

export default Pool;

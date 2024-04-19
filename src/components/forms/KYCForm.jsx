import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFormData } from "../../utils/IsCheckKYC";
import { details } from "../navigation/Navigation";

function KYCForm() {
  const dispatch = useDispatch();
  const { Address } = useSelector((state) => state?.walletDetails);
  const { REACT_APP_JOTFORM_ID } = process.env;

  useEffect(() => {
    if (Address) {
      fetchFormData(dispatch, Address);
    }
  }, [dispatch]);

  return (
    <>
      <div className="my-20 px-5 md:my-20 md:px-5 2xl:px-5">
        {Address ? (
          <iframe
            title="JotForm"
            id="jotformIframe"
            src={`https://www.jotform.com/form/${REACT_APP_JOTFORM_ID}`}
            style={{ width: "100%", height: "600px" }}
            allowFullScreen
          />
        ) : (
          <>
            <div className="border border-gray-300 dark:border-gray-700 px-4 py-6 md:px-4 md:py-8 lg:px-6 lg:py-12 xl:px-8 xl:py-16 rounded-3xl">
              <p className="text-3xl text-center font-bold md:text-4xl lg:text-5xl font-gilroy">
                Welcome to HeroVestor with{" "}
                <span
                  style={{
                    background: "linear-gradient(to right, #35cdc2, #236de7)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Yield Givers!
                </span>
              </p>
              <p className="text-lg md:text-xl lg:text-3xl font-gilroy text-left lg:text-center lg:leading-10 mt-4 lg:mt-8">
                Connect your wallet and complete your{" "}
                <span
                  className="font-bold md:text-2xl lg:text-4xl"
                  style={{
                    background: "linear-gradient(to right, #35cdc2, #236de7)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  KYC (Know Your Customer){" "}
                </span>
                form to participate in our staking program and unlock exclusive
                rewards. Your information is securely stored and used only for
                verification purposes. Let's begin your journey towards earning
                passive income and maximizing your investment potential!
              </p>
            </div>
            <div className="border mt-10 border-gray-300 dark:border-gray-700 px-4 py-6 md:px-4 md:py-8 lg:px-6 lg:py-12 xl:px-8 xl:py-8 rounded-3xl">
              {details?.map((el, i) => (
                <div key={i} className="mt-4">
                  <p className="text-2xl md:text-3xl font-gilroy font-bold">
                    {el.title}
                  </p>
                  <div className="font-gilroy mt-1 text-base md:text-lg">
                    {el.desc}
                  </div>
                </div>
              ))}
            </div>
            <div className="border mt-10 border-gray-300 dark:border-gray-700 px-4 py-6 md:px-4 md:py-8 lg:px-6 lg:py-12 xl:px-8 xl:py-10 rounded-3xl">
              <p className="text-2xl md:text-3xl font-gilroy font-bold">
                Important Disclaimer
              </p>
              <div className="font-gilroy mt-1 text-base md:text-lg">
                While we embark on this journey of financial innovation and
                compassionate investment with optimism and diligence, it's
                crucial to remember that the nature of investments involves
                inherent risks. We believe in transparency and sincerity in all
                our communications and thus wish to highlight a few important
                points:
              </div>
              <ul className="px-5 md:px-10 lg:px-16 xl:px-28 mt-4">
                <li className="list-disc text-3xl">
                  <div className="font-gilroy mt-1 text-base md:text-lg">
                    <span className="text-xl md:text-2xl font-gilroy font-bold">
                      Acknowledgment of Divine Providence :{" "}
                    </span>
                    We firmly believe that all success, including that of our
                    investments, is by the grace and will of Allah (SWT). Our
                    efforts and strategies are but means in the pursuit of
                    prosperity and charitable giving, and we place our ultimate
                    trust and reliance in Allah.{" "}
                  </div>
                </li>
                <li className="list-disc mt-4 text-3xl">
                  <div className="font-gilroy mt-1 text-base md:text-lg">
                    <span className="text-xl md:text-2xl font-gilroy font-bold">
                      Past Performance :{" "}
                    </span>
                    It is important to understand that past and current results
                    are not indicative of future returns. The landscape of
                    decentralized finance is ever-evolving, and while history
                    can offer insights, it does not guarantee future outcomes.
                  </div>
                </li>
                <li className="list-disc mt-4 text-3xl">
                  <div className="font-gilroy mt-1 text-base md:text-lg">
                    <span className="text-xl md:text-2xl font-gilroy font-bold">
                      Strategic Diligence :{" "}
                    </span>
                    Our team is committed to employing sophisticated strategies,
                    methods, and safeguards aimed at capital preservation and
                    minimizing risks. We continuously strive to adapt and
                    enhance our approaches in line with the best practices and
                    the dynamic nature of the DeFi ecosystem.
                  </div>
                </li>
                <li className="list-disc mt-4 text-3xl">
                  <div className="font-gilroy mt-1 text-base md:text-lg">
                    <span className="text-xl md:text-2xl font-gilroy font-bold">
                      Inherent Investment Risks :{" "}
                    </span>
                    Despite our exhaustive precautions and the innovative
                    mechanisms of DeFi designed to mitigate risks, it is vital
                    for investors to recognize that all investments carry the
                    potential for loss. The decentralized finance environment,
                    while offering unprecedented opportunities, also comes with
                    its unique set of risks.
                  </div>
                </li>
                <li className="list-disc mt-4 text-3xl">
                  <div className="font-gilroy mt-1 text-base md:text-lg">
                    <span className="text-xl md:text-2xl font-gilroy font-bold">
                      Personal Due Diligence :{" "}
                    </span>
                    We encourage all our investors to conduct their own research
                    and consider their financial situation, goals, and risk
                    tolerance before investing. It is essential to understand
                    the specifics of DeFi investments and to approach them with
                    mindfulness and responsibility.
                  </div>
                </li>
              </ul>
              <div className="font-gilroy mt-5 text-base md:text-lg">
                By joining our mission, you become part of a collective endeavor
                that seeks not only financial growth but also the betterment of
                communities worldwide. We move forward with faith, integrity,
                and the shared goal of creating a positive impact, bearing in
                mind the balance between worldly pursuits and spiritual
                accountability.
              </div>
              <div className="font-gilroy mt-5 text-base md:text-lg">
                Let us navigate this path with wisdom, gratitude, and a
                steadfast trust in Allah’s plan, embracing the opportunities He
                provides to make a meaningful difference in the world.
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default memo(KYCForm);

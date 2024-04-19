import { useSelector } from "react-redux";

const CardComponent = () => {
  const { plan_One_Rate, plan_Two_Rate, plan_Three_Rate } = useSelector(
    (state) => state.planRate
  );

  const Current_Annual_Yield_Plan_One = plan_One_Rate * 365;
  const Current_Annual_Yield_Plan_Two = plan_Two_Rate * 365;
  const Current_Annual_Yield_Plan_Three = plan_Three_Rate * 365;

  const card = [
    {
      id: 1,
      title: "Liquidity Mining",
      Total_Profit: "397.53 %",
      Active_Days: "90",
      graph: "",
      AUM: Current_Annual_Yield_Plan_One,
      AUM_Eth: "$51,415.00",
      daily_Pool_Yield: plan_One_Rate,
      title_wlc:
        "As salam wa alaykum wa rahmatullahi wa barakatuh respected Brothers and Sisters,",
      desc1:
        "At Yield Givers, our mission resonates deeply with the divine potential Allah has destined for each of us. We embrace every opportunity to educate and elevate, sharing knowledge that empowers and enriches. Today, we delve into the world of Liquidity Mining, illuminating its process and ensuring its alignment with Halal investment principles:",
      desc2:
        "Liquidity mining is a cornerstone of decentralized finance (DeFi), where liquidity providers (LPs) add their crypto assets to liquidity pools, receiving rewards typically as additional tokens. This mechanism is pivotal for DeFi platforms to enable trading beyond traditional exchanges.",
      desc3:
        "For our Halal-conscious investors, it's crucial to understand the Shariah-compliant aspects of liquidity mining as we navigate the promising avenues of Web 3.0 to secure beneficial, high-yield returns. Here’s how we approach this innovative field with Islamic Finance principles in mind:",
      t1: "1) Avoidance of Riba (Interest):",
      avoidance:
        "True to the principles of Islamic finance, riba is strictly prohibited. In liquidity mining, the rewards are not interest but a rightful share of the transaction fees accrued, based on the smart contract conditions. However, some platforms engage in non-permissible activities such as derivatives trading. At Yield Givers, we meticulously ensure that our platforms steer clear of Lending Fees, Derivatives, or any form of gambling.",
      t2: "2) Minimizing Gharar (Speculative Practices):",
      gharar:
        "Excessive uncertainty or speculation contradicts Islamic finance principles. Given the volatile nature of many tokens, we focus on Stable Coins tied to stable currencies like the US Dollar or the EURO, safeguarding our commitment to capital preservation and avoiding significant price risks.",
      t3: "3) Selecting Halal Tokens:",
      halal:
        "We rigorously vet tokens to ensure they do not represent or engage in haram activities. Our selection is confined to tokens embodying halal businesses, adhering strictly to both Islamic Finance and ethical standards.",
      t4: "4) Transparency and Fairness:",
      transparency:
        "Every transaction within our platform upholds the highest transparency and fairness standards, offering clear insights into transaction costs, reward mechanisms, and associated risks. Yield Givers prioritizes public blockchains renowned for their transparency, allowing thorough due diligence and risk assessment.",
      t5: "5) Profit and Loss Sharing:",
      profit:
        "Reflecting the Islamic finance tenet of shared risk, liquidity mining’s inherent risks like impermanent loss align naturally with our principles, emphasizing a collective sharing of outcomes.",
      extra_portion: "",
      last_portion:
        "Join us in our noble quest to support humanitarian efforts, enhance Islamic education, and reinforce mosques worldwide. Should you have inquiries or need further clarification, feel free to reach out through our Chatbot or connect with us on Telegram.",
      last_title:
        "Together, let’s embark on a journey of growth, guided by faith and fortified by righteous investing.",
    },
    {
      id: 2,
      title: "DeFi Arbitrage",
      Total_Profit: "197.97 %",
      Active_Days: "327",
      graph: "",
      AUM: Current_Annual_Yield_Plan_Two,
      AUM_Eth: "$96,244.00",
      daily_Pool_Yield: plan_Two_Rate,
      title_wlc:
        "As salam wa alaykum wa rahmatullahi wa barakatuh respected Brothers and Sisters,",
      desc1:
        "At Yield Givers, we're committed to expanding the realms of potential that Allah has bestowed upon us while enhancing our community's financial empowerment through knowledge, sound financial practices, rigid checksums, and ethical investing. Let's explore the intriguing world of DeFi Arbitrage Trading Bots, clarifying their function and confirming their compliance with Halal investment standards:",
      desc2:
        "DeFi Arbitrage Trading Bots automate the process of buying and selling assets across different decentralized cryptocurrency exchanges to capitalize on price discrepancies. This advanced technology supports efficient market pricing and operations and provides reliably high returns, especially during volatile digital market movements that happen all year.",
      desc3:
        "As we harness the innovations within Web 3.0, we emphasizeHalal-conscious decision-making while helping you to understand how DeFi arbitrage aligns with Islamic finance principles:",
      t1: "1) Prohibition of Riba (Interest):",
      avoidance:
        "DeFi arbitrage operates on the principle of profit from trades, which is permissible in Islam. Unlike interest, profits from arbitrage come from trading activities that involve permissible risk and effort, and not from the mere passage of time or lending of money.",
      t2: "2) Avoiding Gharar (Excessive Uncertainty):",
      gharar:
        "While some degree of uncertainty is inherent in trading, our bots are designed to minimize this by only engaging in transactions with clear, immediate price discrepancies, thus reducing speculative practices considered Gharar. The true beauty of DeFi arbitrage is that we can keep all our assets in StableCoins while not trading. This is a huge benefit over triangular arbitrage where money has to be held in a finite amount of CryptoCurrencies regardless of how often the bots trade them.",
      t3: "3) Ethically Aligned Investments:",
      halal:
        "We screen every cryptocurrency for any haram activities before white-listing the use of that digital asset for use in the bot. This ensures that the assets being traded and the trading strategies involved are Shariah-compliant. Our bots do not trade in tokens associated with haram activities like Lending, Derivatives, or gambling, strictly adhering to the ethical guidelines of Islamic finance.",
      t4: "4) Transparency and Fairness:",
      transparency:
        "Each transaction is executed with full transparency and under the fair trading conditions. Our platforms use public blockchains, which provide immutable transaction records, ensuring that all activities are transparent and traceable. Furthermore, we don't use any MEV bots which are prevalent in the DeFi trading bot arena. They are responsible for Billions of Dollars stolen while processing transactions in the blocks each year.",
      t5: "5) Shared Risk and Reward:",
      profit:
        "Consistent with Islamic finance, the risk in arbitrage trading is shared and does not guarantee a fixed return. The trading bots operate under conditions of profit and loss sharing, which is a key principle in Halal investing.",
      extra_portion:
        "We invite you to join us in this innovative venture that not only aims to provide financial growth but also contributes to charitable causes, reinforcing our mosques, and supporting Islamic education globally. Should you have any questions or require further details, please reach out through our Chatbot or connect with us on Telegram.",
      last_portion:
        "Together, let's navigate this path, grounded in faith and committed to ethical prosperity.",
      last_title:
        "May Allah bless our endeavors and guide us to righteous and prosperous investing.",
    },
    {
      id: 3,
      title: "DeFi Stablecoin Trading",
      Total_Profit: "54.17 %",
      Active_Days: "115",
      graph: "",
      AUM: Current_Annual_Yield_Plan_Three,
      AUM_Eth: "$472.00",
      daily_Pool_Yield: plan_Three_Rate,
      title_wlc:
        "As salam wa alaykum wa rahmatullahi wa barakatuh respected Brothers and Sisters,",
      desc1:
        "At Yield Givers, we continually strive to harness the potential Allah has bestowed upon us, enhancing the prosperity of our community through informed and ethical investing. Today, we delve into the dynamic realm of Decentralized Stablecoin Trading Bots, offering insights into their operations and ensuring they align with Halal investment principles:",
      desc2:
        "Decentralized Stablecoin Trading Bots operate on blockchain networks, automating the trading of stablecoins—cryptocurrencies pegged to stable assets like the US Dollar or gold—across decentralized exchanges (DEXs). These bots utilize smart contracts to execute trades directly on the blockchain, promoting enhanced transparency and security in trading activities.",
      desc3:
        "In leveraging the advancements within the blockchain and DeFi (Decentralized Finance) spaces, we love to educate Halal-conscious investors from our experience so you know how these bots align with Islamic finance principles:",
      t1: "1) Prohibition of Riba (Interest):",
      avoidance:
        "These bots facilitate profit through legitimate trading, not through interest. By actively buying and selling stablecoins, the profits generated adhere to the Islamic principle of earning through permissible trading efforts, not riba.",
      t2: "2) Avoidance of Gharar (Excessive Uncertainty):",
      gharar:
        "Focusing on stablecoins minimizes the volatility and uncertainty typically associated with other cryptocurrencies. This adherence to more predictable assets helps align our trading practices with Islamic finance by significantly reducing speculative risks.",
      t3: "3) Ethically Aligned Trading Practices:",
      halal:
        "We ensure that all trading activities conducted by our bots are ethical and Shariah-compliant. The stablecoins are carefully vetted to ensure they are not linked to haram activities or industries contrary to Islamic values.",
      t4: "4) Transparency and Fairness:",
      transparency:
        "Operating on decentralized platforms, our trading bots ensure a high level of transparency. All transactions are recorded on the blockchain, accessible in real-time, ensuring that operations are conducted fairly and transparently.",
      t5: "5) Shared Risk and Reward:",
      profit:
        "In line with Islamic finance principles, the operation of our Decentralized Stablecoin Trading Bots involves shared risk and reward. Returns are based on the actual trading performance, and there are no guaranteed profits, reflecting the Islamic finance principle of sharing in the profits and losses.",
      extra_portion:
        "We invite you to join us in embracing this cutting-edge investment method, which not only aims to provide financial returns but also supports our broader mission of contributing to charitable causes, strengthening our mosques, and advancing Islamic education globally. Should you have any inquiries or need additional information, please reach out via our Chatbot, complete our contact request form, or connect with us on Telegram.",
      last_portion:
        "Together, let us embark on this journey of innovative investment, guided by faith and dedicated to integrity and righteousness in our financial pursuits.",
      last_title:
        "May Allah guide us to prosperous and righteous paths in all our endeavors. ",
    },
  ];

  return card;
};

export default CardComponent;

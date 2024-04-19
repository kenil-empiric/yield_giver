import { memo, useState } from "react";
import { FaEthereum } from "react-icons/fa6";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import Filter from "../../../utils/Filter";
import { motion } from "framer-motion";

function CardPart({ data }) {
  const [filterData, setFilterData] = useState(data);
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [paginate, setPaginate] = useState(5);

  const handleIncPaginate = () => {
    setPaginate(paginate + 5);
  };

  const handleDecPaginate = () => {
    setPaginate(5);
  };

  return (
    <>
      <div className="w-max-[95%] mt-auto p-4">
        <div>
          <Filter
            data={data}
            filterData={filterData}
            setFilterData={setFilterData}
            setSortOrder={setSortOrder}
            sortOrder={sortOrder}
            setSortField={setSortField}
            sortField={sortField}
          />
        </div>
        <div className="w-full mt-4 flex flex-col gap-5">
          {filterData &&
            filterData?.slice(0, paginate)?.map((el, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-3 gap-0 border-2 border-blue-500 dark:border-gray-500 p-3 rounded-xl">
                  <div className="grid grid-cols-subgrid col-span-2">
                    <div className="">
                      <div className="border-blue-600 text-xl font-gilroy font-medium pr-1 leading-6 flex items-center gap-1">
                        {el.name}
                        <span>
                          <FaRegArrowAltCircleUp className="text-green-500" />
                        </span>
                      </div>
                      <div className="border-blue-600 font-gilroy mt-2 text-xl flex items-center gap-0">
                        AUM
                        <span className="text-lg flex items-center gap-0">
                          <FaEthereum />
                          {el.aum}
                        </span>
                        <button
                          type="button"
                          className="text-black items-center dark:text-[#ffffff] ml-1 border border-black dark:border-white font-gilroy mt-1 bg-none font-normal rounded-lg text-xs py-1 px-1 inline-flex justify-center text-center"
                        >
                          ${" "}
                          <span className="text-sm font-gilroy">55,20.00</span>
                        </button>
                      </div>
                      <div className="border-blue-600 mt-2 text-xl font-gilroy">
                        Days Active
                        <span className="ml-2 text-lg font-gilroy">
                          {el.active}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center flex items-center justify-center border-l border-gray-400 pl-2">
                    <div className="grid gap-2">
                      <div className="grid grid-cols-2">
                        <div className="border-blue-600 text-xl font-gilroy">
                          7d%:
                        </div>
                        <div className="border-blue-600 text-lg font-gilroy">
                          {el.week}
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="border-blue-600 text-xl font-gilroy">
                          24h:
                        </div>
                        <div className="border-blue-600 text-lg font-gilroy">
                          {el.day}
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="border-blue-600 text-xl font-gilroy">
                          Total:
                        </div>
                        <div className="border-blue-600 text-lg font-gilroy">
                          {el.total}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
        <div>
          {paginate <= filterData.length ? (
            <button
              type="button"
              className="text-white w-full cursor-pointer font-gilroy mt-2 bg-gradient-to-r from-blue-600 to-teal-400 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-xl md:text-xl lg:text-2xl px-5 py-2.5 inline-flex justify-center text-center"
              onClick={handleIncPaginate}
            >
              Load More
            </button>
          ) : (
            <button
              type="button"
              className="text-white w-full cursor-pointer font-gilroy mt-2 bg-gradient-to-r from-blue-600 to-teal-400 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-xl md:text-xl lg:text-2xl px-5 py-2.5 inline-flex justify-center text-center"
              onClick={handleDecPaginate}
            >
              Load Less
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default memo(CardPart);

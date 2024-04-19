import React, { useEffect, useState } from "react";
import { MdFilterList } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Filter({
  data,
  filterData,
  setFilterData,
  sortOrder,
  setSortOrder,
  setSortField,
  sortField,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let filteredData = data;

    if (search) {
      filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    // Sorting based on sortField and sortOrder
    filteredData = filteredData.sort((a, b) => {
      const valueA = a[sortField];
      const valueB = b[sortField];

      if (sortOrder === "asc") {
        return valueA - valueB;
      } else {
        return valueB - valueA;
      }
    });

    setFilterData(filteredData);
  }, [search, data, setFilterData, sortField, sortOrder]);

  const handleSortFieldChange = (field) => {
    setSortField(field);
  };

  const handleSortOrderChange = (order) => {
    setSortOrder(order);
  };

  const handleNavigate = () => {
    return navigate("/pool/create");
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <button
            type="button"
            className="text-white w-full font-gilroy mt-2 bg-gradient-to-r from-blue-600 to-teal-400 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-xl text-base px-4 py-2 inline-flex justify-center text-center"
            onClick={handleNavigate}
          >
            Create Pool
          </button>
        </div>
        <div className="flex items-center justify-center p-4 relative">
          <button
            onClick={toggleDropdown}
            id="dropdownDefault"
            data-dropdown-toggle="dropdown"
            className="focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-[#ffffff] text-sm px-2 py-1 text-center inline-flex items-center bg-blue-700 hover:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-primary-800"
            type="button"
          >
            <MdFilterList className="text-3xl" />
          </button>
          {/* <!-- Dropdown menu --> */}
          <div
            id="dropdown"
            className={`z-10 ${
              isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            } absolute top-20 right-0 w-60 p-3 rounded-lg text-[#ffffff] shadow dark:bg-black bg-black transition-opacity ease-in-out duration-300`}
          >
            <form>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-900"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-2 dark:text-[#ffffff] text-black ps-10 text-sm border-2 border-blue-600 dark:border-blue-300  outline-none rounded-xl bg-none dark:bg-[#001450]"
                  placeholder="Search Pool"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  required
                />
              </div>
            </form>
            <div className="flex items-center mt-2">
              <input
                id="msi"
                type="checkbox"
                defaultChecked
                className="w-4 h-4 mt-0 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />

              <label
                htmlFor="msi"
                className="ml-2 text-base font-medium text-[#ffffff]"
              >
                Show Empty Pools
              </label>
            </div>
            <h6 className="my-1 text-xl font-medium text-[#ffffff]">Sort By</h6>
            <ul
              className="space-y-2 text-sm flex justify-between items-center"
              aria-labelledby="dropdownDefault"
            >
              <div className="flex flex-col gap-1">
                <li className="flex items-center">
                  <input
                    id="default-radio-1"
                    type="radio"
                    name="default-radio"
                    checked={sortField === "name" && sortOrder === "asc"}
                    onChange={() => {
                      handleSortFieldChange("name");
                      handleSortOrderChange("asc");
                    }}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ml-2 text-base font-medium text-[#ffffff]"
                  >
                    Name
                  </label>
                </li>

                <li className="flex items-center">
                  <input
                    id="default-radio-2"
                    type="radio"
                    name="default-radio"
                    checked={sortField === "aum" && sortOrder === "asc"}
                    onChange={() => {
                      handleSortFieldChange("aum");
                      handleSortOrderChange("asc");
                    }}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-radio-2"
                    className="ml-2 text-base font-medium text-[#ffffff]"
                  >
                    AUM
                  </label>
                </li>

                <li className="flex items-center">
                  <input
                    id="default-radio-3"
                    type="radio"
                    name="default-radio"
                    checked={sortField === "name" && sortOrder === "asc"}
                    onChange={() => {
                      handleSortFieldChange("name");
                      handleSortOrderChange("asc");
                    }}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />

                  <label
                    htmlFor="default-radio-3"
                    className="ml-2 text-base font-medium text-[#ffffff]"
                  >
                    24%
                  </label>
                </li>
              </div>
              <div className="flex flex-col gap-1">
                <li className="flex items-center">
                  <input
                    id="default-radio-4"
                    type="radio"
                    name="default-radio"
                    checked={sortField === "name" && sortOrder === "asc"}
                    onChange={() => {
                      handleSortFieldChange("name");
                      handleSortOrderChange("asc");
                    }}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />

                  <label
                    htmlFor="default-radio-4"
                    className="ml-2 text-base font-medium text-[#ffffff]"
                  >
                    7d%
                  </label>
                </li>

                <li className="flex items-center">
                  <input
                    id="default-radio-5"
                    type="radio"
                    name="default-radio"
                    checked={sortField === "name" && sortOrder === "asc"}
                    onChange={() => {
                      handleSortFieldChange("name");
                      handleSortOrderChange("asc");
                    }}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />

                  <label
                    htmlFor="default-radio-5"
                    className="ml-2 text-base font-medium text-[#ffffff]"
                  >
                    Total%
                  </label>
                </li>

                <li className="flex items-center">
                  <input
                    id="default-radio-6"
                    type="radio"
                    name="default-radio"
                    checked={sortField === "name" && sortOrder === "asc"}
                    onChange={() => {
                      handleSortFieldChange("name");
                      handleSortOrderChange("asc");
                    }}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />

                  <label
                    htmlFor="default-radio-6"
                    className="ml-2 text-base font-medium text-[#ffffff]"
                  >
                    Days Active
                  </label>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;

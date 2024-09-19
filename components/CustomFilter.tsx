// "use client";

// import { Fragment, useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { Listbox, Transition } from "@headlessui/react";

// import { CustomFilterProps } from "@/types";
// import { updateSearchParams } from "@/utils";

// // Ensure options is an array and has a default value of an empty array if not passed
// export default function CustomFilter({ title, options = [] }: CustomFilterProps) {
//   const router = useRouter();
  
//   // Default state for selected option, safely initializes with first option if available
//   const [selected, setSelected] = useState(options.length > 0 ? options[0] : { title: "No options", value: "" });

//   // Update the URL search parameters and navigate to the new URL
//   const handleUpdateParams = (e: { title: string; value: string }) => {
//     const newPathName = updateSearchParams(title, e.value.toLowerCase());
//     router.push(newPathName);
//   };

//   return (
//     <div className="w-fit">
//       <Listbox
//         value={selected}
//         onChange={(e) => {
//           setSelected(e); // Update the selected option in state
//           handleUpdateParams(e); // Update the URL search parameters and navigate to the new URL
//         }}
//       >
//         <div className="relative w-fit z-10">
//           {/* Button for the listbox */}
//           <Listbox.Button className="custom-filter__btn">
//             <span className="block truncate">{selected.title}</span>
//             <Image src="/chevron-up-down.svg" width={20} height={20} className="ml-4 object-contain" alt="chevron_up-down" />
//           </Listbox.Button>

//           {/* Transition for displaying the options */}
//           <Transition
//             as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
//             leave="transition ease-in duration-100"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <Listbox.Options className="custom-filter__options">
//               {/* Check if `options` is an array */}
//               {Array.isArray(options) && options.length > 0 ? (
//                 options.map((option) => (
//                   <Listbox.Option
//                     key={option.title}
//                     className={({ active }) =>
//                       `relative cursor-default select-none py-2 px-4 ${
//                         active ? "bg-primary-blue text-white" : "text-gray-900"
//                       }`
//                     }
//                     value={option}
//                   >
//                     {({ selected }) => (
//                       <>
//                         <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
//                           {option.title}
//                         </span>
//                       </>
//                     )}
//                   </Listbox.Option>
//                 ))
//               ) : (
//                 <div className="p-2 text-gray-500">No options available</div> // Handle empty options array
//               )}
//             </Listbox.Options>
//           </Transition>
//         </div>
//       </Listbox>
//     </div>
//   );
// }

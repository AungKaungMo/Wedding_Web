// import { Input } from "./ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Textarea } from "./ui/textarea";
// import img from "@/assets/images/wedding-3.jpg";
// import { SelectedPage } from "@/types";
// import { motion } from "framer-motion";
// import { FormEvent, useState } from "react";
// import { getDatabase, ref, set, push } from "firebase/database";
// import app from "@/firebaseConfig";
// import LoadingCircle from "./Loading";

// type propsType = {
//   setSelectedPage: (value: SelectedPage) => void;
// };

// type FormType = {
//   name: string;
//   phone: number | null;
//   email: string;
//   guest: number;
//   message: string;
// };

// const RSVP = ({ setSelectedPage }: propsType) => {
//   const guests = [1, 2, 3, 4, 5, 6, 7, 8];

//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState<FormType>({
//     name: "",
//     phone: null,
//     email: "",
//     guest: 1,
//     message: "",
//   });

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     let alertMessage = "";

//     Object.values(formData).forEach((data, index) => {
//       const key = Object.keys(formData)[index];

//       if (!data && key !== "phone" && key !== "email") {
//         if (alertMessage) {
//           alertMessage += " , " + Object.keys(formData)[index];
//         } else {
//           alertMessage += Object.keys(formData)[index];
//         }
//       }
//     });

//     if (alertMessage) {
//       alert("Please fill this input " + alertMessage);
//       return;
//     }

//     setLoading(true);
//     const db = getDatabase(app);
//     const newDocRef = push(ref(db, "wedding/rsvp"));
//     set(newDocRef, {
//       name: formData.name,
//       email: formData.email,
//       phone: formData.phone,
//       guest: formData.guest,
//       message: formData.message,
//     })
//       .then(() => {
//         alert("Reservation completed.");
//         setFormData({
//           name: "",
//           phone: null,
//           email: "",
//           guest: 1,
//           message: "",
//         });
//         setLoading(false);
//       })
//       .catch(() => {
//         alert("Something went wrong.");
//         setLoading(false);
//       });
//   };

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleGuestChange = (value: string) => {
//     setFormData((prev) => ({
//       ...prev,
//       guest: Number(value), // Convert string to number
//     }));
//   };

//   return (
//     <motion.div
//       onViewportEnter={() => setSelectedPage(SelectedPage.RSVP)}
//       id="rsvp"
//       className="relative w-full min-h-screen py-20"
//     >

//        <div className="absolute inset-0 z-0">
//          <img
//            src={img}
//            alt="Wedding background"
//            className="object-cover w-full h-full"
//          />
//          <div className="absolute inset-0 bg-black opacity-50"></div>
//        </div>

//       {/* <div className="w-full min-h-screen relative"> */}
//         {/* <img src={img} alt="te" className="w-full h-full object-cover" />
//         <div className="absolute inset-0 bg-black opacity-50"></div> */}

//         <div className="border  border-gray-400 xl:w-5/12 lg:w-7/12 md:w-8/12 sm:w-9/12 w-11/12  sm:top-12 top-1/2 sm:translate-y-0 -translate-y-1/2 sm:pb-12 pb-8 mx-auto sm:p-5 left-0 right-0 absolute rounded-t-[500px]">
//           <h4 className="text-center  text-white sm:text-3xl text-2xl cormorant mt-12 font-semibold">
//             JOIN WITH US
//           </h4>
//           <p className="sm:mt-16 mt-3 text-white text-center sm:text-2xl text-xl cormorant">
//             Please reply latest by Nov 10th, 2024
//           </p>

//           <form className="w-10/12 mx-auto" onSubmit={handleSubmit}>
//             <div className="sm:mt-16 mt-5 flex sm:flex-row flex-col sm:gap-8 gap-4">
//               <Input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//               />
//               <Input
//                 type="number"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone || ""}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="sm:mt-8 mt-4">
//               <Input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email (Optional)"
//                 value={formData.email}
//                 onChange={handleInputChange}
//               />
//             </div>

//             <div className="sm:mt-8 mt-4 cormorant font-semibold">
//               <Select
//                 value={formData.guest?.toString()}
//                 onValueChange={handleGuestChange}
//               >
//                 <SelectTrigger className="w-[180px]">
//                   <SelectValue placeholder="Guest" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {guests.map((guest) => (
//                     <SelectItem value={guest.toString()} key={guest}>
//                       {guest} Guest{guest > 1 ? "s" : ""}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>

//             <div className="sm:mt-8 mt-4">
//               <Textarea
//                 name="message"
//                 className="h-48"
//                 placeholder="Type your message here."
//                 value={formData.message}
//                 onChange={handleInputChange}
//               />
//             </div>

//             <div className="sm:mt-8 mt-4">
//               <button
//                 disabled={loading}
//                 className="flex gap-4 items-center justify-center p-3 rounded-md w-full font-semibold cormorant text-lg bg-black text-white hover:bg-transparent border border-black transition-all duration-150"
//               >
//                 {loading ? (
//                   <LoadingCircle className="text-xl"/>
//                 ) : (
//                   <p>RESERVATION NOW</p>
//                 )}
//               </button>
//             </div>
//           </form>
//         </div>
//       {/* </div> */}
//     </motion.div>
//   );
// };

// export default RSVP;


import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { SelectedPage } from "@/types"
import { motion } from "framer-motion"
import { FormEvent, useState } from "react"
import { getDatabase, ref, set, push } from "firebase/database"
import app from "@/firebaseConfig"
import LoadingCircle from "./Loading"
import img from "@/assets/images/wedding-3.jpg";

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

type FormData = {
  name: string
  phone: string | null
  email: string
  guest: number
  message: string
}

export default function RSVP({ setSelectedPage }: Props) {
  const guests = [1, 2, 3, 4, 5, 6, 7, 8]

  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: null,
    email: "",
    guest: 1,
    message: "",
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let alertMessage = "";

    Object.values(formData).forEach((data, index) => {
      const key = Object.keys(formData)[index];

      if (!data && key !== "phone" && key !== "email") {
        if (alertMessage) {
          alertMessage += " , " + Object.keys(formData)[index];
        } else {
          alertMessage += Object.keys(formData)[index];
        }
      }
    });

    if (alertMessage) {
      alert("Please fill this input " + alertMessage);
      return;
    }

    setLoading(true)
    const db = getDatabase(app)
    const newDocRef = push(ref(db, "wedding/rsvp"))
    set(newDocRef, formData)
      .then(() => {
        alert("Reservation completed.")
        setFormData({
          name: "",
          phone: "",
          email: "",
          guest: 1,
          message: "",
        })
      })
      .catch(() => {
        alert("Something went wrong.")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleGuestChange = (value: string) => {
    setFormData(prev => ({ ...prev, guest: Number(value) }))
  }

  return (
    <motion.section
      id="rsvp"
      className="relative w-full min-h-screen py-20"
      onViewportEnter={() => setSelectedPage(SelectedPage.RSVP)}
    >
      <div className="absolute inset-0 z-0">
        <img
          src={img}
          alt="Wedding background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center  px-4 py-12 sm:px-6 lg:px-8">
        <div className="border  border-gray-400  rounded-t-[500px] xl:w-5/12 lg:w-7/12 md:w-8/12 sm:w-9/12 w-11/12 pb-8 space-y-14 2xl:px-20 md:px-14 px-8 pt-16 shadow-xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Join Us
            </h2>
            <p className="mt-4 text-lg text-white">
              Please reply by Nov 10th, 2024
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="sr-only">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone || ""}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Your Email (Optional)
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email (Optional)"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className=" cormorant">
              <Select
                value={formData.guest.toString()}
                onValueChange={handleGuestChange}
              >
                <SelectTrigger id="guest" className="w-full">
                  <SelectValue placeholder="Select number of guests" />
                </SelectTrigger>
                <SelectContent>
                  {guests.map((guest) => (
                    <SelectItem key={guest} value={guest.toString()}>
                      {guest} Guest{guest > 1 ? "s" : ""}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center w-full px-4 py-3 text-lg font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                {loading ? (
                  <LoadingCircle className="w-5 h-5 text-white" />
                ) : (
                  "Reserve Now"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  )
}
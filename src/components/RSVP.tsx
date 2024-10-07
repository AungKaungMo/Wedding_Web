import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "./ui/textarea";
import img from "@/assets/images/wedding-3.jpg";
import { SelectedPage } from "@/types";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { getDatabase, ref, set, push } from "firebase/database";
import app from "@/firebaseConfig";
import LoadingCircle from "./Loading";

type propsType = {
  setSelectedPage: (value: SelectedPage) => void;
};

type FormType = {
  name: string;
  phone: number | null;
  email: string;
  guest: number;
  message: string;
};

const RSVP = ({ setSelectedPage }: propsType) => {
  const guests = [1, 2, 3, 4, 5, 6, 7, 8];

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormType>({
    name: "",
    phone: null,
    email: "",
    guest: 1,
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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

    setLoading(true);
    const db = getDatabase(app);
    const newDocRef = push(ref(db, "wedding/rsvp"));
    set(newDocRef, {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      guest: formData.guest,
      message: formData.message,
    })
      .then(() => {
        alert("Reservation completed.");
        setFormData({
          name: "",
          phone: null,
          email: "",
          guest: 1,
          message: "",
        });
        setLoading(false);
      })
      .catch(() => {
        alert("Something went wrong.");
        setLoading(false);
      });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGuestChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      guest: Number(value), // Convert string to number
    }));
  };

  return (
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.RSVP)}
      id="rsvp"
    >
      <div className="w-full mt-20 sm:h-[100vh] h-[120vh]  relative">
        <img src={img} alt="te" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="border  border-gray-400 xl:w-5/12 lg:w-7/12 md:w-8/12 sm:w-9/12 w-11/12  sm:top-12 top-1/2 sm:translate-y-0 -translate-y-1/2 sm:pb-12 pb-8 mx-auto sm:p-5 left-0 right-0 absolute rounded-t-[500px]">
          <h4 className="text-center  text-white sm:text-3xl text-2xl cormorant mt-12 font-semibold">
            JOIN WITH US
          </h4>
          <p className="sm:mt-16 mt-3 text-white text-center sm:text-2xl text-xl cormorant">
            Please reply latest by April 26th, 2024
          </p>

          <form className="w-10/12 mx-auto" onSubmit={handleSubmit}>
            <div className="sm:mt-16 mt-5 flex sm:flex-row flex-col sm:gap-8 gap-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <Input
                type="number"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="sm:mt-8 mt-4">
              <Input
                type="email"
                name="email"
                placeholder="Your Email (Optional)"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="sm:mt-8 mt-4 cormorant font-semibold">
              <Select
                value={formData.guest?.toString()}
                onValueChange={handleGuestChange}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Guest" />
                </SelectTrigger>
                <SelectContent>
                  {guests.map((guest) => (
                    <SelectItem value={guest.toString()} key={guest}>
                      {guest} Guest{guest > 1 ? "s" : ""}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="sm:mt-8 mt-4">
              <Textarea
                name="message"
                className="h-48"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>

            <div className="sm:mt-8 mt-4">
              <button
                disabled={loading}
                className="flex gap-4 items-center justify-center p-3 rounded-md w-full font-semibold cormorant text-lg bg-black text-white hover:bg-transparent border border-black transition-all duration-150"
              >
                {loading ? (
                  <LoadingCircle className="text-xl"/>
                ) : (
                  <p>RESERVATION NOW</p>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default RSVP;

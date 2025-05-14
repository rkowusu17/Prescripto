import React, { use, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import { assets } from "./assets/assets_frontend/assets";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    // console.log(docInfo);
  };
  const fetchAvailableSlots = async () => {
    setDocSlots([]);

    //Getting the current date
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      //getting the current date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i); // Updating the date to the next days [7-days max]

      //Setting end time of the date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      //Setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }
      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        //Add slot to array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        //Incrementing the time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    fetchAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);
  return (
    docInfo && (
      <div>
        {/* ----Doctor details---- */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              src={docInfo.image}
              alt="doctor-image"
              className="bg-primary w-full sm:max-w-72 rounded-lg"
            />
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[60px] sm:mt-0">
            {/* ----Doctor information ---- */}
            <p
              className="flex items-center gap-2 text-2xl font-medium text-gray-900
            "
            >
              {docInfo.name}
              <img
                className="w-5"
                src={assets.verified_icon}
                alt="verified-icon"
              />
            </p>
            <div className="flex items-center gap-2 text-sm mt-2 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-1 px-4 text-xs rounded-full border border-gray-700">
                {docInfo.experience}
              </button>
            </div>

            {/* ----- About Doctor ----- */}
            <div className="flex flex-col items-start gap-2 text-sm font-medium text-gray-900 mt-4">
              <p className="text-sm text-gray-700 max-w-[45rem]">
                About
                <img src={assets.info_icon} alt="info-icon" />
              </p>
              <p>{docInfo.about}</p>
            </div>
            <p className="text-gray-500 font-medium mt-4">
              Appointment fee:{" "}
              <span className="text-gray-900">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default Appointment;

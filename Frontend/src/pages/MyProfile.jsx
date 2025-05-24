import React, { use, useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "edwardsvin23@gmail.com",
    phone: "+233 555 555 555",
    address: {
      line1: "543 Achiaman Main St",
      line2: "Achiaman , Accra",
    },
    gender: "Male",
    DOB: "1990-01-01",
  });
  const [editMode, setEditMode] = useState(false);
  return (
    // Start container
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      {/* Profile photo */}
      <img className="w-36 rounded" src={userData.image} alt="user-image" />
      {editMode ? (
        <input
          className="bg-gray-200  text-2xl font-medium max-w-60 mt-4 border-2 border-gray-600 mb-3"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-2">
          {userData.name}
        </p>
      )}
      <hr className="bg-zinc-400 h-[2px] w-11/12 border-none" />
      <div>
        <p className="uppercase text-neutral-500 underline mt-2 ">
          Contact Information
        </p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3">
          <p className="font-medium">Email id:</p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium">Phone:</p>
          {editMode ? (
            <input
              className="bg-gray-200 border-2 border-gray-600 max-w-56"
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-400">{userData.phone}</p>
          )}
          <p className="font-medium">Address:</p>
          {editMode ? (
            <p className="flex flex-col">
              <input
                className="bg-gray-200 border-2 border-gray-600 max-w-56"
                value={userData.address.line1}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                type="text"
              />
              <br />
              <input
                className="bg-gray-200 border-2 border-gray-600 max-w-56"
                type="text"
                value={userData.address.line2}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
              />
            </p>
          ) : (
            <p className="text-gray-500">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}

          {/* <p>{userData.address}</p> */}
        </div>
      </div>

      <hr className="bg-zinc-400 h-[2px] w-11/12 border-none" />

      <div>
        <p className="uppercase text-neutral-500 underline mt-2">
          Basic Information
        </p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 text-neutral-700">
          <p className="font-medium">Gender: </p>
          {editMode ? (
            <select
              className="bg-gray-200 border-2 border-gray-600 max-w-56"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender}</p>
          )}
          <p className="font-medium">Date of Birth:</p>
          {editMode ? (
            <input
              className="bg-gray-200 border-2 border-gray-600 max-w-56"
              value={userData.DOB}
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, DOB: e.target.value }))
              }
            />
          ) : (
            <p className="text-gray-400">{userData.DOB}</p>
          )}
        </div>
      </div>

      <div className="mt-8">
        {editMode ? (
          <button
            className="border border-primary px-8 py-2 rounded-full hover:bg-deep hover:text-white transition-all duration-200"
            onClick={() => setEditMode(false)}
          >
            Save Information
          </button>
        ) : (
          <button
            className="border border-primary px-8 py-2 rounded-full hover:bg-deep hover:text-white transition-all duration-200"
            onClick={() => setEditMode(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;

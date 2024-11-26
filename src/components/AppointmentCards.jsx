import React from "react";
import Image from "next/image";

const AppointmentCard = ({ appointment }) => {
  const { user, status, request, date } = appointment;

  return (
    <div className="max-w-md p-4 bg-white border rounded-md shadow-sm">
      {/* Doctor Info */}
      <div className="flex items-center space-x-4">
        <Image
          src={user.picture}
          alt={`${user.firstName} ${user.lastName}`}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div>
          <h2 className="text-lg font-semibold">{`Dr. ${user.firstName} ${user.lastName}`}</h2>
          <p className="text-sm text-gray-500">{request.specialization}</p>
        </div>
      </div>

      {/* Appointment Status */}
      <p
        className={`mt-2 px-2 py-1 text-sm text-white inline-block rounded ${
          status === "pending" ? "bg-yellow-500" : "bg-green-500"
        }`}
      >
        {status}
      </p>

      {/* Hospital & Timing Info */}
      <div className="mt-4 text-sm">
        <p>
          <span className="font-semibold">📍 {request.hospital} Hospital</span>
        </p>
        <p>
          <span className="font-semibold">🕒</span>{" "}
          {request.appointmentStartTime} - {request.appointmentEndTime}
        </p>
        <p>
          <span className="font-semibold">📅</span>{" "}
          {new Date(date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      {/* Actions */}
      <div className="mt-4 flex space-x-2">
        <button className="px-4 py-2 text-sm text-white bg-red-500 rounded hover:bg-red-600">
          Cancel
        </button>
        <button className="px-4 py-2 text-sm text-white bg-green-500 rounded hover:bg-green-600">
          Accept
        </button>
      </div>
    </div>
  );
};

export default AppointmentCard;

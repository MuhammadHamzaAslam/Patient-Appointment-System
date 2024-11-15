import React from "react";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
import { getRequest } from "@/actions/request";
import AdminRequestList from "@/components/DoctorRequest";

export default async function AdminRequest() {
  const session = await auth();
  // console.log("session =>" , session);
  if (!session && session?.user?.role !== "admin") redirect("/");
  const allRequest = await getRequest();
  console.log("allRequest =>", allRequest);

  return (
    <section>
      <AdminRequestList allRequests={allRequest} />
    </section>
  );
}

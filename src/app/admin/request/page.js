import React from "react";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
import { getRequest } from "@/actions/request";
import AdminRequestList from "@/components/DoctorRequest";

export default async function AdminRequest({ searchParams }) {
  const session = await auth();
  const {status} = searchParams
  if (!session && session?.user?.role !== "admin") redirect("/");
  const allRequest = await getRequest(status) ;   
  // console.log("allRequest =>", allRequest);

  return (
    <section>
      <AdminRequestList allRequests={allRequest} />
    </section>
  );
}

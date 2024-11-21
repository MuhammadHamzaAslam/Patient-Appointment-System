// "use client";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Button } from "@/components/ui/button";
// import { useToast } from "@/hooks/use-toast";
// import { useDropzone } from "react-dropzone";
// import { UploadIcon } from "@radix-ui/react-icons";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { useForm } from "react-hook-form";
// import { addRequest } from "@/actions/request";
// import { useState } from "react";
// const FormSchema = z.object({
//   bio: z.string().min(2).max(120),
//   hospital: z.string().min(2).max(50),
//   fees: z.string(),
//   gender: z.string(),
//   appointmentStartTime: z.string(),
//   appointmentEndTime: z.string(),
//   degree: z.string(),
//   specialization: z.string(),
//   experience: z.string(),
//   number: z.string().regex(/^\d+$/, "Enter a valid phone number"),
//   address: z.string().min(5),
// });
// export default function ApplyForm({ session }) {
//   const [file, setFile] = useState(null);

//   const onDrop = (acceptedFiles) => {
//     setFile(acceptedFiles[0]); // Only accept the first file
//   };

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: {
//       "image/*": [".jpeg", ".jpg", ".png", ".gif"],
//     },
//     multiple: false,
//   });
//   const { toast } = useToast();
//   const form = useForm({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       bio: "",
//       hospital: "",
//       fees: "",
//       gender: "",
//       appointmentStartTime: "",
//       appointmentEndTime: "",
//       degree: "",
//       specialization: "",
//       experience: "",
//       number: "",
//       address: "",
//     },
//   });
//   async function onSubmit(values) {
//     values.user = session?.user?._id;
//     const response = await addRequest(values);
//     // console.log("response in apply form", response);
//     if (response.error) {
//       toast({
//         title: "Your Application can't submit",
//         description: `Because ${response.msg}`,
//       });
//       form.reset();
//     } else {
//       toast({
//         title: "Your Application Has Recieved",
//         description: "You Will Be Respond In 3 business days",
//       });
//       form.reset();
//     }
//   }
//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//         <div className="grid grid-cols-1 m-2 lg:grid-cols-2 gap-5">
//           <FormField
//             name="hospital"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Hospital</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Enter hospital name" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             name="fees"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Fees</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Enter fees" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             name="gender"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Gender</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Enter gender" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             name="appointmentStartTime"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Appointment Start Time</FormLabel>
//                 <FormControl>
//                   <Input type="time" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             name="appointmentEndTime"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Appointment End Time</FormLabel>
//                 <FormControl>
//                   <Input type="time" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             name="degree"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Degree</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Enter degree" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             name="specialization"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Specialization</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Enter specialization" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             name="experience"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Experience</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Enter years of experience" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             name="number"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Contact Number</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Enter contact number" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             name="address"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Address</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Enter address" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>

//         <FormField
//           name="bio"
//           control={form.control}
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Bio</FormLabel>
//               <FormControl>
//                 <Textarea placeholder="Enter bio" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <div
//           {...getRootProps()}
//           className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer ${
//             isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
//           }`}
//           style={{ width: "300px", height: "200px" }}
//         >
//           <input {...getInputProps()} />
//           <UploadIcon
//             className="mx-auto text-gray-500"
//             style={{ fontSize: "3rem" }}
//           />
//           <p className="mt-2 text-sm text-gray-500">
//             {isDragActive
//               ? "Drop your file here..."
//               : "Drag and drop your file here or click to select a file!"}
//           </p>
//         </div>

//         {file && (
//           <div className="space-y-2 text-center">
//             <p className="text-sm text-gray-600">Selected File:</p>
//             <p className="text-sm font-medium text-gray-800">{file.name}</p>
//             <Button
//               variant="outline"
//               className="w-full max-w-xs"
//               onClick={() => setFile(null)}
//             >
//               Remove File
//             </Button>
//           </div>
//         )}

//         <Button type="submit">
//           {form.formState.isSubmitting ? "Loading" : "Submit"}
//         </Button>
//       </form>
//     </Form>
//   );
// }
























"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { useToast } from "@/hooks/use-toast";
import { addRequest } from "@/actions/request";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { UploadIcon, Cross2Icon } from "@radix-ui/react-icons";

const FormSchema = z.object({
  bio: z
    .string()
    .min(2, "Bio must be at least 2 characters")
    .max(120, "Bio must not exceed 120 characters"),
  hospital: z
    .string()
    .min(2, "Hospital name must be at least 2 characters")
    .max(50, "Hospital name must not exceed 50 characters"),
  fees: z.string().min(1, "Fees are required"),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Please select a gender",
  }),
  appointmentStartTime: z.string().min(1, "Start time is required"),
  appointmentEndTime: z.string().min(1, "End time is required"),
  degree: z.string().min(2, "Degree must be at least 2 characters"),
  specialization: z
    .string()
    .min(2, "Specialization must be at least 2 characters"),
  experience: z.string().min(1, "Experience is required"),
  number: z.string().regex(/^\d+$/, "Enter a valid phone number"),
  address: z.string().min(5, "Address must be at least 5 characters"),
});

export default function EnhancedApplyForm({ session }) {
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      bio: "",
      hospital: "",
      fees: "",
      gender: "",
      appointmentStartTime: "",
      appointmentEndTime: "",
      degree: "",
      specialization: "",
      experience: "",
      number: "",
      address: "",
    },
  });

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif"],
    },
    multiple: false,
  });

  async function onSubmit(values) {
    setIsSubmitting(true);
    try {
      values.user = session?.user?._id;
      const response = await addRequest(values);
      if (response.error) {
        toast({
          variant: "destructive",
          title: "Application Submission Failed",
          description: `Error: ${response.msg}`,
        });
      } else {
        toast({
          title: "Application Received",
          description: "You will receive a response within 3 business days.",
        });
        form.reset();
        setFile(null);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className="w-full max-w-full container mx-auto">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Doctor Application Form
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="hospital"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hospital</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter hospital name" {...field} />
                    </FormControl>
                    <FormDescription>
                      The hospital where you primarily practice.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fees"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Consultation Fees</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter fees"
                        type="number"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Your standard consultation fee.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="appointmentStartTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Appointment Start Time</FormLabel>
                    <FormControl>
                      <Input type="time" {...field} />
                    </FormControl>
                    <FormDescription>
                      The time you start seeing patients.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="appointmentEndTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Appointment End Time</FormLabel>
                    <FormControl>
                      <Input type="time" {...field} />
                    </FormControl>
                    <FormDescription>
                      The time you finish seeing patients.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="degree"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Degree</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your highest medical degree"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="specialization"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Specialization</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your medical specialization"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Years of Experience</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter years of experience"
                        type="number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter contact number" {...field} />
                    </FormControl>
                    <FormDescription>
                      Your professional contact number.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your clinic or hospital address"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    The address where patients can visit you.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Professional Bio</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter a brief professional bio"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    A short description of your professional background and
                    expertise.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-4">
              <FormLabel>Profile Picture</FormLabel>
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors duration-200 ${
                  isDragActive ? "border-primary bg-primary/5" : "border-muted"
                }`}
              >
                <input {...getInputProps()} />
                <UploadIcon
                  className="mx-auto text-muted-foreground"
                  style={{ width: "2rem", height: "2rem" }}
                />
                <p className="mt-2 text-sm text-muted-foreground">
                  {isDragActive
                    ? "Drop your file here..."
                    : "Drag and drop your profile picture here or click to select"}
                </p>
              </div>
              {file && (
                <div className="flex items-center justify-between p-2 bg-muted rounded-md">
                  <span className="text-sm font-medium truncate">
                    {file.name}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setFile(null)}
                    className="shrink-0"
                  >
                    <Cross2Icon className="h-4 w-4" />
                    <span className="sr-only">Remove file</span>
                  </Button>
                </div>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
















// cloudinary image upload code







// "use client";

// import { useState } from "react";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { useDropzone } from "react-dropzone";
// import { useToast } from "@/hooks/use-toast";
// import { addRequest } from "@/actions/request";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Card, CardContent } from "@/components/ui/card";
// import { UploadIcon, Cross2Icon } from "@radix-ui/react-icons";
// import { uploadImage } from "@/actions/upload";

// const FormSchema = z.object({
//   bio: z
//     .string()
//     .min(2, "Bio must be at least 2 characters")
//     .max(120, "Bio must not exceed 120 characters"),
//   hospital: z
//     .string()
//     .min(2, "Hospital name must be at least 2 characters")
//     .max(50, "Hospital name must not exceed 50 characters"),
//   fees: z.string().min(1, "Fees are required"),
//   gender: z.enum(["male", "female", "other"], {
//     required_error: "Please select a gender",
//   }),
//   appointmentStartTime: z.string().min(1, "Start time is required"),
//   appointmentEndTime: z.string().min(1, "End time is required"),
//   degree: z.string().min(2, "Degree must be at least 2 characters"),
//   specialization: z
//     .string()
//     .min(2, "Specialization must be at least 2 characters"),
//   experience: z.string().min(1, "Experience is required"),
//   number: z.string().regex(/^\d+$/, "Enter a valid phone number"),
//   address: z.string().min(5, "Address must be at least 5 characters"),
// });

// export default function EnhancedApplyForm({ session }) {
//   const [file, setFile] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();

//   const form = useForm({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       bio: "",
//       hospital: "",
//       fees: "",
//       gender: "",
//       appointmentStartTime: "",
//       appointmentEndTime: "",
//       degree: "",
//       specialization: "",
//       experience: "",
//       number: "",
//       address: "",
//     },
//   });

//   const onDrop = (acceptedFiles) => {
//     setFile(acceptedFiles[0]);
//   };

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: {
//       "image/*": [".jpeg", ".jpg", ".png", ".gif"],
//     },
//     multiple: false,
//   });

//   async function onSubmit(values) {
//     setIsSubmitting(true);
//     try {
//       values.user = session?.user?._id;

//       // If there's a file selected, you can upload it here using your previously implemented Cloudinary logic
//       if (file) {
//         // Call your Cloudinary upload function here
//         const uploadResponse = await uploadImage(file)
//         values.profilePictureUrl = uploadResponse.imageUrl;
//         // const uploadResponse = await uploadImage(file);
//         // If upload is successful, add image URL to form values (example below)
//       }

//       const response = await addRequest(values);

//       if (response.error) {
//         toast({
//           variant: "destructive",
//           title: "Application Submission Failed",
//           description: `Error: ${response.msg}`,
//         });
//       } else {
//         toast({
//           title: "Application Received",
//           description: "You will receive a response within 3 business days.",
//         });
//         form.reset();
//         setFile(null);
//       }
//     } catch (error) {
//       console.log("error =>" , error);
      
//       toast({
//         variant: "destructive",
//         title: "Submission Error",
//         description: "An unexpected error occurred. Please try again.",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   }

//   return (
//     <Card className="w-full max-w-full container mx-auto">
//       <CardContent className="p-6">
//         <h2 className="text-2xl font-bold mb-6 text-center">
//           Doctor Application Form
//         </h2>
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <FormField
//                 control={form.control}
//                 name="hospital"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Hospital</FormLabel>
//                     <FormControl>
//                       <Input placeholder="Enter hospital name" {...field} />
//                     </FormControl>
//                     <FormDescription>
//                       The hospital where you primarily practice.
//                     </FormDescription>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="fees"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Consultation Fees</FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder="Enter fees"
//                         type="number"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormDescription>
//                       Your standard consultation fee.
//                     </FormDescription>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="gender"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Gender</FormLabel>
//                     <Select
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                     >
//                       <FormControl>
//                         <SelectTrigger>
//                           <SelectValue placeholder="Select gender" />
//                         </SelectTrigger>
//                       </FormControl>
//                       <SelectContent>
//                         <SelectItem value="male">Male</SelectItem>
//                         <SelectItem value="female">Female</SelectItem>
//                         <SelectItem value="other">Other</SelectItem>
//                       </SelectContent>
//                     </Select>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="appointmentStartTime"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Appointment Start Time</FormLabel>
//                     <FormControl>
//                       <Input type="time" {...field} />
//                     </FormControl>
//                     <FormDescription>
//                       The time you start seeing patients.
//                     </FormDescription>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="appointmentEndTime"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Appointment End Time</FormLabel>
//                     <FormControl>
//                       <Input type="time" {...field} />
//                     </FormControl>
//                     <FormDescription>
//                       The time you finish seeing patients.
//                     </FormDescription>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="degree"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Degree</FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder="Enter your highest medical degree"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="specialization"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Specialization</FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder="Enter your medical specialization"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="experience"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Years of Experience</FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder="Enter years of experience"
//                         type="number"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="number"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Contact Number</FormLabel>
//                     <FormControl>
//                       <Input placeholder="Enter contact number" {...field} />
//                     </FormControl>
//                     <FormDescription>
//                       Your professional contact number.
//                     </FormDescription>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>

//             <FormField
//               control={form.control}
//               name="address"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Address</FormLabel>
//                   <FormControl>
//                     <Textarea
//                       placeholder="Enter your clinic or hospital address"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormDescription>
//                     The address where patients can visit you.
//                   </FormDescription>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="bio"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Short Bio</FormLabel>
//                   <FormControl>
//                     <Textarea placeholder="Short bio about you" {...field} />
//                   </FormControl>
//                   <FormDescription>
//                     A brief description of your background.
//                   </FormDescription>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="image"
//               render={() => (
//                 <FormItem>
//                   <FormLabel>Profile Picture</FormLabel>
//                   <div
//                     {...getRootProps()}
//                     className={`${
//                       isDragActive ? "border-blue-500" : "border-gray-500"
//                     } border-dashed p-4 flex justify-center items-center`}
//                   >
//                     <input {...getInputProps()} />
//                     {file ? (
//                       <div className="flex items-center">
//                         <span className="mr-2">{file.name}</span>
//                         <button
//                           onClick={() => setFile(null)}
//                           type="button"
//                           className="text-red-500"
//                         >
//                           <Cross2Icon />
//                         </button>
//                       </div>
//                     ) : (
//                       <UploadIcon className="text-gray-500" />
//                     )}
//                   </div>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <Button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full mt-6"
//             >
//               Submit Application
//             </Button>
//           </form>
//         </Form>
//       </CardContent>
//     </Card>
//   );
// }

// "use server";
// export async function uploadImage(file) {
//   const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
//   const cloudApiKey = process.env.CLOUDINARY_API_KEY;
//   const cloudSecret = process.env.CLOUDINARY_API_SECRET;
//   const timestamp = Math.floor(Date.now() / 1000);
//   const signature = generateSignature(timestamp, apiSecret);
//   try {
//     const formData = new FormData();
//     formData.append("file", file.get("image"));
//     formData.append("api_key", apiKey);
//     formData.append("timestamp", timestamp);
//     formData.append("signature", signature);

//     const response = await fetch(
//       `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
//       {
//         method: "POST",
//         body: formData,
//       }
//     );

//     const data = await response.json();

//     if (response.ok) {
//       return {
//         success: true,
//         message: "Upload successful!",
//         imageUrl: data.secure_url,
//       };
//     } else {
//       console.error("Upload failed:", data.error.message);
//       return {
//         success: false,
//         message: `Upload failed: ${data.error.message}`,
//       };
//     }
//   } catch (error) {
//     console.error("An error occurred during the upload:", error.message);
//     return {
//       success: false,
//       message: `Error during upload: ${error.message}`,
//     };
//   }
// }
// function generateSignature(timestamp, apiSecret) {
//   const crypto = require("crypto");
//   return crypto
//     .createHash("sha256")
//     .update(`timestamp=${timestamp}${apiSecret}`)
//     .digest("hex");
// }

"use server";
export async function uploadImage(file) {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const cloudApiKey = process.env.CLOUDINARY_API_KEY;
  const cloudApiSecret = process.env.CLOUDINARY_API_SECRET;
  const timestamp = Math.floor(Date.now() / 1000);

  // Generate the signature for the upload request
  const signature = generateSignature(timestamp, cloudApiSecret);

  try {
    // Prepare the form data
    const formData = new FormData();
    formData.append("file", file); // Directly use the file
    formData.append("api_key", cloudApiKey);
    formData.append("timestamp", timestamp);
    formData.append("signature", signature);

    // Upload the image to Cloudinary
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (response.ok) {
      return {
        success: true,
        message: "Upload successful!",
        imageUrl: data.secure_url,
      };
    } else {
      console.error("Upload failed:", data.error.message);
      return {
        success: false,
        message: `Upload failed: ${data.error.message}`,
      };
    }
  } catch (error) {
    console.error("An error occurred during the upload:", error.message);
    return {
      success: false,
      message: `Error during upload: ${error.message}`,
    };
  }
}

function generateSignature(timestamp, cloudApiSecret) {
  const crypto = require("crypto");
  return crypto
    .createHash("sha256")
    .update(`timestamp=${timestamp}${cloudApiSecret}`)
    .digest("hex");
}

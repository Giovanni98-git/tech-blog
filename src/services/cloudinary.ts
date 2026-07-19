import cloudinary from "../lib/cloudinary";

export type cloudinaryUploadResult = {
  secure_url: string;
  public_id: string;
};

export async function uploadToCloudinary(
  file: File,
): Promise<cloudinaryUploadResult> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const base64 = buffer.toString("base64");
  const dataURL = `data:${file.type};base64,${base64}`;

  try {
    const result = await cloudinary.uploader.upload(dataURL, {
      folder: "tech-blog",
      transformation: [{ format: "webp" }],
    });

    return {
      secure_url: result.secure_url,
      public_id: result.public_id,
    };
  } catch (error) {
    console.error("cloudinary upload error: ", error);
    throw new Error("Failed to upload image to Cloudinary");
  }
}

export async function deleteFromCloudinary(publicId: string) {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error("cloudinary delete error: ", error);
    throw new Error("Failed to delete image from Cloudinary");
  }
}

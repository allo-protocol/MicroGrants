import { PhotoIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import CropModal from "./CropModal";
import { aspectRatio } from "@/utils/config";

const ImageUpload = (props: {
  setBase64Image: (base64Image: string) => void;
  aspectRatio?: number;
}) => {
  const [imageName, setImageName] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [openCropModal, setOpenCropModal] = useState(false);
  const [preview, setPreview] = useState("");

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageName(file.name);
      setOpenCropModal(true);
    } else {
      setImageFile(null);
      setImageName("");
    }
  };

  const onCancel = () => {
    setImageFile(null);
    setImageName("");
    props.setBase64Image("");
  };

  const onComplete = (base64Image: string) => {
    props.setBase64Image(base64Image);
    setPreview(base64Image);
  };

  return (
    <div className="col-span-full">
      <label
        htmlFor="cover-photo"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Banner Image
      </label>
      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
        <div className="text-center">
          {preview === "" && (
            <PhotoIcon
              className="mx-auto h-12 w-12 text-gray-300"
              aria-hidden="true"
            />
          )}
          {preview !== "" && (
            <img style={{ maxWidth: "300px" }} src={preview} />
          )}
          <div className="mt-4 text-sm leading-6 text-gray-600">
            <label
              htmlFor="imageUrl"
              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
            >
              <span>Upload a file</span>
              <input
                id="imageUrl"
                name="imageUrl"
                type="file"
                accept="image/png, image/jpeg"
                className="sr-only"
                onChange={handleFileChange}
              />
            <span className="pl-1 text-black font-normal">or drag and drop</span>
            </label>
          </div>
          <p className="text-xs leading-5 text-gray-600 mt-2">
            PNG, JPG up to 5MB
          </p>
          <p className="text-xs leading-5 text-gray-600 mt-2">
            {imageName ? "File uploaded: " + imageName : ""}
          </p>
        </div>
      </div>
      <CropModal
        aspectRatio={props.aspectRatio || aspectRatio}
        file={imageFile}
        title={"Crop Image"}
        isOpen={openCropModal}
        setIsOpen={setOpenCropModal}
        closeModalText={"Close"}
        onCancel={onCancel}
        setBase64Image={onComplete}
      />
    </div>
  );
};

export default ImageUpload;

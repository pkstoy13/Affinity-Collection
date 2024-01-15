import { useState, useEffect } from "react";

export function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Retrieve the previously uploaded image from local storage
    const storedImage = localStorage.getItem("uploadedImage");

    if (storedImage) {
      setSelectedImage(storedImage);
    }
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result);

        // Save the uploaded image to local storage
        localStorage.setItem("uploadedImage", reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    // Clear the uploaded image from both UI and local storage
    setSelectedImage(null);
    localStorage.removeItem("uploadedImage");
  };

  return (
    <div>
      {!selectedImage && (
        <div>
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
      )}

      {selectedImage && (
        <div>
          <img
            src={selectedImage}
            alt="Uploaded"
            className="tile hover:scale-105"
          />
          <button
            onClick={handleDeleteImage}
            className="mt-2 bg-red-500 text-white p-2 rounded"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

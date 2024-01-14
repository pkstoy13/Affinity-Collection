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
        </div>
      )}
    </div>
  );
}

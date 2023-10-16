import React, { useState, useEffect } from 'react';

function ImageGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the API URL you want to fetch images from
    const apiUrl = 'https://picsum.photos/seed/picsum/200/300';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setImages(data); // Assuming the API returns an array of image URLs
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading images...</p>
      ) : (
        <div className="image-gallery">
          {images.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Image ${index}`} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageGallery;

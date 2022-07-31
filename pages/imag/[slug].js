import {React,useState} from 'react'
import {useRouter} from 'next/router'

const ImageUpload = () => {
    const router = useRouter();
    const { slug } = router.query;

    const id = slug;

    const [image, setImage] = useState(null);
    const [createObjectURL, setCreateObjectURL] = useState(null);
  
    const uploadToClient = (event) => {
      if (event.target.files && event.target.files[0]) {
        const i = event.target.files[0];
        
        setImage(i);
        setCreateObjectURL(URL.createObjectURL(i));
      }
    };
  
    const uploadToServer = async (event) => {        
      const body = new FormData();
      // console.log("file", image)
      body.append("file", image);  
      body.append("id", id)  
      const response = await fetch("http://localhost:3000/api/uploadfile", {
        method: "POST",
        body
      });
    };

  return (
    <div>
     {slug}
    <img src={createObjectURL} />
    <h4>Select Image</h4>
    <input type="file" name="myImage" onChange={uploadToClient} />
    <button
      className="btn btn-primary"
      type="submit"
      onClick={uploadToServer}
    >
      Send to server
    </button>
  </div>
  )
}

export default ImageUpload
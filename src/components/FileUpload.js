import { useState } from 'react'

import React from 'react'
import axios from "axios"

function FileUpload() {

    const [ file, setFile ] = useState(null);
    const [ fileName, setFileName]  = useState("Choose File")
    const [ uploadedFile, setUploadedFile ] = useState({})
    const [ textInput, setTextInput ] = useState("")
    const onChange = event => {
        setFile(event.target.files[0]);
        setFileName(event.target.files[0].name)
    }
    const handleText = event => {
        setTextInput(event.target.value)
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("comment", textInput);
        try{
            const res = await axios.post("/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            const { fileName, filePath } = res.data;
            console.log(res.data)
            setUploadedFile( { fileName, filePath })
        } catch(err) {
            if(err.response.status === 500) {
                console.log("There was a problem with the server")
            }else {
                console.log(err.response.data.msg)
            }
        }
    }
  return (
    <>
        <form onSubmit={onSubmit}>
            <div>
                <input type="text" id="text" onChange={handleText} name="text" value={textInput} />
                <input type="file" id="customFile" onChange={onChange}/>
                <label htmlFor='customFile'>{fileName}</label>
            </div>
            <input type="submit" value="Upload" />
        </form>
        <img src={uploadedFile.filePath} alt="something" height="400px" width="600px" />
    </>
  )
}

export default FileUpload

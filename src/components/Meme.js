import React from "react"
import memesData from "./memeData.js"
export default function Meme(){

    const [meme,setMeme]=React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })
    React.useEffect(()=>{
       async function getMemes(){
        const res= await fetch("https://api,imgflip.com/get_memes")
        const data= await res.json()
        setAllMemeImages(data.data.memes)
       }
       getMeme()
       return ()=>{
        
       }
    },[])
    const [memeImage,setMemeImage]=React.useState("")
    const [allMemeImages,setAllMemeImages]=React.useState(memesData)
 
    function getMemeImage(){
        const randomNumber= Math.floor(Math.random()* allMemes.length)
        const url= allMemes[randomNumber].url
        setMeme(prevMeme=>({
            ...prevMeme,
            randomImage:url
        }))
        
    }

    function handleChange(event){
        const{ name, value}=event.target
        setMeme(prevMeme=>({
            ...prevMeme,
            [name]:value
        }))
    }

    return (
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top Text"
                name="topText" value={meme.topText} onChange={handleChange}/>
                <input type="text" className="form--input" placeholder="Bottom Text"
                name="bottomText" value={meme.bottomText} onChange={handleChange}/>
                <button className="form--button" onClick={getMemeImage}>
                    Get a new meme Iamge</button>
            </div>
            <img src={meme.randomImage} className="meme--image"/>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </main>
    )
}
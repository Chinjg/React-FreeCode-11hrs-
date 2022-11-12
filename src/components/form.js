import React from "react"

export default function Form(){
    const [formData, setFormData]=React.useState({
        firstName:"",lastName:"",email:"",comment:"",
        isFriendly:true, emplomyent:""
    })
  
    function handleChange(event){
        const {name,value,type,checked}=event.target
        setFormData([prevFormData=>{
            return{
                ...prevFormData,
                [name]:type==="checkbox"? checked:value
            }
        }])
    }

    function handleSubmit(event){
        event.preventDefault()
        // submitToApi(formData)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="FirstName"
            onChange={handleChange} name="firstName" value={formData.firstName}
            />
            <input type="text" placeholder="LastName"
            onChange={ handleChange} name="lastName" value={formData.lastName}
            /> 
            <input type="email" placeholder="Email"
            onChange={ handleChange} name="email" value={formData.email}
            />
            <textarea value={formData.comments} placeholder="Comment"
            onChange={handleChange}
            name="comments"
            />
            <input type="checkbox" id="isFriendly" 
            checked={formData.isFriendly} name="isFriendly"/>
            <label htmlFor="isFriendly">Are you firnedly?</label>
        
        <br>
        </br>
        <fieldset>
            <legend>Current employment status</legend>

            <input type="radio" id="unemployed" name="employment"
            value="unemployed" check={formData.employment ==="unemployed"} 
            onChange={handleChange}
            />
            <label htmlFor="unemployed">Unemployed</label>
            <br/>

            <input type="radio" id="unemployed" name="employment"
            value="part-time" check={formData.employment ==="part-time"}
            onChange={handleChange}
            />
            <label htmlFor="unemployed">Part-Time</label>
            <br/>

            <input type="radio" id="unemployed" name="employment"
            value="full-time" check={formData.employment ==="full-time"}
            onChange={handleChange} 
            />
            <label htmlFor="unemployed">Full-Time</label>
            <br/> 

        </fieldset>
        <br/>

        <label htmlFor="favColor">What is your favorite color</label>
        <br/>
        <select id="favColor"
        onChange={handleChange}
        name="favColor"
        >
            <option value="">--Choose--</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
        </select>
        <br/>
        
       <button>Submit</button>
        </form>
    )
}
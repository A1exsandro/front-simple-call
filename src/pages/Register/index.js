import axios from 'axios'
import { useForm } from "react-hook-form";
 

const baseURL = process.env.REACT_APP_BASE_URL 

function Register(){
  const { register, handleSubmit } = useForm(); 
  const createStudent = (data) => {
		axios.post(`${baseURL}/students`, { 
      name: data.name,
      present: data.present  
		})  
  } 
 
	return( 
      <form onSubmit={handleSubmit( createStudent )}>
      
        <input {...register("name")} placeholder="First name" />

        <select {...register("present", { required: true })}> 
          <option value={true}>true</option> 
        </select> 

        <input type="submit" />
    </form> 
	)
}

export default Register
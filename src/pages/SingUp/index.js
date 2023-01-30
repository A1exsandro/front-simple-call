import { useForm } from "react-hook-form" 
 
function SingUp({sendToParent}){
  const { register, handleSubmit } = useForm() 
  
  const logIn = (data) => { 
    sendToParent(JSON.stringify(data)) 
  }
  
	return(
    <form onSubmit={handleSubmit( logIn )}>
     
      <input {...register("name")} placeholder="First name" />

      <select {...register("present", { required: true })}> 
        <option value={true}>true</option> 
      </select>
        
      <input type="submit" />
  </form>
	)
}

export default SingUp 

import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Login = () => {
 const navigate = useNavigate();
      const [formData, setFormData] = useState({
        email: "",
        password: "",
      });

      const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
          ...formData,
          [name]: value,
        });
    };
    
    const submitHandle = async  (e) => {
        e.preventDefault()

        try {
            let response = await fetch("http://localhost:3600/login", {
              method: "POST",

              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            });

            let data = await response.json()
            console.log(data)
            
          let IsAdmin= data.user.role.length
            if (IsAdmin === 1) {
                alert("login successfull redirecting to admin page")
                navigate("/admin")
            } else {
                alert("login successfull redirecting to home")
                navigate("/")
            }
            

        } catch (error) {
            console.log(error)
        }
        
 }

    
    return (
      <div>
        <h3>login page</h3>
        <div>
          <form onSubmit={submitHandle}>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter Email"
              required
            />
            <input
              onChange={handleChange}
              type="text"
              name="password"
              placeholder="Enter password"
              required
            />
            <input type={"submit"} value="submit" />
          </form>
        </div>
      </div>
    );
}
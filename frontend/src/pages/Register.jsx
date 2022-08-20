import { useState } from "react"
import {useNavigate} from "react-router-dom"

export const Register = () => {
    const navigate = useNavigate()
    
    const [formData, setFormData] = useState({
        email: "",
        password:""
    })

    const handleChange = (e) => {
      const { name, value } = e.target;

      setFormData({
        ...formData,
        [name]: value,
      });
    };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:3600/register", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let data = await res.json();
      console.log(data.token);
      if (data.token) {
        navigate("/login", { replace: true });
      } else {
        alert("fill correctly");
      }
    } catch (error) {
      console.log(error);
    }
  };
 

    return (
      <div>
        <h2>register page</h2>
        <div>
          <form onSubmit={handlesubmit}>
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
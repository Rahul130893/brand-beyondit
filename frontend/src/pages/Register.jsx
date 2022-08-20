import { useState } from "react"
import {useNavigate} from "react-router-dom"
import "../App"
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
      let res = await fetch("https://brand-beyondit.herokuapp.com/register", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let data = await res.json();
      console.log(data.token);
        if (data.token) {
          alert("registration successfull redirecting to Login")
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
          <form onSubmit={handlesubmit} className="registerBox">
            <div>
              <label for="name">Enter Email</label>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Enter Email"
                required
              />
            </div>
            <div>
              <label for="password">Enter Password</label>
              <input
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="Enter password"
                required
              />
            </div>
            <div>
              <input className="submit" type={"submit"} value="submit" />
            </div>
          </form>
        </div>
      </div>
    );
}
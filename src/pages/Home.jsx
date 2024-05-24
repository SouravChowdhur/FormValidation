import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.scss"

function App() {
    const initialValues = { firstName: "", lastName: "", userName: "", email: "", password: "", phoneNo: "", country: "", city: "", panNo: "", adharNo: "" };

    const [formValues, setFormValues] = useState(initialValues);

    const [formErrors, setFormErrors] = useState({});

    const [isSubmit, setIsSubmit] = useState(false);

    const navigate = useNavigate();
    
    console.log(formValues)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

        if (Object.keys(formErrors).length === 0) {
            navigate(`/success?firstName=${formValues.firstName}&lastName=${formValues.lastName}&email=${formValues.email}&password=${formValues.password}&country=${formValues.country}&city=${formValues.city}&phoneNo=${formValues.phoneNo}&panNo=${formValues.panNo}&adharNo=${formValues.adharNo}&userName=${formValues.userName}`); // Add more parameters as needed
        }

    };


    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);


    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.firstName) {
            errors.firstName = "First Name is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
    };

    
    const isAnyFieldEmpty = () => {
        return Object.values(formValues).some(value => value === "");
    };   


    return (
        <div className="container">
           

            <form onSubmit={handleSubmit}>
                <h1>React Form Validation</h1>
                <div className="ui divider"></div>
                <div className="ui form">

                    <div className="field">
                        <label>First Name:</label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formValues.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <p>{formErrors.firstName}</p>

                    <div className="field">
                        <label>Last Name:</label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formValues.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="field">
                        <label>User Name:</label>
                        <input
                            type="text"
                            name="userName"
                            placeholder="User Name"
                            value={formValues.userName}
                            onChange={handleChange}
                            required
                        />
                    </div>


                    <div className="field">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formValues.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <p>{formErrors.email}</p>

                    <div className="field">
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formValues.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <p>{formErrors.password}</p>

                    <div className="field">
                        <label>Phone Number:</label>
                        <input
                            type="number"
                            name="phoneNo"
                            placeholder="Phone Number"
                            value={formValues.phoneNo}
                            onChange={handleChange}
                        />
                    </div>


                    <div className="field">
                        <label>Country:</label>
                        <input
                            type="text"
                            name="country"
                            placeholder="Country"
                            value={formValues.country}
                            onChange={handleChange}
                        />
                    </div>


                    <div className="field">
                        <label>City:</label>
                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            value={formValues.city}
                            onChange={handleChange}
                        />
                    </div>


                    <div className="field">
                        <label>Pan Number</label>
                        <input
                            type="number"
                            name="panNo"
                            placeholder="Pan Number"
                            value={formValues.panNo}
                            onChange={handleChange}
                        />
                    </div>


                    <div className="field">
                        <label>Adhar Number:</label>
                        <input
                            type="number"
                            name="adharNo"
                            placeholder="Adhar Number"
                            value={formValues.adharNo}
                            onChange={handleChange}
                        />
                    </div>

                    <button  disabled={isAnyFieldEmpty()} className="fluid ui button blue">Submit</button>






                </div>
            </form>
        </div>
    );
}

export default App;
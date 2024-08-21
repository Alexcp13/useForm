import { useForm } from "react-hook-form";
import "./Form.css";

const Formulario = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submit = (data) => {
        console.log(data);
    };

    return (
        <div className="form-container">
            <div className="event-form">
                <h1>Iniciar sesión</h1>
                <form onSubmit={handleSubmit(submit)}>
                    <div className="div-container">
                        <label className={errors.userName ? "error-label" : ""}>
                            Nombre de Usuario
                        </label>
                        <input
                            {...register("userName", { required: "Este campo es requerido" })}
                            className={`form-input ${errors.userName ? "error-input" : ""}`}
                            placeholder={errors.userName ? errors.userName.message : "Nombre de Usuario"}
                        />
                        {errors.userName && (
                            <p className="error-message">{errors.userName.message}</p>
                        )}
                    </div>
                    <div className="div-container">
                        <label className={errors.email ? "error-label" : ""}>
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            {...register("email", {
                                required: "Este campo es requerido",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Correo electrónico no válido"
                                }
                            })}
                            className={`form-input ${errors.email ? "error-input" : ""}`}
                            placeholder={errors.email ? errors.email.message : "Correo electrónico"}
                        />
                        {errors.email && (
                            <p className="error-message">{errors.email.message}</p>
                        )}
                    </div>
                    <div className="div-container">
                        <label className={errors.password ? "error-label" : ""}>
                            Contraseña
                        </label>
                        <input
                            type="password"
                            {...register("password", {
                                required: "Este campo es requerido",
                                minLength: {
                                    value: 10,
                                    message: "La contraseña debe tener al menos 10 caracteres"
                                },
                                pattern: {
                                    value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                                    message: "La contraseña debe contener al menos una mayúscula o un símbolo especial"
                                }
                            })}
                            className={`form-input ${errors.password ? "error-input" : ""}`}
                            placeholder={errors.password ? errors.password.message : "Contraseña"}
                        />
                        {errors.password && (
                            <p className="error-message">{errors.password.message}</p>
                        )}
                    </div>
                    <button type="submit" className="form-button">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default Formulario;
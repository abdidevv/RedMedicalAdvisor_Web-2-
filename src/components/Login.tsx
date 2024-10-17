import React from 'react'

export default function Login() {
    return (
        <div className="login-container">
            <h1 className="login-title">Iniciar sesión</h1>
            <form className="login-form">
                <div className="login-input-group">
                    <input className="login-input" type="email" id="email" placeholder=" " required />
                    <label className="login-label" htmlFor="email">Correo electrónico</label>
                </div>
                <div className="login-input-group">
                    <input className="login-input" type="password" id="password" placeholder=" " required />
                    <label className="login-label" htmlFor="password">Contraseña</label>
                </div>
                <button className="login-button" type="submit">Entrar</button>
            </form>
        </div>
    );
}
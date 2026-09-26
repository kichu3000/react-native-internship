import React, { useState } from "react";
import "./multi.css"
function AuthPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="auth-page">
        <div className="auth-left">
            <div className="logo-badge">Crextio</div>

            <div className="heading-block">
            <h1>Create an account</h1>
            <p className="subtitle">Sign up and get 30 day free trial</p>
            </div>

            <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
                <label htmlFor="fullName">Full name</label>
                <input id="fullName" type="text" placeholder="Amélie Laurent" />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                id="email"
                type="email"
                placeholder="amelielaurent7622@gmail.com"
                />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="password-field">
                <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••••••••"
                />
                <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label="Toggle password visibility"
                >
                    👁
                </button>
                </div>
            </div>

            <button type="submit" className="submit-btn">
                Submit
            </button>
            </form>

            <div className="social-buttons">
            <button className="social-btn apple-btn">
                <span className="icon"></span> Apple
            </button>
            <button className="social-btn google-btn">
                <span className="icon">G</span> Google
            </button>
            </div>

            <div className="auth-footer">
            <span>
                Have an account? <a href="#signin">Sign in</a>
            </span>
            <a href="#terms">Terms &amp; Conditions</a>
            </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="auth-right">
            <img
            className="hero-img"
            src="https://via.placeholder.com/900x1100"
            alt="Team collaborating"
            />

            <button className="close-btn" aria-label="Close">
            ✕
            </button>

            <div className="floating-card task-review-card">
            <div className="card-row">
                <span className="card-title">Task Review With Team</span>
                <span className="status-dot" />
            </div>
            <span className="card-time">09:30am - 10:00am</span>
            </div>

            <div className="floating-card mini-time-card">
            <span className="card-time">09:30am - 10:00am</span>
            </div>

            <div className="avatar-cluster">
            <img src="https://via.placeholder.com/50" alt="member 1" />
            <img src="https://via.placeholder.com/50" alt="member 2" />
            <img src="https://via.placeholder.com/50" alt="member 3" />
            </div>

            <div className="calendar-strip">
            {[
                { day: "Sun", date: 22 },
                { day: "Mon", date: 23 },
                { day: "Tue", date: 24 },
                { day: "Wed", date: 25 },
                { day: "Thu", date: 26 },
                { day: "Fri", date: 27 },
                { day: "Sat", date: 28 },
            ].map(({ day, date }) => (
                <div className="calendar-day" key={day}>
                <span className="day-label">{day}</span>
                <span className="date-label">{date}</span>
                </div>
            ))}
            </div>

            <div className="floating-card meeting-card">
            <div className="card-row">
                <span className="card-title">Daily Meeting</span>
                <span className="status-dot" />
            </div>
            <span className="card-time">12:00pm - 01:00pm</span>
            <div className="avatar-row">
                <img src="https://via.placeholder.com/30" alt="attendee 1" />
                <img src="https://via.placeholder.com/30" alt="attendee 2" />
                <img src="https://via.placeholder.com/30" alt="attendee 3" />
                <img src="https://via.placeholder.com/30" alt="attendee 4" />
            </div>
            </div>
        </div>
        </div>
    );
}

export default AuthPage;
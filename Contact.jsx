import { useState, useEffect } from 'react'
import './Contact.css'

function Contact({ isDarkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className={`contact-page ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Hero section */}
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </div>

      {/* Main content */}
      <div className="contact-content">
        <div className="contact-grid">
          {/* Contact info */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Have questions about our recipes? We're here to help!</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📧</div>
                <div className="method-details">
                  <h3>Email</h3>
                  <p>recipecollection@example.com</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">📱</div>
                <div className="method-details">
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">📍</div>
                <div className="method-details">
                  <h3>Address</h3>
                  <p>123 Recipe Street<br />Cooking City, CC 12345</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">📘</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📷</a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">📺</a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="contact-form-container">
            <h2>Send us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className="form-textarea"
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQ section */}
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How do I search for recipes?</h3>
              <p>Use the search bar in the navigation to search by recipe name, ingredients, or tags.</p>
            </div>
            
            <div className="faq-item">
              <h3>Are the recipes free to use?</h3>
              <p>Yes! All recipes on our platform are completely free to access and use.</p>
            </div>
            
            <div className="faq-item">
              <h3>How often do you add new recipes?</h3>
              <p>We regularly update our collection with new recipes from around the world.</p>
            </div>
            
            <div className="faq-item">
              <h3>Can I save my favorite recipes?</h3>
              <p>Currently, we don't have a save feature, but we're working on it!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
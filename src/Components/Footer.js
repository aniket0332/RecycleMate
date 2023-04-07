import React from 'react'

const Footer = () => {
  return (
    <>
     {/* <!-- Footer Starts --> */}
    <footer class="footer">
      <div class="section-center">
        {/* <!-- social icon --> */}
        <div class="social-icons">
          <div class="social-icon"><i class="fab fa-facebook"></i></div>
          <div class="social-icon"><i class="fab fa-twitter"></i></div>
          <div class="social-icon"><i class="fab fa-instagram"></i></div>
        </div>
        {/* <!-- social icon ends --> */}

        {/* <!-- Copyright tag --> */}
        <h4 class="footer-text"> &copy; <span>2023</span> <span class="company">RecycleMate</span> <span>all right reserved</span></h4>
      </div>
    </footer>
    {/* <!-- Footer Ends --> */}
    </>
  )
}

export default Footer

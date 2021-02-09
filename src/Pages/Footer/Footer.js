import React from 'react';
import "./Footer.css"

function Footer() {
    return (
        <div>
              <footer class="footer">
        <p class="footer__title">Premierie</p>
        <div class="footer__social">
            <a href="https://www.facebook.com/nicholas.namusanga/" class="footer__icon"><i class='bx bxl-facebook'></i></a>
            <a href="https://www.instagram.com/premierie_ug/" class="footer__icon"><i class='bx bxl-instagram'></i></a>
            <a href="#" class="footer__icon"><i class='bx bxl-twitter'></i></a>
        </div>
        <p>&#169; 2021 copyright all right reserved</p>
    </footer>

        </div>
    )
}

export default Footer

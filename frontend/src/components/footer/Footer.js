import React from 'react'

import "./Footer.css"

function Footer() {
  return (
    <footer className='footer'>
        <div className='footer-items'>
            <div class="col">
                <div class="footer--item">أفلام غموض</div>
                <div class="footer--item">أفلام رعب</div>
                <div class="footer--item">أفلام رومانسية</div>
                <div class="footer--item">أفلام أكشن</div>
            </div>
            <div class="col">
                <div class="footer--item">مسلسلات عربية</div>
                <div class="footer--item">مسلسلات أجنبية</div>
                <div class="footer--item">مسلسلات تركية</div>
                <div class="footer--item">دراما آسيوية</div>
            </div>
            <div class="col">
                <div class="footer--item">أفلام غموض</div>
                <div class="footer--item">أفلام رعب</div>
                <div class="footer--item">أفلام رومانسية</div>
                <div class="footer--item">أفلام أكشن</div>
            </div>
        </div>
        <div className='footer--copyright'>
                جميع الحقوق محفوظة لموقعنا &copy; 2022
        </div>
       
    </footer>
  )
}

export default Footer
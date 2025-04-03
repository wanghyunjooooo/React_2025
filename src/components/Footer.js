import React from 'react'
import '../App.css';



function Footer(){
    const currentYear = new Date().getFullYear();

    return(
        <footer>
            <div>
                <div>
                    <h2>리액트 쇼핑몰</h2>
                    <p>React로 만든 예제 쇼핑몰 입니다.</p>
                </div>

                <div>
                    <h3>카테고리</h3>
                    <ul>
                        <li>의류</li>
                        <li>전자기기</li>
                        <li>액세서리</li>
                    </ul>
                </div>

                <div>
                    <h3>고객센터</h3>
                    <p>이메일 : w2324@e-mirim.hs.kr</p>
                    <p>전화 : 010-5912-5071</p>
                </div>
            </div>

            <div>
                <p>&copy; {currentYear} 리엑트 쇼핑몰. All Rights Reserved.</p>
            </div>
        </footer>
    )
} export default Footer 
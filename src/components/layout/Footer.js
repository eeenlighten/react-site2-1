import React from 'react'


const footertxt = [
    { 
      title: "소개",
      text1: "아카데미 소개",
      text2: "오시는 길",
    },
    { 
      title: "강의안내",
      text1: "개강일정",
      text2: "국비과정 NCS",
      text3: "일반과정 개강"
    },
    { 
      title: "컨설팅",
      text1: "블랙탑 컨설팅",
      text2: "창업센터",
    },
    { 
      title: "커뮤니티",
      text1: "현장스케치",
      text2: "공지사항",
      text3: "이벤트",
      text4: "sns",
      text5: "건의함",
      text6: "취업지원센터"
    }
  ]

  const footertxt2 = [
    {
        title : "PET ACADEMY",
        desc1 : "안녕하세요!",
        desc2 : "더 다양한 정보확인",
        desc3 : "petacademy@gmail.com", 
        image1 : "images/icon1.png", 
        image2 : "images/icon2.png", 
        image3 : "images/icon3.png", 
        image4 : "images/icon4.png", 
        image5 : "images/icon5.png", 
    }
  ]
  
  
  
  function Footerinfo({title, text1, text2, text3, text4, text5, text6}){
    return (
      <>
      <div>
        <h3>{title}</h3>
        <ul>
          <li>
            <a href="/">{text1}</a>
          </li>
          <li>
            <a href="/">{text2}</a>
          </li>
          <li>
            <a href="/">{text3}</a>
          </li>
          <li>
            <a href="/">{text4}</a>
          </li>
          <li>
            <a href="/">{text5}</a>
          </li>   
          <li>
            <a href="/">{text6}</a>
          </li>                 
        </ul>
      </div>
     </>
     )
  }


function Footer(props) {
  return (
    <footer id="footerType" className={`footer__wrap ${props.skill[0]} ${props.skill[1]}`}>
        <h2 className="ir_so">푸터 영역</h2>
        <div className="footer__inner container">
            <div className="footer__wrap">
                <div className="footer_left">
                    <div className="footer_info">
                        <h3>{footertxt2[0].title}</h3>
                        <ul>
                            <li>{footertxt2[0].desc1}</li>
                            <li>{footertxt2[0].desc2}</li>
                            <li>{footertxt2[0].desc3}</li>
                        </ul>
                    </div>
                    <div className="icon">
                        <ul>
                            <li><a href="/"><img className="img" src={footertxt2[0].image1}  alt="이미지1"/></a></li>
                            <li><a href="/"><img className="img" src={footertxt2[0].image2}  alt="이미지2"/></a></li>
                            <li><a href="/"><img className="img" src={footertxt2[0].image3}  alt="이미지3"/></a></li>
                            <li><a href="/"><img className="img" src={footertxt2[0].image4}  alt="이미지4"/></a></li>   
                            <li><a href="/"><img className="img" src={footertxt2[0].image5}  alt="이미지5"/></a></li>               
                        </ul>
                    </div>
                </div>
                <div className="footer__menu">
                    {footertxt.map((txt) => (
                    <Footerinfo 
                    title = {txt.title}
                    text1 = {txt.text1}
                    text2 = {txt.text2}
                    text3 = {txt.text3}
                    text4 = {txt.text4}
                    text5 = {txt.text5}
                    text6 = {txt.text6}
                    key = {txt.text1}
                    />
                    ))}   
                </div> 
            </div>
            <address className="footer__address">
                Copyright 2022. All Rights Reserved. - Designde by JS
            </address>
        </div>
    </footer>
  )
}

export default Footer
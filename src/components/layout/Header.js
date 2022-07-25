import React from 'react'

const textInfor = [
    {text: "아카데미소개"},
    {text: "전문교육과정"},
    {text: "취창업정보"},
    {text: "수강후기"},
    {text: "고객센터"}]
    
    const textInfor2 = [
        {
            title:"PET ACADEMY"
        }
    ]

    function Info({text}){
      return (
      <>
         <li>
          <a href="/">{text}</a>
        </li>
      </>
      )
    }

function Header(props) {
  return (
    <header id="headerType gmarket" className={props.fonts}>
        <div className="header__inner">
            <h1 className="header__logo">
                <a href="/">{textInfor2[0].title}</a>
            </h1>
            <nav className="header__menu">
                <h2 className="ir_so">메인 메뉴</h2>
                <ul>
                    {textInfor.map((txt) => (
                    <Info text={txt.text} key={txt.text}/>
                ))}   
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header
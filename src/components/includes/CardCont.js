import React from 'react'
import Cardimg from '../../assets/images/card01.jpg';
import Cardimg2 from '../../assets/images/card02.jpg';
import Cardimg3 from '../../assets/images/card03.jpg';

const cardtxt = [
    {
        title1: "스킬UP 교육",
        title2: "행동교정",
        title3: "펫푸드",
        title4: "펫미용",
        desc : "국가 대표 최고의 강사진",
        desc1 : "우수한 교수진들의 높은 교육 완성도를 자랑합니다.",
        text1 : "행동교정",
        text2 : "더 자세히 보기" ,
        image1 : "images/card01.jpg",
        image2 : "images/card02.jpg",
        image3 : "images/card03.jpg",
    }
]


function CardCont(props) {
  return (
    <section id="cardType" className={`card__wrap ${props.skill[0]} ${props.skill[1]}`}>
        <h2>{cardtxt[0].title1}</h2>
        <p>{cardtxt[0].desc}<br />{cardtxt[0].desc1}</p>
        <div className="card__inner container">
            <article className="card">
                <figure className="card__header">
                    <img className="img" src={cardtxt[0].image1} alt={cardtxt[0].title1} />
                </figure>
                <div className="card__body card_color01">
                    <h3 className="title">{cardtxt[0].title2}</h3>
                    <a className="btn" href="/">{cardtxt[0].text2}</a>
                </div>
            </article>
            <article className="card">
                <figure className="card__header ">
                    <img className="img" src={cardtxt[0].image2} alt={cardtxt[0].title1}/>
                </figure>
                <div className="card__body card_color02">
                    <h3 className="title">{cardtxt[0].title3}</h3>
                    <a className="btn" href="/">{cardtxt[0].text2}</a>
                </div>
            </article>
            <article className="card">
                <figure className="card__header">
                    <img className="img" src={cardtxt[0].image3} alt={cardtxt[0].title1} />
                </figure>
                <div className="card__body card_color03">
                    <h3 className="title">{cardtxt[0].title4}</h3>
                    <a className="btn" href="/">{cardtxt[0].text2}</a>
                </div>
            </article>
        </div>
    </section>
  )
}

export default CardCont
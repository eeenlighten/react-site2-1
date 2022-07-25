import React from 'react'


const imgtxt = [
  {
    image1: "images/sketch01.jpg",
    image2: "images/yellowarrow.png",
    title: "현장스케치1",
    desc: "현장 학습 보러가기",
    id: 0
  },
  {
    image1: "images/sketch02.jpg",
    image2: "images/yellowarrow.png",
    title: "현장스케치2",
    desc: "현장 학습 보러가기",
    id: 1
  },
  {
    image1: "images/sketch03.jpg",
    image2: "images/yellowarrow.png",
    title: "현장스케치3",
    desc: "현장 학습 보러가기",
    id: 3
  },
  {
    image1: "images/sketch04.jpg",
    image2: "images/yellowarrow.png",
    title: "현장스케치4",
    desc: "현장 학습 보러가기",
    id: 4
  },
  {
    image1: "images/sketch05.jpg",
    image2: "images/yellowarrow.png",
    title: "현장스케치5",
    desc: "현장 학습 보러가기",
    id: 5
  },
  {
    image1: "images/sketch06.jpg",
    image2: "images/yellowarrow.png",
    title: "현장스케치6",
    desc: "현장 학습 보러가기",
    id: 6
  },
  {
    image1: "images/sketch07.jpg",
    image2: "images/yellowarrow.png",
    title: "현장스케치7",
    desc: "현장 학습 보러가기",
    id: 7
  },
  {
    image1: "images/sketch08.jpg",
    image2: "images/yellowarrow.png",
    title: "현장스케치8",
    desc: "현장 학습 보러가기",
    id: 8
  }
]

const imgtxt2 = [
  {
    title: "현장스케치",
    desc: "펫 아카데미 전용 훈련장에서 현장 실습을 하고 있습니다"
  }
]

function Imginfo({title, desc, image1, image2}){
  return (
  <>
    <article className="imageType__sketch">
      <figure className="sketch__header">
        <img className="img" src={image1} alt={title} />
      </figure>
      <div className="sketch__body">
        <h3 className="title">{title}</h3>
        <p className="desc">{desc}</p>
        <a href="/" className="btn">
          <img className="img" src={image2} alt={title} />
        </a>
      </div>
    </article>
  </>
  )
}

function ImgCont(props) {
  return (
    <section id="imageType" className={props.fonts}>
      <h2>{imgtxt2[0].title}</h2>
      <p>{imgtxt2[0].desc}</p>
      <div className="imageType__inner container">
         {imgtxt.map((txt) => (
                <Imginfo 
                title={txt.title}
                desc={txt.desc}
                image1={txt.image1} 
                image2={txt.image2}
                key={txt.id}/>
              ))}   
      </div>
    </section>
  )
}

export default ImgCont
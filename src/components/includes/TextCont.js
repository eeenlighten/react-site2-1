import React from 'react'

const texttxt = [
    {
      title: "반려동물 관리사",
      desc1: "반려동물 케어 전반을 익혀 기본부터",
      desc2: "한 발 앞서나가는 만능 펫테이너의 필수 소양",
      id: 0
    },
    {
      title: "반려동물식품관리사",
      desc1: "블루오션 끝.판.왕!",
      desc2: "반려동물 먹거리 산업 필수 교육 과정",
      id: 1
    },
    {
      title: "반려동물 행동교정사",
      desc1: "반려동물 케어 전반을 익혀 기본부터",
      desc2: "반려동물을 잘 다루는 사람이 시장에서 성공한다! 반려동물 산업의 필수인력!",
      id: 2
    },
    {
      title: "펫뷰티션",
      desc1: "반려동물 산업의 중심!",
      desc2: "위생부터 미용, 의상 제작부터 악세서리까지",
      id: 3
    }
  ]

  const texttxt2 = [
    {
        title: 'PET MASTER',
        desc1: '펫마스터',
        desc2: '전문과정',
        desc3: '펫마스터로 취업하기 위한 전문 과정입니다.',
        desc4: '여러분들도 도전해보세요!',
        
    }
  ] 

  function Textinfo({title, desc1, desc2}){
    return (
      <>
        <div className="text">
            <h3>{title}</h3>
            <p>{desc1}<br/>{desc2}</p>
        </div>
    </>
    )
  }


function TextCont(props) {
  return (
    <section id="textType" className={props.fonts}> 
        <div className="textType__wrap">
            <h2 className="ir_so"> 교육과정 </h2>    
            <div className="textType__text">                  
                <span>{texttxt2[0].title}</span>
                <h2>{texttxt2[0].desc1}<br/>{texttxt2[0].desc2}
                </h2>
                <p>{texttxt2[0].desc3}<br/>{texttxt2[0].desc4}</p>
            </div>
            <div className="textType__inner container">
                {texttxt.map((txt) => (
                    <Textinfo 
                    desc1={txt.desc1}
                    desc2={txt.desc2}
                    title={txt.title}
                    key={txt.id}/>
                ))} 
            </div>
        </div>    
    </section>
  )
}

export default TextCont
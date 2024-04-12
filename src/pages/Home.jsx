import React from 'react';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  // triggerOnce 옵션을 제거하여 요소가 화면에 들어올 때마다 트리거되도록 설정
  const [ref1, inView1] = useInView({
    threshold: 0.5,
  });

  const [ref2, inView2] = useInView({
    threshold: 0.5,
  });

  const [ref3, inView3] = useInView({
    threshold: 0.5,
  });

  const [ref4, inView4] = useInView({
    threshold: 0.5,
  });

  return (
    <main className="flex flex-col justify-around">

      <section ref={ref1} className="flex justify-center items-center my-20">
        <div className={`flex flex-col items-center p-8 bg-white rounded-xl max-w-4xl my-12 mx-4 md:mx-8 transition-opacity duration-1000 ${inView1 ? 'opacity-100' : 'opacity-0'}`}>
          <img src="/src/assets/EcoLogo.png" className="w-full max-w-md sm:max-w-lg md:max-w-xl rounded-2xl" alt="EcoSketch Logo" />
          <div className="py-10 px-6 text-center">
            <p className="text-gray-700">에코스케치는 지속 가능한 커피 생산을 위해 애쓰는 원두 회사입니다.
              우리는 세계 각지의 소규모 농장에서 재배된 최상급 원두만을 엄선하여 공급합니다.
              모든 원두는 공정 무역 인증을 받아 농부들이 정당한 대가를 받을 수 있도록 보장하며,
              친환경적인 방법으로 재배되었습니다. 에코스케치의 커피는 깊고 풍부한 맛이 특징이며,
              각 원두의 독특한 풍미를 살리기 위해 전문 로스터와 협력하여 세심하게 로스팅합니다.
              우리의 비전은 지속 가능한 커피 산업을 만들어가는 것이며,
              매일 한 잔의 커피가 세계 곳곳의 커뮤니티에 긍정적인 변화를 가져오길 희망합니다.</p>
          </div>
        </div>
      </section>
      
      <section ref={ref2} className={`center-container my-20 transition-opacity duration-1000 ${inView2 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-40 mx-auto my-24 px-4 md:px-16">
          <div className="md:w-96 py-10 md:py-40">
            <p>에코스케치는 지속 가능한 커피 생산을 위해 애쓰는 원두 회사입니다.
              우리는 세계 각지의 소규모 농장에서 재배된 최상급 원두만을 엄선하여 공급합니다.
              모든 원두는 공정 무역 인증을 받아 농부들이 정당한 대가를 받을 수 있도록 보장하며,
              친환경적인 방법으로 재배되었습니다. 에코스케치의 커피는 깊고 풍부한 맛이 특징이며,
              각 원두의 독특한 풍미를 살리기 위해 전문 로스터와 협력하여 세심하게 로스팅합니다.
              우리의 비전은 지속 가능한 커피 산업을 만들어가는 것이며,
              매일 한 잔의 커피가 세계 곳곳의 커뮤니티에 긍정적인 변화를 가져오길 희망합니다.</p>
          </div>
          <img src="/src/assets/CoffeeHome2.jpg" className="w-96 max-w-md sm:max-w-lg md:max-w-xl md:h-auto rounded-2xl" />
        </div>
      </section>

      <section ref={ref3} className={`center-container transition-opacity duration-1000 ${inView3 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-40 mx-auto my-36 px-4 md:px-16">
          <img src="/src/assets/CoffeeHome.jpg" className="w-96 h-auto max-w-md sm:max-w-lg md:max-w-xl rounded-2xl" />
          <div className="md:w-96 py-10 md:py-40">
            <p>에코스케치는 지속 가능한 커피 생산을 위해 애쓰는 원두 회사입니다.
              우리는 세계 각지의 소규모 농장에서 재배된 최상급 원두만을 엄선하여 공급합니다.
              모든 원두는 공정 무역 인증을 받아 농부들이 정당한 대가를 받을 수 있도록 보장하며,
              친환경적인 방법으로 재배되었습니다. 에코스케치의 커피는 깊고 풍부한 맛이 특징이며,
              각 원두의 독특한 풍미를 살리기 위해 전문 로스터와 협력하여 세심하게 로스팅합니다.
              우리의 비전은 지속 가능한 커피 산업을 만들어가는 것이며,
              매일 한 잔의 커피가 세계 곳곳의 커뮤니티에 긍정적인 변화를 가져오길 희망합니다.</p>
          </div>
        </div>
      </section>

      <section ref={ref4} className={`center-container transition-opacity duration-1000 ${inView4 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-40 mx-auto my-36 px-4 md:px-16">
          <div className="md:w-96 py-10 md:py-40">
            <p>에코스케치는 지속 가능한 커피 생산을 위해 애쓰는 원두 회사입니다.
              우리는 세계 각지의 소규모 농장에서 재배된 최상급 원두만을 엄선하여 공급합니다.
              모든 원두는 공정 무역 인증을 받아 농부들이 정당한 대가를 받을 수 있도록 보장하며,
              친환경적인 방법으로 재배되었습니다. 에코스케치의 커피는 깊고 풍부한 맛이 특징이며,
              각 원두의 독특한 풍미를 살리기 위해 전문 로스터와 협력하여 세심하게 로스팅합니다.
              우리의 비전은 지속 가능한 커피 산업을 만들어가는 것이며,
              매일 한 잔의 커피가 세계 곳곳의 커뮤니티에 긍정적인 변화를 가져오길 희망합니다.</p>
          </div>
          <img src="/src/assets/CoffeeHome3.jpg" className="w-96 h-auto max-w-md sm:max-w-lg md:max-w-xl rounded-2xl" />
        </div>
      </section>
    </main>
  );
};

export default Home;
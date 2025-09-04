'use client'

import { Container } from '../ui/Container'
import { useRef } from 'react'

interface InteractiveProps {
  language: 'ko' | 'en'
}

export function Interactive({ language }: InteractiveProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const title = language === 'ko' 
    ? '스마트폰 하나로 완성되는 3D 척추 분석'
    : '3D Spine Analysis Completed with Just One Smartphone'

  const subtitle = language === 'ko'
    ? '모든 스마트폰에서 가능한 정밀하고 실제 크기의 3D 신체 모델링'
    : 'Precise and actual-size 3D body modeling possible on all smartphones'

  return (
    <section className="relative min-h-screen sm:h-[600px] lg:min-h-screen h-[900px] lg:h-auto bg-gray-50 overflow-hidden lg:overflow-visible overflow-x-hidden">
      <Container size="1600" className="relative z-10 h-full">
        {/* 제목과 부제목을 위로 위치 */}
        <div className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-6 sm:pb-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-4">
            {subtitle}
          </p>
        </div>

      </Container>

      {/* 하단에 고정된 반원 배경과 핸드폰 */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        {/* 애니메이션 선 - 하나만 */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pointer-events-none">
          <div 
            className="rounded-t-full border-[2px] w-[400px] h-[200px] sm:w-[500px] sm:h-[250px] md:w-[650px] md:h-[325px] lg:w-[850px] lg:h-[425px] xl:w-[1050px] xl:h-[525px]"
            style={{
              borderColor: '#02D8C2',
              borderBottomWidth: '0px',
              animation: 'singleExpandFade 3s ease-out infinite'
            }}
          />
        </div>
        
        {/* 반원 배경 - 더 크게 */}
        <div 
          className="gradient-primary rounded-t-full w-[350px] h-52 sm:w-[450px] sm:h-60 md:w-[600px] md:h-72 lg:w-[800px] lg:h-96 xl:w-[1000px] xl:h-[500px] relative"
          style={{
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0
          }}
        >
          {/* 핸드폰 목업 - 반원 하단 중앙에 위치 */}
          <div className="absolute -bottom-6 sm:-bottom-8 md:-bottom-12 lg:-bottom-16 left-1/2 transform -translate-x-1/2">
            {/* 간단한 안내 텍스트 - 핸드폰 상단 */}
            <div className="w-full absolute -top-6 sm:-top-8 md:-top-10 lg:-top-12 left-1/2 transform -translate-x-1/2 text-center z-40">
              <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                <img 
                  src="/images/drag.svg" 
                  alt="Drag icon"
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
                />
                <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
                  {language === 'ko' 
                    ? '드래그해서 척추 각도 확인하기'
                    : 'Drag to check spine angle'
                  }
                </p>
              </div>
            </div>
            
            <div className="relative">
              {/* 핸드폰 이미지 - 데스크톱에서만 보이도록 */}
              <img 
                src="/images/phone-img.png" 
                alt="Phone Mockup"
                className="w-72 h-auto md:w-80 lg:w-96 relative z-20 drop-shadow-2xl lg:block hidden"
                style={{
                  filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3)) drop-shadow(0 10px 25px rgba(0, 0, 0, 0.2))'
                }}
              />
              
              {/* 핸드폰 화면 영역 - scoliosis.html iframe */}
              {/* 데스크톱: 핸드폰 이미지 위에 절대 위치 */}
              <div className="absolute top-9 md:top-10 lg:top-12 left-1/2 transform -translate-x-1/2 z-30 lg:block hidden">
                <div className="w-60 h-[480px] md:w-64 md:h-[520px] lg:w-80 lg:h-[640px] rounded-3xl overflow-hidden bg-black">
                  <iframe
                    ref={iframeRef}
                    src="/Interact/scoliosis.html"
                    className="w-full h-full border-none"
                    title="3D Spine Interactive"
                    allow="accelerometer; gyroscope"
                    style={{ touchAction: 'auto', pointerEvents: 'auto' }}
                  />
                </div>
              </div>

              {/* 태블릿/모바일: 폰 이미지 테두리 효과와 함께 */}
              <div className="lg:hidden relative w-72 h-auto md:w-80 mx-auto">
                <div className="relative bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
                  {/* 상단 테두리 (노치 영역) */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-6 bg-gray-900 rounded-b-xl z-40"></div>
                  
                  {/* iframe 영역 */}
                  <div className="w-full h-[500px] md:h-[550px] rounded-[2rem] overflow-hidden bg-black relative">
                    <iframe
                      ref={iframeRef}
                      src="/Interact/scoliosis.html"
                      className="w-full h-full border-none"
                      title="3D Spine Interactive"
                      allow="accelerometer; gyroscope"
                      style={{ touchAction: 'auto', pointerEvents: 'auto' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
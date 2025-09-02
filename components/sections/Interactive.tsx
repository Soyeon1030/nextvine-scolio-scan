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
    <section className="relative min-h-screen bg-gray-50 overflow-hidden">
      <Container size="1600" className="relative z-10 h-full">
        {/* 제목과 부제목을 화면 상단/중앙에 위치 */}
        <div className="pt-20 pb-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            {subtitle}
          </p>
        </div>


      </Container>

      {/* 하단에 고정된 반원 배경과 핸드폰 */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        {/* 반원 배경 - 더 크게 */}
        <div 
          className="gradient-primary rounded-t-full w-[600px] h-72 md:w-[800px] md:h-96 lg:w-[1000px] lg:h-[500px] relative"
          style={{
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0
          }}
        >
          {/* 핸드폰 목업 - 반원 하단 중앙에 위치 */}
          <div className="absolute -bottom-8 md:-bottom-12 lg:-bottom-16 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              {/* 핸드폰 이미지 - 더 크게 */}
              <img 
                src="/images/phone-img.png" 
                alt="Phone Mockup"
                className="w-64 h-auto md:w-80 lg:w-96 relative z-20"
              />
              
              {/* 핸드폰 화면 영역 - scoliosis.html iframe */}
              <div className="absolute top-8 md:top-10 lg:top-12 left-1/2 transform -translate-x-1/2 z-30">
                <div className="w-52 h-[420px] md:w-64 md:h-[520px] lg:w-80 lg:h-[640px] rounded-3xl overflow-hidden bg-black">
                  <iframe
                    ref={iframeRef}
                    src="/Interact/scoliosis.html"
                    className="w-full h-full border-none"
                    title="3D Spine Interactive"
                    allow="accelerometer; gyroscope"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
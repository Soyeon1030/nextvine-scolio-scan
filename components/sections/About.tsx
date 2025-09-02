'use client'

import { motion } from 'framer-motion'
import { Container } from '../ui/Container'

interface AboutProps {
  language: 'ko' | 'en'
}

export function About({ language }: AboutProps) {
  const content = {
    ko: {
      title: '우리가 만드는 변화',
      subtitle: 'AI 기술로 척추 건강을 혁신합니다',
      description: '복잡한 병원 절차 없이, 집에서 간편하게 우리 아이의 척추 상태를 확인하세요.'
    },
    en: {
      title: 'The Change We Create',
      subtitle: 'Revolutionizing spinal health with AI technology',
      description: 'Check your child\'s spinal condition easily at home without complex hospital procedures.'
    }
  }

  return (
    <div className="h-full flex items-center justify-center relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/spine_Pain.mp4" type="video/mp4" />
      </video>
      
      {/* Dark overlay with vignette effect for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="absolute inset-0 bg-vignette"></div>
      
      {/* Content */}
      <Container size="1600" className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight-custom"
          >
            {content[language].title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-primary-300 font-medium mb-8"
          >
            {content[language].subtitle}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-200 leading-relaxed"
          >
            {content[language].description}
          </motion.p>
        </div>
      </Container>
    </div>
  )
}
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
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <Container size="1600">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            {content[language].title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-primary-600 font-medium mb-8"
          >
            {content[language].subtitle}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            {content[language].description}
          </motion.p>
        </div>
      </Container>
    </div>
  )
}
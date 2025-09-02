'use client'

import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { Shield, Brain, Heart, Clock } from 'lucide-react'

interface FeaturesProps {
  language: 'ko' | 'en'
}

export function Features({ language }: FeaturesProps) {
  const content = {
    ko: {
      title: '왜 Scoliscan인가요?',
      features: [
        {
          icon: Shield,
          title: 'X-ray 없는 안전한 검사',
          description: '방사선 노출 걱정 없이 안전하게 척추 상태를 확인할 수 있습니다.'
        },
        {
          icon: Brain,
          title: 'AI 기반 정확한 분석',
          description: '첨단 AI 기술로 전문의 수준의 정확한 척추 분석을 제공합니다.'
        },
        {
          icon: Heart,
          title: '집에서 편안하게',
          description: '병원에 가지 않고도 집에서 편안하게 검사를 받을 수 있습니다.'
        },
        {
          icon: Clock,
          title: '정기적인 모니터링',
          description: '매월 정기 검사로 아이의 성장과 척추 건강을 지속적으로 관리합니다.'
        }
      ]
    },
    en: {
      title: 'Why Scoliscan?',
      features: [
        {
          icon: Shield,
          title: 'Safe Examination Without X-rays',
          description: 'Check spinal condition safely without worrying about radiation exposure.'
        },
        {
          icon: Brain,
          title: 'Accurate AI-based Analysis',
          description: 'Provides accurate spinal analysis at specialist level with advanced AI technology.'
        },
        {
          icon: Heart,
          title: 'Comfortable at Home',
          description: 'Get examined comfortably at home without having to visit the hospital.'
        },
        {
          icon: Clock,
          title: 'Regular Monitoring',
          description: 'Continuously manage your child\'s growth and spinal health with monthly regular checkups.'
        }
      ]
    }
  }

  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-50">
      <Container size="1600">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight-custom"
          >
            {content[language].title}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content[language].features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}
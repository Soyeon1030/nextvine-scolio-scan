'use client'

import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { Smartphone, FileText, Users, Zap } from 'lucide-react'

interface ServicesProps {
  language: 'ko' | 'en'
}

export function Services({ language }: ServicesProps) {
  const content = {
    ko: {
      title: '간단한 3단계 과정',
      subtitle: '복잡한 과정 없이 쉽고 빠르게',
      services: [
        {
          icon: Smartphone,
          step: '1',
          title: '앱으로 사진 촬영',
          description: '스마트폰으로 아이의 등 사진을 찍어주세요. 가이드에 따라 쉽게 촬영할 수 있습니다.'
        },
        {
          icon: Zap,
          step: '2',
          title: 'AI 자동 분석',
          description: '최첨단 AI가 사진을 분석하여 척추 상태를 정확하게 진단합니다.'
        },
        {
          icon: FileText,
          step: '3',
          title: '전문의 리포트',
          description: '전문의가 검토한 상세한 분석 리포트와 건강 관리 가이드를 받아보세요.'
        },
        {
          icon: Users,
          step: '+',
          title: '지속적인 관리',
          description: '매월 정기 검사와 전문의 상담으로 건강한 성장을 함께합니다.'
        }
      ]
    },
    en: {
      title: 'Simple 3-Step Process',
      subtitle: 'Easy and fast without complex procedures',
      services: [
        {
          icon: Smartphone,
          step: '1',
          title: 'Take Photo with App',
          description: 'Take a photo of your child\'s back with your smartphone. Easy to shoot following the guide.'
        },
        {
          icon: Zap,
          step: '2',
          title: 'AI Automatic Analysis',
          description: 'State-of-the-art AI analyzes photos to accurately diagnose spinal conditions.'
        },
        {
          icon: FileText,
          step: '3',
          title: 'Specialist Report',
          description: 'Receive detailed analysis reports and health management guides reviewed by specialists.'
        },
        {
          icon: Users,
          step: '+',
          title: 'Continuous Care',
          description: 'Support healthy growth together with monthly regular checkups and specialist consultations.'
        }
      ]
    }
  }

  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Container size="1600">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight-custom"
          >
            {content[language].title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-gray-300"
          >
            {content[language].subtitle}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content[language].services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="text-center relative"
              >
                {/* 단계 번호 */}
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 text-lg font-bold">
                  {service.step}
                </div>

                {/* 아이콘 */}
                <div className="w-16 h-16 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary-400" />
                </div>

                {/* 제목 */}
                <h3 className="text-xl font-bold mb-3">
                  {service.title}
                </h3>

                {/* 설명 */}
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>

                {/* 연결선 (마지막 항목 제외) */}
                {index < content[language].services.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-8 h-0.5 bg-gray-600 transform translate-x-4" />
                )}
              </motion.div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}
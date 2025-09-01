'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

interface ContactProps {
  language: 'ko' | 'en'
}

export function Contact({ language }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const content = {
    ko: {
      title: '출시 알림 받기',
      subtitle: 'Scoliscan 출시 소식을 가장 먼저 받아보세요',
      form: {
        name: '이름',
        email: '이메일',
        phone: '전화번호 (선택)',
        message: '문의사항 (선택)',
        submit: '알림 신청하기'
      },
      contact: {
        title: '문의하기',
        email: 'contact@scoliscan.com',
        phone: '+82-2-1234-5678',
        address: '서울시 강남구 테헤란로 123'
      }
    },
    en: {
      title: 'Get Launch Notifications',
      subtitle: 'Be the first to receive Scoliscan launch news',
      form: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone (Optional)',
        message: 'Inquiry (Optional)',
        submit: 'Subscribe for Notifications'
      },
      contact: {
        title: 'Contact Us',
        email: 'contact@scoliscan.com',
        phone: '+82-2-1234-5678',
        address: '123 Teheran-ro, Gangnam-gu, Seoul'
      }
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 여기에 폼 제출 로직 구현
    console.log('Form submitted:', formData)
    alert(language === 'ko' ? '알림 신청이 완료되었습니다!' : 'Notification subscription completed!')
  }

  return (
    <div id="contact-form" className="h-full flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-blue-50">
      <Container size="1600">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* 왼쪽: 폼 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {content[language].title}
              </h2>
              <p className="text-lg text-gray-600">
                {content[language].subtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {content[language].form.name}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {content[language].form.email}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {content[language].form.phone}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {content[language].form.message}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>{content[language].form.submit}</span>
              </Button>
            </form>
          </motion.div>

          {/* 오른쪽: 연락처 정보 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:pl-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              {content[language].contact.title}
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <p className="text-gray-900 font-medium">{content[language].contact.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Phone</p>
                  <p className="text-gray-900 font-medium">{content[language].contact.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Address</p>
                  <p className="text-gray-900 font-medium">{content[language].contact.address}</p>
                </div>
              </div>
            </div>

            {/* 추가 정보 */}
            <div className="mt-12 p-6 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl text-white">
              <h4 className="text-lg font-bold mb-2">
                {language === 'ko' ? '🚀 곧 출시됩니다!' : '🚀 Coming Soon!'}
              </h4>
              <p className="text-primary-100">
                {language === 'ko' 
                  ? '혁신적인 AI 척추 건강 모니터링 서비스를 준비하고 있습니다.' 
                  : 'We are preparing an innovative AI spinal health monitoring service.'}
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  )
}
'use client'

import { Button } from './ui/Button'
import { Container } from './ui/Container'
import { Globe } from 'lucide-react'
import { useLanguage } from '@/app/page'

// 커스텀 훅으로 스크롤 기능 추가
function useScrollToSection() {
  const scrollToSection = (sectionIndex: number) => {
    // FullPageScroll 컴포넌트의 스크롤 함수 호출
    const event = new CustomEvent('scrollToSection', { 
      detail: { sectionIndex } 
    })
    window.dispatchEvent(event)
  }
  
  return { scrollToSection }
}

export function Navigation() {
  const { language, setLanguage } = useLanguage()
  const { scrollToSection } = useScrollToSection()

  const toggleLanguage = () => {
    setLanguage(language === 'ko' ? 'en' : 'ko')
  }

  const handleNotifyClick = () => {
    // Contact 섹션(마지막 섹션)으로 스크롤 - 인덱스 4
    scrollToSection(4)
  }


  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
      <Container size="1600">
        <nav className="flex items-center justify-between h-16">
          {/* 로고 */}
          <div className="flex-shrink-0 cursor-pointer flex items-center" onClick={() => scrollToSection(0)}>
            <img 
              src="/images/logo.svg" 
              alt="Scoliscan Logo"
              className="h-8 w-auto"
            />
          </div>

          {/* 중앙 여백 */}
          <div className="flex-1"></div>

          {/* 언어 전환 및 CTA */}
          <div className="flex items-center space-x-4">
            {/* 언어 전환 버튼 */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium text-white hover:bg-gray-100 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase font-semibold">
                {language === 'ko' ? 'KR' : 'EN'}
              </span>
            </button>

            {/* 출시 알림 받기 버튼 */}
            <Button 
              variant="white"
              onClick={handleNotifyClick}
              size="sm"
              className="whitespace-nowrap"
            >
              {language === 'ko' ? '출시 알림 받기' : 'Get Launch Notifications'}
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  )
}
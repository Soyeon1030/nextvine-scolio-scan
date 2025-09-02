'use client'

import { useState, createContext, useContext } from 'react'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Features } from '@/components/sections/Features'
import { Interactive } from '@/components/sections/Interactive'
import { Solution } from '@/components/sections/Solution'
import { Services } from '@/components/sections/Services'
import { Contact } from '@/components/sections/Contact'
import { FullPageScroll } from '@/components/ui/FullPageScroll'

// 언어 컨텍스트
const LanguageContext = createContext<{
  language: 'ko' | 'en'
  setLanguage: (lang: 'ko' | 'en') => void
}>({
  language: 'ko',
  setLanguage: () => {}
})

export const useLanguage = () => useContext(LanguageContext)

export default function Home() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko')

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <main className="relative">
        {/* 네비게이션 */}
        <Navigation />

        {/* 풀페이지 스크롤 */}
        <FullPageScroll>
          {/* Hero 섹션 */}
          <Hero language={language} />

          {/* About 섹션 */}
          <About language={language} />

          {/* Features 섹션 */}
          <Features language={language} />

          {/* Interactive 섹션 */}
          <Interactive language={language} />

          {/* Solution 섹션 */}
          <Solution language={language} />

          {/* Services 섹션 */}
          <Services language={language} />

          {/* Contact 섹션 */}
          <Contact language={language} />
        </FullPageScroll>
      </main>
    </LanguageContext.Provider>
  )
}
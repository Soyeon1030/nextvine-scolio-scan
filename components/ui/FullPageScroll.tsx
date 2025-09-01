'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface FullPageScrollProps {
  children: React.ReactNode[]
  className?: string
}

export function FullPageScroll({ children, className = '' }: FullPageScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const touchStartY = useRef<number>(0)

  const scrollToSection = (sectionIndex: number) => {
    if (isScrolling || sectionIndex < 0 || sectionIndex >= children.length) return
    
    setIsScrolling(true)
    setCurrentSection(sectionIndex)
    
    if (containerRef.current) {
      const targetY = sectionIndex * window.innerHeight
      containerRef.current.style.transform = `translateY(-${targetY}px)`
    }
    
    setTimeout(() => {
      setIsScrolling(false)
    }, 800)
  }

  useEffect(() => {
    // 외부에서 스크롤 섹션 이벤트 처리
    const handleScrollToSection = (e: CustomEvent) => {
      scrollToSection(e.detail.sectionIndex)
    }

    window.addEventListener('scrollToSection', handleScrollToSection as EventListener)

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      
      if (isScrolling) return
      
      if (e.deltaY > 0) {
        // 아래로 스크롤
        scrollToSection(currentSection + 1)
      } else {
        // 위로 스크롤
        scrollToSection(currentSection - 1)
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return
      
      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault()
          scrollToSection(currentSection + 1)
          break
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault()
          scrollToSection(currentSection - 1)
          break
        case 'Home':
          e.preventDefault()
          scrollToSection(0)
          break
        case 'End':
          e.preventDefault()
          scrollToSection(children.length - 1)
          break
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling) return
      
      const touchEndY = e.changedTouches[0].clientY
      const diff = touchStartY.current - touchEndY
      const minSwipeDistance = 50
      
      if (Math.abs(diff) > minSwipeDistance) {
        if (diff > 0) {
          // 위로 스와이프 (아래 섹션으로)
          scrollToSection(currentSection + 1)
        } else {
          // 아래로 스와이프 (위 섹션으로)
          scrollToSection(currentSection - 1)
        }
      }
    }

    // 이벤트 리스너 등록
    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      window.removeEventListener('scrollToSection', handleScrollToSection as EventListener)
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [currentSection, isScrolling, children.length])

  // 창 크기 변경 시 현재 섹션으로 다시 스크롤
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const targetY = currentSection * window.innerHeight
        containerRef.current.style.transform = `translateY(-${targetY}px)`
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [currentSection])

  return (
    <div className={`fixed inset-0 overflow-hidden ${className}`}>
      {/* 스크롤 인디케이터 */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 space-y-3">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`block w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              currentSection === index
                ? 'bg-primary-600 border-primary-600 scale-125'
                : 'bg-transparent border-white/60 hover:border-white'
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>

      {/* 섹션 컨테이너 */}
      <motion.div
        ref={containerRef}
        className="flex flex-col"
        style={{
          height: `${children.length * 100}vh`,
          transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        {children.map((child, index) => (
          <section
            key={index}
            className="h-screen w-full flex-shrink-0 relative"
            style={{ height: '100vh' }}
          >
            {child}
          </section>
        ))}
      </motion.div>
    </div>
  )
}
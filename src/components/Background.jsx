import React, { useEffect, useRef } from "react"

const INITIAL_POSITIONS = [
  { x: -4, y: 0 },
  { x: -4, y: 0 },
  { x: 20, y: -8 },
  { x: 20, y: -8 },
]

const AnimatedBackground = () => {
  const blobRefs = useRef([])
  const requestRef = useRef(null)

  useEffect(() => {
    const updatePosition = () => {
      const scrollY = window.scrollY || window.pageYOffset

      blobRefs.current.forEach((blob, index) => {
        if (!blob) return
        const initialPos = INITIAL_POSITIONS[index]
        if (!initialPos) return

        // Hitung posisi berdasarkan scroll
        const xOffset = Math.sin(scrollY / 120 + index * 0.8) * 180
        const yOffset = Math.cos(scrollY / 120 + index * 0.8) * 35
        const x = initialPos.x + xOffset
        const y = initialPos.y + yOffset

        blob.style.transform = `translate3d(${x}px, ${y}px, 0)`
      })

      requestRef.current = null
    }

    const onScroll = () => {
      // Jalankan animasi hanya saat terjadi peristiwa scroll
      if (requestRef.current === null) {
        requestRef.current = requestAnimationFrame(updatePosition)
      }
    }

    // Panggil sekali untuk inisialisasi posisi awal
    updatePosition()

    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", onScroll)
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0">
        {/* Shape 1: Yellow Box */}
        <div
          ref={(el) => (blobRefs.current[0] = el)}
          className="absolute top-20 left-[8%] w-20 h-20 bg-[#ffcf33] border-3 border-[#111111] shadow-[4px_4px_0px_#111111] rotate-6 transition-transform duration-300 ease-out"
        />

        {/* Shape 2: Blue Box */}
        <div
          ref={(el) => (blobRefs.current[1] = el)}
          className="absolute top-[42%] right-[8%] w-16 h-16 bg-[#4fc3f7] border-3 border-[#111111] shadow-[4px_4px_0px_#111111] -rotate-12 hidden sm:block transition-transform duration-300 ease-out"
        />

        {/* Shape 3: Red Box */}
        <div
          ref={(el) => (blobRefs.current[2] = el)}
          className="absolute bottom-[12%] left-[15%] w-24 h-24 bg-[#ff5c58] border-3 border-[#111111] shadow-[5px_5px_0px_#111111] rotate-12 transition-transform duration-300 ease-out"
        />

        {/* Shape 4: Green Box */}
        <div
          ref={(el) => (blobRefs.current[3] = el)}
          className="absolute bottom-[18%] right-[22%] w-12 h-12 bg-[#7bd88f] border-3 border-[#111111] shadow-[3px_3px_0px_#111111] -rotate-6 hidden sm:block transition-transform duration-300 ease-out"
        />
      </div>
    </div>
  )
}

export default AnimatedBackground
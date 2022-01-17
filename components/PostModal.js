import React from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

export default function PostModal() {
  const [isOpen, setIsOpen] = useRecoilState(modalState)

  return (
    <div>
      HOI
      {isOpen && <div>modal Open</div>}
    </div>
  )
}

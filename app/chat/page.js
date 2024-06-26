'use client'
import { useState } from 'react'
import ChatPanel from './panel/panel'
import Users from './users'

export default function Chat() {
  const currentUserId = 2
  const [otherUserId, setOtherUserId] = useState(1)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="h-dvh lg:flex">
      <Users
        isOpen={isOpen}
        currentUserId={currentUserId}
        otherUserId={otherUserId}
        onSelect={(id) => setOtherUserId(id)}
        onClose={() => setIsOpen(false)}
      />
      <ChatPanel otherUserId={otherUserId} onBack={() => setIsOpen(true)} />
    </div>
  )
}

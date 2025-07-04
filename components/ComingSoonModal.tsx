'use client'

import { X, Clock, Bell } from 'lucide-react'

interface ComingSoonModalProps {
  open: boolean
  onClose: () => void
  onJoinWaitlist?: () => void
}

export default function ComingSoonModal({ open, onClose, onJoinWaitlist }: ComingSoonModalProps) {
  const handleJoinWaitlist = () => {
    onClose()
    if (onJoinWaitlist) {
      onJoinWaitlist()
    }
  }
  if (!open) return null
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 min-h-screen">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
        {/* Modal */}
      <div className="relative bg-gradient-card dark:bg-gradient-card-dark rounded-2xl shadow-xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto transform scale-100 transition-transform duration-200 m-auto border border-bg-tertiary dark:border-bg-dark-tertiary">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-text-tertiary hover:text-text-primary dark:text-text-dark-tertiary dark:hover:text-text-dark-primary transition-colors z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="text-center py-4">
          <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
            <Clock className="text-white" size={32} />
          </div>          <h2 className="text-2xl font-bold text-text-primary dark:text-text-dark-primary mb-2" style={{letterSpacing: '-0.005em'}}>
            Coming Soon
          </h2>
          <p className="text-text-secondary dark:text-text-dark-secondary mb-6" style={{lineHeight: '1.6'}}>
            We&#39;re putting the finishing touches on our pricing plans. Join our waitlist to be notified when pricing becomes available.
          </p>
          
          <div className="space-y-3">            <button
              onClick={handleJoinWaitlist}
              className="w-full btn-primary flex items-center justify-center gap-2"
            >
              <Bell size={20} className="mr-2" />
              Join Waitlist for Updates
            </button>
            <button
              onClick={onClose}
              className="w-full btn-secondary border-2 border-primary-blue text-primary-blue font-semibold rounded-[12px] transition-all hover:bg-primary-blue hover:text-white dark:border-secondary-purple dark:text-secondary-purple dark:hover:bg-secondary-purple"
              style={{fontSize: 16, lineHeight: '24px', padding: '16px 0'}}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

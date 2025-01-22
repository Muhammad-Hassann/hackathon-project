import type React from "react"

interface ThankYouDialogProps {
  isOpen: boolean
  onClose: () => void
}

const ThankYouDialog: React.FC<ThankYouDialogProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Thank You for Your Order!</h2>
        <p className="text-gray-600 mb-6 text-center">
          Your order has been successfully placed. We'll send you an email with the order details and tracking
          information.
        </p>
        <button
          onClick={onClose}
          className="w-full bg-primary-yellow text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  )
}

export default ThankYouDialog


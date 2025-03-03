import React, { useState } from 'react';
import { X } from 'lucide-react';

interface SubscriptionFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: 'annual' | 'lifetime';
}

const SubscriptionForm: React.FC<SubscriptionFormProps> = ({ isOpen, onClose, selectedPlan }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-[800px] shadow-lg rounded-md bg-white">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">
            {selectedPlan === 'annual' ? 'Plan Anual' : 'Plan de por Vida'} - Suscripción
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <iframe
          src="https://form.jotform.com/250614871477059"
          width="100%"
          height="600px"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          style={{ minWidth: '100%' }}
        >
          Cargando formulario...
        </iframe>
      </div>
    </div>
  );
};

export default SubscriptionForm;
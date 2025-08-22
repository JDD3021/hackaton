import React, { useState } from 'react';
import { Heart, CreditCard, User, Mail, Phone, MapPin, Check, X } from 'lucide-react';

interface DonationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonationForm({ isOpen, onClose }: DonationFormProps) {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  const predefinedAmounts = [25, 50, 100, 250, 500, 1000];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getSelectedAmount = () => {
    return selectedAmount || parseFloat(customAmount) || 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous intégreriez avec votre système de paiement (Stripe, PayPal, etc.)
    alert(`Merci pour votre don de ${getSelectedAmount()}€ !`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-3">
            <Heart className="w-8 h-8" />
            <div>
              <h2 className="text-2xl font-bold">Faire un don</h2>
              <p className="opacity-90">Soutenez l'éducation des jeunes filles leaders</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Donation Details */}
            <div className="space-y-6">
              {/* Donation Type */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Type de don</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setDonationType('one-time')}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      donationType === 'one-time'
                        ? 'border-purple-500 bg-purple-50 text-purple-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-semibold">Don unique</div>
                    <div className="text-sm opacity-70">Un don ponctuel</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDonationType('monthly')}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      donationType === 'monthly'
                        ? 'border-purple-500 bg-purple-50 text-purple-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-semibold">Don mensuel</div>
                    <div className="text-sm opacity-70">Soutien régulier</div>
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Montant du don</h3>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount('');
                      }}
                      className={`p-3 rounded-lg border-2 font-semibold transition-all ${
                        selectedAmount === amount
                          ? 'border-purple-500 bg-purple-50 text-purple-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {amount}€
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="Autre montant"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                  />
                  <span className="absolute right-3 top-3 text-gray-500">€</span>
                </div>
              </div>

              {/* Impact Information */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3">Impact de votre don</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>25€ = Fournitures scolaires pour 1 mois</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>100€ = Frais de scolarité pour 1 trimestre</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>500€ = Ordinateur portable pour les études</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Personal & Payment Info */}
            <div className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Informations personnelles
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Prénom"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="p-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Nom"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="p-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 mt-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full pl-11 p-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      placeholder="Téléphone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full pl-11 p-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Adresse
                </h4>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Adresse"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Ville"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="p-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Pays"
                      value={formData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      className="p-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Informations de paiement
                </h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nom sur la carte"
                    value={formData.cardName}
                    onChange={(e) => handleInputChange('cardName', e.target.value)}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Numéro de carte"
                    value={formData.cardNumber}
                    onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                    required
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="MM/AA"
                      value={formData.expiryDate}
                      onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                      className="p-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                      required
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      value={formData.cvv}
                      onChange={(e) => handleInputChange('cvv', e.target.value)}
                      className="p-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="text-lg font-semibold text-gray-900">
                Total: <span className="text-2xl text-purple-600">{getSelectedAmount()}€</span>
                {donationType === 'monthly' && <span className="text-sm text-gray-500">/mois</span>}
              </div>
            </div>
            <button
              type="submit"
              disabled={getSelectedAmount() === 0}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {donationType === 'monthly' ? 'Commencer le don mensuel' : 'Faire le don'}
            </button>
            <p className="text-xs text-gray-500 text-center mt-3">
              Paiement sécurisé. Vos informations sont protégées.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
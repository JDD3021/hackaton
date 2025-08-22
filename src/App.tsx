import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Users, BookOpen, Heart, Target, Briefcase, Star, Phone, Mail, MapPin } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-['Inter']">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Laalim
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('mission')} className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Mission
              </button>
              <button onClick={() => scrollToSection('objectifs')} className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Objectifs
              </button>
              <button onClick={() => scrollToSection('impact')} className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Impact
              </button>
              <button onClick={() => scrollToSection('beneficiaires')} className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Bénéficiaires
              </button>
              <button onClick={() => scrollToSection('partenaires')} className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Partenaires
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-purple-600 p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['mission', 'objectifs', 'impact', 'beneficiaires', 'partenaires'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors capitalize"
                  >
                    {section === 'beneficiaires' ? 'Bénéficiaires' : section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400"></div>
        
        {/* Hero Image */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/hero-background.jpg"
            alt="Young women studying"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white pt-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Plateforme d'Accompagnement, de Mentorat et de Suivi
          </h1>
          <p className="text-xl sm:text-2xl mb-8 font-light opacity-90 max-w-3xl mx-auto">
            Former une génération de jeunes filles éduquées, autonomes et leaders
          </p>
          <button 
            onClick={() => scrollToSection('mission')}
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-xl transform hover:scale-105"
          >
            Découvrir le Projet
          </button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white opacity-70" />
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Mission</h2>
              <div className="w-24 h-1 bg-purple-600 mb-8"></div>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Dans de nombreux pays africains, les jeunes filles abandonnent fréquemment l'école et l'université 
                  à cause de <span className="font-semibold text-purple-600">contraintes financières</span>, de mariages ou grossesses précoces, 
                  du manque de mentors, et des difficultés d'insertion professionnelle.
                </p>
                <p>
                  <span className="font-bold text-purple-600">Notre vision :</span> Former une génération de jeunes filles éduquées, autonomes et leaders.
                </p>
                <p>
                  <span className="font-bold text-purple-600">Notre mission :</span> Assurer un suivi continu des filles depuis le collège jusqu'à leur premier emploi 
                  à travers le mentorat, le soutien académique, financier et professionnel.
                </p>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative">
              <img
                src="/images/mission-students.jpg"
                alt="Young African women studying together"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectifs Section */}
      <section id="objectifs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Objectifs et Stratégies</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche holistique pour accompagner les jeunes filles à chaque étape de leur parcours
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Objectif 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                <BookOpen className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Suivi Scolaire et Orientation</h3>
              <p className="text-gray-600 leading-relaxed">
                Tutorats personnalisés, clubs d'études, et ateliers d'orientation pour maintenir l'engagement scolaire et guider les choix académiques.
              </p>
            </div>

            {/* Objectif 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-200 transition-colors">
                <Users className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Réseau de Mentors Féminins</h3>
              <p className="text-gray-600 leading-relaxed">
                Attribution de mentors expérimentés, sessions de coaching individuel et conférences inspirantes avec des femmes leaders.
              </p>
            </div>

            {/* Objectif 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-200 transition-colors">
                <Heart className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fonds de Soutien Financier</h3>
              <p className="text-gray-600 leading-relaxed">
                Bourses d'études, fourniture d'ordinateurs portables, et aide au logement pour éliminer les barrières financières.
              </p>
            </div>

            {/* Objectif 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Formations Complémentaires</h3>
              <p className="text-gray-600 leading-relaxed">
                Développement des soft skills, formations au leadership et compétences numériques pour préparer au monde professionnel.
              </p>
            </div>

            {/* Objectif 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                <Briefcase className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Insertion Professionnelle</h3>
              <p className="text-gray-600 leading-relaxed">
                Partenariats avec les entreprises, stages professionnels et forums de l'emploi pour faciliter l'accès au premier emploi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-5">
          <img
            src="/images/beneficiaires-collegiennes.jpg"
            alt="Success celebration"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Impact</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des résultats mesurables pour transformer des vies et construire l'avenir
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
              <div className="text-5xl font-bold text-purple-600 mb-4">+70%</div>
              <p className="text-lg font-medium text-gray-700 mb-2">Maintien jusqu'au Bac</p>
              <p className="text-gray-600">Des bénéficiaires maintenues à l'école jusqu'au baccalauréat</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="text-5xl font-bold text-blue-600 mb-4">+80%</div>
              <p className="text-lg font-medium text-gray-700 mb-2">Diplômées Universitaires</p>
              <p className="text-gray-600">Des étudiantes obtiennent leur diplôme universitaire</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <div className="text-5xl font-bold text-green-600 mb-4">60%</div>
              <p className="text-lg font-medium text-gray-700 mb-2">Insertion Professionnelle</p>
              <p className="text-gray-600">Décrochent un emploi dans les 12 mois suivant leur diplôme</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-2xl max-w-2xl mx-auto">
              <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Réseau de Femmes Leaders</h3>
              <p className="text-lg text-gray-700">
                Création d'un réseau durable de femmes leaders qui continue d'inspirer et d'accompagner les générations futures
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bénéficiaires Section */}
      <section id="beneficiaires" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">À Qui s'adresse le projet ?</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un accompagnement sur mesure pour chaque étape du parcours éducatif et professionnel
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Collégiennes",
                description: "Jeunes filles du collège (6e - 3e) pour un accompagnement précoce",
                image: "images/beneficiaires-collegiennes.jpg",
                color: "purple"
              },
              {
                title: "Lycéennes", 
                description: "Élèves du lycée (2nde - Terminale) préparant leur orientation",
                image: "images/beneficiaires-collegiennes.jpg",
                color: "pink"
              },
              {
                title: "Étudiantes",
                description: "Étudiantes universitaires poursuivant leurs études supérieures", 
                image: "images/beneficiaires-collegiennes.jpg",
                color: "blue"
              },
              {
                title: "Jeunes Diplômées",
                description: "Diplômées en recherche de leur premier emploi",
                image: "images/beneficiaires-collegiennes.jpg", 
                color: "yellow"
              }
            ].map((beneficiary, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={beneficiary.image}
                    alt={beneficiary.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{beneficiary.title}</h3>
                  <p className="text-gray-600">{beneficiary.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partenaires Section */}
      <section id="partenaires" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ils nous soutiennent</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des partenariats stratégiques pour maximiser notre impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl text-center group hover:from-purple-100 hover:to-pink-100 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">ONG Internationales</h3>
              <p className="text-gray-600">Plan International, UNICEF, ONU Femmes</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl text-center group hover:from-blue-100 hover:to-indigo-100 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <Briefcase className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Entreprises Privées</h3>
              <p className="text-gray-600">Banques, télécoms, et entreprises engagées dans la RSE</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl text-center group hover:from-green-100 hover:to-emerald-100 transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Institutions</h3>
              <p className="text-gray-600">Ministères de l'Éducation et universités partenaires</p>
            </div>
          </div>
          
          {/* Placeholder pour logos de partenaires avec image */}
          <div className="relative">
            <img
              src="images/hero-background.jpg"
              alt="Partnership meeting"
              className="w-full h-64 object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-black/50 rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">Rejoignez notre réseau de partenaires</h3>
                <p className="text-lg opacity-90">Ensemble, transformons l'avenir de l'éducation féminine</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Laalim
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Plateforme d'accompagnement, de mentorat et de suivi des jeunes filles leaders.
                Ensemble, construisons l'avenir de l'éducation féminine en Afrique.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">ig</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-purple-400" />
                  <span>contact@dzikoli-platform.org</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-purple-400" />
                  <span>+228 92 63 01 36</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-purple-400" />
                  <span>Lomé, TOGO</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-300 mb-4">
                Restez informé de nos dernières actualités et initiatives.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-500"
                />
                <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-r-lg transition-colors">
                  S'inscrire
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-300">
              © 2025 Laalim Platform. Tous droits réservés. | Projet Hackathon - Accompagnement Jeunes Filles Leaders
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
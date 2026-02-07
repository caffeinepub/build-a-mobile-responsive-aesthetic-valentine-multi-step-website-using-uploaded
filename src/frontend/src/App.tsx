import { useState } from 'react';
import WelcomeStep from './steps/WelcomeStep';
import RoseDayStep from './steps/RoseDayStep';
import BigQuestionStep from './steps/BigQuestionStep';
import ValentineNoteStep from './steps/ValentineNoteStep';
import SurpriseEnvelopesStep from './steps/SurpriseEnvelopesStep';
import FinalStep from './steps/FinalStep';

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 5));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const steps = [
    <WelcomeStep onNext={nextStep} />,
    <RoseDayStep onNext={nextStep} onBack={prevStep} />,
    <BigQuestionStep onNext={nextStep} onBack={prevStep} />,
    <ValentineNoteStep onNext={nextStep} onBack={prevStep} />,
    <SurpriseEnvelopesStep onNext={nextStep} onBack={prevStep} />,
    <FinalStep onBack={prevStep} />
  ];

  return <div className="min-h-screen">{steps[currentStep]}</div>;
}

export default App;

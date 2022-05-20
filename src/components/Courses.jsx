import React, { useState } from 'react';
import Allcourses from './pages/allcourses/allcourses';
import Update from './pages/course details/update';


const Courses= () => {
    const [step, setStep] = useState(1);

    const nextStep= () => {
        setStep(step + 1);
        console.log(step);
    }

    const prevStep= () => {
        setStep(step-1);
    }

    switch(step){
        case 1:
    return(
        <Update nextStep={nextStep}/>
    );
    case 2: 
    return(
        <Allcourses/>
    )
    }
}

export default Courses;
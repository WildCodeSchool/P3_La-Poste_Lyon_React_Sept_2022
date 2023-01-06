/*eslint-disable*/
import React from "react";

function StepperCreation() {
  function Step() {
    return (
      <div>
        <h1>Step {stepper.length}</h1>
      </div>
    );
  }

  const [stepper, setStepper] = React.useState([
    { position: 1, component: Step },
  ]);

  /* The function handleAddStep will setStepper with the new component step. 
  To add the component we will take the entiere (spread) previous component as paramater 
  and add the other  */
  const handleAddStep = () => {
    setStepper((previousStepper) => [
      ...previousStepper,
      { position: previousStepper.length + 1, component: <Step /> },
    ]);
  };

  const handleRemoveStep = () => {
    setStepper((previousStepper) => previousStepper.slice(0, -1));
  };

  /*  const newStep = stepper.push({
    position: stepper.length + 1,
    component: <CreationStep />,
  });

  const handleAddStep = () => {
    setStepper(newStep);
    console.log(stepper);
  };

  const removeStep = () => {
    stepper.pop();
  }; */
  return (
    <div>
      StepperCreation
      {stepper.map((step) => (
        <div className="border" key={step.position}>
          {step.component}
        </div>
      ))}
      <button type="button" onClick={handleAddStep}>
        Add a step
      </button>
      <button type="button" onClick={handleRemoveStep}>
        Remove
      </button>
    </div>
  );
}

export default StepperCreation;

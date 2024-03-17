
function selectPlan(planNumber) {

    const plans = document.querySelectorAll('.plan');


    plans.forEach(plan => {
        if (plan.id === `plan${planNumber}`) {
            plan.classList.add('plan--selected');
        } else {
            plan.classList.remove('plan--selected');}
            });
        }

const planElements = document.querySelectorAll('.plan');
    planElements.forEach((plan, index) => {
    plan.addEventListener('click', () => {
    selectPlan(index + 1); });
        });

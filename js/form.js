import { 
  addButton, 
  formContainer, 
  form, 
  titleInput, 
  amountInput, 
  typeSelect
  } from "./selectors.js";
import { state } from "./state.js";
import { renderTransactions } from './render.js';

export function setupFormToggle() {
  addButton.addEventListener('click', () => {
    formContainer.classList.toggle('hidden');
    if(!formContainer.classList.contains('hidden')) {
      addButton.textContent = 'Cancel';
    }
    else {
      addButton.textContent = 'Add';
    }
  });
}

export function setupTransactionForm() {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = titleInput.value;
    const amount = parseFloat(amountInput.value);
    const type = typeSelect.value;

    if(!title || isNaN(amount)) {
      console.log('Fill all the gaps!');
      return;
    }

    const transaction = {
      id: crypto.randomUUID(),
      title,
      amount,
      type,
    }

    state.transactions = [transaction, ...state.transactions];

    form.reset();
    formContainer.classList.add('hidden');
    addButton.textContent = 'Add';

    renderTransactions();
  });
}
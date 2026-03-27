import { state } from './state.js';


export function saveTransactions() {
  localStorage.setItem('transactions', JSON.stringify(state.transactions));
}

export function loadTransactions() {
  const data = localStorage.getItem('transactions');

  if (data) {
    state.transactions = JSON.parse(data);
  } else {
    state.transactions = [];
}
}
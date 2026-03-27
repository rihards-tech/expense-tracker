import { transactionsList } from './selectors.js';
import { state } from './state.js';

export function renderTransactions() {
  transactionsList.innerHTML = '';

  if (state.transactions.length === 0) {
    const html = `<li class="transactions__empty">No transactions yet...</li>`;
    transactionsList.insertAdjacentHTML('beforeend', html);
    return;
  }

  state.transactions.forEach((transaction) => {
    const html = `
      <li class="transactions__item transactions__item--${transaction.type}">
        <span class="transactions__title">${transaction.title}</span>
        <span class="transactions__amount">${transaction.type === 'income' ? '+' : '-'}$${transaction.amount.toLocaleString('fr-FR')}</span>
        <button type="button" class="transactions__delete">Delete</button>
      </li>
    `;
    transactionsList.insertAdjacentHTML('beforeend', html);
  });
}
import { transactionsList } from "./selectors.js";
import { state } from "./state.js";
import { renderTransactions } from "./render.js";
import { renderSummary } from "./summary.js";
import { saveTransactions } from './storage.js';

export function setupDeleteTransaction() {
  transactionsList.addEventListener("click", (e) => {
    if(e.target.classList.contains('transactions__delete')) {
      const transactionId = e.target.closest('.transactions__item').getAttribute('data-id');
      const filtered = state.transactions.filter((elem) => elem.id !== transactionId);
      state.transactions = filtered;
      saveTransactions();
      renderTransactions();
      renderSummary();
    }
  });
}
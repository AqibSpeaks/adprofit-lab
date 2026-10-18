(() => {
  const form = document.getElementById('leadForm');
  if (!form) return;
  const status = document.getElementById('leadStatus');
  const button = document.getElementById('leadSubmit');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    if (form.elements.namedItem('_gotcha').value.trim()) return;
    if (form.action.includes('REPLACE_WITH_YOUR_FORM_ID')) {
      status.textContent = 'Setup required: add your Formspree form ID to index.html first.';
      return;
    }
    button.disabled = true;
    status.textContent = 'Submitting…';
    try {
      const response = await fetch(form.action, {
        method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' }
      });
      if (response.ok) {
        form.reset();
        status.textContent = 'Thanks! Your signup was submitted successfully.';
      } else {
        const result = await response.json().catch(() => ({}));
        status.textContent = result.errors?.map(e => e.message).join(' ') || 'Could not submit. Please try again.';
      }
    } catch {
      status.textContent = 'Network error. Please check your connection and try again.';
    } finally { button.disabled = false; }
  });
})();

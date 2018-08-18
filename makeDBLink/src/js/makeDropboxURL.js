const makeURL = txt => {
    const text = txt.slice(0, -5);
    const after_text = text.slice(19);
    const middle_text = text.slice(12, 19) + 'usercontent';
    const before_text = text.slice(0, 8) + 'dl.';
    return before_text + middle_text + after_text;
  };

const changeURL = function() {
    const text = document.querySelector('input[type="text"]').value;
    document.getElementById('val').textContent = makeURL(text);
    return false;
};
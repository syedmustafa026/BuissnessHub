import React, { useRef } from 'react';
import { WebView } from 'react-native-webview';

const ReCaptchaComponent = ({ siteKey }) => {
  const webViewRef = useRef(null);
  const reCaptchaHtml = `
  <html>
    <body>
      <div id="recaptcha"></div>
      <script src="https://www.google.com/recaptcha/api.js?render=${siteKey}"></script>
      <script>
        grecaptcha.ready(function() {
          grecaptcha.execute('${siteKey}', { action: 'completed' })
            .then(function(token) {
              const message = JSON.stringify({ action: 'completed', token: token });
              window.ReactNativeWebView.postMessage(message);
            });
        });
      </script>
    </body>
  </html>
`;

  const handleWebViewMessage = event => {
    const data = JSON.parse(event.nativeEvent.data);
    if (data && data.action === 'completed') {
      console.log('reCAPTCHA token:', data.token);
    }
  };

  return (
    <WebView
      ref={webViewRef}
      source={{ html: reCaptchaHtml }} // You need to load the reCAPTCHA widget HTML here
      onMessage={handleWebViewMessage}
    />
  );
};

export default ReCaptchaComponent;
